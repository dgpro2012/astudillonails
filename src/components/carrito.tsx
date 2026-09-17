import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { formatoCOP, type Producto } from "@/data/productos";

export type Tamano = "S" | "M" | "L" | "XL";
export type Forma = "Almendra" | "Cuadrada" | "Stiletto" | "Coffin";

/** El tamaño es el largo de la uña, de la cutícula a la punta. */
export const TAMANOS: { sigla: Tamano; mm: string }[] = [
  { sigla: "S", mm: "6 mm" },
  { sigla: "M", mm: "8 mm" },
  { sigla: "L", mm: "10 mm" },
  { sigla: "XL", mm: "12 mm" },
];

export const FORMAS: Forma[] = ["Almendra", "Cuadrada", "Stiletto", "Coffin"];

/** En los tamaños cortos la uña no da para una punta afilada. */
export const FORMAS_POR_TAMANO: Record<Tamano, Forma[]> = {
  S: ["Almendra", "Cuadrada"],
  M: ["Almendra", "Cuadrada"],
  L: ["Almendra", "Cuadrada", "Stiletto", "Coffin"],
  XL: ["Almendra", "Cuadrada", "Stiletto", "Coffin"],
};

export const formasDe = (tamano: Tamano) => FORMAS_POR_TAMANO[tamano];
export const formaDisponible = (tamano: Tamano, forma: Forma) =>
  FORMAS_POR_TAMANO[tamano].includes(forma);

/** Desde dos sets el envío al resto del país queda en este valor. */
export const ENVIO_DESDE_DOS = 9900;

export type OpcionesItem = {
  tamano: Tamano;
  forma: Forma;
  referencia?: string;
};

export type ItemCarrito = {
  id: string;
  nombre: string;
  precio: number;
  img: string;
  color: string;
  cantidad: number;
  tamano: Tamano;
  forma: Forma;
  referencia?: string;
};

type CarritoCtx = {
  items: ItemCarrito[];
  total: number;
  unidades: number;
  abierto: boolean;
  abrir: () => void;
  cerrar: () => void;
  agregar: (p: Producto, opciones: OpcionesItem) => void;
  quitar: (id: string) => void;
  cambiarCantidad: (id: string, delta: number) => void;
  cambiarTamano: (id: string, tamano: Tamano) => void;
  vaciar: () => void;
};

const Ctx = createContext<CarritoCtx | null>(null);
const STORAGE_KEY = "astudillo-carrito";

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([]);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as ItemCarrito[]);
    } catch {
      /* sin carrito guardado */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* almacenamiento no disponible */
    }
  }, [items]);

  const agregar = useCallback((p: Producto, opciones: OpcionesItem) => {
    const id = `${p.id}-${opciones.tamano}-${opciones.forma}${
      opciones.referencia ? "-" + Date.now() : ""
    }`;
    setItems((prev) => {
      const existe = prev.find((i) => i.id === id);
      if (existe) {
        return prev.map((i) =>
          i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i,
        );
      }
      return [
        ...prev,
        {
          id,
          nombre: p.nombre,
          precio: p.precio,
          img: p.img,
          color: p.color,
          cantidad: 1,
          tamano: opciones.tamano,
          forma: opciones.forma,
          ...(opciones.referencia ? { referencia: opciones.referencia } : {}),
        },
      ];
    });
    setAbierto(true);
  }, []);

  const quitar = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cambiarCantidad = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + delta } : i))
        .filter((i) => i.cantidad > 0),
    );
  }, []);

  /** Si el tamaño nuevo no admite la forma elegida, la ajusta sola. */
  const cambiarTamano = useCallback((id: string, tamano: Tamano) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              tamano,
              forma: formaDisponible(tamano, i.forma)
                ? i.forma
                : formasDe(tamano)[0],
            }
          : i,
      ),
    );
  }, []);

  const valor = useMemo<CarritoCtx>(() => {
    const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
    const unidades = items.reduce((acc, i) => acc + i.cantidad, 0);
    return {
      items,
      total,
      unidades,
      abierto,
      abrir: () => setAbierto(true),
      cerrar: () => setAbierto(false),
      agregar,
      quitar,
      cambiarCantidad,
      cambiarTamano,
      vaciar: () => setItems([]),
    };
  }, [items, abierto, agregar, quitar, cambiarCantidad, cambiarTamano]);

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useCarrito() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return ctx;
}

export const WHATSAPP = "573503712704";

export function enlaceWhatsApp(texto: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

/** "1 set" / "3 sets", sin paréntesis de programador. */
export const contarSets = (unidades: number) =>
  unidades === 1 ? "1 set" : `${unidades} sets`;

export function mensajeWhatsApp(items: ItemCarrito[], total: number) {
  const lineas = items
    .map(
      (i) =>
        `• ${i.cantidad} x ${i.nombre} — ${i.forma}, tamaño ${i.tamano} — ${formatoCOP(
          i.precio * i.cantidad,
        )}${
          i.referencia
            ? `\n   📸 Referencia: ${i.referencia} (te la mando por aquí)`
            : ""
        }`,
    )
    .join("\n");

  const texto =
    `¡Hola, Astudillo Nails! 💅 Quiero pedir esto:\n\n${lineas}\n\n` +
    `Total en uñas: ${formatoCOP(total)}\n` +
    `Mi ciudad es: \n\n` +
    `¿Me confirmas el envío y cómo pago?`;

  return enlaceWhatsApp(texto);
}
