import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/astudillo-logo.png.asset.json";
import razon1 from "@/assets/razon-1.jpg";
import razon2 from "@/assets/razon-2.jpg";
import razon3 from "@/assets/razon-3.jpg";
import razon5 from "@/assets/razon-5.jpg";
import razon6 from "@/assets/razon-6.jpg";
import kit from "@/assets/kit.jpg";
import diseno1 from "@/assets/diseno-1.jpg";
import diseno2 from "@/assets/diseno-2.jpg";
import diseno3 from "@/assets/diseno-3.jpg";
import cliente1 from "@/assets/cliente-1.jpg";
import cliente2 from "@/assets/cliente-2.jpg";
import cliente3 from "@/assets/cliente-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "10 razones para no volver al salón de uñas | Astudillo Nails" },
      {
        name: "description",
        content:
          "Uñas press on de gel que te dejan las manos divinas en 7 minutos. Kit completo por $49.900, con envío a toda Colombia.",
      },
      {
        property: "og:title",
        content: "10 razones para no volver al salón de uñas | Astudillo Nails",
      },
      {
        property: "og:description",
        content:
          "Ten unas uñas divinas en 7 minutos con el kit completo de Astudillo Nails por $49.900.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/573503712704?text=" +
  encodeURIComponent(
    "¡Hola, Astudillo Nails! 💅 Quiero pedir mi kit de uñas press on de $49.900. ¿Me ayudan a elegir?",
  );

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    h: pad(Math.floor(left / 3600)),
    m: pad(Math.floor((left % 3600) / 60)),
    s: pad(left % 60),
  };
}

function Countdown({ light = false }: { light?: boolean }) {
  const { h, m, s } = useCountdown(3 * 3600 + 59 * 60 + 58);
  const box = light
    ? "bg-primary text-primary-foreground"
    : "bg-sale-foreground/15 text-sale-foreground";
  return (
    <div className="flex items-center gap-1 font-sans tabular-nums">
      {[h, m, s].map((v, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className={`rounded-md px-2 py-1 text-sm font-bold ${box}`}>{v}</span>
          {i < 2 && <span className="font-bold">:</span>}
        </span>
      ))}
    </div>
  );
}

function CtaButton({
  children = "Quiero mis uñas por $49.900 💅",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-center text-base font-bold text-whatsapp-foreground shadow-lg transition hover:brightness-95 sm:w-auto ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4M12 21.8c-1.7 0-3.4-.5-4.9-1.4l-.3-.2-3.6.9 1-3.5-.2-.4A9.7 9.7 0 1 1 12 21.8M12 2A10 10 0 0 0 3.3 17L2 22l5.2-1.4A10 10 0 1 0 12 2" />
      </svg>
      {children}
    </a>
  );
}

