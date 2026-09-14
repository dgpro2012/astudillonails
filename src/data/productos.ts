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
  img: string;
  coleccion: string;
  descripcion: string;
};

export const PRECIO_CATALOGO = 49900;
export const PRECIO_PERSONALIZADO = 59900;

export const productos: Producto[] = [
  {
    id: "antojo",
    nombre: "Antojo",
    precio: PRECIO_CATALOGO,
    img: modeloAntojo.url,
    coleccion: "San Valentín",
    descripcion: "Rosado con corazones, coqueto y dulce.",
  },
  {
    id: "latido",
    nombre: "Latido",
    precio: PRECIO_CATALOGO,
    img: modeloLatido.url,
    coleccion: "San Valentín",
    descripcion: "Blanco limpio con corazoncitos rojos.",
  },
  {
    id: "flechazo",
    nombre: "Flechazo",
    precio: PRECIO_CATALOGO,
    img: modeloFlechazo.url,
    coleccion: "San Valentín",
    descripcion: "Rosado con líneas rojas, fino y elegante.",
  },
  {
    id: "chispa",
    nombre: "Chispa",
    precio: PRECIO_CATALOGO,
    img: modeloChispa.url,
    coleccion: "San Valentín",
    descripcion: "Corazones grandes para robarte las miradas.",
  },
  {
    id: "cacheton",
    nombre: "Cachetón",
    precio: PRECIO_CATALOGO,
    img: modeloCacheton.url,
    coleccion: "San Valentín",
    descripcion: "Francesita blanca con corazones rojos.",
  },
  {
    id: "carey-dorado",
    nombre: "Carey Dorado",
    precio: PRECIO_CATALOGO,
    img: disenoCareyDorado.url,
    coleccion: "Los más vendidos",
    descripcion: "Animal print en dorado y marrón, puro lujo.",
  },
  {
    id: "menta-brillante",
    nombre: "Menta Brillante",
    precio: PRECIO_CATALOGO,
    img: disenoMentaBrillante.url,
    coleccion: "Los más vendidos",
    descripcion: "Menta sólido con brillo, fresco y de verano.",
  },
  {
    id: "perla-francesa",
    nombre: "Perla Francesa",
    precio: PRECIO_CATALOGO,
    img: disenoPerlaFrancesa.url,
    coleccion: "Los más vendidos",
    descripcion: "Francesa nude con puntillas de perla.",
  },
];

export const formatoCOP = (valor: number) =>
  "$" + valor.toLocaleString("es-CO", { maximumFractionDigits: 0 });
