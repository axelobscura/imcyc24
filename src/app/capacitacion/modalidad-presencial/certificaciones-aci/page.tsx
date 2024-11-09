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
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE RESISTENCIA AL CONCRETO ENDURECIDO",
    "duracion": "8 Horas",
    "objetivo": "Conocer el procedimiento normalizado de las cuatro pruebas que se realizan al concreto endurecido con base en ASTM International (American SocietyforTesting and Materials).",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal que se dedica a la evaluación de la calidad del concreto endurecido",
    "temario": [
      "Método de prueba estándar para la resistencia a la compresión de especímenes cilíndricos de concreto. ASTM C39",
      "Método de prueba estándar para la resistencia a la flexión del concreto (empleando una viga simple con cargas en los tercios medios). ASTM C78",
      "Práctica estándar para el cabeceo de especímenes cilíndricos de concreto. ASTM C617",
      "Práctica estándar para el uso de cubiertas no unidas para la determinación de la resistencia a la compresión de cilindros de concreto endurecidos. ASTM C1231"
    ]
  },
  {
    "nombre": "TÉCNICO Y ACABADOR DE SUPERFICIES PLANAS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar las bases para la certificación de acabadores de concreto experimentados, corregir los problemas relacionados con prácticas de campo inapropiadas, elevar la calidad de la construcción con concreto y preparar a la industria para una futura certificación obligatoria.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal de gobierno dedicados a la industria de la construcción de pisos de concreto.",
    "temario": [
      "1. Introducción",
      "2. Tecnología básica del concreto",
      "2.1 Componentes del concreto y el proceso de endurecimiento",
      "2.2 Factores que afectan las propiedades del concreto",
      "2.3 Relación agua/cemento",
      "2.4 Seguridad",
      "3. Materiales y proporcionamiento de mezclas de concreto",
      "3.1 Cementos Pórtland",
      "3.2 Agregados",
      "3.3 Agua de mezclado",
      "3.4 Aditivos",
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
                <Link href="/capacitacion/modalidad-presencial/certificaciones-aci" className="font-montserrat btn bg-slate-500 hover:bg-slate-500 p-3 text-left text-2xl">
                  CERTIFICACIONES ACI
                </Link>
                <h3 onClick={() => setCurso("Técnico para pruebas al concreto en la obra-Grado I")} className={`font-montserrat btn ${useCurso === "Técnico para pruebas al concreto en la obra-Grado I" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                  Técnico para pruebas al concreto en la obra-Grado I
                </h3>
                <h3 onClick={() => setCurso("Técnico en pruebas de resistencia al concreto endurecido")} className={`font-montserrat btn ${useCurso === "Técnico en pruebas de resistencia al concreto endurecido" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                  Técnico en pruebas de resistencia al concreto endurecido
                </h3>
                <h3 onClick={() => setCurso("Técnico y acabador de superficies planas de concreto")} className={`font-montserrat btn ${useCurso === "Técnico y acabador de superficies planas de concreto" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
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
              {useCurso === "Técnico para pruebas al concreto en la obra-Grado I" && <Curso curso={cursos[0]} />}
              {useCurso === "Técnico en pruebas de resistencia al concreto endurecido" && <Curso curso={cursos[1]} />}
              {useCurso === "Técnico y acabador de superficies planas de concreto" && <Curso curso={cursos[2]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
