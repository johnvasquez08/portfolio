export default function About() {
  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-6 py-20">
      <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-circuit flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-circuit" /> 01 — Sobre mí
      </div>
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
        <h2 className="font-display font-semibold text-3xl leading-tight text-ink">
          De la mecatrónica al código: soluciones que integran software e ingeniería.
        </h2>
        <p className="font-body text-ink/75 leading-relaxed">
          Ingeniero Mecatrónico con experiencia práctica en desarrollo de software, inteligencia
          artificial y análisis de datos. He trabajado en desarrollo web, administración de bases
          de datos y automatización de procesos, con proyectos aplicados en visión artificial y
          sistemas embebidos. Me interesa aportar a proyectos de automatización, robótica, visión
          artificial e Industria 4.0, traduciendo requerimientos técnicos en soluciones funcionales
          dentro de equipos multidisciplinarios.
        </p>
      </div>
    </section>
  );
}
