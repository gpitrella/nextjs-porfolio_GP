'use client';

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const useThemeSwitcher = (): [ThemeMode, (mode: ThemeMode) => void] => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme") as
      | ThemeMode
      | null;

    const handleChange = () => {
      let nextMode: ThemeMode;

      if (userPreference) {
        nextMode = userPreference === "dark" ? "dark" : "light";
      } else {
        nextMode = mediaQuery.matches ? "dark" : "light";
      }

      setMode(nextMode);

      if (nextMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", mode);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;

