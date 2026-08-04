import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { SiGithub } from "react-icons/si";
import { proyectos } from "../db/projects";
import { proyectosIA } from "../db/aiProjects";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-paperAlt border-y border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-circuit flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-circuit" /> 04 — Proyectos
        </div>

        <h2 className="font-display font-semibold text-2xl mb-2 text-ink">Desarrollo web</h2>
        <p className="font-body text-sm text-ink/50 mb-8">
          Sigo construyendo este catálogo — nuevos proyectos se irán sumando.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {proyectos.map((p) => (
            <div key={p.id} className="bg-paper border border-line p-5 flex flex-col">
              <div className="w-9 h-9 flex items-center justify-center bg-circuit text-paper mb-4">
                <CodeBracketIcon className="size-4" />
              </div>
              <h3 className="font-display font-semibold mb-2 text-ink">{p.nombre}</h3>
              <p className="font-body text-sm text-ink/70 mb-4 flex-1">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tecnologias.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-1 border border-line text-ink">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 font-body text-sm text-ink">
                <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-circuit">
                  <ArrowTopRightOnSquareIcon className="size-4" /> Ver sitio
                </a>
                <a href={p.repositorio} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-circuit">
                  <SiGithub className="text-base" /> Código
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-display font-semibold text-2xl mb-2 text-ink">Ingeniería, IA y robótica</h2>
        <p className="font-body text-sm text-ink/50 mb-8">
          Proyectos aplicados que combinan visión artificial, robótica y sistemas embebidos.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {proyectosIA.map((p) => (
            <div key={p.id} className="bg-paper border border-line p-6">
              <div className="w-9 h-9 flex items-center justify-center bg-amber text-ink mb-4">
                <CpuChipIcon className="size-4" />
              </div>
              <h3 className="font-display font-semibold mb-2 text-ink">{p.nombre}</h3>
              <p className="font-body text-sm text-ink/70 mb-4">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {p.tecnologias.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-1 border border-line text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
