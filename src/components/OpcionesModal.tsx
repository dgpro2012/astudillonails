import { useEffect, useState } from "react";

import { FormaUna, LargoUna } from "@/components/UnaSvg";
import {
  FORMAS,
  TAMANOS,
  formaDisponible,
  formasDe,
  useCarrito,
  type Forma,
  type Tamano,
} from "@/components/carrito";
import { formatoCOP, type Producto } from "@/data/productos";
import { metaEvento } from "@/lib/meta-pixel";

const estiloOpcion = (activa: boolean) =>
  activa
    ? "border-primary bg-primary text-primary-foreground shadow-md"
    : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted";

export function OpcionesModal({
  producto,
  onCerrar,
}: {
  producto: Producto | null;
  onCerrar: () => void;
}) {
  const { agregar } = useCarrito();
  const [tamano, setTamano] = useState<Tamano>("M");
  const [forma, setForma] = useState<Forma>("Almendra");
  const [referencia, setReferencia] = useState("");

  const personalizado = producto?.id === "personalizado";

  // Cada vez que se abre, vuelve a los valores por defecto
  useEffect(() => {
    if (producto) {
      setTamano("M");
      setForma("Almendra");
      setReferencia("");
      metaEvento("ViewContent", {
        content_ids: [producto.id],
        content_name: producto.nombre,
        content_type: "product",
        value: producto.precio,
        currency: "COP",
      });
    }
  }, [producto]);

  // Escape cierra el modal y el fondo no se desplaza mientras está abierto
  useEffect(() => {
    if (!producto) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCerrar();
    };
    document.addEventListener("keydown", alTeclear);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = "";
    };
  }, [producto, onCerrar]);

  if (!producto) return null;

  const permitidas = formasDe(tamano);
  const fuera = FORMAS.filter((f) => !permitidas.includes(f));

  const elegirTamano = (t: Tamano) => {
    setTamano(t);
    if (!formaDisponible(t, forma)) setForma(formasDe(t)[0]);
  };

  const confirmar = () => {
    metaEvento("AddToCart", {
      content_ids: [producto.id],
      content_name: producto.nombre,
      content_type: "product",
      value: producto.precio,
      currency: "COP",
      contents: [{ id: producto.id, quantity: 1, item_price: producto.precio }],
    });
    agregar(producto, {
      tamano,
      forma,
      ...(personalizado
        ? { referencia: referencia.trim() || "sin nombre" }
        : {}),
    });
    onCerrar();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onCerrar}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border-t border-border bg-card p-6 shadow-2xl sm:max-w-md sm:rounded-3xl sm:border"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p
              id="modal-titulo"
              className="font-display text-lg font-bold text-foreground"
            >
              Elige tamaño y forma
            </p>
            <p className="text-sm text-muted-foreground">
              {producto.nombre} · {formatoCOP(producto.precio)}
            </p>
          </div>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="rounded-full px-3 py-1 text-xl text-muted-foreground transition hover:bg-muted"
          >
            ✕
          </button>
        </div>

        <p className="mt-5 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          Tamaño
        </p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {TAMANOS.map((t) => {
            const activa = tamano === t.sigla;
            return (
              <button
                key={t.sigla}
                type="button"
                aria-pressed={activa}
                onClick={() => elegirTamano(t.sigla)}
                className={`flex flex-col items-center gap-0.5 rounded-2xl border-2 px-1 py-2.5 transition ${estiloOpcion(activa)}`}
              >
                <LargoUna tamano={t.sigla} />
                <span className="text-xs font-bold">{t.sigla}</span>
                <span
                  className={`text-[10px] ${activa ? "opacity-80" : "text-muted-foreground"}`}
                >
                  {t.mm}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          El tamaño es el{" "}
          <span className="font-bold text-foreground">largo de la uña</span>, de
          la cutícula a la punta. Si dudas, escríbenos y te ayudamos antes de
          que pagues.
        </p>

        <p className="mt-5 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          Forma
        </p>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {FORMAS.map((f) => {
            const libre = permitidas.includes(f);
            const activa = libre && forma === f;
            if (!libre) {
              return (
                <div
                  key={f}
                  title={`No disponible en tamaño ${tamano}`}
                  className="flex cursor-not-allowed flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-border px-2 py-3 text-[11px] font-bold opacity-40"
                >
                  <FormaUna forma={f} />
                  <span>{f}</span>
                  <span className="text-[9px] font-normal">No en {tamano}</span>
                </div>
              );
            }
            return (
              <button
                key={f}
                type="button"
                aria-pressed={activa}
                onClick={() => setForma(f)}
                className={`flex flex-col items-center gap-1 rounded-2xl border-2 px-2 py-3 text-[11px] font-bold transition ${estiloOpcion(activa)}`}
              >
                <FormaUna forma={f} />
                <span>{f}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {fuera.length > 0 ? (
            <>
              En tamaño{" "}
              <span className="font-bold text-foreground">{tamano}</span> no
              podemos hacer {fuera.join(" ni ")}: la uña queda muy corta para
              esa punta.
            </>
          ) : (
            "En este tamaño puedes pedir cualquiera de las cuatro formas."
          )}
        </p>

        {personalizado && (
          <div className="mt-5 rounded-2xl bg-muted p-4">
            <p className="text-sm font-bold text-foreground">
              Tu foto de referencia 📸
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Ponle un nombre a tu idea y nos mandas la foto por el chat.
            </p>
            <input
              type="text"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              placeholder="Ej: uñas con margaritas azules"
              className="mt-3 w-full rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
        )}

        <button
          type="button"
          onClick={confirmar}
          className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition hover:brightness-95"
        >
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
  );
}
