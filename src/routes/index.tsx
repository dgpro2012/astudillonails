import { createFileRoute } from "@tanstack/react-router";
import { Camera, Check, HeartHandshake, MessageCircle, Palette, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import cliente1 from "@/assets/cliente-1.jpg";
import cliente2 from "@/assets/cliente-2.jpg";
import cliente3 from "@/assets/cliente-3.jpg";
import diseno1 from "@/assets/diseno-1.jpg";
import diseno2 from "@/assets/diseno-2.jpg";
import diseno3 from "@/assets/diseno-3.jpg";
import kit from "@/assets/kit.jpg";
import razon1 from "@/assets/razon-1.jpg";
import razon2 from "@/assets/razon-2.jpg";
import razon3 from "@/assets/razon-3.jpg";
import razon5 from "@/assets/razon-5.jpg";
import razon6 from "@/assets/razon-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uñas press on personalizadas | Astudillo Nails" },
      {
        name: "description",
        content:
          "Uñas press on hechas a mano y listas para usar. Personaliza tu diseño o elige un set disponible por $49.900, con envíos a toda Colombia.",
      },
      { property: "og:title", content: "Uñas press on personalizadas | Astudillo Nails" },
      {
        property: "og:description",
        content:
          "Elige un set listo o crea tus uñas a medida. Acabado de salón en minutos por $49.900.",
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
    "¡Hola, Astudillo Nails! 💅 Quiero mis uñas press on de $49.900. ¿Me ayudan a elegir diseño y talla?",
  );

const razones = [
  {
    n: 1,
    titulo: "Parecen recién salidas del salón (pero sin la cita eterna)",
    texto:
      "Amiga, ese brillo y esa forma perfecta no tienen nada que envidiarle a una manicura carísima. Te las pones en casa, cuando te dé la gana, y quedas lista para el plan.",
    img: razon1,
  },
  {
    n: 2,
    titulo: "En 7 minutos quedas lista y divina",
    texto:
      "¿Te salió plan de última hora? Tranquila. Limpias, pegas, presionas y listo. Sin lámpara, sin esperar a que sequen y sin tener que ser experta.",
    img: razon2,
  },
  {
    n: 3,
    titulo: "Te acompañan por más de dos semanas",
    texto:
      "Son de gel flexible, así que se sienten cómodas mientras trabajas, cocinas, entrenas o te vas de paseo. Bien puestas, aguantan firmes y con el brillo intacto.",
    img: razon3,
  },
  {
    n: 4,
    titulo: "Las puedes volver a usar, qué bacano",
    texto:
      "Las retiras con cuidado, las guardas y tu set favorito queda listo para repetir. Pagas una vez y le sacas varios looks; tu bolsillo lo agradece.",
    img: diseno2,
  },
  {
    n: 5,
    titulo: "Tus uñas naturales descansan de verdad",
    texto:
      "Nada de pulidores agresivos ni limas eléctricas. La aplicación es suave y el retiro también, para que sigas luciendo manos lindas sin maltratar tus uñas.",
    img: razon5,
  },
  {
    n: 6,
    titulo: "Puedes elegir un set listo o pedir uno solo para ti",
    texto:
      "¿Viste un color en Pinterest o soñaste una forma específica? Nos mandas la idea por WhatsApp y la aterrizamos contigo. Cada set personalizado se hace a mano, uña por uña.",
    img: razon6,
  },
  {
    n: 7,
    titulo: "Te ahorras más de $1.500.000 al año",
    texto:
      "Haz la cuenta, parce: una visita al salón cada tres semanas se vuelve un platal. Aquí pagas $49.900, reutilizas tu set y sigues con manicure de impacto.",
    grafico: true,
  },
  {
    n: 8,
    titulo: "Belleza linda contigo y con los animalitos",
    texto:
      "Son veganas, libres de crueldad y sin químicos agresivos. Te las pones tranquila, porque verte divina no debería costarle el bienestar a nadie.",
    img: diseno1,
  },
  {
    n: 9,
    titulo: "Cero plástico tieso: son 100% gel suave",
    texto:
      "Se sienten livianas, flexibles y naturales. Nada de esa presión incómoda ni del look postizo que se nota desde lejos.",
    img: diseno3,
  },
  {
    n: 10,
    titulo: "Cada vez más colombianas cambiaron el salón por este plan",
    texto:
      "De Medellín a Barranquilla, muchas ya entendieron el truco: manos siempre listas, menos gasto y cero carreras para conseguir cita. Te vas a preguntar por qué no lo hiciste antes.",
    img: cliente1,
  },
];

