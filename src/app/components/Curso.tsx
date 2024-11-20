import React from "react";
import { CiClock2 } from "react-icons/ci";

const Curso = ({curso} : {curso: {
    nombre: string,
    duracion: string,
    objetivo: string,
    dirigido: string,
    temario?: string[],
    requisitos?: string[]
}}) => {
  return (
    <div className="bg-black text-gray-100 bg-opacity-50 px-10 py-10 border border-gray-700">
        <h2 className="font-montserrat text-4xl font-bold">{curso.nombre}</h2>
        <p className="font-montserrat text-xs flex items-center py-2"><CiClock2 size={"2em"} className="mr-1" /> Duración: {curso.duracion}</p>
        <h3 className="font-montserrat text-2xl font-bold py-5">Objetivo</h3>
        <p className="font-montserrat text-justify">{curso.objetivo}</p>
        <h3 className="font-montserrat text-2xl font-bold py-5">Dirigido a</h3>
        <p className="font-montserrat text-justify">{curso.dirigido}</p>
        {curso.temario && 
        <>
          <h3 className="font-montserrat text-2xl font-bold py-5">Temario</h3>
          <ul className="font-montserrat list-decimal px-10 text-justify">
          {curso.temario.map((tema: string, index: number) => (
              <li key={index}>{tema}</li>
          ))}
          </ul>
        </>
        }
    </div>
  );
};

export default Curso;
