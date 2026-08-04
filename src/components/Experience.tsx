import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { experiencia } from "../db/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="max-w-6xl mx-auto px-6 py-20">
      <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-circuit flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-circuit" /> 03 — Experiencia
      </div>
      <div className="space-y-8">
        {experiencia.map((e) => (
          <div key={e.empresa} className="grid md:grid-cols-[220px_1fr] gap-6 border-t border-line pt-6">
            <div className="font-mono text-[12px] text-ink/60">
              <div className="flex items-center gap-2 text-circuit mb-1">
                <BriefcaseIcon className="size-3.5" /> {e.periodo}
              </div>
              {e.modalidad}
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl mb-1 text-ink">{e.rol}</h3>
              <p className="font-body text-ink/60 mb-4">{e.empresa}</p>
              <ul className="space-y-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="font-body text-sm text-ink/75 flex gap-3">
                    <span className="text-amber mt-1">▪</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="border-t border-dashed border-line pt-6 font-body text-sm text-ink/40 italic">
          Más experiencia en camino — esta sección se irá actualizando.
        </div>
      </div>
    </section>
  );
}
