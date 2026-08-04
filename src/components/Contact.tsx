import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { SiLinkedin } from "react-icons/si";

// TODO: reemplaza "#" por tu URL real de LinkedIn (ej: https://www.linkedin.com/in/tu-usuario)
const LINKEDIN_URL = "#";

export default function Contact() {
  return (
    <section id="contacto" className="bg-circuit text-paper">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber flex items-center gap-2 mb-5">
          06 — Contacto
        </div>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mb-10 max-w-lg">
          ¿Un proyecto en mente? Hablemos.
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <a href="mailto:johndy08011@gmail.com" className="flex items-center gap-3 hover:text-amber transition-colors">
            <EnvelopeIcon className="size-5" /> <span className="font-body text-sm">johndy08011@gmail.com</span>
          </a>
          <a href="tel:+573148317435" className="flex items-center gap-3 hover:text-amber transition-colors">
            <PhoneIcon className="size-5" /> <span className="font-body text-sm">+57 314 831 7435</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPinIcon className="size-5" /> <span className="font-body text-sm">Barranquilla, Colombia</span>
          </div>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-amber transition-colors">
            <SiLinkedin className="text-lg" /> <span className="font-body text-sm">LinkedIn</span>
          </a>
        </div>
        <a
          href="/CV_John_Vasquez.pdf"
          download
          className="inline-flex items-center gap-2 bg-amber text-ink font-body text-sm font-medium px-5 py-3 hover:bg-amberLight transition-colors"
        >
          <ArrowDownTrayIcon className="size-4" /> Descargar CV completo
        </a>
      </div>
      <div className="border-t border-paper/10 py-6 px-6">
        <p className="font-mono text-[11px] text-paper/40 max-w-6xl mx-auto">
          © 2026 John Vasquez — construido con React &amp; Tailwind.
        </p>
      </div>
    </section>
  );
}
