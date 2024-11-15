"use client"
import { useState } from "react";
import Link from "next/link";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "TÉCNICO EN PRUEBAS AL CEMENTO",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar al participante de conocimientos y habilidades para ejecutar las pruebas básicas en pastas de cemento hidráulicas con base a las normas NMX correspondientes.",
    "dirigido": "La certificación está dirigida a técnicos que realizan las pruebas al cemento y verifican la calidad del mismo en laboratorios.",
    "temario": [
      "Determinación de la Consistencia Normal de Cementos Hidráulicos NMX-C-057-ONNCCE-2015.",
      "Determinación de la Expansión en Autoclave (Sanidad) de Cementos Hidráulicos NMX-C-062.",
      "Determinación del Tiempo de Fraguado de Cementos Hidráulicos NMX-C-59.",
      "Determinación del Fraguado Falso de Cementos Hidráulicos NMX-C-13",
      "Determinación de la Finura de Cementos Hidráulicos (No. 325) NMX-C-049.",
      "Método estándar de prueba para determinar el contenido de humedad total de los agregados mediante secado (AASHTO T 255/ASTM C566).",
      "Determinación de la Finura de Cementos Hidráulicos por medio de la Permeabilidad del Aire NMX-C-056.",
    ]
  },
  {
    "nombre": "SUPERVISOR DE CONCRETO LANZADO",
    "duracion": "8 Horas",
    "objetivo": "Respaldar los conocimientos que el aspirante posee respecto a las tecnologías del concreto lanzado, así como tipos, aplicaciones, condiciones climáticas, curado y formas para evitar las malas aplicaciones del concreto lanzado.",
    "dirigido": "La certificación está dirigida al personal de supervisión de la técnica de colocación de concreto lanzado, también aplica a los lanzadores de concreto.",
    "temario": [
      "Tecnología del concreto.",
      "Tecnología del concreto lanzado.",
      "Historia del concreto lanzado.",
      "Introducción al diseño de mezclas.",
      "Propiedades en estado fresco y endurecido del concreto lanzado",
      "Tipos y aplicaciones de concreto lanzado.",
      "Control de calidad en estado fresco y endurecido.",
      "Evaluación especificación vs desempeño.",
      "Equipos de concreto lanzado.",
      "Aplicación manual y robótica.",
      "Técnicas de colocación.",
      "Concreto lanzado como sistema de soporte.",
      "Soporte de roca Anclas, malla, acero de refuerzo.",
      "Reparación.",
      "Condiciones climáticas.",
      "Técnicas de acabado.",
      "Curado.",
      "Seguridad.",
      "Cómo evitar las malas aplicaciones."
    ]
  },
  {
    "nombre": "CIMBRAS PARA CONCRETO LANZADO",
    "duracion": "8 Horas",
    "objetivo": "Respaldar los conocimientos que el aspirante posee respecto a las tecnologías del concreto lanzado, así como tipos, aplicaciones, condiciones climáticas, curado y formas para evitar las malas aplicaciones del concreto lanzado.",
    "dirigido": "La certificación está dirigida al personal que está involucrado en la aplicación del concreto lanzado, ingenieros, arquitectos y técnicos de la construcción.",
    "temario": [
      "PARTE I:",
      "ASPECTOS IMPORTANTES A CONSIDERAR EN EL DISEÑO",
      "Previo a la colocación del concreto",
      "Durante la colocación del concreto",
      "Después de la colocación del concreto",
      "PARTE II:",
      "CONSTRUCCIÓN Y MATERIALES",
      "PARTE III:",
      "Normas técnicas complementarias para diseño y construcción de estructuras de madera, reglamento de construcciones del gobierno del distrito federal (revisión de la normatividad actual)."
    ]
  },
  {
    "nombre": "ACABADOR DE CONCRETO LANZADO",
    "duracion": "8 Horas",
    "objetivo": "Respaldar los conocimientos que el aspirante posee respecto a las tecnologías del concreto lanzado, así como tipos, aplicaciones, condiciones climáticas, curado y formas para evitar las malas aplicaciones del concreto lanzado.",
    "dirigido": "La certificación está dirigida a el personal que está involucrado en el acabado del concreto lanzado, ingenieros, arquitectos y técnicos de la construcción.",
    "temario": [
      "Tecnología básica del concreto",
      "Acabados del concreto lanzado",
      "Acabado natural o de la boquilla",
      "Acabado con regla",
      "Flotada o con llana",
      "Con esponja",
      "Con textura (estampado)",
      "Acabado de roca tallado a mano escultura",
      "Herramientas y su uso apropiado",
      "Colorantes y pigmentos",
      "Curado"
    ]
  },
  {
    "nombre": "TÉCNICO PARA PRUEBAS AL CONCRETO FRESCO",
    "duracion": "8 Horas",
    "objetivo": "Transmitir al aspirante, para que obtenga los conocimientos y habilidades para ejecutar y registrar correctamente los resultados de las pruebas de campo básicas con base a la norma NMX en la mezcla de concreto fresco.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal de gobierno, proveedores de materiales y profesionales de la industria del concreto.",
    "temario": [
      "Medición de temperatura del concreto recién mezclado con cemento hidráulico. NMX C 435 ONNCCE",
      "Muestreo del concreto recién mezclado NMX C 161 ONNCCE",
      "Determinación del revenimiento en el concreto a base de cemento hidráulico. NMX C 156 ONNCCE",
      "Determinación del peso unitario, volumen producido y contenido de aire del concreto por medio del método gravimétrico. NMX C 162 ONNCCE",
      "Determinación del contenido de aire del concreto recién mezclado por el método de presión NMX C 157 ONNCCE",
      "Determinación del contenido de aire del concreto recién mezclado por el método volumétrico NMX C 158 ONNCCE",
      "Elaboración y curado en campo de especímenes de concreto para su ensaye NMX C 159 ONNCCE",
    ]
  }
];

