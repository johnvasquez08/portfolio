import { useState } from "react";
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NAV = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "educacion", label: "Educación" },
  { id: "contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("inicio")} className="font-display font-bold text-lg tracking-tight text-ink">
          JV<span className="text-amber">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-7 font-body text-sm text-ink">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-circuit transition-colors">
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/CV_John_Vasquez.pdf"
            download
            className="hidden sm:flex items-center gap-2 bg-circuit text-paper font-body text-sm font-medium px-4 py-2 hover:bg-circuitLight transition-colors"
          >
            <ArrowDownTrayIcon className="size-4" /> Descargar CV
          </a>
          <button className="md:hidden text-ink" onClick={() => setMenuOpen((v) => !v)} aria-label="Menú">
            {menuOpen ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 font-body text-sm text-ink">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left">
              {n.label}
            </button>
          ))}
          <a href="/CV_John_Vasquez.pdf" download className="flex items-center gap-2 bg-circuit text-paper px-4 py-2 w-fit">
            <ArrowDownTrayIcon className="size-4" /> Descargar CV
          </a>
        </div>
      )}
    </header>
  );
}
