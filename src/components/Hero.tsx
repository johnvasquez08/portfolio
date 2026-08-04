import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const FICHA: [string, string][] = [
  ["Modelo", "JV — Mecatrónico / Dev"],
  ["Ubicación", "Barranquilla, CO"],
  ["Stack", "React · Python · Visión"],
  ["Foco", "IA, robótica, automatización"],
  ["Idiomas", "Español (nativo), Inglés (B2)"],
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" className="bg-circuit text-paper">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber mb-5">
            Ingeniero Mecatrónico · Desarrollador
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] mb-6">
            John Vasquez
          </h1>
          <p className="font-body text-paper/80 text-lg max-w-md leading-relaxed mb-8">
            Construyo software, visión artificial y automatización.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("proyectos")}
              className="font-body text-sm font-medium bg-amber text-ink px-5 py-3 hover:bg-amberLight transition-colors"
            >
              Ver proyectos
            </button>
            <a
              href="/CV_John_Vasquez.pdf"
              download
              className="font-body text-sm font-medium border border-paper/40 px-5 py-3 flex items-center gap-2 hover:border-paper transition-colors"
            >
              <ArrowDownTrayIcon className="size-4" /> Descargar CV
            </a>
          </div>
        </div>

        <div className="bg-paper text-ink p-6 border border-paper/20 font-mono text-[13px]">
          <div className="flex justify-between border-b border-line pb-3 mb-3">
            <span className="tracking-[0.15em] uppercase text-circuit">Ficha técnica</span>
            <span className="text-ink/50">Rev. 2026</span>
          </div>
          {FICHA.map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-line last:border-none gap-4">
              <span className="text-ink/50 whitespace-nowrap">{k}</span>
              <span className="text-right">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
