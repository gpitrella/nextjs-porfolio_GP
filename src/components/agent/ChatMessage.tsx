'use client';

import Image from "next/image";
import profilePic from "@/../public/images/profile/gabriel-pitrella.png";

export interface ChatMessageData {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: ChatMessageData;
}

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
        className={`max-w-[75%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-dark text-light dark:bg-light dark:text-dark"
            : "bg-dark/5 dark:bg-light/10"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
