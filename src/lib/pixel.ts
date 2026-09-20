/**
 * Meta Pixel.
 *
 * Todo pasa por aquí para que el resto del código no tenga que saber si
 * `fbq` existe. En el servidor no hay `window`, así que cada llamada
 * comprueba primero que estemos en el navegador y que el píxel cargó.
 */

export const PIXEL_ID = "1695024961602720";

type Fbq = (
  comando: string,
  evento: string,
  datos?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** Snippet oficial de Meta, con el ID ya puesto. */
export const SNIPPET_PIXEL = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`;

function rastrear(evento: string, datos?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", evento, datos);
}

/** Visita a una página. Se dispara también en cada cambio de ruta. */
export const pixelPageView = () => rastrear("PageView");

/** Abrió un diseño para elegir tamaño y forma. */
export const pixelVerDiseno = (nombre: string, precio: number) =>
  rastrear("ViewContent", {
    content_name: nombre,
    content_type: "product",
    value: precio,
    currency: "COP",
  });

/** Agregó un set al carrito. */
export const pixelAgregarAlCarrito = (nombre: string, precio: number) =>
  rastrear("AddToCart", {
    content_name: nombre,
    content_type: "product",
    value: precio,
    currency: "COP",
  });

/**
 * Se fue a WhatsApp a pedir. Es lo más cerca de una compra que puede ver
 * el píxel: el pago se cierra fuera del navegador.
 */
export const pixelIniciarPedido = (valor?: number, sets?: number) =>
  rastrear("InitiateCheckout", {
    currency: "COP",
    ...(valor ? { value: valor } : {}),
    ...(sets ? { num_items: sets } : {}),
  });
