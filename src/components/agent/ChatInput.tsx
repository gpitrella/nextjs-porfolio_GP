'use client';

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 px-4 pb-4 pt-2 md:px-3">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Escribí tu pregunta sobre Gabriel..."
        disabled={disabled}
        aria-label="Escribir mensaje"
        className="flex-1 rounded-full border border-dark/10 bg-light px-4 py-2 text-sm outline-none transition-colors focus:border-dark/30 disabled:opacity-60 dark:border-light/10 dark:bg-dark dark:focus:border-light/30"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label="Enviar"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark text-light transition-opacity disabled:opacity-40 dark:bg-light dark:text-dark"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
};

export default ChatInput;
