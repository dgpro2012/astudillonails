import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";

import logo from "@/assets/astudillo-logo.png";
import { BotonCarrito, CarritoDrawer } from "@/components/CarritoDrawer";
import { OpcionesModal } from "@/components/OpcionesModal";
import { PistaDesliza } from "@/components/PistaDesliza";
import { CarritoProvider, contarSets, useCarrito } from "@/components/carrito";
import {
  colecciones,
  formatoCOP,
  personalizado,
  productosDe,
  PRECIO_PERSONALIZADO,
  type Coleccion,
  type Producto,
} from "@/data/productos";

export const Route = createFileRoute("/catalogo")({
  component: Catalogo,
  head: () => ({
    meta: [
      { title: "Catálogo de uñas press on | Astudillo Nails" },
      {
        name: "description",
        content:
          "Seis colecciones de uñas press on hechas a mano en Medellín. Elige tus diseños, arma tu carrito y pide por WhatsApp. Cada set $49.900.",
      },
    ],
  }),
});

/** Adornos pastel de la isla del diseño personalizado. */
const petalos = (
  <>
    <circle cx="12" cy="5.5" r="4.4" />
    <circle cx="18.5" cy="10.2" r="4.4" />
    <circle cx="16" cy="17.8" r="4.4" />
    <circle cx="8" cy="17.8" r="4.4" />
    <circle cx="5.5" cy="10.2" r="4.4" />
  </>
);