export default function CertificacionesImcyc() {
  const [useCurso, setCurso] = useState("TÉCNICO EN PRUEBAS AL CEMENTO");
  return (
    <div>
      <div className="grid grid-rows-[1fr] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]  bg-slate-900 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] z-0 mx-auto max-w-screen-xl text-gray-100">
          <h1 className="font-montserrat text-2xl uppercase mt-10 pt-10 pl-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> Modalidad Presencial
          </h1>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <Link href="/capacitacion/modalidad-presencial/certificaciones-aci" className="font-montserrat btn bg-slate-800 hover:bg-slate-500 p-3 text-left text-2xl">
                  CERTIFICACIONES IMCYC
                  <p className="text-xs">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                </Link>
                <h3 onClick={() => setCurso("TÉCNICO EN PRUEBAS AL CEMENTO")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PRUEBAS AL CEMENTO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                TÉCNICO EN PRUEBAS AL CEMENTO
                </h3>
                <h3 onClick={() => setCurso("SUPERVISOR DE CONCRETO LANZADO")} className={`font-montserrat btn ${useCurso === "SUPERVISOR DE CONCRETO LANZADO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                SUPERVISOR DE CONCRETO LANZADO
                </h3>
                <h3 onClick={() => setCurso("CIMBRAS PARA CONCRETO LANZADO")} className={`font-montserrat btn ${useCurso === "CIMBRAS PARA CONCRETO LANZADO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                CIMBRAS PARA CONCRETO LANZADO
                </h3>
                <h3 onClick={() => setCurso("ACABADOR DE CONCRETO LANZADO")} className={`font-montserrat btn ${useCurso === "ACABADOR DE CONCRETO LANZADO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                ACABADOR DE CONCRETO LANZADO
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO PARA PRUEBAS AL CONCRETO FRESCO")} className={`font-montserrat btn ${useCurso === "TÉCNICO PARA PRUEBAS AL CONCRETO FRESCO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                TÉCNICO PARA PRUEBAS AL CONCRETO FRESCO
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "TÉCNICO EN PRUEBAS AL CEMENTO" && <Curso curso={cursos[0]} />}
              {useCurso === "SUPERVISOR DE CONCRETO LANZADO" && <Curso curso={cursos[1]} />}
              {useCurso === "CIMBRAS PARA CONCRETO LANZADO" && <Curso curso={cursos[2]} />}
              {useCurso === "ACABADOR DE CONCRETO LANZADO" && <Curso curso={cursos[3]} />}
              {useCurso === "TÉCNICO PARA PRUEBAS AL CONCRETO FRESCO" && <Curso curso={cursos[4]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
