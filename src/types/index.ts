export type Proyectos = {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    link: string;
    tecnologias: string[];
}

export type TecnologiasIconos = {
    [key: string]: JSX.Element;
}