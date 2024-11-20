"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "TECNOLOGÍA DEL CONCRETO",
    "duracion": "120 horas de duración",
    "objetivo": "Conocer los componentes del concreto<br/>Descubrir los factores que influyen en las características físicas del concreto Conocer cuáles son las características deseables de un concreto<br/>Identificar las etapas del proceso de fabricación del concreto que influyen en su calidad<br/>Conocer que es el cemento y como se fabrica<br/>Analizar la composición química del cemento<br/>Clasificar los distintos tipos de cemento<br/>Conocer la normativa Determinar la composición y las características especiales de los cementos puzolánicos<br/>Analizar las propiedades físicas del cemento<br/>Comprender qué tipo de cementos se utilizan en determinadas construcciones.",
    "dirigido": "El curso va dirigido a toda aquella persona interesada en los aspectos del concreto y el cemento. Se incluyen puntos importantes de las normas mexicanas, así como las aplicaciones del concreto. El diplomado se recomienda a todos los profesionales de la industria de la construcción con concreto.",
    "temario": [
      "Módulo 1: FUNDAMENTOS DEL CONCRETO Y CEMENTANTES DEL CONCRETO HIDRÁULICO",
      "Módulo 2: AGREGADOS PARA CONCRETO",
      "Módulo 3: ADITIVOS PARA CONCRETO",
      "Módulo 4: CONCRETO EN ESTADO FRESCO",
      "Módulo 5: CONCRETO EN ESTADO ENDURECIDO",
      "Módulo 6: CONCRETO EN ESTADO ENDURECIDO 2",
      "Módulo 7: DISEÑO DE MEZCLAS DE CONCRETO",
      "Módulo 8: ELABORACIÓN, UTILIZACIÓN E INSPECCIÓN DEL CONCRETO",
      "Módulo 9: CONTROL Y VERIFICACIÓN DE LA CALIDAD DEL CONCRETO"
    ]
  },
  {
    "nombre": "PISOS Y PAVIMENTOS DE CONCRETO",
    "duracion": "120 horas de duración",
    "objetivo": "El participante podrá diseñar, evaluar y reparar pisos y pavimentos de concreto y aplicarlo para realizar evaluación de proyectos de construcción de esta índole",
    "dirigido": "El curso va dirigido a toda aquella persona interesada en los aspectos y conceptos acerca del diseño de pavimentos de concreto, construcción, evaluación y diseño de pisos.",
    "temario": [
      "Módulo 1. Conceptos geotécnicos e hidrológicos para pisos y pavimentos",
      "Módulo 2. Diseño de pavimentos de concreto",
      "Módulo 3. Construcción de pavimentos de concreto",
      "Módulo 4. Evaluación de pavimentos de concreto",
      "Módulo 5. Reparación de pavimentos de concreto",
      "Módulo 6. Diseño de pisos",
      "Módulo 7. Construcción de pisos",
      "Módulo 8. Evaluación de pisos",
      "Módulo 9. Reparación de pisos",
      "Módulo 10. Evaluación socio-económica de proyectos de pisos y pavimentos"
    ]
  }
];

export default function Diplomados() {
  const [useCurso, setCurso] = useState("TECNOLOGÍA DEL CONCRETO");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> DIPLOMADOS IMCYC
          </h1>
          <p className="text-xs pl-5 mb-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("TECNOLOGÍA DEL CONCRETO")} className={`font-montserrat btn ${useCurso === "TECNOLOGÍA DEL CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TECNOLOGÍA DEL CONCRETO
                </h3>
                <h3 onClick={() => setCurso("PISOS Y PAVIMENTOS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "PISOS Y PAVIMENTOS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                PISOS Y PAVIMENTOS DE CONCRETO
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "TECNOLOGÍA DEL CONCRETO" && <Curso curso={cursos[0]} />}
              {useCurso === "PISOS Y PAVIMENTOS DE CONCRETO" && <Curso curso={cursos[1]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
