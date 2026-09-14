import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/astudillo-logo.png.asset.json";
import { formatoCOP, productos, PRECIO_PERSONALIZADO, type Producto } from "@/data/productos";
import { CarritoProvider, useCarrito } from "@/components/carrito";
import { BotonCarrito, CarritoDrawer } from "@/components/CarritoDrawer";
import { OpcionesModal } from "@/components/OpcionesModal";

const PRODUCTO_PERSONALIZADO: Producto = {
  id: "personalizado",
  nombre: "Diseño personalizado",
  precio: PRECIO_PERSONALIZADO,
  img: "",
  coleccion: "Personalizado",
  descripcion: "Tú mandas la foto y lo pintamos a mano solo para ti.",
};

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo de uñas press on | Astudillo Nails" },
      {
        name: "description",
        content:
          "Elige todos los diseños que quieras de uñas press on hechas a mano en Medellín. Cada set $49.900 y pides por WhatsApp desde el carrito.",
      },
      { property: "og:title", content: "Catálogo de uñas press on | Astudillo Nails" },
      {
        property: "og:description",
        content:
          "Escoge varios diseños, arma tu carrito y envía tu pedido por WhatsApp. Sets desde $49.900 con envío a toda Colombia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <CarritoProvider>
      <CatalogoContenido />
    </CarritoProvider>
  );
}

function CatalogoContenido() {
  const { agregar, items, unidades, abrir } = useCarrito();
  const colecciones = [...new Set(productos.map((p) => p.coleccion))];
  const [seleccionado, setSeleccionado] = useState<Producto | null>(null);

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="bg-sale py-2 text-center text-xs font-bold tracking-wide text-sale-foreground">
        ✨ ENVÍO GRATIS EN MEDELLÍN Y ÁREA METROPOLITANA
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" aria-label="Volver al inicio">
            <img src={logoAsset.url} alt="Astudillo Nails" className="h-10 w-auto" />
          </Link>
          <BotonCarrito />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4">
        <section className="pt-8 text-center">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Nuestro catálogo 💅
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Elige todos los diseños que quieras, agrégalos al carrito y nos mandas el pedido por
            WhatsApp. Cada set trae 10 uñas press on hechas a mano, lima, limpiador y adhesivo.
          </p>
        </section>

        {colecciones.map((coleccion) => (
          <section key={coleccion} className="mt-10">
            <h2 className="text-xl font-bold text-primary">{coleccion}</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {productos
                .filter((p) => p.coleccion === coleccion)
                .map((p) => {
                  const enCarrito = items
                    .filter((i) => i.id.startsWith(`${p.id}-`))
                    .reduce((acc, i) => acc + i.cantidad, 0);
                  return (
                    <article
                      key={p.id}
                      className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                    >
                      <img
                        src={p.img}
                        alt={`Set de uñas press on ${p.nombre} de Astudillo Nails`}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                      <div className="p-3">
                        <h3 className="text-sm font-bold text-foreground">{p.nombre}</h3>
                        <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                          {p.descripcion}
                        </p>
                        <p className="mt-2 text-sm font-bold text-sale">{formatoCOP(p.precio)}</p>
                        <button
                          type="button"
                          onClick={() => setSeleccionado(p)}
                          className="mt-3 w-full rounded-full bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-95"
                        >
                          {enCarrito > 0 ? `Agregar otro (${enCarrito})` : "Agregar al carrito"}
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-3xl border border-dashed border-primary bg-card p-6 text-center">
          <h2 className="text-xl font-bold text-foreground">
            ¿Quieres uno hecho a tu gusto? 🎨
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Nos cuentas el color, la forma o nos mandas una foto y lo pintamos a mano solo para ti.
            Queda listo en 48 horas después de confirmar el pago.
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-sale">
            {formatoCOP(PRECIO_PERSONALIZADO)}
          </p>
          <a
            href={
              "https://wa.me/573503712704?text=" +
              encodeURIComponent(
                "¡Hola, Astudillo Nails! 💅 Quiero un diseño personalizado por $59.900. Te cuento la idea:",
              )
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground shadow-lg"
          >
            Cuéntanos tu idea por WhatsApp
          </a>
        </section>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          ¿Quieres saber más del producto?{" "}
          <Link to="/" className="font-bold text-primary underline">
            Vuelve a la página principal
          </Link>
        </p>
      </main>

      {/* Barra fija con el resumen */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">
              {unidades > 0 ? `${unidades} set(s) en tu carrito` : "Tu carrito está vacío"}
            </p>
            <p className="text-xs text-muted-foreground">
              Envío gratis en Medellín y Área Metropolitana
            </p>
          </div>
          <button
            type="button"
            onClick={abrir}
            className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg"
          >
            Ver carrito 🛒
          </button>
        </div>
      </div>

      <CarritoDrawer />
    </div>
  );
}
