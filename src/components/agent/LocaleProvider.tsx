'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Locale = "en" | "es";

const STORAGE_KEY = "portfolio-locale";
const DEFAULT_LOCALE: Locale = "en";

type LocaleContextValue = [Locale, (locale: Locale) => void];

const LocaleContext = createContext<LocaleContextValue>([DEFAULT_LOCALE, () => {}]);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") setLocaleState(stored);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return <LocaleContext.Provider value={[locale, setLocale]}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
