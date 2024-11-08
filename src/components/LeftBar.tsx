import { BookOpenIcon } from "@heroicons/react/24/solid"
import { proyectos } from "../db/projects"
import { Proyectos } from "../types"

export default function LeftBar() {

  return (
    <>
        <div className="h-full mx-1 bg-stone-950 w-1/4 rounded-lg flex flex-col items-center space-y-2 ">
          <span className="flex p-3 items-center text-white font-bold w-full border-b-2 gap-3"><BookOpenIcon className="size-8"/> Mis proyectos</span>
          {proyectos.map((proyecto: Proyectos) => {
            return (
              <div key={proyecto.id} className="mx-auto bg-stone-800 flex hover:bg-stone-900 h-40 rounded-lg w-72 p-2">
                <img className="w-1/2 h-full object-cover rounded-lg" src={`../public/${proyecto.imagen}.png`} alt="lazy" />
                <div className="w-full text-center">
                  <p className="text-slate-400 font-semibold">{proyecto.nombre}</p>
                  <p className="text-slate-300 font-medium">{proyecto.descripcion}</p>
                </div>
              </div>
            )
          })}
          
        </div>
    
        


    </>
    
        
  )
}
