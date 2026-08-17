'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ChatMessage, { ChatMessageData } from "./ChatMessage";
import WelcomeMessage from "./WelcomeMessage";
import SuggestedPrompts from "./SuggestedPrompts";
import ChatInput from "./ChatInput";
import { useLocale } from "./LocaleProvider";
import { UI_TEXT } from "./uiText";

let messageCounter = 0;
const nextMessageId = () => `msg-${++messageCounter}`;

const ChatPanel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [loading, setLoading] = useState(false);
  const handledAskRef = useRef<string | null>(null);
  const [locale] = useLocale();
  const errorReply = UI_TEXT[locale].errorReply;
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  const askAgent = async (question: string) => {
    setMessages((prev) => [...prev, { id: nextMessageId(), role: "user", content: question }]);
    setLoading(true);

    const assistantId = nextMessageId();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Chat request failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: accumulated } : m)));
      }
    } catch (error) {
      setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: errorReply } : m)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ask = searchParams.get("ask");
    if (ask && handledAskRef.current !== ask) {
      handledAskRef.current = ask;
      askAgent(ask);
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-6 md:px-3">
        <WelcomeMessage />
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={scrollAnchorRef} />
      </div>

      <SuggestedPrompts onSelect={askAgent} disabled={loading} />
      <ChatInput onSend={askAgent} disabled={loading} />
    </div>
  );
};

export default ChatPanel;
