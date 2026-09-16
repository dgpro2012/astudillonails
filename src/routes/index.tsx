import { createFileRoute, Link } from "@tanstack/react-router";

import logo from "@/assets/astudillo-logo.png";
import fernandaCara from "@/assets/fernanda-cara.webp";
import fernandaRetrato from "@/assets/fernanda.webp";
import nina from "@/assets/nina.webp";
import kit from "@/assets/kit.webp";
import razon1 from "@/assets/razon-1.webp";
import razon3 from "@/assets/razon-3.webp";
import diseno3 from "@/assets/diseno-3.webp";
import cliente1 from "@/assets/cliente-1.webp";
import cliente2 from "@/assets/cliente-2.webp";
import cliente3 from "@/assets/cliente-3.webp";
import antojo from "@/assets/antojo.webp";
import latido from "@/assets/latido.webp";
import flechazo from "@/assets/flechazo.webp";
import chispa from "@/assets/chispa.webp";
import cacheton from "@/assets/cacheton.webp";
import glazedPearl from "@/assets/glazed-pearl.webp";
import animalPrint from "@/assets/animal-print.webp";
import pistacho from "@/assets/pistacho.webp";

import {
  Cinta,
  Cuticula,
  IconoLlave,
  IconoNequi,
  IconoTarjeta,
  IconoWhatsApp,
  Limar,
  Limpiar,
  Marcar,
  Medir,
  Pedido,
  Pegante,
  Presionar,
  Pulir,
  Tabla,
} from "@/components/Ilustraciones";
import { enlaceWhatsApp } from "@/components/carrito";

export const Route = createFileRoute("/")({
  component: Inicio,
  head: () => ({
    meta: [
      { title: "10 razones para estrenar uñas hoy mismo | Astudillo Nails" },
      {
        name: "description",
        content:
          "Uñas press on hechas a mano en Medellín. Acabado de salón en 7 minutos, hasta dos semanas de duración y cada estreno te sale seis veces más barato.",
      },
    ],
  }),
});

const MSG_PEDIDO =
  "¡Hola! Ya sé cuál diseño quiero y estoy lista para pedir mis uñas press on 💅";

/* ---------- Piezas reutilizables ---------- */

function CtaCatalogo({
  texto = "Quiero ver el catálogo 💅",
  className = "",
}: {
  texto?: string;
  className?: string;
}) {
  return (
    <Link
      to="/catalogo"
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-center text-base font-bold text-primary-foreground shadow-lg transition hover:brightness-95 sm:w-auto ${className}`}
    >
      <span aria-hidden="true">🛒</span>
      {texto}
    </Link>
  );
}

function BotonWhatsApp({
  texto,
  mensaje,
  className = "",
}: {
  texto: string;
  mensaje: string;
  className?: string;
}) {
  return (
    <a
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-center text-sm font-bold text-whatsapp-foreground shadow-lg transition hover:brightness-95 sm:w-auto ${className}`}
    >
      <IconoWhatsApp />
      {texto}
    </a>
  );
}

function EnlaceWhatsApp({ texto, mensaje }: { texto: string; mensaje: string }) {
  return (
    <a
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-primary underline underline-offset-2"
    >
      {texto}
    </a>
  );
}

const MEDIOS = [
  { Icono: IconoTarjeta, nombre: "Tarjeta", detalle: "Débito o crédito" },
  { Icono: IconoNequi, nombre: "Nequi", detalle: "Al número de siempre" },
  { Icono: IconoLlave, nombre: "Llave Bre-B", detalle: "Transferencia al instante" },
];

