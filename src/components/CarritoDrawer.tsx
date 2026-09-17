import { useEffect, useState } from "react";

import { formatoCOP } from "@/data/productos";
import {
  ENVIO_DESDE_DOS,
  TAMANOS,
  contarSets,
  mensajeWhatsApp,
  useCarrito,
} from "@/components/carrito";

export function BotonCarrito() {
  const { unidades, abrir } = useCarrito();
  return (
    <button
      type="button"
      onClick={abrir}
      aria-label="Abrir carrito"
      className="relative flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg transition hover:brightness-95"
    >
      <span aria-hidden="true">🛒</span>
      Carrito
      {unidades > 0 && (
        <span className="flex size-5 items-center justify-center rounded-full bg-sale text-[11px] font-bold text-sale-foreground">
          {unidades}
        </span>
      )}
    </button>
  );
}

const IconoWhatsApp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4M12 21.8c-1.7 0-3.4-.5-4.9-1.4l-.3-.2-3.6.9 1-3.5-.2-.4A9.7 9.7 0 1 1 12 21.8M12 2A10 10 0 0 0 3.3 17L2 22l5.2-1.4A10 10 0 1 0 12 2" />
  </svg>
);

/** Con un solo set invita a llevar otro; con dos o más, confirma el beneficio. */
function AvisoEnvio({ unidades }: { unidades: number }) {
  if (unidades === 1) {
    return (
      <div className="mt-4 rounded-2xl border border-dashed border-primary bg-blush/40 p-4 text-sm">
        <p className="font-bold text-foreground">Llévate uno más 🚚</p>
        <p className="mt-1 leading-relaxed text-muted-foreground">
          Desde 2 sets, el envío al resto del país te queda en{" "}
          <span className="font-bold text-foreground">
            {formatoCOP(ENVIO_DESDE_DOS)}
          </span>{" "}
          en total. En Medellín siempre va gratis.
        </p>
      </div>
    );
  }
  return (
    <div className="mt-4 rounded-2xl bg-muted p-4 text-sm">
      <p className="font-bold text-whatsapp">
        ✓ Ya tienes el envío de {formatoCOP(ENVIO_DESDE_DOS)}
      </p>
      <p className="mt-1 leading-relaxed text-muted-foreground">
        Al resto del país son {formatoCOP(ENVIO_DESDE_DOS)} en total, lleves los
        que lleves. En Medellín y Área Metropolitana va gratis.
      </p>
    </div>
  );
}

