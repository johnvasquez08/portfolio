import { Proyecto } from "../types";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "NikeLA",
    descripcion:
      "Tienda virtual inspirada en Nike, con catálogo de productos y diseño responsive.",
    tecnologias: ["react", "css3", "javascript"],
    link: "https://eclectic-kitsune-6e4140.netlify.app/",
    repositorio: "https://github.com/johnvasquez08/nikela",
  },
  {
    id: 2,
    nombre: "Calculadora de propinas y consumo",
    descripcion:
      "Herramienta para dividir cuentas y calcular propinas rápidamente.",
    tecnologias: ["react", "tailwind", "typescript"],
    link: "https://statuesque-stroopwafel-79de5f.netlify.app/",
    repositorio: "https://github.com/johnvasquez08/calcproyco",
  },
  {
    id: 3,
    nombre: "Contador de calorías",
    descripcion:
      "App para registrar comidas y llevar el control diario de calorías.",
    tecnologias: ["react", "tailwind", "typescript"],
    link: "https://enchanting-kringle-e14115.netlify.app/",
    repositorio: "https://github.com/johnvasquez08/calorietracker",
  },
];