const razones = [
  {
    n: 1,
    emoji: "💎",
    titulo: "Parecen recién salidas del salón, pero sin cita",
    texto:
      "Amiga, ese brillo espejo y esa forma perfecta no tienen nada que envidiarle a una manicura de $150.000. Te las pones tranquila en casa, cuando quieras, sin esperar turno ni dejar medio sueldo en el salón.",
    img: razon1,
  },
  {
    n: 2,
    emoji: "⏰",
    titulo: "Quedas lista en solo 7 minutos",
    texto:
      "¿Vas tarde para una cita, una salida o el trabajo? Fresca: el kit trae 10 uñas, lima, limpiador y adhesivo. Limpias, pegas, presionas y quedas divina. Sin lámpara UV, sin desorden y sin tener que saber de manicura.",
    img: razon2,
  },
  {
    n: 3,
    emoji: "💪",
    titulo: "Te duran más de 2 semanas, de verdad",
    texto:
      "Estas uñas sí se quedan en su sitio. El gel flexible se adapta a tu uña natural y aguanta mientras escribes, cocinas, entrenas o te vas de paseo. Más de dos semanas con el brillo intacto y sin dramas.",
    img: razon3,
  },
  {
    n: 4,
    emoji: "🔁",
    titulo: "Las puedes usar una y otra vez",
    texto:
      "Lo más bacano es que tu set favorito no se pierde después de una sola puesta. Si las retiras y las cuidas bien, puedes volver a usarlas varias veces. Pagas una vez y les sacas todo el jugo.",
    img: diseno2,
  },
  {
    n: 5,
    emoji: "🧴",
    titulo: "Tus uñas naturales siguen sanitas",
    texto:
      "Nada de pulidores, limas eléctricas ni removedores agresivos. Se ponen suavemente y se retiran con agua tibia, así que tus uñas quedan sanas, bonitas y sin arrepentimientos.",
    img: razon5,
  },
  {
    n: 6,
    emoji: "🎨",
    titulo: "Te las hace a mano una manicurista de verdad, de Medellín",
    texto:
      "Estas no salen de una máquina, parce: las pintamos una por una las mejores manicuristas de Medellín. ¿Viste un color, una forma o un diseño que te encantó? Mándanos la idea por WhatsApp y lo hacemos a mano para ti. También puedes escoger uno ya listo del catálogo. Tú sueñas tus uñas y nosotras les damos vida ✨.",
    img: razon6,
  },
  {
    n: 7,
    emoji: "💰",
    titulo: "Te ahorras más de $1.500.000 al año",
    texto:
      "Haz la cuenta, parce: una visita al salón cuesta entre $60.000 y $120.000. Si vas cada tres semanas, se te van más de $1.500.000 al año. Con un set de $49.900 consigues el mismo efecto y hasta puedes repetir el look.",
    grafico: true,
  },
  {
    n: 8,
    emoji: "🌎",
    titulo: "Bonitas contigo y también con los animales",
    texto:
      "Son veganas, libres de pruebas en animales y sin esos químicos agresivos que maltratan tu uña natural. Te las pones tranquila y disfrutas tus manos lindas, como debe ser.",
    img: diseno1,
  },
  {
    n: 9,
    emoji: "✨",
    titulo: "No se sienten tiesas ni parecen de plástico",
    texto:
      "Son 100% gel suave: flexible, liviano y cómodo. Se mueven contigo y se sienten como una uña real, sin esa presión incómoda ni ese acabado artificial que nadie quiere.",
    img: diseno3,
  },
  {
    n: 10,
    emoji: "💖",
    titulo: "Cada vez más colombianas dicen: chao, salón",
    texto:
      "Mujeres de Medellín, Bogotá, Cali, Barranquilla y todo el país ya cambiaron horas en el salón por 7 minutos en casa. Porque tener las manos lindas cuando te provoque es otro nivel.",
    img: cliente1,
  },
];

