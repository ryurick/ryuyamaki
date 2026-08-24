"use client";

import { useEffect, useRef } from "react";

export function HeroWaves() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let rafId = 0;
    let w = 0;
    let h = 0;
    let mouseX = 0.5;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
    };

    const LINES = 3;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < LINES; i++) {
        const progress = i / (LINES - 1);
        const baseY = h * (0.5 + progress * 0.3);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const nx = x / w;
          const envelope = Math.sin(Math.PI * nx);
          const boost = 1 + 1.1 * Math.exp(-((nx - mouseX) ** 2) / 0.02);
          const y =
            baseY +
            Math.sin(nx * 6 + t * 0.0006 + i * 1.4) * 16 * envelope * boost +
            Math.sin(nx * 13 - t * 0.0004 + i * 2.1) * 7 * envelope;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(15, 110, 102, ${0.12 + progress * 0.24})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      draw(0);
      return () => window.removeEventListener("resize", resize);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    const loop = (t: number) => {
      draw(t);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
