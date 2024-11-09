"use client"
import { useState } from "react";
import Link from "next/link";
import Curso from "@/app/components/Curso";

const cursos = [
  {
    "nombre": "TÉCNICO PARA PRUEBAS AL CONCRETO EN LA OBRA-GRADO I",
    "duracion": "8 Horas",
    "objetivo": "Certificar que el aspirante posee los conocimientos y habilidades para ejecutar y registrar correctamente los resultados de las pruebas de campo básicas con base a la norma ASTM en la mezcla de concreto fresco.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal de gobierno, proveedores de materiales y profesionales de la industria del concreto.",
    "temario": [
      "Método de ensaye estándar para la medición de temperatura del concreto recién mezclado con cemento hidráulico. ASTM C 1064",
      "Práctica estándar para el muestreo del concreto recién mezclado. ASTM C172.",
      "Método de ensaye estándar para la determinación del revenimiento en el concreto a base de cemento hidráulico. ASTM C143.",
      "Método de ensaye estándar para determinar el peso unitario, volumen producido y contenido de aire del concreto por medio del método gravimétrico. ASTM C138.",
      "Método de ensaye estándar, para determinar por el método de presión, el contenido de aire del concreto recién mezclado. ASTM C231.",
      "Método de ensaye estándar para determinar por el método volumétrico el contenido de aire del concreto recién mezclado. ASTM C173.",
      "Práctica estándar para la elaboración y curado en campo de especímenes de concreto para su ensaye. ASTM C31"
    ]
  }
];

export default function CertificacionesAci() {
  const [useCurso, setCurso] = useState("Técnico para pruebas al concreto en la obra-Grado I");
  return (
    <div>
      <div className="grid grid-rows-[1fr] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/capacitacion.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] z-0 text-white">
          <h1 className="font-montserrat text-2xl uppercase mt-10 pt-10 pl-5 font-light">
            Modalidad Presencial
          </h1>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <Link href="/capacitacion/modalidad-presencial/certificaciones-aci" className="font-montserrat btn bg-slate-500 hover:bg-slate-500 p-3 text-left text-md">
                  CERTIFICACIONES ACI
                </Link>
                <h3 onClick={() => setCurso("Técnico para pruebas al concreto en la obra-Grado I")} className={`font-montserrat btn ${useCurso === "Técnico para pruebas al concreto en la obra-Grado I" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer`}>
                  Técnico para pruebas al concreto en la obra-Grado I
                </h3>
                <h3 onClick={() => setCurso("Técnico en pruebas de resistencia al concreto endurecido")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Técnico en pruebas de resistencia al concreto endurecido
                </h3>
                <h3 onClick={() => setCurso("Técnico y acabador de superficies planas de concreto")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Técnico y acabador de superficies planas de concreto
                </h3>
                <h3 onClick={() => setCurso("Técnico en pruebas de agregados")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Técnico en pruebas de agregados
                </h3>
                <h3 onClick={() => setCurso("Supervisor especializado en obras de concreto")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Supervisor especializado en obras de concreto
                </h3>
                <h3 onClick={() => setCurso("Supervisor y técnico de construcciones Tilt-up")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Supervisor y técnico de construcciones Tilt-up
                </h3>
                <h3 onClick={() => setCurso("Técnico laboratorista Nivel II")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Técnico laboratorista Nivel II
                </h3>
                <h3 onClick={() => setCurso("Concreto lanzado")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Concreto lanzado
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "Técnico para pruebas al concreto en la obra-Grado I" && 
                <Curso curso={cursos[0]} />
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
