"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "FORMACIÓN DE GERENTE TÉCNICO",
    "duracion": "5 días 40 horas",
    "objetivo": "El participante podrá obtener información completa sobre el concreto y sus componentes, pruebas de calidad y análisis económico sobre la viabilidad de los proyectos, así implementarlo para el desarrollo de los nuevos productos y conocerá las técnicas comerciales para incremento de ventas.",
    "dirigido": "El curso está dirigido a toda aquella persona interesada en la gestión y operación de plantas de concreto, en los aspectos de concreto, cemento y a todos los profesionales de la industria de la construcción.",
    "temario": [
      "El taller consta de 5 Módulos con una duración de 120 h",
      "Tecnología del concreto",
      "Desarrollo de nuevos productos y estrategia comercial",
      "Manejo estadístico e indicadores",
      "Pruebas",
      "Producción de concreto",
      "REALIZACIÓN DE UNA AUDITORÍA"
    ]
  }
];

export default function Talleres() {
  const [useCurso, setCurso] = useState("FORMACIÓN DE GERENTE TÉCNICO");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100 my-20">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> TALLERES IMCYC
          </h1>
          <p className="text-xs pl-5 mb-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("FORMACIÓN DE GERENTE TÉCNICO")} className={`font-montserrat btn ${useCurso === "FORMACIÓN DE GERENTE TÉCNICO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                FORMACIÓN DE GERENTE TÉCNICO
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "FORMACIÓN DE GERENTE TÉCNICO" && <Curso curso={cursos[0]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
