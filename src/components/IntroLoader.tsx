import { useEffect, useState } from "react";

const STORAGE_KEY = "exse-intro-seen";
const DURATION = 1800;
const FADE = 400;

export function IntroLoader() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 300 : DURATION;

    setShow(true);
    const t1 = window.setTimeout(() => setFadeOut(true), total);
    const t2 = window.setTimeout(() => setShow(false), total + FADE);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  // Positions where fragments fly to
  const parts = [
    { id: "screen", d: "M -55 -35 L 55 -35 L 55 30 L -55 30 Z", tx: -220, ty: -140, r: -25, delay: 600 },
    { id: "board", d: "M -40 -20 L 40 -20 L 40 20 L -40 20 M -20 -20 L -20 20 M 20 -20 L 20 20 M -40 0 L 40 0", tx: 240, ty: -110, r: 30, delay: 640 },
    { id: "chip1", d: "M -10 -10 L 10 -10 L 10 10 L -10 10 Z", tx: -260, ty: 120, r: 45, delay: 680 },
    { id: "chip2", d: "M -8 -8 L 8 -8 L 8 8 L -8 8 Z", tx: 200, ty: 160, r: -40, delay: 720 },
    { id: "cable", d: "M -60 0 C -30 -30, 30 30, 60 0", tx: -180, ty: 200, r: 20, delay: 760 },
    { id: "battery", d: "M -18 -8 L 14 -8 L 14 8 L -18 8 Z M 14 -4 L 18 -4 L 18 4 L 14 4 Z", tx: 280, ty: 40, r: -15, delay: 800 },
    { id: "spark1", d: "M 0 -6 L 2 -2 L 6 0 L 2 2 L 0 6 L -2 2 L -6 0 L -2 -2 Z", tx: 0, ty: -220, r: 0, delay: 700 },
    { id: "spark2", d: "M 0 -6 L 2 -2 L 6 0 L 2 2 L 0 6 L -2 2 L -6 0 L -2 -2 Z", tx: 160, ty: -180, r: 0, delay: 740 },
  ];

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: `opacity ${FADE}ms ease-out`,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <span className="sr-only">Laddar EXSE</span>

      <div className="relative flex flex-col items-center">
        <svg
          viewBox="-200 -160 400 320"
          className="h-64 w-64 sm:h-80 sm:w-80"
          aria-hidden="true"
        >
          {/* Outer TV/enhet frame drawn */}
          <rect
            x="-90"
            y="-70"
            width="180"
            height="130"
            rx="10"
            fill="none"
            stroke="var(--copper)"
            strokeWidth="2.5"
            className="intro-draw"
            pathLength={1}
          />
          {/* stand */}
          <path
            d="M -30 60 L -45 78 L 45 78 L 30 60"
            fill="none"
            stroke="var(--copper)"
            strokeWidth="2.5"
            className="intro-draw"
            pathLength={1}
          />

          {/* Fragments — start clustered in the frame, fly out, then implode */}
          {parts.map((p) => (
            <g
              key={p.id}
              className="intro-part"
              style={
                {
                  ["--tx" as string]: `${p.tx}px`,
                  ["--ty" as string]: `${p.ty}px`,
                  ["--r" as string]: `${p.r}deg`,
                  animationDelay: `${p.delay}ms`,
                } as React.CSSProperties
              }
            >
              <path d={p.d} fill="none" stroke="var(--copper)" strokeWidth="2" />
            </g>
          ))}

          {/* Final copper sphere */}
          <g className="intro-sphere">
            <defs>
              <radialGradient id="introSphere" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="oklch(0.82 0.10 55)" />
                <stop offset="55%" stopColor="oklch(0.58 0.14 40)" />
                <stop offset="100%" stopColor="oklch(0.30 0.08 35)" />
              </radialGradient>
            </defs>
            <circle cx="0" cy="0" r="42" fill="url(#introSphere)" />
            <ellipse cx="-12" cy="-14" rx="12" ry="6" fill="oklch(0.95 0.05 60 / 0.55)" />
          </g>
        </svg>

        <div className="intro-word mt-6 font-display text-2xl tracking-wide text-foreground">
          EXSE
        </div>
      </div>
    </div>
  );
}
