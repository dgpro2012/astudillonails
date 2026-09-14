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

export type ItemCarrito = {
  id: string;
  nombre: string;
  precio: number;
  img: string;
  cantidad: number;
};

type CarritoCtx = {
  items: ItemCarrito[];
  total: number;
  unidades: number;
  abierto: boolean;
  abrir: () => void;
  cerrar: () => void;
  agregar: (p: Producto) => void;
  quitar: (id: string) => void;
  cambiarCantidad: (id: string, delta: number) => void;
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

  const agregar = useCallback((p: Producto) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === p.id);
      if (existe) {
        return prev.map((i) => (i.id === p.id ? { ...i, cantidad: i.cantidad + 1 } : i));
      }
      return [...prev, { id: p.id, nombre: p.nombre, precio: p.precio, img: p.img, cantidad: 1 }];
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
      vaciar: () => setItems([]),
    };
  }, [items, abierto, agregar, quitar, cambiarCantidad]);

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useCarrito() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return ctx;
}

export function mensajeWhatsApp(items: ItemCarrito[], total: number) {
  const lineas = items
    .map((i) => `• ${i.cantidad} x ${i.nombre} — ${formatoCOP(i.precio * i.cantidad)}`)
    .join("\n");
  const texto =
    `¡Hola, Astudillo Nails! 💅 Quiero pedir esto:\n\n${lineas}\n\n` +
    `Total: ${formatoCOP(total)}\n\n¿Me ayudas a confirmar mi talla y el envío?`;
  return "https://wa.me/573503712704?text=" + encodeURIComponent(texto);
}
