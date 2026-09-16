import modeloAntojo from "@/assets/modelo-antojo.png.asset.json";
import modeloLatido from "@/assets/modelo-latido.png.asset.json";
import modeloFlechazo from "@/assets/modelo-flechazo.png.asset.json";
import modeloChispa from "@/assets/modelo-chispa.png.asset.json";
import modeloCacheton from "@/assets/modelo-cacheton.png.asset.json";
import disenoCareyDorado from "@/assets/diseno-carey-dorado.png.asset.json";
import disenoMentaBrillante from "@/assets/diseno-menta-brillante.png.asset.json";
import disenoPerlaFrancesa from "@/assets/diseno-perla-francesa.png.asset.json";

export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  /** Foto del set. Si está vacía, la tarjeta muestra el color como marcador. */
  img: string;
  /** Color aproximado del diseño, para el marcador mientras no hay foto. */
  color: string;
  coleccion: string;
  /** Subgrupo dentro de la colección (solo lo usa Mood). */
  grupo?: string;
  descripcion?: string;
};

export type Coleccion = {
  slug: string;
  emoji: string;
  nombre: string;
  lema: string;
  texto: string;
  ideal: string;
  etiqueta?: string;
  /** Orden de los subgrupos. Si está vacío, la colección va en una sola fila. */
  grupos?: string[];
};

export const PRECIO_CATALOGO = 49900;
export const PRECIO_PERSONALIZADO = 59900;

export const colecciones: Coleccion[] = [
  {
    slug: "san-valentin",
    emoji: "💘",
    nombre: "San Valentín",
    lema: "Edición limitada",
    texto: "Perfectas para tu Amor y Amistad. Cuando se acaben, no vuelven.",
    ideal: "Para el detalle, para la cita o para quererte tú",
    etiqueta: "Edición limitada",
  },
  {
    slug: "everyday",
    emoji: "🤍",
    nombre: "Everyday",
    lema: "Las de todos los días",
    texto: "Tu uña, pero mejor. Limpias, discretas y siempre bien puestas.",
    ideal: "Para el día a día: clase, oficina, todo",
    etiqueta: "Colección permanente",
  },
  {
    slug: "coquette",
    emoji: "🎀",
    nombre: "Coquette",
    lema: "Cute, pero no infantil",
    texto: "Femeninas, con un detalle sorpresa. Cute, sin pasarse.",
    ideal: "Para cuando las uñas son parte del outfit",
  },
  {
    slug: "after-dark",
    emoji: "✨",
    nombre: "After Dark",
    lema: "Llegué a llamar la atención",
    texto: "Cat-eye, chrome y metálicos. Para llegar y que se note.",
    ideal: "Para salidas, fiestas, conciertos y cenas",
  },
  {
    slug: "play",
    emoji: "🍒",
    nombre: "Play",
    lema: "Mis uñas tienen personalidad",
    texto: "Frutitas, flores y estrellitas. Uñas con personalidad.",
    ideal: "Para las que quieren uñas fotografiables",
  },
  {
    slug: "mood",
    emoji: "🌿",
    nombre: "Mood",
    lema: "Según cómo me quiero sentir",
    texto: "Escoge por cómo te quieres sentir hoy, no por la ocasión.",
    ideal: "Tres ambientes: Cozy, Fresh e Intense",
    etiqueta: "Tres ambientes",
    grupos: ["☕ Cozy", "🌊 Fresh", "🍷 Intense"],
  },
];

const set = (
  id: string,
  nombre: string,
  color: string,
  coleccion: string,
  extra: Partial<Producto> = {},
): Producto => ({
  id,
  nombre,
  precio: PRECIO_CATALOGO,
  img: "",
  color,
  coleccion,
  ...extra,
});

