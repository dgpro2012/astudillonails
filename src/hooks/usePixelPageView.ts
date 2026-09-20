import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { pixelIniciarPedido, pixelPageView } from "@/lib/pixel";

/**
 * Dispara PageView en cada cambio de ruta.
 *
 * El snippet del <head> ya registra la primera carga, así que aquí se
 * salta la visita inicial para no contarla dos veces. De ahí en adelante,
 * pasar de la landing al catálogo cuenta como una visita nueva.
 */
export function usePixelPageView() {
  const ruta = useRouterState({ select: (s) => s.location.pathname });
  const primera = useRef(true);

  useEffect(() => {
    if (primera.current) {
      primera.current = false;
      return;
    }
    pixelPageView();
  }, [ruta]);
}

/**
 * Marca como inicio de pedido cualquier clic que lleve a WhatsApp.
 *
 * Se resuelve con un solo detector en el documento en vez de repetir el
 * evento botón por botón: así ningún enlace nuevo se queda sin medir.
 * Los que llevan `data-pixel` disparan su propio evento con el valor del
 * carrito, y este los deja pasar para no duplicar.
 */
export function usePixelWhatsApp() {
  useEffect(() => {
    const alHacerClic = (e: MouseEvent) => {
      const destino = e.target as HTMLElement | null;
      const enlace = destino?.closest?.("a");
      if (!enlace) return;
      if (enlace.dataset.pixel) return;
      if (!enlace.href.startsWith("https://wa.me/")) return;
      pixelIniciarPedido();
    };

    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);
}