const comentarios = [
  {
    user: "cata.moreno_",
    texto:
      "Me llegaron al otro día en Medellín 😍 Me las puse rapidísimo y ya llevo más de dos semanas con ellas. Chao, salón.",
  },
  {
    user: "valentinaosp",
    texto:
      "Mandé la foto de mis manos y me ayudaron con la talla. Me quedaron perfectas y no me dañaron mis uñas.",
  },
  {
    user: "lauris.gil",
    texto:
      "Por $49.900 con todo el kit… yo pagaba casi el doble cada tres semanas. La cuenta se hace sola 😂",
  },
  {
    user: "manuelaq",
    texto: "Se ven demasiado naturales. Pedí un diseño a mi gusto y quedó más lindo de lo que imaginaba.",
  },
];

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => setLeft((current) => (current > 0 ? current - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (value: number) => String(value).padStart(2, "0");
  return {
    h: pad(Math.floor(left / 3600)),
    m: pad(Math.floor((left % 3600) / 60)),
    s: pad(left % 60),
  };
}

function Countdown() {
  const { h, m, s } = useCountdown(3 * 3600 + 59 * 60 + 58);
  return (
    <div className="flex items-center gap-1 font-sans tabular-nums" aria-label={`${h} horas, ${m} minutos y ${s} segundos`}>
      {[h, m, s].map((value, index) => (
        <span key={`${value}-${index}`} className="flex items-center gap-1">
          <span className="rounded-sm bg-sale-foreground px-2 py-1 text-sm font-black text-sale">{value}</span>
          {index < 2 && <span className="font-black">:</span>}
        </span>
      ))}
    </div>
  );
}

function CtaButton({ children = "Quiero mis uñas por $49.900", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-center text-base font-black text-whatsapp-foreground shadow-[var(--shadow-button)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto ${className}`}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {children}
    </a>
  );
}

function Garantia() {
  return (
    <p className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-foreground">
      <ShieldCheck className="size-5 shrink-0 text-whatsapp" aria-hidden="true" />
      ¿No te quedaron bien? Tranqui, te ayudamos a cambiarlas.
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-24">
      <div className="bg-sale text-sale-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 py-2 text-center sm:flex-row sm:justify-between">
          <p className="text-xs font-black uppercase tracking-wider sm:text-sm">Envío gratis a toda Colombia · Solo por hoy</p>
          <Countdown />
        </div>
      </div>

      <header className="border-b-4 border-primary bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-center px-4 py-4">
          <span className="font-display text-2xl font-black text-primary">Astudillo Nails</span>
          <Sparkles className="ml-2 size-5 text-sale" aria-hidden="true" />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4">
        <article className="pt-8">
          <p className="mb-3 inline-block -rotate-1 bg-secondary px-3 py-1 text-xs font-black uppercase tracking-widest text-secondary-foreground">
            Manicure en casa · A tu manera
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.05] font-black text-foreground sm:text-6xl">
            10 razones para decirle chao al salón y tener uñas divinas en casa
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Amiga, si te encanta tener las manos arregladas pero te da pereza gastar horas y un platal en el salón, esto te va a encantar.
          </p>

          <div className="mt-6 flex items-center gap-3 border-y-2 border-foreground py-4">
            <div className="flex size-12 rotate-2 items-center justify-center rounded-full bg-accent font-display text-sm font-black text-accent-foreground">FA</div>
            <div className="text-sm">
              <p className="font-black text-foreground">Fernanda Astudillo</p>
              <p className="text-muted-foreground">La amiga que te cuenta el dato · Lectura de 4 min</p>
            </div>
          </div>

          <section className="relative mt-7 overflow-hidden border-2 border-foreground bg-card p-5 shadow-[var(--shadow-card)] sm:p-7">
            <div className="absolute right-0 top-0 bg-accent px-3 py-1 text-xs font-black uppercase text-accent-foreground">Compra rápida</div>
            <p className="pr-24 text-sm font-black uppercase tracking-wider text-primary">¿Ya sabes que las quieres?</p>
            <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-3xl font-black text-foreground">Kit completo por $49.900</p>
                <p className="mt-1 text-sm text-muted-foreground">20 uñas + lima + limpiador + adhesivo</p>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-foreground">
                  <Truck className="size-4 text-sale" aria-hidden="true" /> Envío gratis a toda Colombia
                </p>
              </div>
              <CtaButton>Lo quiero ya</CtaButton>
            </div>
            <Garantia />
          </section>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="bg-primary p-5 text-primary-foreground">
              <p className="font-display text-xl font-black">¿Lo quieres listo?</p>
              <p className="mt-2 text-sm leading-relaxed">Elige uno de los diseños disponibles y te ayudamos a escoger la talla por WhatsApp.</p>
            </div>
            <div className="bg-secondary p-5 text-secondary-foreground">
              <p className="font-display text-xl font-black">¿Lo quieres a tu pinta?</p>
              <p className="mt-2 text-sm leading-relaxed">Mándanos tu inspiración y armamos juntas un set hecho a mano solo para ti.</p>
            </div>
          </div>

          <div className="mt-12 space-y-14 sm:space-y-20">
            {razones.map((razon) => (
              <section key={razon.n} className="relative">
                <span className="absolute -left-2 -top-8 -z-0 font-display text-8xl font-black text-accent/35 sm:-left-12">{String(razon.n).padStart(2, "0")}</span>
                <div className="relative z-10">
                  <h2 className="max-w-2xl text-2xl leading-tight font-black text-foreground sm:text-4xl">{razon.titulo}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{razon.texto}</p>

                  {razon.grafico ? (
                    <ComparacionPrecios />
                  ) : (
                    <img
                      src={razon.img}
                      alt={razon.titulo}
                      loading={razon.n === 1 ? "eager" : "lazy"}
                      width={1024}
                      height={768}
                      className="mt-5 aspect-[4/3] w-full border-2 border-foreground object-cover shadow-[var(--shadow-image)]"
                    />
                  )}

                  {razon.n === 2 && <GaleriaDisenos />}
                  {razon.n === 5 && <GuiaTalla />}
                  {razon.n === 6 && <Personalizacion />}
                  {razon.n === 10 && <Comentarios />}
                </div>
              </section>
            ))}
          </div>
        </article>

        <ClientasFelices />
        <OfertaFinal />
        <Envios />
      </main>

      <footer className="mt-14 border-t-4 border-primary bg-card py-8 text-center text-xs text-muted-foreground">
        <p className="font-display text-xl font-black text-primary">Astudillo Nails</p>
        <p className="mt-2">Hechas a mano con amor · Envíos a toda Colombia</p>
        <p className="mt-1">WhatsApp 350 371 2704 · © {new Date().getFullYear()}</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-foreground bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-sm font-black text-foreground">Tu kit completo</p>
            <p className="text-xs text-muted-foreground"><span className="line-through">$89.900</span> <span className="font-black text-sale">$49.900</span></p>
          </div>
          <CtaButton className="flex-1">Pedir por WhatsApp · $49.900</CtaButton>
        </div>
      </div>
    </div>
  );
}

function ComparacionPrecios() {
  const barras = [
    { label: "Salón", valor: "$1.560.000", alto: "h-48", destaca: false },
    { label: "Semipermanente", valor: "$780.000", alto: "h-32", destaca: false },
    { label: "Astudillo", valor: "$49.900", alto: "h-16", destaca: true },
  ];
  return (
    <div className="mt-5 border-2 border-foreground bg-card p-6 shadow-[var(--shadow-card)]">
      <p className="mb-6 text-center text-xs font-black uppercase tracking-widest text-muted-foreground">Lo que podrías gastar en un año</p>
      <div className="flex items-end justify-center gap-3 sm:gap-6">
        {barras.map((barra) => (
          <div key={barra.label} className="flex w-1/3 flex-col items-center gap-2">
            <span className="text-xs font-black text-foreground sm:text-sm">{barra.valor}</span>
            <div className={`w-full border-2 border-foreground ${barra.alto} ${barra.destaca ? "bg-whatsapp" : "bg-primary"}`} />
            <span className="text-center text-[11px] font-bold text-muted-foreground sm:text-xs">{barra.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GaleriaDisenos() {
  const items = [
    { img: diseno1, nombre: "French clásico" },
    { img: diseno2, nombre: "Nude rosé" },
    { img: diseno3, nombre: "Chocolate" },
  ];
  return (
    <div className="mt-8 bg-primary p-5 text-primary-foreground sm:p-7">
      <h3 className="text-2xl font-black">Mira estos diseños tan lindos</h3>
      <p className="mt-2 text-sm">Puedes elegir uno disponible o mandarnos esa inspiración que tienes guardada.</p>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">
        {items.map((item) => (
          <figure key={item.nombre}>
            <img src={item.img} alt={`Diseño ${item.nombre} de Astudillo Nails`} loading="lazy" width={768} height={768} className="aspect-square w-full border-2 border-primary-foreground object-cover" />
            <figcaption className="mt-2 text-[11px] font-bold leading-tight">{item.nombre}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function GuiaTalla() {
  return (
    <section className="mt-8 border-2 border-foreground bg-accent p-5 text-accent-foreground shadow-[var(--shadow-card)] sm:p-7">
      <div className="flex items-center gap-3">
        <Camera className="size-7 shrink-0" aria-hidden="true" />
        <h3 className="text-2xl font-black">¿Cómo sé qué talla pedir?</h3>
      </div>
      <p className="mt-3 leading-relaxed">Súper fácil: toma una foto clara desde arriba de cada mano, con los dedos relajados y sobre una superficie plana. Pon al lado una moneda nueva de $500 para usarla como referencia de tamaño.</p>
      <p className="mt-3 font-black">Nos mandas las dos fotos por WhatsApp y te ayudamos a elegir la talla. Cero enredos.</p>
    </section>
  );
}

function Personalizacion() {
  const pasos = [
    "Nos mandas por WhatsApp el color, la forma y una foto de inspiración.",
    "Revisamos contigo la idea, la talla y los detalles antes de empezar.",
    "Pintamos tu set a mano y te confirmamos la fecha exacta de envío.",
  ];
  return (
    <section className="mt-8 overflow-hidden border-2 border-foreground bg-card shadow-[var(--shadow-card)]">
      <div className="bg-secondary px-5 py-4 text-secondary-foreground sm:px-7">
        <div className="flex items-center gap-3">
          <Palette className="size-7 shrink-0" aria-hidden="true" />
          <h3 className="text-2xl font-black">Cómo elegimos tu diseño personalizado</h3>
        </div>
      </div>
      <div className="p-5 sm:p-7">
        <div className="grid gap-3">
          {pasos.map((paso, index) => (
            <div key={paso} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">{index + 1}</span>
              <p className="text-sm leading-relaxed text-foreground">{paso}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="border-2 border-primary p-4">
            <p className="font-black text-primary">Set listo</p>
            <p className="mt-1 text-sm text-muted-foreground">Escoges entre los disponibles y sale más rápido. Medellín recibe al siguiente día hábil.</p>
          </div>
          <div className="border-2 border-sale p-4">
            <p className="font-black text-sale">Set personalizado</p>
            <p className="mt-1 text-sm text-muted-foreground">Como se hace a mano, necesita tiempo extra. Te confirmamos la fecha antes de que hagas el pedido.</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <CtaButton>Quiero elegir mi diseño</CtaButton>
          <Garantia />
        </div>
      </div>
    </section>
  );
}

function Comentarios() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {comentarios.map((comentario, index) => (
        <div key={comentario.user} className={`border-2 border-foreground p-4 ${index % 2 === 0 ? "bg-card" : "bg-blush"}`}>
          <p className="text-sm font-black text-foreground">@{comentario.user} <span className="text-xs text-primary">✓ Compra verificada</span></p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">“{comentario.texto}”</p>
        </div>
      ))}
    </div>
  );
}

function ClientasFelices() {
  return (
    <section className="mt-20">
      <p className="text-center text-xs font-black uppercase tracking-widest text-primary">La prueba está en esas manos</p>
      <h2 className="mx-auto mt-2 max-w-xl text-center text-3xl font-black text-foreground sm:text-5xl">Mira cómo les quedan a nuestras chicas</h2>
      <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-4">
        {[cliente1, cliente2, cliente3].map((foto, index) => (
          <img key={foto} src={foto} alt={`Clienta ${index + 1} mostrando sus uñas Astudillo Nails`} loading="lazy" width={768} height={1024} className={`aspect-[3/4] w-full border-2 border-foreground object-cover ${index === 1 ? "translate-y-4" : ""}`} />
        ))}
      </div>
    </section>
  );
}

function OfertaFinal() {
  return (
    <section className="mt-24 overflow-hidden border-2 border-foreground bg-card shadow-[var(--shadow-offer)]">
      <div className="bg-sale py-2 text-center text-xs font-black uppercase tracking-widest text-sale-foreground">Oferta que provoca aprovechar</div>
      <div className="grid md:grid-cols-2">
        <img src={kit} alt="Kit Astudillo Nails con uñas, lima, limpiador y adhesivo" loading="lazy" width={1024} height={1024} className="h-full min-h-80 w-full object-cover" />
        <div className="flex flex-col justify-center p-6 sm:p-9">
          <p className="text-sm font-black uppercase tracking-widest text-primary">Todo lo que necesitas</p>
          <h2 className="mt-2 text-4xl font-black text-foreground">Tu kit Astudillo Nails</h2>
          <p className="mt-3 text-muted-foreground">20 uñas de gel suave + lima + limpiador + adhesivo. Elige un diseño listo o cuéntanos cómo sueñas el tuyo.</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-lg text-muted-foreground line-through">$89.900</span>
            <span className="font-display text-4xl font-black text-sale">$49.900</span>
          </div>
          <div className="mt-5"><CtaButton /></div>
          <Garantia />
          <div className="mt-5 space-y-2 text-sm font-bold text-foreground">
            <p className="flex gap-2"><Check className="size-5 text-whatsapp" aria-hidden="true" /> Envío gratis a toda Colombia</p>
            <p className="flex gap-2"><Check className="size-5 text-whatsapp" aria-hidden="true" /> Pedido fácil por WhatsApp, sin formularios</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Envios() {
  return (
    <section className="mt-10 bg-primary p-6 text-primary-foreground sm:p-8">
      <div className="flex items-center gap-3">
        <HeartHandshake className="size-7" aria-hidden="true" />
        <h2 className="text-2xl font-black">Te acompañamos hasta que te queden divinas</h2>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed">
        <li><strong>Medellín y Área Metropolitana:</strong> tu set estándar llega al siguiente día hábil.</li>
        <li><strong>Resto del país:</strong> el tiempo depende de la transportadora.</li>
        <li><strong>Diseño personalizado:</strong> te confirmamos el tiempo de elaboración y la fecha de envío por WhatsApp.</li>
        <li><strong>¿Dudas?</strong> Escríbenos al 350 371 2704. Te ayudamos con diseño, talla y cambios.</li>
      </ul>
    </section>
  );
}