export const productos: Producto[] = [
  // 💘 San Valentín — edición limitada
  set("antojo", "Antojo", "#f3c3d1", "San Valentín", {
    img: modeloAntojo.url,
    descripcion: "Rosado con corazones, coqueto y dulce.",
  }),
  set("latido", "Latido", "#f6e7e9", "San Valentín", {
    img: modeloLatido.url,
    descripcion: "Blanco limpio con corazoncitos rojos.",
  }),
  set("flechazo", "Flechazo", "#efb3c2", "San Valentín", {
    img: modeloFlechazo.url,
    descripcion: "Rosado con líneas rojas, fino y elegante.",
  }),
  set("chispa", "Chispa", "#e98ea4", "San Valentín", {
    img: modeloChispa.url,
    descripcion: "Corazones grandes para robarte las miradas.",
  }),
  set("cacheton", "Cachetón", "#f7dce2", "San Valentín", {
    img: modeloCacheton.url,
    descripcion: "Francesita blanca con corazones rojos.",
  }),

  // 🤍 Everyday — permanente
  set("milky-white", "Milky White", "#f4efe9", "Everyday"),
  set("baby-boomer", "Baby Boomer", "#f0dcd8", "Everyday"),
  set("baby-pink", "Baby Pink", "#f3ccd8", "Everyday"),
  set("glazed-pearl", "Glazed Pearl", "#e8dfe6", "Everyday", {
    img: disenoPerlaFrancesa.url,
  }),
  set("micro-french", "Micro French", "#efe2da", "Everyday"),
  set("french-clasica", "French Clásica", "#f0e4dd", "Everyday"),

  // 🎀 Coquette
  set("monitos", "Moñitos", "#f5ccd8", "Coquette"),
  set("corazones", "Corazones", "#f2b9c7", "Coquette"),
  set("perlitas", "Perlitas", "#f0e0e6", "Coquette"),
  set("rosado-rojo", "Rosado + Rojo", "#e79ba9", "Coquette"),
  set("french-rosada", "French Rosada", "#f6d5de", "Coquette"),
  set("mini-flores", "Mini Flores", "#f7dbe3", "Coquette"),
  set("detalle-3d", "Detalle 3D", "#eec9d5", "Coquette"),
  set("jelly-pink", "Jelly Pink", "#f0a8bd", "Coquette"),

  // ✨ After Dark
  set("cat-eye", "Cat-Eye", "#3b2f46", "After Dark"),
  set("chrome", "Chrome", "#c9c6cc", "After Dark"),
  set("burgundy", "Burgundy", "#6e1f2e", "After Dark"),
  set("negro-glossy", "Negro Glossy", "#20191c", "After Dark"),
  set("french-metalica", "French Metálica", "#d8cdb9", "After Dark"),
  set("gold-details", "Gold Details", "#cfa84e", "After Dark"),
  set("velvet", "Velvet", "#5a3346", "After Dark"),

  // 🍒 Play
  set("cerezas", "Cerezas", "#e05a63", "Play"),
  set("margaritas", "Margaritas", "#bcd8ea", "Play"),
  set("estrellitas", "Estrellitas", "#cfe0f2", "Play"),
  set("caritas", "Caritas", "#f6d37a", "Play"),
  set("animal-print", "Animal Print", "#c08c4a", "Play", {
    img: disenoCareyDorado.url,
  }),
  set("dots", "Dots", "#f2c8d2", "Play"),
  set("frutitas", "Frutitas", "#f0a35c", "Play"),
  set("french-colores", "French de Colores", "#9fd2c4", "Play"),
  set("mix-match", "Mix & Match", "#dcb8d8", "Play"),

  // 🌿 Mood
  set("chocolate", "Chocolate", "#6b4430", "Mood", { grupo: "☕ Cozy" }),
  set("mocha", "Mocha", "#a5806a", "Mood", { grupo: "☕ Cozy" }),
  set("terracota", "Terracota", "#c06a4c", "Mood", { grupo: "☕ Cozy" }),
  set("caramelo", "Caramelo", "#d19a5e", "Mood", { grupo: "☕ Cozy" }),
  set("azul-hielo", "Azul Hielo", "#c5dcea", "Mood", { grupo: "🌊 Fresh" }),
  set("pistacho", "Verde Pistacho", "#bcd3a8", "Mood", {
    grupo: "🌊 Fresh",
    img: disenoMentaBrillante.url,
  }),
  set("milky", "Milky", "#f2ece6", "Mood", { grupo: "🌊 Fresh" }),
  set("perlado", "Perlado", "#e4e0e8", "Mood", { grupo: "🌊 Fresh" }),
  set("vino", "Vino", "#5f1c2b", "Mood", { grupo: "🍷 Intense" }),
];

export const productosDe = (coleccion: string, grupo?: string) =>
  productos.filter(
    (p) => p.coleccion === coleccion && (grupo ? p.grupo === grupo : true),
  );

export const formatoCOP = (valor: number) =>
  "$" + valor.toLocaleString("es-CO", { maximumFractionDigits: 0 });
