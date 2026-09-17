/**
 * Ilustraciones de la landing: los seis pasos para ponerse las uñas,
 * los cinco para medirse la talla y los iconos de medios de pago.
 */

import type { ReactNode } from "react";

type P = { className?: string };

const svg = (contenido: ReactNode, className = "size-9 text-primary") => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {contenido}
  </svg>
);

/* ---------- Cómo ponérselas ---------- */

export const Cuticula = ({ className }: P) =>
  svg(
    <>
      <path d="M14 43V19a7 7 0 0 1 14 0v24" />
      <rect x="16.5" y="15" width="9" height="14" rx="4.5" fill="var(--blush)" />
      <path d="M16 14.5h10" stroke="var(--sale)" strokeWidth="2.4" />
      <path d="M30 20.5 44 13" strokeWidth="2.6" />
      <path d="m28.5 21.5 3.5-2" stroke="var(--sale)" strokeWidth="2.6" />
    </>,
    className,
  );

export const Pulir = ({ className }: P) =>
  svg(
    <>
      <path d="M12 43V20a7 7 0 0 1 14 0v23" />
      <rect x="14.5" y="16" width="9" height="14" rx="4.5" fill="var(--blush)" />
      <rect
        x="25"
        y="8"
        width="18"
        height="12"
        rx="2.5"
        fill="var(--sale)"
        fillOpacity="0.25"
        stroke="var(--sale)"
      />
      <path d="M25 13h18" stroke="var(--sale)" strokeOpacity="0.6" />
      <path d="M17 20.5h4.5M17 24h4.5" strokeOpacity="0.5" />
    </>,
    className,
  );

export const Limpiar = ({ className }: P) =>
  svg(
    <>
      <path d="M13 43V20a7 7 0 0 1 14 0v23" />
      <rect x="15.5" y="16" width="9" height="14" rx="4.5" fill="var(--blush)" />
      <path d="M24 22 38 8l6 6-14 14z" fill="var(--card)" stroke="currentColor" />
      <path d="M33 13c2 1.5 3.5 3 4.5 5" strokeOpacity="0.45" />
    </>,
    className,
  );

export const Pegante = ({ className }: P) =>
  svg(
    <>
      <path d="M14 44V25a6 6 0 0 1 12 0v19" />
      <rect x="16.5" y="21.5" width="7" height="12" rx="3.5" fill="var(--blush)" />
      <rect x="29" y="6" width="12" height="17" rx="3" fill="var(--card)" stroke="currentColor" />
      <path d="M33 6V3.5h4V6" fill="var(--sale)" stroke="var(--sale)" />
      <path d="M31.5 12h7" strokeOpacity="0.4" />
      <path
        d="M28.5 25c0-2.2 2.5-4.5 2.5-4.5s2.5 2.3 2.5 4.5a2.5 2.5 0 0 1-5 0z"
        fill="var(--sale)"
        stroke="var(--sale)"
      />
    </>,
    className,
  );

export const Presionar = ({ className }: P) =>
  svg(
    <>
      <path d="M11 44V24a6.5 6.5 0 0 1 13 0v20" />
      <path
        d="M13.5 22.5c0-4 1.7-7 4-7s4 3 4 7v9a4 4 0 0 1-8 0z"
        fill="var(--blush)"
        stroke="currentColor"
      />
      <path d="M17.5 8v5M11 11l2.5 2.5M24 11l-2.5 2.5" stroke="var(--sale)" strokeWidth="2.2" />
      <circle cx="36" cy="30" r="8" fill="var(--card)" stroke="currentColor" />
      <path d="M36 26v4.5l3 2" stroke="var(--sale)" strokeWidth="2" />
    </>,
    className,
  );

export const Limar = ({ className }: P) =>
  svg(
    <>
      <path d="M12 44V24a6.5 6.5 0 0 1 13 0v20" />
      <path
        d="M14.5 22.5c0-4.5 1.8-8 4-8s4 3.5 4 8v9a4 4 0 0 1-8 0z"
        fill="var(--blush)"
        stroke="currentColor"
      />
      <rect
        x="28"
        y="9"
        width="8.5"
        height="28"
        rx="4.25"
        fill="var(--sale)"
        fillOpacity="0.25"
        stroke="var(--sale)"
        transform="rotate(22 32 23)"
      />
      <path d="M26 16.5c1.2-1.2 2.6-1.8 4-1.8" stroke="var(--sale)" strokeOpacity="0.7" />
    </>,
    className,
  );

/* ---------- Cómo medirse la talla ---------- */

