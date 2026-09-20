import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { pixelPageView } from "@/lib/pixel";

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
