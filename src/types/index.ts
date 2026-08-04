export type Proyecto = {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  link: string;
  repositorio: string;
};

export type ProyectoIA = {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
};

export type Experiencia = {
  rol: string;
  empresa: string;
  periodo: string;
  modalidad: string;
  bullets: string[];
};

export type Educacion = {
  titulo: string;
  institucion: string;
  periodo: string;
};

export type GrupoHabilidades = {
  grupo: string;
  items: string[];
};

export type TecnologiasIconos = {
  [key: string]: JSX.Element;
};
