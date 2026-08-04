import { habilidades } from "../db/experience";

export default function Skills() {
  return (
    <section id="habilidades" className="bg-paperAlt border-y border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-circuit flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-circuit" /> 02 — Habilidades técnicas
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {habilidades.map((s) => (
            <div key={s.grupo}>
              <h3 className="font-display font-semibold text-sm mb-3 text-ink">{s.grupo}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="font-mono text-[11px] px-2 py-1 border border-line text-ink">
                    {it}
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
