export function Flechas({ onMover }: { onMover: (dir: number) => void }) {
  return (
    <div className="hidden shrink-0 gap-2 sm:flex">
      <button
        type="button"
        aria-label="Ver diseños anteriores"
        onClick={() => onMover(-1)}
        className="grid size-9 place-items-center rounded-full border border-border bg-card text-lg font-bold text-primary transition hover:bg-muted"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Ver más diseños"
        onClick={() => onMover(1)}
        className="grid size-9 place-items-center rounded-full border border-border bg-card text-lg font-bold text-primary transition hover:bg-muted"
      >
        ›
      </button>
    </div>
  );
}