const Flor = ({ c, d, className }: { c: string; d: string; className: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g fill={c}>{petalos}</g>
    <circle cx="12" cy="12" r="3.4" fill={d} />
  </svg>
);

const Corazon = ({ c, className }: { c: string; className: string }) => (
  <svg viewBox="0 0 24 22" className={className} aria-hidden="true">
    <path
      d="M12 21S1.5 14.2 1.5 7.6A5.6 5.6 0 0 1 12 4.9 5.6 5.6 0 0 1 22.5 7.6C22.5 14.2 12 21 12 21z"
      fill={c}
    />
  </svg>
);

function AdornosIsla() {
  return (
    <>
      <Flor c="#f4c9d6" d="#fff8fb" className="absolute top-4 left-5 size-7 -rotate-12" />
      <Corazon c="#f7d3de" className="absolute top-6 right-8 size-5 rotate-12" />
      <Flor c="#cfe3d8" d="#fff" className="absolute top-16 right-5 size-5 rotate-6" />
      <Corazon c="#f2bfcf" className="absolute bottom-5 left-10 size-4 -rotate-6" />
      <Flor c="#f9dfc9" d="#fffaf5" className="absolute right-7 bottom-4 size-6 rotate-12" />
      <Corazon c="#e8d4ee" className="absolute bottom-14 left-4 size-5 rotate-6" />
      <Flor c="#d8e4f2" d="#fff" className="absolute top-3 right-28 size-4 -rotate-6" />
      <Corazon c="#f6cdd8" className="absolute top-20 left-7 size-3.5 -rotate-12" />
    </>
  );
}

function Tarjeta({ p, onElegir }: { p: Producto; onElegir: (p: Producto) => void }) {
  return (
    <article className="w-[62%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:w-[31%]">
      {p.img ? (
        <img
          src={p.img}
          alt={`Set de uñas press on ${p.nombre} de Astudillo Nails`}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      ) : (
        <div
          className="flex aspect-[4/5] w-full items-end justify-center"
          style={{
            background: `linear-gradient(160deg, ${p.color} 0%, ${p.color}cc 55%, ${p.color}88 100%)`,
          }}
        >
          <span className="mb-3 rounded-full bg-card/85 px-2.5 py-1 text-[10px] font-bold text-muted-foreground">
            Foto pendiente
          </span>
        </div>
      )}
      <div className="p-3">
        <h3 className="text-sm font-bold text-foreground">{p.nombre}</h3>
        <p className="mt-1 text-sm font-bold text-sale">{formatoCOP(p.precio)}</p>
        <button
          type="button"
          onClick={() => onElegir(p)}
          className="mt-2.5 w-full rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-95"
        >
          Este lo quiero
        </button>
      </div>
    </article>
  );
}

function Flechas({ onMover }: { onMover: (dir: number) => void }) {
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

function Fila({
  etiqueta,
  items,
  onElegir,
}: {
  etiqueta?: string;
  items: Producto[];
  onElegir: (p: Producto) => void;
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
          className="catalogo-carrusel -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2"
        >
          {items.map((p) => (
            <Tarjeta key={p.id} p={p} onElegir={onElegir} />
          ))}
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

function Seccion({ col, onElegir }: { col: Coleccion; onElegir: (p: Producto) => void }) {
  const grupos = col.grupos ?? [];

  return (
    <section id={col.slug} className="mt-12 scroll-mt-32">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">
            {col.emoji} {col.nombre}
          </h2>
          {col.etiqueta && (
            <span className="rounded-full bg-blush/60 px-2.5 py-1 text-[10px] font-bold tracking-wide text-primary uppercase">
              {col.etiqueta}
            </span>
          )}
        </div>
        <p className="mt-1 font-display text-base font-bold text-foreground">«{col.lema}»</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{col.texto}</p>
        <p className="mt-2 text-xs text-muted-foreground">👉 {col.ideal}</p>
      </div>

      {grupos.length > 0 ? (
        grupos.map((g) => (
          <Fila key={g} etiqueta={g} items={productosDe(col.nombre, g)} onElegir={onElegir} />
        ))
      ) : (
        <Fila items={productosDe(col.nombre)} onElegir={onElegir} />
      )}
    </section>
  );
}

/** El carrito vive aquí, así que la página se envuelve con su proveedor. */
function Catalogo() {
  return (
    <CarritoProvider>
      <Contenido />
    </CarritoProvider>
  );
}

function Contenido() {
  const { unidades, total, abrir } = useCarrito();
  const [elegido, setElegido] = useState<Producto | null>(null);

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="bg-sale py-2 text-center text-xs font-bold tracking-wide text-sale-foreground">
        ✨ ENVÍO GRATIS EN MEDELLÍN · DESDE 2 SETS, AL RESTO DEL PAÍS SON $9.900
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" aria-label="Volver al inicio">
            <img src={logo} alt="Astudillo Nails" className="h-10 w-auto" />
          </Link>
          <BotonCarrito />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4">
        <section className="pt-8 text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Escoge tus diseños 💅</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Seis colecciones, cada una con su propio mood. Agrega los que te enamoren, arma tu
            carrito y nos mandas el pedido por WhatsApp. Cada set trae 10 uñas press on, lima,
            limpiador y pegante.
          </p>
        </section>

        <nav
          className="sticky top-[66px] z-40 -mx-4 border-b border-border bg-background/95 px-4 py-2.5 backdrop-blur"
          aria-label="Colecciones"
        >
          <div className="catalogo-carrusel flex gap-2 overflow-x-auto">
            {colecciones.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="shrink-0 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold text-foreground transition hover:border-primary hover:bg-muted"
              >
                {c.emoji} {c.nombre}
              </a>
            ))}
          </div>
        </nav>

        {colecciones.map((c) => (
          <Seccion key={c.slug} col={c} onElegir={setElegido} />
        ))}

        <section className="isla-crema relative mt-12 overflow-hidden rounded-3xl p-7 text-center sm:p-9">
          <AdornosIsla />
          <div className="relative">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              ¿Lo quieres a tu gusto? 🎨
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-foreground/70">
              Nos mandas la foto del diseño que te encantó, eliges tamaño y forma, y lo pintamos
              solo para ti. Queda listo en 48 horas después de confirmar el pago.
            </p>
            <p className="mt-3 font-display text-3xl font-bold text-sale">
              {formatoCOP(PRECIO_PERSONALIZADO)}
            </p>
            <button
              type="button"
              onClick={() => setElegido(personalizado)}
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:brightness-95"
            >
              Agregar el mío 📸
            </button>
          </div>
        </section>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          ¿Quieres saber más del producto?{" "}
          <Link to="/" className="font-bold text-primary underline">
            Vuelve a la página principal
          </Link>
        </p>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">
              {unidades === 0 ? "Tu carrito está vacío" : `${contarSets(unidades)} en tu carrito`}
            </p>
            <p className="text-xs text-muted-foreground">
              {unidades === 0
                ? "Envío gratis en Medellín y Área Metropolitana"
                : `Total ${formatoCOP(total)}`}
            </p>
          </div>
          <button
            type="button"
            onClick={abrir}
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:brightness-95"
          >
            Ver carrito 🛒
          </button>
        </div>
      </div>

      <OpcionesModal producto={elegido} onCerrar={() => setElegido(null)} />
      <CarritoDrawer />
    </div>
  );
}
