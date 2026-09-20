import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  component: Privacidad,
  head: () => ({
    meta: [
      { title: "Privacidad y cookies | Astudillo Nails" },
      {
        name: "description",
        content:
          "Cómo Astudillo Nails usa cookies y herramientas de medición de Meta (Facebook e Instagram) para saber qué anuncios funcionan, y cómo puedes oponerte.",
      },
      { property: "og:title", content: "Privacidad y cookies | Astudillo Nails" },
      {
        property: "og:description",
        content:
          "Datos que recogemos con el píxel de Meta, para qué los usamos y cómo puedes desactivarlos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Privacidad() {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <main className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Privacidad y cookies
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          En Astudillo Nails usamos una herramienta de medición de Meta
          Platforms (el píxel de Facebook e Instagram) para entender qué
          anuncios traen visitas y pedidos.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-foreground">
          Qué se recoge
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Cuando visitas la página se envían a Meta datos técnicos del
          navegador (dirección IP, tipo de navegador, página visitada,
          identificador de cookie) y acciones dentro del sitio: ver la página,
          ver un diseño, agregar al carrito, iniciar el pedido y dar clic para
          continuar por WhatsApp, junto con el nombre del diseño y el valor en
          pesos colombianos. No enviamos tu nombre, correo ni teléfono.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-foreground">
          Para qué se usa
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Para medir los resultados de nuestros anuncios y optimizarlos, es
          decir, mostrarlos a más personas parecidas a quienes compran.
        </p>

        <h2 className="mt-8 font-display text-xl font-bold text-foreground">
          Tus opciones
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Puedes desactivar esta medición desde la configuración de anuncios de
          tu cuenta de Facebook o Instagram, bloqueando las cookies en tu
          navegador o usando el modo de navegación privada. Si nos visitas
          desde la Unión Europea, el Reino Unido o Suiza, la medición no se
          activa. También puedes escribirnos por WhatsApp al 350 371 2704 para
          pedir información sobre tus datos.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
        >
          Volver al inicio
        </Link>
      </main>
    </div>
  );
}
