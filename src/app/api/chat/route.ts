import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemPrompt } from "@/lib/features/agent/systemPrompt";

export const runtime = "nodejs";

interface ChatRequestBody {
  message: string;
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response("El servidor no tiene configurada GEMINI_API_KEY.", { status: 500 });
  }

  const body = (await request.json()) as ChatRequestBody;
  const message = body?.message;

  if (!message || typeof message !== "string") {
    return new Response("Falta el mensaje.", { status: 400 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: buildSystemPrompt(),
  });

  let result;
  try {
    result = await model.generateContentStream(message);
  } catch (error) {
    return new Response("No se pudo contactar al modelo. Probá de nuevo en un momento.", { status: 502 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) controller.enqueue(encoder.encode(text));
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
