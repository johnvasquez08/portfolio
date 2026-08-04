import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { educacion } from "../db/experience";

export default function Education() {
  return (
    <section id="educacion" className="max-w-6xl mx-auto px-6 py-20">
      <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-circuit flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-circuit" /> 05 — Educación
      </div>
      <div className="divide-y divide-line border-t border-b border-line">
        {educacion.map((e) => (
          <div key={e.titulo} className="py-5 flex items-start gap-4">
            <AcademicCapIcon className="size-5 text-circuit mt-1 shrink-0" />
            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-1">
              <div>
                <h3 className="font-display font-semibold text-base text-ink">{e.titulo}</h3>
                <p className="font-body text-sm text-ink/60">{e.institucion}</p>
              </div>
              <span className="font-mono text-xs text-ink/50">{e.periodo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
