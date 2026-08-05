"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("amanda-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("amanda-theme", next);
  };

  return (
    <button className="themeToggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
      <span className="themeLabel">{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
