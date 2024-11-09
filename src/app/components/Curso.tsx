import React from "react";

const Curso = ({curso} : {curso: {
    nombre: string,
    duracion: string,
    objetivo: string,
    dirigido: string,
    temario: string[]
}}) => {
  return (
    <div className="bg-slate-900 bg-opacity-70 p-5">
        <h2 className="font-montserrat text-4xl font-bold">{curso.nombre}</h2>
        <p className="font-montserrat text-xs">Duración: {curso.duracion}</p>
        <h3 className="font-montserrat text-2xl font-bold py-5">Objetivo</h3>
        <p className="font-montserrat">{curso.objetivo}</p>
        <h3 className="font-montserrat text-2xl font-bold py-5">Dirigido a</h3>
        <p className="font-montserrat">{curso.dirigido}</p>
        <h3 className="font-montserrat text-2xl font-bold py-5">Temario</h3>
        <ul className="font-montserrat list-disc px-10 text-justify">
        {curso.temario.map((tema: string, index: number) => (
            <li key={index}>{tema}</li>
        ))}
        </ul>
    </div>
  );
};

export default Curso;
