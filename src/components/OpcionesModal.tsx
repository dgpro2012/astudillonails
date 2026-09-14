import { useEffect, useState } from "react";

import type { Forma, OpcionesItem, Tamano } from "@/components/carrito";
import { formatoCOP, type Producto } from "@/data/productos";

const TAMANOS: Tamano[] = ["S", "M", "L", "XL"];
const FORMAS: Forma[] = ["Almendra", "Cuadrada", "Stileto", "Coffin"];

const SIN_TAMANO: Record<Forma, Tamano[]> = {
  Almendra: ["XL"],
  Cuadrada: ["XL"],
  Stileto: ["S"],
  Coffin: ["S"],
};

function combinacionValida(forma: Forma, tamano: Tamano) {
  return !SIN_TAMANO[forma].includes(tamano);
}

export function OpcionesModal({
  producto,
  personalizado = false,
  onCerrar,
  onAgregar,
}: {
  producto: Producto;
  personalizado?: boolean;
  onCerrar: () => void;
  onAgregar: (opciones: OpcionesItem) => void;
}) {
  const [forma, setForma] = useState<Forma | null>(null);
  const [tamano, setTamano] = useState<Tamano | null>(null);
  const [referencia, setReferencia] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  useEffect(() => {
    if (forma && tamano && !combinacionValida(forma, tamano)) setTamano(null);
  }, [forma, tamano]);

  const listo = forma && tamano && (!personalizado || referencia);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <div
        onClick={onCerrar}
        aria-hidden="true"
        className="absolute inset-0 bg-foreground/50 backdrop-blur-[2px]"
      />
      <div
        role="dialog"
        aria-label={`Elegir talla y forma de ${producto.nombre}`}
        className="relative w-full max-w-md rounded-t-3xl border border-border bg-card p-5 shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-start gap-3">
          {producto.img && (
            <img
              src={producto.img}
              alt={producto.nombre}
              className="size-16 rounded-xl object-cover"
            />
          )}
          <div className="flex-1">
            <p className="font-display text-lg font-bold text-foreground">{producto.nombre}</p>
            <p className="text-sm font-bold text-sale">{formatoCOP(producto.precio)}</p>
          </div>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="rounded-full px-2 text-xl text-muted-foreground"
          >
            ✕
          </button>
        </div>

        {personalizado && (
          <div className="mt-5">
            <p className="text-sm font-bold text-foreground">1. Sube tu foto de referencia 📸</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Mándanos la foto del diseño que te encantó y lo pintamos a mano para ti.
            </p>
            <label className="mt-3 flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-primary bg-muted px-4 py-5 text-center text-sm font-bold text-primary">
              {referencia ? "Cambiar la foto" : "Elegir foto del diseño"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (preview) URL.revokeObjectURL(preview);
                  setPreview(URL.createObjectURL(file));
                  setReferencia(file.name);
                }}
              />
            </label>
            {preview && (
              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-border p-3">
                <img src={preview} alt="Foto de referencia" className="size-16 rounded-xl object-cover" />
                <p className="flex-1 text-xs text-muted-foreground">
                  Guardamos el nombre de tu foto en el pedido. Cuando abras WhatsApp, envíanosla en
                  el chat 💬
                </p>
              </div>
            )}
          </div>
        )}

        <div className="mt-5">
          <p className="text-sm font-bold text-foreground">
            {personalizado ? "2." : "1."} Elige la forma
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {FORMAS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setForma(f);
                  setError(null);
                }}
                className={`rounded-full border px-3 py-2 text-sm font-bold transition ${
                  forma === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-sm font-bold text-foreground">
            {personalizado ? "3." : "2."} Elige la talla
          </p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {TAMANOS.map((t) => {
              const deshabilitado = forma ? !combinacionValida(forma, t) : false;
              return (
                <button
                  key={t}
                  type="button"
                  disabled={deshabilitado}
                  onClick={() => {
                    setTamano(t);
                    setError(null);
                  }}
                  className={`rounded-full border px-3 py-2 text-sm font-bold transition ${
                    tamano === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary"
                  } ${deshabilitado ? "cursor-not-allowed opacity-35 hover:border-border" : ""}`}
                >
                  {t}
                </button>
              );
            })}
          </div>
          {forma && (
            <p className="mt-2 text-[11px] text-muted-foreground">
              La forma {forma} no viene en talla {SIN_TAMANO[forma].join(", ")}.
            </p>
          )}
        </div>

        {error && <p className="mt-3 text-xs font-bold text-sale">{error}</p>}

        <button
          type="button"
          onClick={() => {
            if (!listo || !forma || !tamano) {
              setError(
                personalizado && !referencia
                  ? "Súbenos la foto de referencia y elige forma y talla 💅"
                  : "Elige la forma y la talla para continuar 💅",
              );
              return;
            }
            onAgregar({ tamano, forma, ...(referencia ? { referencia } : {}) });
          }}
          className="mt-5 w-full rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg transition hover:brightness-95"
        >
          Agregar al carrito 🛒
        </button>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          ¿No sabes tu talla? Tranquila, la confirmamos contigo por WhatsApp.
        </p>
      </div>
    </div>
  );
}
