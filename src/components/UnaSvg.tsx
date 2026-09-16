/**
 * Siluetas de uña para el selector de forma y de tamaño.
 * Usan las variables de color del tema, así que siguen la paleta si cambia.
 */

import type { Forma, Tamano } from "@/components/carrito";

const trazos: Record<Forma, string> = {
  Almendra: "M20 50c-6 0-10-5-10-13 0-15 4-29 10-29s10 14 10 29c0 8-4 13-10 13z",
  Cuadrada:
    "M20 50c-6 0-10-5-10-13V14a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v23c0 8-4 13-10 13z",
  Stiletto: "M20 50c-6 0-10-5-10-13L20 6l10 31c0 8-4 13-10 13z",
  Coffin: "M20 50c-6 0-10-5-10-13L15 10h10l5 27c0 8-4 13-10 13z",
};

/** Uña sobre un dedo, para que se entienda cuál extremo es la punta. */
export function FormaUna({
  forma,
  className = "h-14 w-auto",
}: {
  forma: Forma;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 80V45c0-10 6-17 14-17s14 7 14 17v35z"
        fill="var(--muted)"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity=".35"
        strokeLinejoin="round"
      />
      <path
        d="M9 70c3.5 2.5 18.5 2.5 22 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeOpacity=".25"
        strokeLinecap="round"
      />
      <path
        d={trazos[forma]}
        fill="var(--blush)"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 44c2.2 2.4 14.8 2.4 17 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity=".4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Largo de la uña, de la cutícula a la punta, con la medida marcada al lado. */
const altos: Record<Tamano, number> = { S: 26, M: 34, L: 42, XL: 50 };

export function LargoUna({
  tamano,
  className = "h-14 w-auto",
}: {
  tamano: Tamano;
  className?: string;
}) {
  const alto = altos[tamano];
  const top = 64 - alto;
  const ancho = 11;
  const cx = 27;
  const codo = 64 - alto * 0.4;
  const punta = Math.min(alto * 0.42, 16);

  return (
    <svg
      viewBox="0 0 46 68"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d={`M${cx - ancho} ${codo} C${cx - ancho} ${top + punta} ${cx - ancho + 4} ${top} ${cx} ${top} C${cx + ancho - 4} ${top} ${cx + ancho} ${top + punta} ${cx + ancho} ${codo} C${cx + ancho} 60 ${cx + 6} 64 ${cx} 64 C${cx - 6} 64 ${cx - ancho} 60 ${cx - ancho} ${codo} Z`}
        fill="var(--blush)"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d={`M6 ${top}h5M6 64h5`}
        stroke="var(--sale)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={`M8.5 ${top}V64`}
        stroke="var(--sale)"
        strokeWidth="1.6"
        strokeDasharray="3 2.5"
      />
    </svg>
  );
}
