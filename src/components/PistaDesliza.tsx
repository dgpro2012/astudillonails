/**
 * Manito rosada con flores y la pista animada de "Desliza".
 * Se apaga sola y también cuando la persona ya deslizó.
 */

const petalos = (
  <>
    <circle cx="0" cy="-4.2" r="2.5" />
    <circle cx="4" cy="-1.3" r="2.5" />
    <circle cx="2.5" cy="3.4" r="2.5" />
    <circle cx="-2.5" cy="3.4" r="2.5" />
    <circle cx="-4" cy="-1.3" r="2.5" />
    <circle cx="0" cy="0" r="2.1" fill="var(--blush)" />
  </>
);

export function Manito({
  className = "h-10 w-auto drop-shadow-md",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 52 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g stroke="var(--sale)" strokeWidth="2" strokeLinejoin="round">
        <rect x="18" y="12" width="11" height="24" rx="5.5" fill="var(--blush)" />
        <rect x="13" y="28" width="26" height="24" rx="11" fill="var(--blush)" />
        <rect x="28" y="30" width="11" height="8" rx="4" fill="var(--blush)" />
        <rect x="28" y="39" width="10" height="8" rx="4" fill="var(--blush)" />
        <rect x="7" y="34" width="10" height="8" rx="4" fill="var(--blush)" />
        <ellipse cx="23.5" cy="17" rx="3.2" ry="3.8" fill="#fff" />
      </g>
      <g fill="var(--sale)">
        <g transform="translate(42 12)">{petalos}</g>
        <g transform="translate(8 19) scale(0.72)">{petalos}</g>
        <g transform="translate(45 30) scale(0.55)">{petalos}</g>
      </g>
    </svg>
  );
}

export function PistaDesliza({ oculta = false }: { oculta?: boolean }) {
  return (
    <div
      className={`pista-desliza pointer-events-none absolute top-[28%] right-3 z-10 flex flex-col items-center gap-1 sm:hidden ${
        oculta ? "oculta" : ""
      }`}
      aria-hidden="true"
    >
      <Manito />
      <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-wide text-primary-foreground uppercase shadow-md">
        Desliza <span className="text-sm leading-none">→</span>
      </span>
    </div>
  );
}
