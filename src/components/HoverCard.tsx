"use client";

import { useEffect, useState } from "react";
import type React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  scale?: number;
  glowSize?: number;
  glowOpacity?: number;
  disableTilt?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export default function HoverCard({
  children,
  className = "",
  as: Element = "article",
  scale = 1.03,
  glowSize = 600,
  glowOpacity = 0.18,
  disableTilt = false,
  ...rest
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width; // 0..1
    const py = y / rect.height; // 0..1
    const rx = disableTilt ? 0 : (py - 0.5) * -8; // rotateX
    const ry = disableTilt ? 0 : (px - 0.5) * 10; // rotateY
    setPos({ x, y });
    setTilt({ rx, ry, scale });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0, scale: 1 });
  }

  return (
    <Element
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group will-change-transform transition-transform duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.scale})`,
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {/* Glow that follows the cursor (client-only to avoid hydration diffs) */}
      {mounted && (
        <div
          aria-hidden
          suppressHydrationWarning
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${pos.x}px ${pos.y}px, rgba(124,58,237,${glowOpacity}), transparent 40%)`,
          }}
        />
      )}

      {/* Slight highlight border on hover (client-only) */}
      {mounted && (
        <div
          aria-hidden
          suppressHydrationWarning
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.25)",
            transition: "opacity 300ms ease",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Element>
  );
}

