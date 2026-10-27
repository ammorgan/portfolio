"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
let sessionTheme: Theme | undefined;

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem("amanda-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* The theme also works when browser storage is unavailable. */ }
  if (sessionTheme) return sessionTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("mandie-theme-change", onChange);
  window.addEventListener("storage", onChange);
  preference.addEventListener("change", onChange);
  return () => {
    window.removeEventListener("mandie-theme-change", onChange);
    window.removeEventListener("storage", onChange);
    preference.removeEventListener("change", onChange);
  };
}

function serverTheme(): Theme { return "light"; }

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, serverTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggle() {
    sessionTheme = theme === "light" ? "dark" : "light";
    try { localStorage.setItem("amanda-theme", sessionTheme); } catch { /* Keep the choice for this session. */ }
    window.dispatchEvent(new Event("mandie-theme-change"));
  }

  return <button className="themeToggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8" /><path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none" /></svg>
    <span>{theme === "light" ? "Dark" : "Light"}</span>
  </button>;
}
