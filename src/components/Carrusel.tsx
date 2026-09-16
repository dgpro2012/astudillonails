import { useRef, useState, type ReactNode } from "react";

import { Flechas } from "@/components/Flechas";
import { PistaDesliza } from "@/components/PistaDesliza";

/**
 * Carrusel horizontal con flechas en pantalla grande, botón redondo en
 * celular y la manito que enseña el gesto hasta que la persona desliza.
 */
export function Carrusel({
  children,
  etiqueta,
  className = "",
}: {
  children: ReactNode;
  etiqueta?: string;
  className?: string;
}) {
  const pista = useRef<HTMLDivElement>(null);
  const [deslizado, setDeslizado] = useState(false);

  const mover = (dir: number) => {
    const c = pista.current;
    if (!c) return;
    const card = c.querySelector("article");
    const paso = card ? card.clientWidth + 12 : c.clientWidth * 0.7;
    c.scrollBy({ left: paso * dir, behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-6 mb-1 flex items-center justify-between gap-3">
        {etiqueta ? (
          <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
            {etiqueta}
          </p>
        ) : (
          <span />
        )}
        <Flechas onMover={mover} />
      </div>

      <div className="relative mt-3">
        <div
          ref={pista}
          onScroll={(e) => {
            if (e.currentTarget.scrollLeft > 8) setDeslizado(true);
          }}
          className={`catalogo-carrusel flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 ${className}`}
        >
          {children}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>

        <PistaDesliza oculta={deslizado} />

        <button
          type="button"
          aria-label="Ver más diseños"
          onClick={() => mover(1)}
          className="absolute right-1 bottom-[44%] z-10 grid size-11 place-items-center rounded-full border-2 border-card bg-primary text-xl font-bold text-primary-foreground shadow-xl transition hover:scale-105 sm:hidden"
        >
          ›
        </button>
      </div>
    </>
  );
}
