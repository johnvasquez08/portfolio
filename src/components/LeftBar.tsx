import { BookOpenIcon } from "@heroicons/react/24/solid";
import { proyectos } from "../db/projects";
import { Proyectos, TecnologiasIconos } from "../types";
import { IoLogoJavascript, IoLogoCss3, IoIosLink } from "react-icons/io";
import { SiTypescript, SiTailwindcss, SiReact, SiGithub } from "react-icons/si";

const tecnologiaIconos: TecnologiasIconos = {
  javascript: <IoLogoJavascript  className="text-yellow-500 text-2xl" />,
  css3: <IoLogoCss3 className="text-blue-500 text-2xl" />,
  tailwind: <SiTailwindcss className="text-blue-400 text-2xl" />,
  react: <SiReact className="text-blue-500 text-2xl" />,
  typescript: <SiTypescript className="text-blue-500 text-2xl" />
};

export default function LeftBar() {
  return (
    <div className="h-full mx-1 bg-stone-950 lg:w-1/4 md:w-1/2 sm:w-full rounded-lg flex flex-col items-center space-y-2 p-3">
      <span className="flex p-3 items-center text-white font-bold w-full border-b-2 gap-3">
        <BookOpenIcon className="h-6 w-6" /> Mis proyectos
      </span>
      <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
        {proyectos.map((proyecto: Proyectos) => (
          <div key={proyecto.id} className="mx-auto object-fill overflow-hidden hover:h-96 transition-all duration-700 bg-stone-800 flex hover:bg-stone-900 h-40 rounded-lg w-full p-2">
            <a className="w-full h-full" href={proyecto.link} target="blank">
              <img className="w-full object-cover h-full rounded-lg" src={`../public/${proyecto.imagen}.png`} alt="project" />
            </a>
            <div className="w-full text-center">
              <p className="text-slate-400 font-semibold">{proyecto.nombre}</p>
              <p className="text-slate-300 font-semibold text-xs">{proyecto.descripcion}</p>
              <div className="flex justify-center space-x-2 mt-2">
              {proyecto.tecnologias.map((tecnologia, index) => (
                    tecnologiaIconos[tecnologia] ? (
                    <span key={`${proyecto.id}-${index}`}>
                      {tecnologiaIconos[tecnologia]}
                    </span>
                  ) : null ))}
              </div>
              <div className="flex justify-center space-x-2 mt-2">
                <a href={proyecto.repositorio} target="blank">
                  <button className="bg-stone-900 text-white rounded-full p-1 hover:bg-stone-700">
                    <SiGithub className="text-white text-2xl" />
                  </button>
                </a>
                <a href={proyecto.link} target="blank">
                  <button className="bg-stone-900 text-white rounded-full p-1 hover:bg-stone-700">
                    <IoIosLink className="text-white text-2xl" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