function MediosPago({ compacto = false }: { compacto?: boolean }) {
  if (compacto) {
    return (
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {MEDIOS.map(({ Icono, nombre }) => (
          <span
            key={nombre}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground"
          >
            <span className="text-primary">
              <Icono />
            </span>
            {nombre}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="mt-6 rounded-2xl border border-border bg-cream p-4">
      <p className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
        Puedes pagar con
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {MEDIOS.map(({ Icono, nombre, detalle }) => (
          <div key={nombre} className="flex flex-col items-center gap-1 px-2">
            <span className="text-primary">
              <Icono />
            </span>
            <p className="text-xs font-bold text-foreground">{nombre}</p>
            <p className="text-[10px] leading-tight text-muted-foreground">{detalle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Contenido ---------- */

const RAZONES = [
  {
    n: 1,
    emoji: "💎",
    titulo: "Se ven recién salidas del salón, pero nunca pisaste uno",
    texto:
      "Amiga, ese brillo espejo y esa forma perfecta no tienen nada que envidiarle a una manicura de $150.000. Te las pones tranquila en casa, cuando quieras, sin esperar turno ni dejar medio sueldo en el salón.",
  },
  {
    n: 2,
    emoji: "⏰",
    titulo: "En 7 minuticos ya estás lista",
    texto:
      "¿Vas tarde para una cita, una salida o el trabajo? Fresca: el kit trae 10 uñas, lima, limpiador y adhesivo. Limpias, pegas, presionas y quedas divina. Sin lámpara UV, sin desorden y sin tener que saber de manicura.",
  },
  {
    n: 3,
    emoji: "💪",
    titulo: "Te aguantan hasta 2 semanas, en serio",
    texto:
      "Estas uñas sí se quedan en su sitio. El gel flexible se adapta a tu uña natural y aguanta mientras escribes, cocinas, entrenas o te vas de paseo. Hasta dos semanas con el brillo intacto y sin dramas.",
  },
  {
    n: 4,
    emoji: "🔁",
    titulo: "Las usas otra vez, y otra, y otra",
    texto:
      "Lo más bacano es que tu set favorito no se pierde después de una sola puesta. Si las retiras y las cuidas bien, puedes volver a usarlas varias veces. Pagas una vez y les sacas todo el jugo.",
  },
  {
    n: 5,
    emoji: "🧴",
    titulo: "Tus uñas de verdad siguen sanitas",
    texto:
      "Nada de pulidores, limas eléctricas ni removedores agresivos. Se ponen suavemente y se retiran con agua tibia, así que tus uñas quedan sanas, bonitas y sin arrepentimientos.",
  },
  {
    n: 6,
    emoji: "🎨",
    titulo: "Te las hace a mano una manicurista de verdad, de Medellín",
    texto:
      "Estas no salen de una máquina: las pintamos pincel en mano, una por una, las mejores manicuristas de Medellín. ¿Viste un color, una forma o un diseño que te encantó? Mándanos la idea por WhatsApp y te la volvemos uñas. También puedes escoger uno ya listo del catálogo. Tú sueñas tus uñas y nosotras les damos vida ✨.",
  },
  {
    n: 7,
    emoji: "💰",
    titulo: "Cada estreno te sale seis veces más barato",
    texto:
      "Mira la cuenta por uso, que es la que importa: unas acrílicas te cuestan unos $100.000 y te duran tres semanas. Una semipermanente, unos $60.000 por esas mismas tres semanas. Tu set de Astudillo Nails cuesta $49.900 y lo usas tres veces, así que cada vez que estrenas uñas te sale en $16.633. Las mismas manos lindas, seis veces más barato.",
  },
  {
    n: 8,
    emoji: "🌎",
    titulo: "Lindas contigo y también con los animalitos",
    texto:
      "Son veganas, libres de pruebas en animales y sin esos químicos agresivos que maltratan tu uña natural. Te las pones tranquila y disfrutas tus manos lindas, como debe ser.",
  },
  {
    n: 9,
    emoji: "🌸",
    titulo: "Perfectas si eres alérgica a la semipermanente o el acrílico",
    texto:
      "¿Te salió alergia a los químicos de la semipermanente, el acrílico o el gel del salón? Aquí ningún químico queda directo sobre tu uña: el diseño viene pintado y curado en la press on, así que lo que te pones encima ya es la pieza terminada. Por eso son una opción apta cuando tu piel no tolera esos productos, y de paso tus uñas siguen respirando, sin limado y sin que se pelen a la semana.",
  },
  {
    n: 10,
    emoji: "💖",
    titulo: "Cada vez más colombianas dicen: chao, salón",
    texto:
      "Mujeres de Medellín, Bogotá, Cali, Barranquilla y todo el país ya cambiaron horas en el salón por 7 minutos en casa. Porque tener las manos lindas cuando te provoque es otro nivel.",
  },
];

const MODELOS = [
  { nombre: "Antojo", img: antojo },
  { nombre: "Latido", img: latido },
  { nombre: "Flechazo", img: flechazo },
  { nombre: "Chispa", img: chispa },
  { nombre: "Cachetón", img: cacheton },
];

const GALERIA = [
  { nombre: "Glazed Pearl", img: glazedPearl },
  { nombre: "Animal Print", img: animalPrint },
  { nombre: "Verde Pistacho", img: pistacho },
];

const BENEFICIOS = [
  { e: "✋", t: "Hechas a mano", d: "Una por una, en Medellín" },
  { e: "🔁", t: "Reutilizables", d: "Te rinden 3 estrenos" },
  { e: "🌸", t: "Tu talla exacta", d: "Te quedan como un guante" },
  { e: "🚚", t: "Envío", d: "Gratis en Medellín · $9.900 desde 2 sets" },
];

const PASOS_PUESTA = [
  { Icono: Cuticula, t: "Empuja la cutícula", d: "Con el palito, hacia atrás y sin forzar." },
  { Icono: Pulir, t: "Pule la superficie", d: "Un par de pasadas suaves para quitarle el brillo." },
  { Icono: Limpiar, t: "Limpia la uña", d: "Con el limpiador del kit. Sin grasa no hay uña caída." },
  { Icono: Pegante, t: "Pon el pegante", d: "Una gota de pega líquida sobre tu uña, sin excederte." },
  { Icono: Presionar, t: "Presiona 30 segundos", d: "Apoya la press on desde la cutícula y aprieta firme." },
  { Icono: Limar, t: "Dale forma si quieres", d: "Lima la punta hasta el largo que te guste." },
];

const PASOS_TALLA = [
  { Icono: Cinta, t: "Pega la cinta", d: "Pon cinta adhesiva transparente sobre tu uña, sin que quede aire en los laterales." },
  { Icono: Marcar, t: "Marca tu medida", d: "Con un marcador, señala los dos extremos más anchos de tu uña." },
  { Icono: Medir, t: "Mide con regla", d: "Mide entre las dos marcas y anota los milímetros. Hazlo con las 10 uñas." },
  { Icono: Tabla, t: "Busca tu talla", d: "Compara tus medidas con la tabla y quédate con la que más se acerque." },
  { Icono: Pedido, t: "Haz tu pedido", d: "Nos dices si eres S, M o L al elegir en el catálogo o por WhatsApp." },
];

const TALLAS = [
  { sigla: "S", nombre: "Pequeño", medidas: [14, 10, 12, 10, 8] },
  { sigla: "M", nombre: "Mediano", medidas: [15, 11, 13, 11, 9] },
  { sigla: "L", nombre: "Grande", medidas: [17, 13, 14, 13, 10] },
];

const COMENTARIOS = [
  { u: "cata.moreno_", t: "Me llegaron al otro día en Medellín 😍 Me las puse en 6 minutos y ya llevo 3 semanas con ellas. De verdad, no vuelvo al salón." },
  { u: "valentinaosp", t: "Pedí desde Bucaramanga y llegaron perfectas. Lo que más me gustó fue que no me dañaron la uña. Antes las tenía delgaditas y ahora están sanas 🥺" },
  { u: "lauris.gil", t: "Por $49.900 con lima, limpiador y pegante… yo pagaba 90 mil en el salón cada 3 semanas. Amiga, la cuenta se hace sola 😅" },
  { u: "manuelaq", t: "Se ven demasiado naturales, nadie cree que son postizas. Ya voy por mi tercer set 💅🏽" },
];

const PREGUNTAS = [
  { p: "¿De verdad no se me van a caer?", r: "Si preparas bien la uña, no. El truco está en el paso que casi nadie hace: limpiar la uña con el limpiador del kit antes de pegar, para que no quede ni grasa ni residuo. Bien puestas te duran hasta dos semanas haciendo tu vida normal." },
  { p: "¿Me dañan la uña natural?", r: "No. No hay limado, ni pulidor, ni lámpara UV. Para quitarlas las remojas en agua tibia y se sueltan solas. Nunca las arranques en seco: ahí sí se lleva una capa de tu uña." },
  { p: "¿Puedo lavar loza, bañarme o entrenar con ellas?", r: "Sí, esa es la idea. Aguantan el día a día: agua, jabón, teclado, gimnasio. Si vas a durar mucho rato con las manos en agua caliente, unos guantes le suman vida al set." },
  { p: "¿Y si no sé cuál es mi talla?", r: "Tranquila, no tienes que resolverlo sola. Puedes medirte con la guía de esta página o simplemente escribirnos por WhatsApp y lo confirmamos contigo antes de que pagues. Y si ninguna talla estándar te cuadra, te las hacemos a tu medida exacta." },
  { p: "¿Las pueden usar niñas?", r: "Sí, desde los 9 años. Como no hay limado, ni químicos sobre la uña, ni lámpara, son mucho más amables que cualquier opción de salón. Recomendamos que se las ponga un adulto para manejar el pegante, y que se retiren siempre con agua tibia, nunca halándolas." },
  { p: "¿Sirven si tengo las uñas mordidas o muy anchas?", r: "Sí. Como cada set lo preparamos uno por uno, podemos ajustar forma y medida a tu uña. Mándanos tus milímetros por WhatsApp y las preparamos para ti." },
  { p: "¿Cuántas veces las puedo usar?", r: "Cada set aguanta entre tres y cuatro posturas si las retiras con calma y las guardas en su tarjeta. Por eso te rinden tanto más que una manicura de salón." },
  { p: "¿Cuánto me demoro en recibirlas?", r: "Los diseños del catálogo quedan listos en 24 horas después de confirmar el pago y los personalizados en 48. En Medellín y Área Metropolitana recibes al siguiente día hábil; al resto del país va por transportadora según tu ciudad." },
  { p: "¿Cómo pago?", r: "Con tarjeta débito o crédito, Nequi o transferencia por llave Bre-B. Eliges tus diseños en el catálogo, nos mandas el pedido por WhatsApp y ahí coordinamos el pago, sin formularios." },
];

/* ---------- Secciones ---------- */

function Comparacion() {
  const barras = [
    { l: "Acrílico", v: "$100.000", nota: "Te dura 3 semanas", alto: "h-48", nuestro: false },
    { l: "Semipermanente", v: "$60.000", nota: "Te dura 3 semanas", alto: "h-28", nuestro: false },
    { l: "Astudillo Nails", v: "$16.633", nota: "El set rinde 3 usos", alto: "h-8", nuestro: true },
  ];
  return (
    <div className="mt-5 rounded-2xl bg-cream p-6">
      <p className="mb-6 text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
        Lo que te cuesta cada vez que estrenas uñas
      </p>
      <div className="flex items-end justify-center gap-4">
        {barras.map((b) => (
          <div key={b.l} className="flex w-1/3 flex-col items-center gap-2">
            <span className="text-sm font-bold text-foreground">{b.v}</span>
            <div
              className={`w-full rounded-t-lg ${b.alto} ${b.nuestro ? "bg-whatsapp" : "bg-primary"}`}
            />
            <span className="text-center text-xs font-medium text-foreground">{b.l}</span>
            <span className="text-center text-[11px] leading-tight text-muted-foreground">
              {b.nota}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
        Tu set cuesta <span className="font-bold text-foreground">$49.900</span> y lo usas 3 veces,
        así que cada estreno te sale en{" "}
        <span className="font-bold text-foreground">$16.633</span>. Seis veces menos que unas
        acrílicas, con las mismas manos lindas.
      </p>
    </div>
  );
}

function GuiaPuesta() {
  return (
    <div className="mt-8 rounded-3xl bg-muted p-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground">Así te las pones en 7 minutos</h3>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Seis pasitos y ya está. Sin lámpara, sin cita y sin saber nada de manicura: todo viene en
          el kit.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PASOS_PUESTA.map(({ Icono, t, d }, i) => (
          <div
            key={t}
            className="relative rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
          >
            <span className="absolute top-3 left-3 grid size-6 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div className="grid place-items-center pt-2">
              <Icono />
            </div>
            <p className="mt-2 text-[13px] leading-tight font-bold text-foreground">{t}</p>
            <p className="mt-1 text-[11px] leading-tight text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-2xl border border-dashed border-primary/40 bg-blush/40 p-4 text-center text-xs leading-relaxed text-foreground">
        <span className="font-bold">El secreto está en el paso 3.</span> Si la uña queda con grasita
        o crema, la press on se despega a los dos días. Límpiala bien y te dura hasta dos semanas.
      </p>
    </div>
  );
}

function Historia() {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      <div className="sm:flex sm:items-stretch">
        <img
          src={fernandaRetrato}
          alt="Fernanda Astudillo en su taller de Medellín, con el delantal de Astudillo Nails y una lima en la mano"
          loading="lazy"
          className="aspect-[4/5] w-full object-cover sm:aspect-auto sm:w-2/5"
        />
        <div className="p-6 sm:w-3/5 sm:p-7">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">
            Quién está detrás
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground">Fernanda, mamá y manicurista</h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Fernanda es mamá. Sabe lo que es querer verse linda y darse cuenta de que meterse tres
              horas en un salón ya no es una opción, porque hay que recoger en el colegio, hacer
              almuerzo y resolver mil cosas más.
            </p>
            <p>
              De ahí nace <span className="font-bold text-foreground">Astudillo Nails</span>:{" "}
              <span className="font-bold text-foreground">
                uñas de salón que te pones en la casa, en 7 minutos, entre una cosa y otra.
              </span>{" "}
              Pensadas para todas las mamás que no tienen tiempo, pero tampoco quieren descuidarse.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-cream p-6 sm:flex sm:items-center sm:gap-6">
        <img
          src={nina}
          alt="Niña mostrando sus uñas press on de Astudillo Nails con diseño de estrellas"
          loading="lazy"
          className="mx-auto aspect-square w-40 shrink-0 rounded-2xl object-cover shadow-sm sm:mx-0 sm:w-44"
        />
        <div className="mt-4 sm:mt-0">
          <p className="text-[15px] font-bold text-foreground">
            También son aptas para las princesas de la casa 👑
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Desde los <span className="font-bold text-foreground">9 años</span> las pueden usar. No
            hay limado, ni químicos sobre la uña, ni lámpara: se ponen con una gota de pegante y se
            retiran con agua tibia. Eso sí, que se las ponga un adulto, para cuidar el manejo del
            pegante. Por eso muchas mamás terminan pidiendo dos sets, uno para ellas y uno para su
            hija.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Página ---------- */

function Inicio() {
  const pares: { nums: number[]; img?: string; alt?: string; grafico?: boolean; extra?: "puesta" | "galeria" | "kit" | "historia" }[] = [
    { nums: [1, 2], img: razon1, alt: "Uñas press on con acabado de salón de Astudillo Nails", extra: "puesta" },
    { nums: [3, 4], img: razon3, alt: "Manos con uñas press on de Astudillo Nails escribiendo en un computador", extra: "galeria" },
    { nums: [5, 6], extra: "historia" },
    { nums: [7, 8], grafico: true, extra: "kit" },
    { nums: [9, 10], img: diseno3, alt: "Mano con uñas press on de Astudillo Nails sosteniendo un café, las llaves y las gafas" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-sale text-sale-foreground">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-4 py-2 text-center sm:flex-row sm:justify-between">
          <p className="text-xs font-bold tracking-wide sm:text-sm">
            ✨ ENVÍO GRATIS EN MEDELLÍN Y ÁREA METROPOLITANA
          </p>
          <p className="text-xs font-bold tracking-wide sm:text-sm">
            🚚 DESDE 2 SETS, EL ENVÍO AL RESTO DEL PAÍS CUESTA $9.900
          </p>
        </div>
      </div>

      <header className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-3 text-center">
          <img src={logo} alt="Astudillo Nails" className="mx-auto h-12 w-auto" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4">
        <article className="pt-8">
          <h1 className="text-3xl leading-tight font-bold text-foreground sm:text-4xl">
            10 razones para estrenar uñas hoy mismo, sin pisar un salón 💅
          </h1>

          <div className="mt-6 flex items-center gap-3 border-y border-border py-4">
            <img
              src={fernandaCara}
              alt="Fernanda Astudillo, manicurista y fundadora de Astudillo Nails"
              className="size-12 rounded-full object-cover ring-2 ring-accent"
            />
            <div className="text-sm">
              <p className="font-bold text-foreground">Fernanda Astudillo</p>
              <p className="text-muted-foreground">
                Manicurista y fundadora · Te lo cuento en 4 minuticos
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-muted p-5">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-bold">Te cuento rapidito:</span> puedes tener una manicura de gel
              divina desde tu casa, sin cita, sin maltratar tus uñas y sin gastar una fortuna. Con{" "}
              <span className="font-bold">Astudillo Nails</span> quedas lista en minutos y tus manos
              se ven hermosas por dos semanas. Sigue leyendo y vas a entender por qué tantas ya
              dijeron: chao, salón.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-primary/40 bg-blush/40 p-4">
            <p className="text-sm text-foreground">
              <span className="font-bold">Ojo con este dato:</span> en menos de 7 minutos tienes uñas
              con acabado de salón, sin lámpara UV y sin experiencia.
            </p>
          </div>

          {/* Carrusel de lanzamiento */}
          <section className="mt-8 overflow-hidden border-y border-primary/25 py-10">
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-sale uppercase">
                Recién salidas del taller
              </p>
              <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Estrenamos con la colección San Valentín 💘
              </h2>
              <p className="mt-2 font-display text-lg font-bold text-foreground">
                Cinco diseños listos para enamorarte
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Escoge el que te enamore por{" "}
                <span className="font-bold text-foreground">$49.900</span>. Lo preparamos en tu talla
                y en 24 horas sale para ti.
              </p>
            </div>

            <div className="catalogo-carrusel mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
              {MODELOS.map((m) => (
                <article
                  key={m.nombre}
                  className="w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:w-[46%]"
                >
                  <img
                    src={m.img}
                    alt={`Set de uñas press on ${m.nombre} de la colección San Valentín de Astudillo Nails`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-foreground">{m.nombre}</h3>
                      <span className="text-sm font-bold text-sale">$49.900</span>
                    </div>
                    <CtaCatalogo texto="Este lo quiero" className="mt-3 px-3 py-2 text-xs" />
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              Uno por uno, en el taller de Medellín · Elige el tuyo en el catálogo
            </p>
          </section>

          {/* Franja de confianza */}
          <section className="mt-6 text-center">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {BENEFICIOS.map((b) => (
                <div key={b.t} className="bg-cream px-2 py-3">
                  <span className="text-lg" aria-hidden="true">
                    {b.e}
                  </span>
                  <p className="mt-1 text-xs font-bold text-foreground">{b.t}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 text-center">
              <CtaCatalogo texto="Quiero ver el catálogo · $49.900" />
            </div>
            <MediosPago compacto />
            <p className="mt-4 text-xs text-muted-foreground">
              ¿Ya sabes cuál te vas a llevar?{" "}
              <EnlaceWhatsApp texto="pídelas directo por WhatsApp" mensaje={MSG_PEDIDO} />
            </p>
          </section>

          {/* Las 10 razones */}
          <div className="mt-12 space-y-14">
            {pares.map((par, i) => (
              <section key={par.nums.join("-")}>
                {par.grafico ? (
                  <Comparacion />
                ) : par.img ? (
                  <img
                    src={par.img}
                    alt={par.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="aspect-[16/10] w-full rounded-2xl object-cover"
                  />
                ) : null}

                <div
                  className={`${par.img || par.grafico ? "mt-5 " : ""}grid gap-y-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-2`}
                >
                  {par.nums.map((n) => {
                    const r = RAZONES[n - 1];
                    return (
                      <div key={n}>
                        <h2 className="text-lg leading-snug font-bold text-foreground sm:text-xl">
                          {r.n}. {r.emoji} {r.titulo}
                        </h2>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                          {r.texto}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {par.extra === "puesta" && <GuiaPuesta />}
                {par.extra === "historia" && <Historia />}

                {par.extra === "galeria" && (
                  <div className="mt-8 rounded-2xl bg-muted p-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      Los más vendidos{" "}
                      <span className="font-sans" aria-label="producto en tendencia">
                        🔥
                      </span>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Estos son los que más vuelan. Mira si el tuyo está por aquí 👀
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {GALERIA.map((g) => (
                        <figure key={g.nombre}>
                          <img
                            src={g.img}
                            alt={g.nombre}
                            loading="lazy"
                            className="aspect-square w-full rounded-xl object-cover"
                          />
                          <figcaption className="mt-2 text-[11px] leading-tight text-muted-foreground">
                            {g.nombre}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}

                {par.extra === "kit" && (
                  <div className="isla-kit relative mt-10 mb-2 overflow-hidden rounded-3xl p-7 text-center sm:p-8">
                    <div className="relative">
                      <p className="font-display text-xl font-bold text-foreground sm:text-2xl">
                        Todo el kit por $49.900 ✨
                      </p>
                      <p className="mt-1 mb-5 text-sm text-foreground/70">
                        10 uñas + lima + limpiador + pegante, listo para estrenar
                      </p>
                      <CtaCatalogo />
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>

        {/* Diseño personalizado */}
        <section className="mt-14 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">
              Tú las imaginas, nosotras las hacemos
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              ¿Cómo hacemos tu diseño personalizado? ✨
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Aquí tú mandas: escoges uno del catálogo que ya está listo o pides el tuyo a tu gusto.
              Cuéntanos la idea y te la volvemos uñas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-muted p-5 text-center">
              <p className="text-2xl">💅</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">Uno listo del catálogo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Escoges el que te encante y sales con él puesto.
              </p>
              <p className="mt-3 font-display text-3xl font-bold text-sale">$49.900</p>
              <p className="mt-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Listo en 24h después de confirmar el pago
              </p>
            </div>
            <div className="rounded-2xl bg-muted p-5 text-center">
              <p className="text-2xl">🎨</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">Uno hecho a tu gusto</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tú pones el color, la forma y esos detallitos que te matan.
              </p>
              <p className="mt-3 font-display text-3xl font-bold text-sale">$59.900</p>
              <p className="mt-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Listo en 48h después de confirmar el pago
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-cream p-6">
            <h3 className="text-lg font-bold text-foreground">Así de fácil, mira:</h3>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-bold text-foreground">1. Nos escribes por WhatsApp</span> y nos
                mandas el color, la forma o una foto de lo que te gustó.
              </li>
              <li>
                <span className="font-bold text-foreground">2. Lo revisamos contigo</span> y te
                confirmamos el diseño y el precio antes de que pagues.
              </li>
              <li>
                <span className="font-bold text-foreground">3. Pagas como te quede mejor</span>{" "}
                —tarjeta, Nequi o llave Bre-B— y arrancamos a pintar cada uña, solo para ti.
              </li>
              <li>
                <span className="font-bold text-foreground">4. Te avisamos cuando salga</span>: 24h
                para catálogo o 48h para personalizado, siempre después de confirmar el pago.
              </li>
            </ol>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <CtaCatalogo texto="Ver los diseños del catálogo" />
            <BotonWhatsApp
              texto="Ya tengo mi idea, mandarla por WhatsApp"
              mensaje="¡Hola! Ya tengo la idea de mi diseño personalizado, se las mando 🎨"
            />
          </div>
        </section>

        {/* Guía de tallas */}
        <section className="mt-14 rounded-3xl bg-cream p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              ¿Cuál es tu talla? Lo resolvemos en un minuto 📏
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Con una cinta y una regla queda listo. Así te quedan como un guante y no se te despegan
              a mitad de camino.
            </p>
          </div>

          <ol className="mt-7 space-y-5">
            {PASOS_TALLA.map(({ Icono, t, d }, i) => (
              <li key={t} className="flex items-center gap-4">
                <div className="grid size-16 shrink-0 place-items-center rounded-2xl border border-border bg-card shadow-sm">
                  <Icono />
                </div>
                <div>
                  <p className="flex items-center gap-2">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-bold text-foreground">{t}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <p className="bg-blush/60 px-3 py-3 text-center text-sm font-bold text-primary">
              Tabla de medidas, en milímetros
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse">
                <thead>
                  <tr className="bg-muted">
                    {["Talla", "Pulgar", "Índice", "Medio", "Anular", "Meñique"].map((c, i) => (
                      <th
                        key={c}
                        className={`px-2 py-2 text-[11px] font-bold tracking-wide text-muted-foreground uppercase ${i === 0 ? "px-3 text-left" : "text-center"}`}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TALLAS.map((t) => (
                    <tr key={t.sigla} className="border-t border-border">
                      <th scope="row" className="px-3 py-3 text-left whitespace-nowrap">
                        <span className="font-display text-base font-bold text-primary">
                          {t.sigla}
                        </span>
                        <span className="ml-1 text-[11px] text-muted-foreground">{t.nombre}</span>
                      </th>
                      {t.medidas.map((m, i) => (
                        <td
                          key={i}
                          className="px-2 py-3 text-center text-sm tabular-nums text-foreground"
                        >
                          {m}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-blush/40 p-5 text-center">
            <p className="text-[15px] font-bold text-foreground">
              ¿Tus medidas no cuadran con ninguna talla?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Tranquila, te las hacemos a tu medida exacta. Mándanos tus milímetros y las pintamos
              para que queden como un guante.
            </p>
            <div className="mt-4">
              <BotonWhatsApp
                texto="Tengo una duda con mi talla"
                mensaje="¡Hola! Tengo una duda con mi talla de press on, ¿me ayudan? 📏"
              />
            </div>
          </div>
        </section>

        {/* Clientas */}
        <section className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Así se les ven a nuestras clientas
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Ellas ya cambiaron el salón por 7 minuticos en casa. Mira lo que nos contaron 👇
            </p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[cliente1, cliente2, cliente3].map((c, i) => (
              <img
                key={i}
                src={c}
                alt="Clienta de Astudillo Nails mostrando su manicura"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-xl object-cover"
              />
            ))}
          </div>
          <div className="mt-8 space-y-3">
            {COMENTARIOS.map((c) => (
              <div key={c.u} className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-bold text-foreground">
                  {c.u}{" "}
                  <span className="ml-1 text-xs text-muted-foreground">· Compra verificada</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Oferta final */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
          <div className="bg-sale py-2 text-center text-xs font-bold tracking-widest text-sale-foreground uppercase">
            Precio especial por lanzamiento
          </div>
          <div className="p-6 text-center">
            <img
              src={kit}
              alt="Set de uñas press on Astudillo Nails en su tarjeta rosada, con diseño francesita"
              loading="lazy"
              className="kit-flotante mx-auto w-full max-w-md"
            />
            <h2 className="mt-6 text-2xl font-bold text-foreground">Tu kit, listo para estrenar 💅</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Te llega todo: 10 uñas press on + lima + limpiador + pegante
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              ✋ Hechas a mano por las mejores manicuristas de Medellín · 🔁 Totalmente reutilizables
            </p>
            <div className="mt-4">
              <span className="font-display text-4xl font-bold text-sale">$49.900</span>
              <p className="mt-1 text-xs text-muted-foreground">
                Precio por set, con los 10 dedos listos
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-cream p-4">
              <p className="text-sm font-bold text-foreground">¿Te vas a llevar más de uno? 🚚</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Desde 2 sets, el envío al resto del país te cuesta{" "}
                <span className="font-bold text-foreground">$9.900</span>, sin importar cuántos
                lleves. En Medellín y Área Metropolitana siempre va gratis.
              </p>
            </div>

            <div className="mt-6 text-center">
              <CtaCatalogo />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              ¿Ya tienes claro tu diseño o te quedó una duda puntual?
            </p>
            <div className="mt-2">
              <BotonWhatsApp texto="Ya sé cuál quiero, pedir por WhatsApp" mensaje={MSG_PEDIDO} />
            </div>

            <MediosPago />

            <div className="mt-6 grid gap-2 text-left text-sm text-muted-foreground">
              <p>
                🚚{" "}
                <span className="font-bold text-foreground">
                  Envío gratis en Medellín y Área Metropolitana
                </span>{" "}
                · Desde 2 sets, al resto del país son $9.900
              </p>
              <p>
                🔁 <span className="font-bold text-foreground">Te rinde 3 estrenos</span> · Lo usas,
                lo guardas y lo vuelves a poner
              </p>
              <p>
                💬 Eliges en el catálogo y nos mandas el pedido por{" "}
                <span className="font-bold text-foreground">WhatsApp</span>, sin formularios
              </p>
            </div>
          </div>
        </section>

        {/* Envíos */}
        <section className="mt-10 rounded-2xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">¿Cuándo las tienes en la mano?</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              📍 <span className="font-bold text-foreground">Medellín y Área Metropolitana:</span> el
              envío va por nuestra cuenta y recibes al siguiente día hábil.
            </li>
            <li>
              🇨🇴 <span className="font-bold text-foreground">Resto del país:</span> te enviamos por
              transportadora y el tiempo depende de tu ciudad.
            </li>
            <li>
              🚚 <span className="font-bold text-foreground">Desde 2 sets:</span> el envío al resto
              del país te cuesta $9.900 en total, lleves los que lleves.
            </li>
            <li>
              💬 ¿Te quedó alguna duda?{" "}
              <EnlaceWhatsApp
                texto="Escríbenos al WhatsApp 350 371 2704"
                mensaje="¡Hola! Tengo una duda sobre el envío 🚚"
              />
              .
            </li>
          </ul>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mt-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Lo que más nos preguntan 💬
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              ¿Te quedó otra duda por ahí?{" "}
              <EnlaceWhatsApp
                texto="escríbenos al WhatsApp 350 371 2704"
                mensaje="¡Hola! Tengo una duda sobre las uñas press on 💬"
              />{" "}
              y te respondemos.
            </p>
          </div>
          <div className="mt-6 rounded-3xl border border-border bg-card px-5 shadow-sm sm:px-6">
            {PREGUNTAS.map((q) => (
              <details key={q.p} className="faq group border-b border-border last:border-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-[15px] font-bold text-foreground">
                  {q.p}
                  <span
                    className="faq-mas grid size-6 shrink-0 place-items-center rounded-full bg-muted text-base font-bold text-primary"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{q.r}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-14 border-t border-border bg-card py-8 text-center text-xs text-muted-foreground">
        <p className="font-display text-base font-bold text-primary">Astudillo Nails</p>
        <p className="mt-2">Envíos a toda Colombia · WhatsApp 350 371 2704</p>
        <p className="mt-1">© 2026 Astudillo Nails</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">Kit Astudillo Nails</p>
            <p className="text-xs text-muted-foreground">
              <span className="font-bold text-sale">$49.900</span> · Set de 10 uñas
            </p>
          </div>
          <CtaCatalogo texto="Ver catálogo · $49.900" className="flex-1" />
          <a
            href={enlaceWhatsApp(MSG_PEDIDO)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ya sé cuál quiero, escribir por WhatsApp"
            className="grid size-12 shrink-0 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition hover:brightness-95"
          >
            <IconoWhatsApp />
          </a>
        </div>
      </div>
    </div>
  );
}
