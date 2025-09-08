"use client";

import { useEffect, useState } from "react";
import HoverCard from "@/components/HoverCard";

const THEME_KEY = "numaeon-theme" as const;
type ThemeMode = "auto" | "light" | "dark";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "auto") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", mode);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as ThemeMode | null) || "auto";
    applyTheme(saved);
  }, []);
  return <>{children}</>;
}

export function ThemeToggleButton() {
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as ThemeMode | null) || "auto";
    setMode(saved);
    setMounted(true);
  }, []);

  function cycle() {
    setMode((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : prev === "light" ? "auto" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }

  const label = mounted ? (mode === "dark" ? "Dark" : mode === "light" ? "Light" : "Auto") : "Auto";

  return (
    <HoverCard className="rounded-md inline-block" scale={1.03} glowSize={280} disableTilt>
      <button
        type="button"
        onClick={cycle}
        title="Toggle theme"
        className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-black/10 dark:border-white/15 hover:bg-foreground/5 transition text-sm"
        aria-label={`Theme: ${label}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden suppressHydrationWarning>
          <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95-1.41-1.41M7.46 7.46 6.05 6.05m11.31 0-1.41 1.41M7.46 16.54l-1.41 1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="hidden sm:inline">Theme:</span>
        <span>{label}</span>
      </button>
    </HoverCard>
  );
}

