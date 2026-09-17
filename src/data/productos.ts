import antojo from "@/assets/antojo.webp";
import latido from "@/assets/latido.webp";
import flechazo from "@/assets/flechazo.webp";
import chispa from "@/assets/chispa.webp";
import cacheton from "@/assets/cacheton.webp";
import milkyWhite from "@/assets/milky-white.webp";
import babyBoomer from "@/assets/baby-boomer.webp";
import babyPink from "@/assets/baby-pink.webp";
import glazedPearl from "@/assets/glazed-pearl.webp";
import microFrench from "@/assets/micro-french.webp";
import frenchClasica from "@/assets/french-clasica.webp";
import monitos from "@/assets/monitos.webp";
import corazones from "@/assets/corazones.webp";
import perlitas from "@/assets/perlitas.webp";
import rosadoRojo from "@/assets/rosado-rojo.webp";
import frenchRosada from "@/assets/french-rosada.webp";
import miniFlores from "@/assets/mini-flores.webp";
import tresD from "@/assets/tres-d.webp";
import jellyPink from "@/assets/jelly-pink.webp";
import catEye from "@/assets/cat-eye.webp";
import chrome from "@/assets/chrome.webp";
import burgundy from "@/assets/burgundy.webp";
import negroGlossy from "@/assets/negro-glossy.webp";
import goldDetails from "@/assets/gold-details.webp";
import velvet from "@/assets/velvet.webp";
import margaritas from "@/assets/margaritas.webp";
import estrellitas from "@/assets/estrellitas.webp";
import animalPrint from "@/assets/animal-print.webp";
import dots from "@/assets/dots.webp";
import frutitas from "@/assets/frutitas.webp";
import frenchColores from "@/assets/french-colores.webp";
import mixMatch from "@/assets/mix-match.webp";
import chocolate from "@/assets/chocolate.webp";
import terracota from "@/assets/terracota.webp";
import caramelo from "@/assets/caramelo.webp";
import azulHielo from "@/assets/azul-hielo.webp";
import milky from "@/assets/milky.webp";
import perlado from "@/assets/perlado.webp";
import pistacho from "@/assets/pistacho.webp";

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
    lema: "Pintadas para la temporada",
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
    ideal: "Dos ambientes: Cozy y Fresh",
    etiqueta: "Dos ambientes",
    grupos: ["☕ Cozy", "🌊 Fresh"],
  },
];

const set = (
  id: string,
  nombre: string,
  color: string,
  coleccion: string,
  img: string,
  grupo?: string,
): Producto => ({
  id,
  nombre,
  precio: PRECIO_CATALOGO,
  img,
  color,
  coleccion,
  ...(grupo ? { grupo } : {}),
});

export const productos: Producto[] = [
  // 💘 San Valentín — edición limitada
  set("antojo", "Antojo", "#f3c3d1", "San Valentín", antojo),
  set("latido", "Latido", "#f6e7e9", "San Valentín", latido),
  set("flechazo", "Flechazo", "#efb3c2", "San Valentín", flechazo),
  set("chispa", "Chispa", "#e98ea4", "San Valentín", chispa),
  set("cacheton", "Cachetón", "#f7dce2", "San Valentín", cacheton),

  // 🤍 Everyday — permanente
  set("milky-white", "Milky White", "#f4efe9", "Everyday", milkyWhite),
  set("baby-boomer", "Baby Boomer", "#f0dcd8", "Everyday", babyBoomer),
  set("baby-pink", "Baby Pink", "#f3ccd8", "Everyday", babyPink),
  set("glazed-pearl", "Glazed Pearl", "#e8dfe6", "Everyday", glazedPearl),
  set("micro-french", "Micro French", "#efe2da", "Everyday", microFrench),
  set("french-clasica", "French Clásica", "#f0e4dd", "Everyday", frenchClasica),

  // 🎀 Coquette
  set("monitos", "Moñitos", "#f5ccd8", "Coquette", monitos),
  set("corazones", "Corazones", "#f2b9c7", "Coquette", corazones),
  set("perlitas", "Perlitas", "#f0e0e6", "Coquette", perlitas),
  set("rosado-rojo", "Rosado + Rojo", "#e79ba9", "Coquette", rosadoRojo),
  set("french-rosada", "French Rosada", "#f6d5de", "Coquette", frenchRosada),
  set("mini-flores", "Mini Flores", "#f5e3a8", "Coquette", miniFlores),
  set("tres-d", "Detalle 3D", "#f2e2b0", "Coquette", tresD),
  set("jelly-pink", "Jelly Pink", "#f0a8bd", "Coquette", jellyPink),

  // ✨ After Dark
  set("cat-eye", "Cat-Eye", "#24454f", "After Dark", catEye),
  set("chrome", "Chrome", "#e8ccd4", "After Dark", chrome),
  set("burgundy", "Burgundy", "#6e1f2e", "After Dark", burgundy),
  set("negro-glossy", "Negro Glossy", "#20191c", "After Dark", negroGlossy),
  set("gold-details", "Gold Details", "#efe0cd", "After Dark", goldDetails),
  set("velvet", "Velvet", "#6b2b34", "After Dark", velvet),

  // 🍒 Play
  set("margaritas", "Margaritas", "#f0d5da", "Play", margaritas),
  set("estrellitas", "Estrellitas", "#cfe0f2", "Play", estrellitas),
  set("animal-print", "Animal Print", "#e2e2e2", "Play", animalPrint),
  set("dots", "Dots", "#1f3a68", "Play", dots),
  set("frutitas", "Frutitas", "#9ecdf0", "Play", frutitas),
  set("french-colores", "French de Colores", "#f3ddd4", "Play", frenchColores),
  set("mix-match", "Mix & Match", "#f2e08a", "Play", mixMatch),

  // 🌿 Mood
  set("chocolate", "Chocolate", "#6b4430", "Mood", chocolate, "☕ Cozy"),
  set("terracota", "Terracota", "#8a4636", "Mood", terracota, "☕ Cozy"),
  set("caramelo", "Caramelo", "#b0917f", "Mood", caramelo, "☕ Cozy"),
  set("azul-hielo", "Azul Hielo", "#aed4ea", "Mood", azulHielo, "🌊 Fresh"),
  set("pistacho", "Verde Pistacho", "#bcd3a8", "Mood", pistacho, "🌊 Fresh"),
  set("milky", "Milky", "#fbfaf7", "Mood", milky, "🌊 Fresh"),
  set("perlado", "Perlado", "#f0dfe2", "Mood", perlado, "🌊 Fresh"),
];

/** El diseño a la medida no vive en ninguna colección. */
export const personalizado: Producto = {
  id: "personalizado",
  nombre: "Diseño personalizado",
  precio: PRECIO_PERSONALIZADO,
  img: "",
  color: "#e9d7e4",
  coleccion: "",
};

export const productosDe = (coleccion: string, grupo?: string) =>
  productos.filter(
    (p) => p.coleccion === coleccion && (grupo ? p.grupo === grupo : true),
  );

export const formatoCOP = (valor: number) =>
  "$" + valor.toLocaleString("es-CO", { maximumFractionDigits: 0 });
