'use client';

import { ReactNode, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import AgentSidebar from "./AgentSidebar";
import { LocaleProvider, useLocale } from "./LocaleProvider";
import { UI_TEXT } from "./uiText";

interface AgentShellProps {
  children: ReactNode;
}

const AgentShellInner = ({ children }: AgentShellProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locale] = useLocale();
  const t = UI_TEXT[locale];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-light text-dark dark:bg-dark dark:text-light">
      <AgentSidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="hidden items-center gap-3 border-b border-dark/10 px-4 py-3 dark:border-light/10 md:flex">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label={t.openMenuAria}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-dark/5 dark:hover:bg-light/10"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="font-semibold">
            Gabriel Pitrella
          </Link>
        </div>

        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

const AgentShell = ({ children }: AgentShellProps) => (
  <LocaleProvider>
    <AgentShellInner>{children}</AgentShellInner>
  </LocaleProvider>
);

export default AgentShell;
