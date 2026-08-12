'use client';

import { getSuggestedPrompts } from "./navItems";
import { useLocale } from "./LocaleProvider";

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

const SuggestedPrompts = ({ onSelect, disabled }: SuggestedPromptsProps) => {
  const [locale] = useLocale();
  const prompts = getSuggestedPrompts(locale);

  return (
    <div className="flex flex-wrap gap-2 px-4 pb-2 md:px-3">
      {prompts.map((prompt) => (
        <button
          key={prompt.id}
          type="button"
          onClick={() => onSelect(prompt.label)}
          disabled={disabled}
          className="rounded-full border border-dark/10 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-dark/5 disabled:opacity-50 dark:border-light/10 dark:hover:bg-light/10"
        >
          {prompt.label}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
