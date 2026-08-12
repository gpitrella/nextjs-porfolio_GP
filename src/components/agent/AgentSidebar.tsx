'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { AGENT_NAV_ITEMS } from "./navItems";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import { useLocale, type Locale } from "./LocaleProvider";
import { UI_TEXT } from "./uiText";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "@/components/Icons";
import { PROFILE_DATA } from "@/lib/features/profile/data";
import { cn } from "@/lib/utils";

interface AgentSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const navItemHref = (prompt: Record<Locale, string> | null, locale: Locale) =>
  prompt ? `/?ask=${encodeURIComponent(prompt[locale])}` : "/";

const SidebarContent = ({
  collapsed,
  pathname,
  mode,
  setMode,
  locale,
  setLocale,
  onNavigate,
}: {
  collapsed: boolean;
  pathname: string;
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  onNavigate?: () => void;
}) => {
  const t = UI_TEXT[locale];

  return (
    <>
      <div
        className={cn(
          "flex items-center gap-3 border-b border-dark/10 px-4 py-4 dark:border-light/10",
          collapsed && "justify-center px-2"
        )}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dark text-sm font-semibold text-light dark:bg-light dark:text-dark">
          GP
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Gabriel Pitrella</p>
            <p className="truncate text-xs text-dark/60 dark:text-light/60">{t.brandRole}</p>
          </div>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-2" aria-label="Portfolio sections">
        {AGENT_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === "inicio" && pathname === "/";
          const label = item.label[locale];

          return (
            <Link
              key={item.id}
              href={navItemHref(item.prompt, locale)}
              onClick={onNavigate}
              title={collapsed ? label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-dark/5 dark:hover:bg-light/10",
                collapsed && "justify-center px-2",
                isActive && "bg-dark/5 dark:bg-light/10"
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              {!collapsed && <span className="truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={cn("flex flex-col gap-3 border-t border-dark/10 p-3 dark:border-light/10", collapsed && "items-center")}>
        <div className={cn("flex items-center gap-2", collapsed && "flex-col")}>
          <a
            href="https://github.com/gpitrella"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.githubAria}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-dark/5 dark:hover:bg-light/10"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielpitrella/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.linkedinAria}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-dark/5 dark:hover:bg-light/10"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label={t.themeToggleAria}
            className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-dark/5 dark:hover:bg-light/10"
          >
            {mode === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label={t.localeToggleAria}
            className="flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold hover:bg-dark/5 dark:hover:bg-light/10"
          >
            {locale.toUpperCase()}
          </button>
        </div>

        <a
          href={PROFILE_DATA.hero.cvUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${t.downloadCv} - ${PROFILE_DATA.hero.contactEmail}`}
          className={cn(
            "rounded-md bg-dark px-3 py-2 text-center text-xs font-semibold text-light transition hover:opacity-90 dark:bg-light dark:text-dark",
            collapsed ? "w-8 px-0 py-2" : "w-full"
          )}
        >
          {collapsed ? t.downloadCvShort : t.downloadCv}
        </a>
      </div>
    </>
  );
};

const AgentSidebar = ({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }: AgentSidebarProps) => {
  const pathname = usePathname();
  const [mode, setMode] = useThemeSwitcher();
  const [locale, setLocale] = useLocale();
  const t = UI_TEXT[locale];

  return (
    <>
      <aside
        className={cn(
          "flex h-full flex-col border-r border-dark/10 bg-light transition-[width] duration-200 dark:border-light/10 dark:bg-dark md:hidden",
          collapsed ? "w-[68px]" : "w-60"
        )}
      >
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={collapsed ? t.expandAria : t.collapseAria}
          className="m-2 flex h-8 w-8 items-center justify-center self-end rounded-md hover:bg-dark/5 dark:hover:bg-light/10"
        >
          {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>
        <SidebarContent
          collapsed={collapsed}
          pathname={pathname}
          mode={mode}
          setMode={setMode}
          locale={locale}
          setLocale={setLocale}
        />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 hidden md:flex">
          <div className="absolute inset-0 bg-dark/60" onClick={onCloseMobile} />
          <div className="relative flex h-full w-72 max-w-[85%] flex-col bg-light dark:bg-dark">
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label={t.closeMenuAria}
              className="m-2 flex h-8 w-8 items-center justify-center self-end rounded-md hover:bg-dark/5 dark:hover:bg-light/10"
            >
              <X className="h-4 w-4" />
            </button>
            <SidebarContent
              collapsed={false}
              pathname={pathname}
              mode={mode}
              setMode={setMode}
              locale={locale}
              setLocale={setLocale}
              onNavigate={onCloseMobile}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AgentSidebar;
