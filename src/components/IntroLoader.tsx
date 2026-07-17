import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "exse-intro-seen";
const DURATION = 2600;
const FADE = 450;

type Item = {
  d: string;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rot: number;
  drift: number;
};

// Small vector icons of e-waste, drawn centered around (0,0) at ~24px box
const ICONS: string[] = [
  // TV / monitor
  "M -12 -8 H 12 V 6 H -12 Z M -6 6 V 10 H 6 V 10 M -8 10 H 8",
  // Phone
  "M -6 -10 H 6 V 10 H -6 Z M -3 7 H 3",
  // Circuit chip
  "M -8 -8 H 8 V 8 H -8 Z M -8 -4 H -11 M -8 0 H -11 M -8 4 H -11 M 8 -4 H 11 M 8 0 H 11 M 8 4 H 11 M -4 -8 V -11 M 0 -8 V -11 M 4 -8 V -11 M -4 8 V 11 M 0 8 V 11 M 4 8 V 11",
  // Battery
  "M -10 -5 H 8 V 5 H -10 Z M 8 -2 H 11 V 2 H 8",
  // Plug
  "M -2 -10 V -4 M 2 -10 V -4 M -6 -4 H 6 V 2 Q 6 8 0 10 Q -6 8 -6 2 Z",
  // Lightbulb
  "M 0 -10 Q 7 -10 7 -3 Q 7 2 3 5 V 8 H -3 V 5 Q -7 2 -7 -3 Q -7 -10 0 -10 Z M -3 10 H 3",
  // Keyboard
  "M -12 -5 H 12 V 5 H -12 Z M -9 -2 H -6 M -3 -2 H 0 M 3 -2 H 6 M -6 2 H 6",
  // Cable / plug end
  "M -10 0 Q -6 -8 0 -4 Q 6 0 10 -6 M 10 -6 L 8 -8 M 10 -6 L 12 -8",
  // Gear/cog
  "M 0 -9 L 2 -6 L 5 -7 L 5 -3 L 8 -1 L 6 2 L 7 5 L 4 6 L 3 9 L 0 7 L -3 9 L -4 6 L -7 5 L -6 2 L -8 -1 L -5 -3 L -5 -7 L -2 -6 Z M 0 -3 A 3 3 0 1 0 0.01 -3",
  // Camera
  "M -10 -4 H -6 L -4 -7 H 4 L 6 -4 H 10 V 7 H -10 Z M 0 -1 A 4 4 0 1 0 0.01 -1",
  // Headphones
  "M -9 2 V -2 A 9 9 0 0 1 9 -2 V 2 M -9 2 H -5 V 8 H -9 Z M 9 2 H 5 V 8 H 9 Z",
  // Router with antenna
  "M -10 -1 H 10 V 6 H -10 Z M -6 3 H -4 M -1 3 H 1 M 4 3 H 6 M 0 -1 V -6 M -3 -8 L 0 -6 L 3 -8",
];

export function IntroLoader() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const items = useMemo<Item[]>(() => {
    // deterministic-ish spread across the width
    const N = 22;
    const rnd = (i: number, s: number) =>
      Math.abs(Math.sin(i * 9301 + s * 49297) * 43758.5453) % 1;
    return Array.from({ length: N }, (_, i) => ({
      d: ICONS[i % ICONS.length],
      x: -48 + (i / (N - 1)) * 96 + (rnd(i, 3) - 0.5) * 6, // vw
      size: 22 + Math.floor(rnd(i, 1) * 22), // px
      delay: Math.floor(rnd(i, 2) * 1400), // ms
      duration: 1600 + Math.floor(rnd(i, 4) * 1000), // ms
      rot: Math.floor((rnd(i, 5) - 0.5) * 720),
      drift: Math.floor((rnd(i, 6) - 0.5) * 60),
    }));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 400 : DURATION;

    setShow(true);
    const t1 = window.setTimeout(() => setFadeOut(true), total);
    const t2 = window.setTimeout(() => setShow(false), total + FADE);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] overflow-hidden bg-background"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: `opacity ${FADE}ms ease-out`,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <span className="sr-only">Laddar EXSE</span>

      {/* Falling e-waste icons */}
      {items.map((it, i) => (
        <div
          key={i}
          className="intro-fall absolute top-0"
          style={
            {
              left: `calc(50% + ${it.x}vw)`,
              width: it.size,
              height: it.size,
              animationDelay: `${it.delay}ms`,
              animationDuration: `${it.duration}ms`,
              ["--rot" as string]: `${it.rot}deg`,
              ["--drift" as string]: `${it.drift}px`,
            } as React.CSSProperties
          }
        >
          <svg viewBox="-14 -14 28 28" className="h-full w-full">
            <path
              d={it.d}
              fill="none"
              stroke="var(--copper)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}

      {/* Growing pile at the bottom */}
      <div className="intro-pile pointer-events-none absolute inset-x-0 bottom-0 h-24 origin-bottom">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-copper/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-copper/40" />
      </div>

      {/* Centered brand */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="intro-logo">
          <img
            src="/exse-logo.png"
            alt=""
            aria-hidden="true"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
            style={{
              filter: "drop-shadow(0 6px 18px oklch(0.58 0.14 40 / 0.35))",
            }}
          />
        </div>
        <div className="intro-word mt-4 font-display text-2xl tracking-wide text-foreground">
          EXSE
        </div>
        <div className="intro-bar mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-foreground/10">
          <div className="intro-bar-fill h-full bg-copper" />
        </div>
      </div>
    </div>
  );
}