export function CarritoDrawer() {
  const {
    items,
    total,
    unidades,
    abierto,
    cerrar,
    quitar,
    cambiarCantidad,
    cambiarTamano,
    vaciar,
  } = useCarrito();

  const [confirmandoVaciar, setConfirmandoVaciar] = useState(false);

  // Escape cierra el panel y el fondo no se desplaza mientras está abierto
  useEffect(() => {
    if (!abierto) {
      setConfirmandoVaciar(false);
      return;
    }
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", alTeclear);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = "";
    };
  }, [abierto, cerrar]);

  return (
    <>
      {/* Fondo oscuro */}
      <div
        onClick={cerrar}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          abierto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel que entra desde la derecha */}
      <aside
        role="dialog"
        aria-label="Tu carrito"
        aria-hidden={!abierto}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out ${
          abierto ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-display text-lg font-bold text-foreground">
            Tu carrito 🛒
          </p>
          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar carrito"
            className="rounded-full px-3 py-1 text-xl text-muted-foreground transition hover:bg-muted"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-4xl">💅</p>
              <p className="mt-3 font-bold text-foreground">
                Todavía no has elegido nada
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Agrega los diseños que más te gusten y te los mandamos juntos.
              </p>
              <button
                type="button"
                onClick={cerrar}
                className="mt-5 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
              >
                Ver los diseños
              </button>
            </div>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map((i) => (
                  <li
                    key={i.id}
                    className="flex gap-3 rounded-2xl border border-border p-3"
                  >
                    {i.img ? (
                      <img
                        src={i.img}
                        alt={i.nombre}
                        loading="lazy"
                        className="size-20 shrink-0 rounded-xl object-cover"
                      />
                    ) : (
                      <div
                        className="size-20 shrink-0 rounded-xl"
                        style={{
                          background: `linear-gradient(160deg, ${i.color} 0%, ${i.color}99 100%)`,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold text-foreground">
                          {i.nombre}
                        </p>
                        <button
                          type="button"
                          onClick={() => quitar(i.id)}
                          aria-label={`Quitar ${i.nombre}`}
                          className="text-xs text-muted-foreground underline"
                        >
                          Quitar
                        </button>
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {i.forma}
                      </p>
                      {i.referencia && (
                        <p className="text-[11px] text-muted-foreground">
                          📸 {i.referencia}
                        </p>
                      )}

                      {/* El tamaño se cambia aquí mismo, sin quitar el producto */}
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] text-muted-foreground">
                          Tamaño
                        </span>
                        {TAMANOS.map((t) => {
                          const activa = i.tamano === t.sigla;
                          return (
                            <button
                              key={t.sigla}
                              type="button"
                              onClick={() => cambiarTamano(i.id, t.sigla)}
                              aria-pressed={activa}
                              className={`rounded-full border px-2 py-0.5 text-[11px] font-bold transition ${
                                activa
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border text-muted-foreground hover:bg-muted"
                              }`}
                            >
                              {t.sigla}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => cambiarCantidad(i.id, -1)}
                            aria-label={`Quitar una unidad de ${i.nombre}`}
                            className="size-7 rounded-full border border-border font-bold text-foreground"
                          >
                            −
                          </button>
                          <span className="text-sm font-bold tabular-nums">
                            {i.cantidad}
                          </span>
                          <button
                            type="button"
                            onClick={() => cambiarCantidad(i.id, 1)}
                            aria-label={`Agregar una unidad de ${i.nombre}`}
                            className="size-7 rounded-full border border-border font-bold text-foreground"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-bold text-sale">
                          {formatoCOP(i.precio * i.cantidad)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <AvisoEnvio unidades={unidades} />

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setConfirmandoVaciar(true)}
                  className="text-xs text-muted-foreground underline"
                >
                  Vaciar carrito
                </button>
                {confirmandoVaciar && (
                  <div className="mt-2 rounded-2xl border border-border bg-muted p-3 text-sm">
                    <p className="text-foreground">
                      ¿Seguro que quieres quitar todo?
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          vaciar();
                          setConfirmandoVaciar(false);
                        }}
                        className="rounded-full bg-sale px-4 py-1.5 text-xs font-bold text-sale-foreground"
                      >
                        Sí, vaciar
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmandoVaciar(false)}
                        className="rounded-full border border-border px-4 py-1.5 text-xs font-bold text-foreground"
                      >
                        Mejor no
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border bg-cream px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Total en uñas · {contarSets(unidades)}
              </span>
              <span className="font-display text-2xl font-bold text-sale">
                {formatoCOP(total)}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-bold text-muted-foreground">
              <span className="rounded-full border border-border bg-card px-2.5 py-1">
                💳 Tarjeta
              </span>
              <span className="rounded-full border border-border bg-card px-2.5 py-1">
                📲 Nequi
              </span>
              <span className="rounded-full border border-border bg-card px-2.5 py-1">
                🔑 Llave Bre-B
              </span>
            </div>

            <a
              href={mensajeWhatsApp(items, total)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-foreground shadow-lg transition hover:brightness-95"
            >
              <IconoWhatsApp />
              Enviar mi pedido por WhatsApp
            </a>
            <p className="mt-2 text-center text-[11px] leading-relaxed text-muted-foreground">
              Te llega el resumen al chat. Ahí confirmamos tu ciudad, el envío y
              cómo pagas.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
