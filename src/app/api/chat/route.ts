import { buildSystemPrompt } from "@/lib/features/agent/systemPrompt";

export const runtime = "nodejs";
export const maxDuration = 60;

interface ChatRequestBody {
  message: string;
}

const GROQ_CHAT_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "openai/gpt-oss-20b";

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return new Response("El servidor no tiene configurada GROQ_API_KEY.", { status: 500 });
  }

  const body = (await request.json()) as ChatRequestBody;
  const message = body?.message;

  if (!message || typeof message !== "string") {
    return new Response("Falta el mensaje.", { status: 400 });
  }

  const model = process.env.GROQ_MODEL || DEFAULT_MODEL;

  let upstream: Response;
  try {
    upstream = await fetch(GROQ_CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          { role: "user", content: message },
        ],
        stream: true,
        temperature: 0.4,
        max_tokens: 1000,
      }),
    });
  } catch (error) {
    console.error("Groq fetch error:", error);
    return new Response("No se pudo contactar al modelo. Probá de nuevo en un momento.", { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("Groq error response:", upstream.status, detail);
    return new Response("No se pudo contactar al modelo. Probá de nuevo en un momento.", { status: 502 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      const reader = upstream.body!.getReader();
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const payload = trimmed.slice(5).trim();
            if (payload === "[DONE]") continue;

            try {
              const parsed = JSON.parse(payload);
              const text = parsed?.choices?.[0]?.delta?.content;
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // Ignore malformed/partial SSE fragments.
            }
          }
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
