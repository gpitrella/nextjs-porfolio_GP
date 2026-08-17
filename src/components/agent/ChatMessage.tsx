'use client';

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import profilePic from "@/../public/images/profile/gabriel-pitrella.png";

export interface ChatMessageData {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: ChatMessageData;
}

const markdownComponents = {
  p: ({ children }: { children?: React.ReactNode }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold">{children}</strong>,
  ul: ({ children }: { children?: React.ReactNode }) => <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">{children}</ul>,
  ol: ({ children }: { children?: React.ReactNode }) => <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">{children}</ol>,
  li: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
  h1: ({ children }: { children?: React.ReactNode }) => <p className="mb-1 font-semibold">{children}</p>,
  h2: ({ children }: { children?: React.ReactNode }) => <p className="mb-1 font-semibold">{children}</p>,
  h3: ({ children }: { children?: React.ReactNode }) => <p className="mb-1 font-semibold">{children}</p>,
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="rounded bg-dark/10 px-1 py-0.5 text-xs dark:bg-light/20">{children}</code>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <Link
      href={href ?? "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </Link>
  ),
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      {!isUser && (
        <Image
          src={profilePic}
          alt="Gabriel Pitrella"
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
      )}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "whitespace-pre-wrap bg-dark text-light dark:bg-light dark:text-dark"
            : "bg-dark/5 dark:bg-light/10"
        }`}
      >
        {isUser ? (
          message.content
        ) : message.content ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {message.content}
          </ReactMarkdown>
        ) : (
          <div className="flex items-center gap-1 py-1" aria-label="Thinking">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-dark/40 [animation-delay:-0.3s] dark:bg-light/40" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-dark/40 [animation-delay:-0.15s] dark:bg-light/40" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-dark/40 dark:bg-light/40" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