const comentarios = [
  {
    user: "cata.moreno_",
    texto:
      "Me llegaron al otro día en Medellín 😍 Me las puse en 6 minutos y ya llevo 3 semanas con ellas. De verdad, no vuelvo al salón.",
  },
  {
    user: "valentinaosp",
    texto:
      "Pedí desde Bucaramanga y llegaron perfectas. Lo que más me gustó fue que no me dañaron la uña. Antes las tenía delgaditas y ahora están sanas 🥺",
  },
  {
    user: "lauris.gil",
    texto:
      "Por $49.900 con lima, limpiador y pegante… yo pagaba 90 mil en el salón cada 3 semanas. Amiga, la cuenta se hace sola 😅",
  },
  {
    user: "manuelaq",
    texto:
      "Se ven demasiado naturales, nadie cree que son postizas. Ya voy por mi tercer set 💅🏽",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Barra de oferta */}
      <div className="bg-sale text-sale-foreground">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-4 py-2 text-center sm:flex-row sm:justify-between">
          <p className="text-xs font-bold tracking-wide sm:text-sm">
            ✨ ENVÍO GRATIS EN MEDELLÍN Y ÁREA METROPOLITANA
          </p>
          <Countdown />
        </div>
      </div>

      <header className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-3 text-center">
          <img
            src={logoAsset.url}
            alt="Astudillo Nails"
            className="mx-auto h-12 w-auto"
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4">
        {/* Encabezado del artículo */}
        <article className="pt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Entre amigas · Uñas lindas en casa
          </p>
          <h1 className="text-3xl leading-tight font-bold text-foreground sm:text-4xl">
            10 razones para tener uñas de salón sin volver al salón 💅
          </h1>

          <div className="mt-6 flex items-center gap-3 border-y border-border py-4">
            <div className="flex size-11 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
              FA
            </div>
            <div className="text-sm">
              <p className="font-bold text-foreground">Fernanda Astudillo</p>
              <p className="text-muted-foreground">Te lo cuento en 4 minuticos</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-muted p-5">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-bold">Te cuento rapidito:</span> puedes tener una manicura de
              gel divina desde tu casa, sin cita, sin maltratar tus uñas y sin gastar una fortuna.
              Con <span className="font-bold">Astudillo Nails</span> quedas lista en minutos y tus
              manos se ven hermosas por semanas. Sigue leyendo y vas a entender por qué tantas ya
              dijeron: chao, salón.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-primary/40 bg-blush/40 p-4">
            <p className="text-sm text-foreground">
              <span className="font-bold">Dato que te va a encantar:</span> en menos de 7 minutos
              tienes uñas con acabado de salón, sin lámpara UV y sin experiencia.
            </p>
          </div>

          {/* CTA rápido above the fold */}
          <CtaRapido />

          {/* Razones */}
          <div className="mt-12 space-y-14">
            {razones.map((r) => (
              <section key={r.n}>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  {r.n}. {r.emoji} {r.titulo}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.texto}</p>

                {r.grafico ? (
                  <ComparacionPrecios />
                ) : (
                  <img
                    src={r.img}
                    alt={r.titulo}
                    loading={r.n === 1 ? "eager" : "lazy"}
                    width={1024}
                    height={768}
                    className="mt-5 w-full rounded-2xl object-cover"
                  />
                )}

                {r.n === 2 && <GaleriaDisenos />}
                {r.n === 5 && (
                  <div className="mt-8 rounded-2xl bg-cream p-6 text-center">
                    <p className="font-display text-lg font-bold text-foreground">
                      Todo el kit por $49.900
                    </p>
                    <p className="mt-1 mb-4 text-sm text-muted-foreground">
                      Te llegan 10 uñas + lima + limpiador + adhesivo
                    </p>
                    <CtaButton />
                  </div>
                )}
                {r.n === 10 && <Comentarios />}
              </section>
            ))}
          </div>
        </article>

        <DisenoPersonalizado />
        <ClientasFelices />
        <OfertaFinal />
        <Envios />
      </main>

      <footer className="mt-14 border-t border-border bg-card py-8 text-center text-xs text-muted-foreground">
        <p className="font-display text-base font-bold text-primary">Astudillo Nails</p>
        <p className="mt-2">Envíos a toda Colombia · WhatsApp 350 371 2704</p>
        <p className="mt-1">© {new Date().getFullYear()} Astudillo Nails</p>
      </footer>

      {/* CTA fijo */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">Kit Astudillo Nails</p>
            <p className="text-xs text-muted-foreground">
              <span className="line-through">$89.900</span>{" "}
              <span className="font-bold text-sale">$49.900</span>
            </p>
          </div>
          <CtaButton className="flex-1">Pedir por WhatsApp · $49.900</CtaButton>
        </div>
      </div>
    </div>
  );
}

