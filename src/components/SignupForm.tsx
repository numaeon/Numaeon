"use client";

import { useRef, useState } from "react";
import HoverCard from "@/components/HoverCard";

export default function SignupForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showToast, setShowToast] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const el = inputRef.current;
    if (el && el.validity.valid) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      el.value = "";
      el.focus();
    } else if (el) {
      el.focus();
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <form onSubmit={onSubmit} className="grid grid-cols-[1fr_auto] gap-2">
        <label className="sr-only" htmlFor="email">Email</label>
        <input
          ref={inputRef}
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="h-11 rounded-md border border-black/10 dark:border-white/15 bg-background px-3 outline-none focus:ring-2 focus:ring-cyan-400/60"
        />
        <HoverCard className="rounded-md inline-block" scale={1.05} glowSize={360}>
          <button type="submit" className="h-11 px-4 rounded-md text-white bg-gradient-to-tr from-violet-600 to-cyan-500 hover:brightness-110 transition">
            Notify me
          </button>
        </HoverCard>
      </form>
      <p className="text-sm text-foreground/60 mt-1">We’ll never share your email.</p>
      {showToast && (
        <div role="status" aria-live="polite" className="mt-3 rounded-md border border-black/10 dark:border-white/15 bg-foreground/5 px-3 py-2">
          Thanks — we’ll be in touch!
        </div>
      )}
    </div>
  );
}

