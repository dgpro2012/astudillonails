/**
 * Meta Pixel — una sola instancia global para todo el sitio.
 *
 * Ruta sin banner de cookies: el píxel NO se carga ni envía eventos para
 * visitantes de regiones que exigen consentimiento previo (UE/EEE, Reino
 * Unido, Suiza) ni cuando la región no se puede resolver. En Colombia y el
 * resto del mundo funciona normal.
 */

export const META_PIXEL_ID = "1695024961602720";

const REGIONES_CON_CONSENTIMIENTO = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
]);

type DatosEvento = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      push?: unknown;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: unknown;
  }
}

const dev = import.meta.env.DEV;

function log(evento: string, datos?: DatosEvento) {
  if (dev) console.log(`[Meta Pixel] ${evento}`, datos ?? "");
}

let permisoPendiente: Promise<boolean> | null = null;

async function resolverPermiso(): Promise<boolean> {
  try {
    const control = new AbortController();
    const reloj = setTimeout(() => control.abort(), 2000);
    const resp = await fetch("/cdn-cgi/trace", { signal: control.signal });
    clearTimeout(reloj);
    if (!resp.ok) return false;
    const texto = await resp.text();
    const loc = /(?:^|\n)loc=([A-Z0-9]+)/.exec(texto)?.[1];
    if (!loc || loc === "XX" || loc === "T1") return false;
    return !REGIONES_CON_CONSENTIMIENTO.has(loc);
  } catch {
    return false;
  }
}

function permitido(): Promise<boolean> {
  if (!permisoPendiente) permisoPendiente = resolverPermiso();
  return permisoPendiente;
}

let cargado = false;

function cargarPixel() {
  if (cargado || typeof window === "undefined") return;
  cargado = true;

  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  window.fbq?.("init", META_PIXEL_ID);
}

/** Envía un evento estándar o personalizado, respetando la región. */
export function metaEvento(
  nombre: string,
  datos?: DatosEvento,
  personalizado = false,
) {
  if (typeof window === "undefined") return;
  void permitido().then((ok) => {
    if (!ok) return;
    cargarPixel();
    window.fbq?.(personalizado ? "trackCustom" : "track", nombre, datos);
    log(nombre, datos);
  });
}

export function metaPageView() {
  metaEvento("PageView");
}
