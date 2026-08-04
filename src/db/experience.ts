import { Experiencia, Educacion, GrupoHabilidades } from "../types";

export const experiencia: Experiencia[] = [
  {
    rol: "Desarrollador de Software Junior",
    empresa: "Identidad México",
    periodo: "Ago 2025 – Dic 2025",
    modalidad: "Remoto",
    bullets: [
      "Construí un chatbot con Rasa, aplicando NLP para clasificación de intenciones y reconocimiento de entidades.",
      "Desarrollé una interfaz en React para integrar y probar el chatbot con usuarios reales.",
      "Analicé datos del proyecto para apoyar decisiones técnicas y dar seguimiento a los avances del equipo.",
      "Elaboré reportes técnicos mensuales de avance para las partes interesadas.",
    ],
  },
];

export const educacion: Educacion[] = [
  {
    titulo: "Diplomado en Ingeniería de Software y Gestión de T.I.",
    institucion: "Universidad Simón Bolívar",
    periodo: "2026",
  },
  {
    titulo: "Ingeniería Mecatrónica",
    institucion: "Universidad Simón Bolívar",
    periodo: "2025",
  },
  {
    titulo: "Técnico en Operaciones Comerciales y Financieras",
    institucion: "SENA",
    periodo: "2020",
  },
];

export const habilidades: GrupoHabilidades[] = [
  { grupo: "Lenguajes", items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C/C++"] },
  { grupo: "Frameworks y librerías", items: ["React", "Node.js", "OpenCV", "PyTorch", "NumPy", "Ultralytics", "Rasa", "Flet"] },
  { grupo: "Bases de datos", items: ["MySQL"] },
  { grupo: "Herramientas de desarrollo", items: ["Git", "GitHub", "VS Code", "XAMPP"] },
  { grupo: "Ingeniería y análisis", items: ["SolidWorks", "TIA Portal", "Power BI", "Excel"] },
  { grupo: "IA y datos", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Detección de objetos"] },
  { grupo: "Automatización", items: ["Automatización industrial", "Sistemas embebidos", "IoT", "PLC", "Robótica"] },
];
