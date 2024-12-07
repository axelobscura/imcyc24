"use client"
import { useState } from "react";
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
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE RESISTENCIA",
    "duracion": "8 Horas",
    "objetivo": "Conocer el procedimiento normalizado de las cuatro pruebas que se realizan al concreto endurecido con base en a las normas Mexicanas NMX.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal que se dedica a la evaluación de la calidad del concreto endurecido",
    "temario": [
      "Método de prueba estándar para la resistencia a la compresión de especímenes cilíndricos de concreto NMX C 083 ONNCCE",
      "Método de prueba estándar para la resistencia a la flexión del concreto (empleando una viga simple con cargas en los tercios medios). NMX C 191 ONNCCE",
      "Práctica estándar para el cabeceo de especímenes cilíndricos de concreto. NMX C 109 ONNCCE",
      "Práctica estándar para el uso de cubiertas no unidas para la determinación de la resistencia a la compresión de cilindros de concreto endurecidos NMX C 469 ONNCCE"
    ]
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE AGREGADOS",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar las bases para la certificación de técnicos con experiencia en el ensaye de agregados para concreto, resolver los problemas derivados de las prácticas inadecuadas de prueba, mejorar la calidad de la construcción con concreto y preparar a la industria para la certificación obligatoria.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, etc., dedicados a la evaluación de los agregados usados para la elaboración de concreto.",
    "temario": [
      "Método estándar para el muestreo de agregados NMX C 030 ONNCCE",
      "Método estándar para reducir muestras de agregados al tamaño de prueba NMX C 170 ONCCE",
      "Método estándar de prueba para materiales que pasan la malla de 75um (No. 200) en agregados minerales mediante lavado NMX C 084",
      "Método estándar de prueba para cribado por mallas de agregados finos y gruesos NMX C 077 ONNCCE",
      "Método estándar de prueba para determinar la masa específica y la absorción de agregados gruesos NMX C 164 ONNCCE",
      "Método estándar de prueba para determinar la masa específica y la absorción de agregados finos NMX C 165 ONNCCE",
      "Método estándar de prueba para determinar el contenido de humedad total de los agregados mediante secado NMX C 166 ONCCE",
      "Método estándar de prueba para determinar impurezas orgánicas en agregados finos para concreto NMX C 088 ONNCCE"
    ]
  },
  {
    "nombre": "OPERADORES DE PLANTAS, BOMBAS Y OLLAS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Que los participantes adquieran el conocimiento de los sistemas para operar máquinas para concreto, su mantenimiento y seguridad. Se proporcionará a los participantes temas de fundamentos de concreto y atención al cliente.",
    "dirigido": "El curso va dirigido a toda aquella persona interesada en la operación de equipo para la adecuada colocación del concreto y los aspectos a cuidar previa, durante y después de su colocación. Se incluyen puntos importantes de las normas mexicanas, así como los aspectos generales del concreto.",
    "temario": [
      "Mantenimiento y operaciones del vehículo",
      "Componentes del camión mezclador",
      "Inspección antes del viaje",
      "Procedimiento de arranque y operaciones en el sitio de trabajo",
      "Inspección post viaje, limpieza y mantenimiento",
      "Operación y mantenimiento de plantas",
      "Conociendo el producto",
      "Concreto",
      "Componentes",
      "Normativa",
      "Atención al cliente"
    ]
  },
  {
    "nombre": "TÉCNICO EN EVALUACIÓN DE ESTRUCTURAS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "El objetivo general de la certificación radica en que al final del evento el alumno conozca los aspectos más importantes asociados al diagnóstico, la evaluación y la intervención de una estructura de concreto caracterizada por la presencia de alguna sintomatología patológica anómala.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la evaluación y supervisor de estructuras de concreto.",
    "temario": [
      "Introducción a la evaluación de estructuras de concreto",
      "Evaluación del daño en las construcciones de concreto",
      "Durabilidad de estructuras de concreto",
      "Pruebas semidestructivas y no destructivas para evaluar el concreto"
    ]
  }
];

export default function CertificacionesImcyc() {
  const [useCurso, setCurso] = useState("TÉCNICO EN PRUEBAS AL CEMENTO");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg1.jpeg')] bg-gray-900 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] z-0 mx-auto max-w-screen-xl text-gray-100 my-20">
          <h1 className="font-montserrat text-2xl uppercase mt-10 pt-10 pl-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> CERTIFICACIONES IMCYC
          </h1>
          <p className="text-xs pl-5">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
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
                <h3 onClick={() => setCurso("TÉCNICO EN PRUEBAS DE RESISTENCIA")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PRUEBAS DE RESISTENCIA" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                TÉCNICO EN PRUEBAS DE RESISTENCIA
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN PRUEBAS DE AGREGADOS")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PRUEBAS DE AGREGADOS" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                TÉCNICO EN PRUEBAS DE AGREGADOS
                </h3>
                <h3 onClick={() => setCurso("OPERADORES DE PLANTAS, BOMBAS Y OLLAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "OPERADORES DE PLANTAS, BOMBAS Y OLLAS DE CONCRETO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                OPERADORES DE PLANTAS, BOMBAS Y OLLAS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN EVALUACIÓN DE ESTRUCTURAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN EVALUACIÓN DE ESTRUCTURAS DE CONCRETO" ? "bg-gray-200 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                TÉCNICO EN EVALUACIÓN DE ESTRUCTURAS DE CONCRETO
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "TÉCNICO EN PRUEBAS AL CEMENTO" && <Curso curso={cursos[0]} />}
              {useCurso === "SUPERVISOR DE CONCRETO LANZADO" && <Curso curso={cursos[1]} />}
              {useCurso === "CIMBRAS PARA CONCRETO LANZADO" && <Curso curso={cursos[2]} />}
              {useCurso === "ACABADOR DE CONCRETO LANZADO" && <Curso curso={cursos[3]} />}
              {useCurso === "TÉCNICO PARA PRUEBAS AL CONCRETO FRESCO" && <Curso curso={cursos[4]} />}
              {useCurso === "TÉCNICO EN PRUEBAS DE RESISTENCIA" && <Curso curso={cursos[5]} />}
              {useCurso === "TÉCNICO EN PRUEBAS DE AGREGADOS" && <Curso curso={cursos[6]} />}
              {useCurso === "OPERADORES DE PLANTAS, BOMBAS Y OLLAS DE CONCRETO" && <Curso curso={cursos[7]} />}
              {useCurso === "TÉCNICO EN EVALUACIÓN DE ESTRUCTURAS DE CONCRETO" && <Curso curso={cursos[8]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
