"use client";

import { useState } from "react";
import { ThemeToggleButton } from "@/components/ThemeProvider";
import HoverCard from "@/components/HoverCard";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "px-3 py-2 rounded-md hover:bg-foreground/5 transition text-sm text-foreground";

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/10 dark:border-white/10 bg-background/70">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <span className="text-cyan-400">◉</span>
          <span>Numaeon</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            <li><a className={linkClass} href="#features">Features</a></li>
            <li><a className={linkClass} href="#how">How it works</a></li>
            <li><a className={linkClass} href="#use-cases">Use cases</a></li>
            <li><a className={linkClass} href="#cta">Get started</a></li>
            <li><ThemeToggleButton /></li>
          </ul>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <HoverCard className="rounded-md inline-block" scale={1.03} glowSize={280} disableTilt>
            <button
              aria-expanded={open}
              aria-controls="nav-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/15 hover:bg-foreground/5"
              title="Toggle navigation"
            >
              <span className="sr-only">Menu</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden suppressHydrationWarning>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </HoverCard>
        </div>
      </div>
      <div className="md:hidden px-4 pb-3" id="nav-menu" hidden={!open}>
        <ul className="grid gap-1 border-t border-black/10 dark:border-white/10 pt-2">
          <li><a onClick={() => setOpen(false)} className={linkClass} href="#features">Features</a></li>
          <li><a onClick={() => setOpen(false)} className={linkClass} href="#how">How it works</a></li>
          <li><a onClick={() => setOpen(false)} className={linkClass} href="#use-cases">Use cases</a></li>
          <li><a onClick={() => setOpen(false)} className={linkClass} href="#cta">Get started</a></li>
        </ul>
      </div>
    </header>
  );
}