export const Cinta = ({ className }: P) =>
  svg(
    <>
      <path d="M17 42V17a7 7 0 0 1 14 0v25" />
      <rect x="19.5" y="13" width="9" height="14" rx="4.5" fill="var(--blush)" stroke="currentColor" />
      <rect
        x="7"
        y="16.5"
        width="34"
        height="9"
        rx="1.5"
        fill="var(--primary)"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeDasharray="3 2.5"
      />
    </>,
    className,
  );

export const Marcar = ({ className }: P) =>
  svg(
    <>
      <path d="M15 42V19a7 7 0 0 1 14 0v23" />
      <rect
        x="17.5"
        y="15"
        width="9"
        height="14"
        rx="4.5"
        fill="var(--blush)"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <path d="M17.5 11.5v21M26.5 11.5v21" stroke="var(--sale)" strokeWidth="2.4" />
      <path d="M33 26.5 41 18l3.5 3.5-8.5 8.5-4.5 1z" fill="var(--card)" stroke="currentColor" />
    </>,
    className,
  );

export const Medir = ({ className }: P) =>
  svg(
    <>
      <rect
        x="9"
        y="10"
        width="30"
        height="9"
        rx="1.5"
        fill="var(--primary)"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeDasharray="3 2.5"
      />
      <path d="M17 9v11M31 9v11" stroke="var(--sale)" strokeWidth="2.2" />
      <rect x="6" y="27" width="36" height="13" rx="2" fill="var(--cream)" stroke="currentColor" />
      <path d="M13 27v5M20 27v3.5M27 27v5M34 27v3.5" />
      <path
        d="M17 23.5h14M17 23.5l2.5-2M17 23.5l2.5 2M31 23.5l-2.5-2M31 23.5l-2.5 2"
        stroke="var(--sale)"
      />
    </>,
    className,
  );

export const Tabla = ({ className }: P) =>
  svg(
    <>
      <rect x="8" y="7" width="32" height="34" rx="3" fill="var(--card)" stroke="currentColor" />
      <path d="M8 16h32" />
      <path d="M8 26.5h32M8 34h32" strokeOpacity="0.45" />
      <path d="M20 21.5h14M20 30.5h14M20 38h14" strokeOpacity="0.45" strokeWidth="2" />
      <text
        x="14"
        y="23.5"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--primary)"
        stroke="none"
        textAnchor="middle"
      >
        S
      </text>
      <text
        x="14"
        y="32.5"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--primary)"
        stroke="none"
        textAnchor="middle"
      >
        M
      </text>
      <text
        x="14"
        y="40"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--sale)"
        stroke="none"
        textAnchor="middle"
      >
        L
      </text>
    </>,
    className,
  );

export const Pedido = ({ className }: P) =>
  svg(
    <>
      <rect x="12" y="5" width="24" height="38" rx="4" fill="var(--card)" stroke="currentColor" />
      <path d="M20.5 9h7" />
      <path
        d="M17 17h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 3.5V28h-2a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
        fill="var(--whatsapp)"
        fillOpacity="0.2"
        stroke="currentColor"
      />
      <path d="m20.5 22.5 2.5 2.5 5-5" stroke="var(--whatsapp)" strokeWidth="2.2" />
      <path d="M19 37.5h10" />
    </>,
    className,
  );

/* ---------- Medios de pago ---------- */

export const IconoTarjeta = ({ className = "size-6" }: P) =>
  svg(
    <>
      <rect x="3" y="7" width="26" height="18" rx="3" fill="var(--blush)" fillOpacity="0.5" />
      <path d="M3 13h26" />
      <path d="M8 20h5" />
    </>,
    className,
  );

export const IconoNequi = ({ className = "size-6" }: P) =>
  svg(
    <>
      <rect x="9" y="3" width="14" height="26" rx="3.5" fill="var(--blush)" fillOpacity="0.5" />
      <path d="M14 6.5h4M14 25.5h4" />
      <path d="M16 11v9M13 14l3-3 3 3" stroke="var(--sale)" />
    </>,
    className,
  );

export const IconoLlave = ({ className = "size-6" }: P) =>
  svg(
    <>
      <circle cx="11" cy="13" r="6" fill="var(--blush)" fillOpacity="0.5" />
      <circle cx="11" cy="13" r="1.6" fill="currentColor" stroke="none" />
      <path d="m15.5 16.5 8.5 8.5M21 22l2.5-2.5M24 25l2.5-2.5" />
    </>,
    className,
  );

export const IconoWhatsApp = ({ className = "size-5 shrink-0" }: P) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5z" />
    <path
      d="M8.8 9.2c0 3 2.4 5.4 5.4 5.4l1-1.3 1.6.8-.5 1.4a4 4 0 0 1-3.6-.6 9 9 0 0 1-3.7-3.7 4 4 0 0 1-.6-3.6l1.4-.5.8 1.6z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);