function ComparacionPrecios() {
  const barras = [
    { label: "Salón de uñas", valor: "$1.560.000", alto: "h-48", destaca: false },
    { label: "Semipermanente", valor: "$780.000", alto: "h-32", destaca: false },
    { label: "Astudillo Nails", valor: "$49.900", alto: "h-16", destaca: true },
  ];
  return (
    <div className="mt-5 rounded-2xl bg-cream p-6">
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Lo que podrías gastar en un año
      </p>
      <div className="flex items-end justify-center gap-4">
        {barras.map((b) => (
          <div key={b.label} className="flex w-1/3 flex-col items-center gap-2">
            <span className="text-sm font-bold text-foreground">{b.valor}</span>
            <div
              className={`w-full rounded-t-lg ${b.alto} ${
                b.destaca ? "bg-whatsapp" : "bg-primary"
              }`}
            />
            <span className="text-center text-xs font-medium text-muted-foreground">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GaleriaDisenos() {
  const items = [
    { img: diseno1, nombre: "French Clásico · Short Round" },
    { img: diseno2, nombre: "Nude Rosé · Short Square" },
    { img: diseno3, nombre: "Chocolate · Medium Almond" },
  ];
  return (
    <div className="mt-8 rounded-2xl bg-muted p-6">
      <h3 className="text-lg font-bold text-foreground">Mira estos diseños tan divinos</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Hay nudes para todos los días, french para una ocasión especial y tonos intensos para cuando quieras robarte las miradas.
      </p>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {items.map((d) => (
          <figure key={d.nombre}>
            <img
              src={d.img}
              alt={d.nombre}
              loading="lazy"
              width={768}
              height={768}
              className="aspect-square w-full rounded-xl object-cover"
            />
            <figcaption className="mt-2 text-[11px] leading-tight text-muted-foreground">
              <span className="block text-sale">★★★★★</span>
              {d.nombre}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Comentarios() {
  return (
    <div className="mt-8 space-y-3">
         {comentarios.map((c) => (
        <div key={c.user} className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-bold text-foreground">
            {c.user} <span className="ml-1 text-xs text-muted-foreground">· Compra verificada</span>
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
        </div>
      ))}
    </div>
  );
}

function ClientasFelices() {
  const fotos = [cliente1, cliente2, cliente3];
  return (
    <section className="mt-16">
      <h2 className="text-center text-2xl font-bold text-foreground">
        Mira cómo les quedan a nuestras clientas
      </h2>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {fotos.map((f, i) => (
          <img
            key={i}
            src={f}
            alt="Clienta de Astudillo Nails mostrando su manicura"
            loading="lazy"
            width={768}
            height={1024}
            className="aspect-[3/4] w-full rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}

function OfertaFinal() {
  return (
    <section className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
      <div className="bg-sale py-2 text-center text-xs font-bold uppercase tracking-widest text-sale-foreground">
        Precio especial por lanzamiento
      </div>
      <div className="p-6 text-center">
        <img
          src={kit}
          alt="Kit de uñas press on Astudillo Nails con 10 uñas, lima, limpiador y adhesivo"
          loading="lazy"
          width={1024}
          height={1024}
          className="mx-auto w-full max-w-sm rounded-2xl object-cover"
        />
        <h2 className="mt-6 text-2xl font-bold text-foreground">Tu kit Astudillo Nails</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Todo lo que necesitas: 10 uñas de gel suave + lima + limpiador + adhesivo
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          ✋ Hechas a mano por las mejores manicuristas de Medellín · 🔁 Totalmente
          reutilizables
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="text-lg text-muted-foreground line-through">$89.900</span>
          <span className="font-display text-4xl font-bold text-sale">$49.900</span>
        </div>

        <div className="mt-5 flex flex-col items-center gap-2">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Aprovecha este precio antes de que termine:
          </p>
          <Countdown light />
        </div>

        <div className="mt-6">
          <CtaButton />
        </div>

        <div className="mt-6 grid gap-2 text-left text-sm text-muted-foreground">
          <p>
             🔥 Se están acabando: <span className="font-bold text-foreground">quedan pocos kits</span>
          </p>
          <p>
             🚚 <span className="font-bold text-foreground">Envío gratis en Medellín y Área Metropolitana</span> · Al resto de Colombia va por transportadora
          </p>
          <p>
             💬 Lo pides por <span className="font-bold text-foreground">WhatsApp</span>, sin
             formularios ni vueltas raras
          </p>
        </div>
      </div>
    </section>
  );
}

function Envios() {
  return (
    <section className="mt-10 rounded-2xl bg-muted p-6">
      <h2 className="text-lg font-bold text-foreground">¿Cuándo te llegan?</h2>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        <li>
          📍 <span className="font-bold text-foreground">Medellín y Área Metropolitana:</span>{" "}
           el envío va por nuestra cuenta y recibes al siguiente día hábil.
        </li>
        <li>
           🇨🇴 <span className="font-bold text-foreground">Resto del país:</span> te enviamos por
           transportadora y el tiempo depende de tu ciudad.
        </li>
        <li>
           💬 ¿Te quedó alguna duda? Escríbenos con confianza al WhatsApp{" "}
          <span className="font-bold text-foreground">350 371 2704</span>.
        </li>
      </ul>
    </section>
  );
}

function CtaRapido() {
  return (
    <section className="mt-8 rounded-3xl border-2 border-dashed border-primary bg-card p-6 text-center shadow-lg">
      <p className="text-xs font-bold uppercase tracking-widest text-sale">Precio de lanzamiento</p>
      <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
        ¿Ya las quieres? No tienes que leer todo 💅
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Pide tu kit Astudillo Nails por solo{" "}
        <span className="font-display text-2xl font-bold text-sale">$49.900</span>{" "}
        con envío gratis en Medellín y Área Metropolitana.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        ✋ Hechas a mano por las mejores manicuristas de Medellín y 🔁 totalmente
        reutilizables.
      </p>
      <div className="mt-5">
        <CtaButton>Lo quiero ahora · $49.900</CtaButton>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        🌸 ¿Te preocupa la talla? La personalizamos para que te queden perfectas.
      </p>
    </section>
  );
}

function DisenoPersonalizado() {
  return (
    <section className="mt-14 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
           Tú las imaginas, nosotras las hacemos
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
           ¿Cómo hacemos tu diseño personalizado? ✨
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
           Tú mandas: puedes escoger un set del catálogo que ya está listo o pedir uno hecho a tu gusto. Cuéntanos tu idea y la volvemos uñas.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-muted p-5 text-center">
          <p className="text-2xl">💅</p>
          <h3 className="mt-2 text-lg font-bold text-foreground">Uno listo del catálogo</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Escoges el que más te guste y queda listo para salir.
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-sale">$49.900</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
             Listo en 24h después de confirmar el pago
          </p>
        </div>

        <div className="rounded-2xl bg-muted p-5 text-center">
          <p className="text-2xl">🎨</p>
          <h3 className="mt-2 text-lg font-bold text-foreground">Uno hecho a tu gusto</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tú eliges el color, la forma y esos detallitos que amas.
          </p>
          <p className="mt-3 font-display text-3xl font-bold text-sale">$59.900</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
             Listo en 48h después de confirmar el pago
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-cream p-6">
        <h3 className="text-lg font-bold text-foreground">Así de fácil lo hacemos</h3>
        <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li>
            <span className="font-bold text-foreground">1. Nos escribes por WhatsApp</span> y nos mandas el color, la forma o una foto de lo que te gustó.
          </li>
          <li>
            <span className="font-bold text-foreground">2. Lo revisamos contigo</span> y te confirmamos el diseño y el precio antes de que pagues.
          </li>
          <li>
            <span className="font-bold text-foreground">3. Confirmas el pago y arrancamos</span> a hacer cada uña a mano, solo para ti.
          </li>
          <li>
            <span className="font-bold text-foreground">4. Te avisamos cuando salga</span>: 24h para catálogo o 48h para personalizado, siempre después de confirmar el pago.
          </li>
        </ol>
      </div>

      <div className="mt-6 text-center">
        <CtaButton>Quiero uno hecho para mí · $59.900</CtaButton>
      </div>
    </section>
  );
}
