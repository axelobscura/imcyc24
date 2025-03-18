"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "next/image";

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
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE AGREGADOS",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar las bases para la certificación de técnicos con experiencia en el ensaye de agregados para concreto, resolver los problemas derivados de las prácticas inadecuadas de prueba, mejorar la calidad de la construcción con concreto y preparar a la industria para la certificación obligatoria.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, etc., dedicados a la evaluación de los agregados usados para la elaboración de concreto.",
    "temario": [
      "Método estándar para el muestreo de agregados (AASHTO T 2/ASTM D75).",
      "Método estándar para reducir muestras de agregados al tamaño de prueba (AASHTO T 248/ASTM C702).",
      "Método estándar de prueba para materiales que pasan la malla de 75um (No. 200) en agregados minerales mediante lavado (AASHTO T 11/ASTM C117).",
      "Método estándar de prueba para cribado por mallas de agregados finos y gruesos (AASHTO T 27/ASTM C136).",
      "Método estándar de prueba para determinar la masa específica y la absorción de agregados gruesos (AASHTO T 85/ASTM C127).",
      "Método estándar de prueba para determinar la masa específica y la absorción de agregados finos (AASHTO T 84/ASTM C128).",
      "Método estándar de prueba para determinar el contenido de humedad total de los agregados mediante secado (AASHTO T 255/ASTM C566).",
      "Método estándar de prueba para determinar impurezas orgánicas en agregados finos para concreto (AASHTO T 21/ASTM C40)."
    ]
  },
  {
    "nombre": "SUPERVISOR ESPECIALIZADO EN OBRAS DE CONCRETO",
    "duracion": "16 Horas",
    "objetivo": "Certificar que el aspirante posee los conocimientos sobre tecnología del concreto, especificaciones y tolerancias de armados, cimbras, recubrimientos e insertos, para ejecutar la secuencia correcta de supervisión antes, durante y después de la colocación del concreto, así como la escolaridad y la experiencia en la construcción con concreto requeridas para ser un Supervisor en obras de concreto.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la evaluación y supervisor de estructuras de concreto, así como la ejecución en obra.",
    "temario": [
      "Supervisión previa a la colocación del concreto",
      "Supervisión durante la colocación del concreto",
      "Supervisión después de la colocación del concreto",
    ],
    "requisitos": [
      "Mínimo dos años, sí se tiene la licenciatura o es pasante de Ingeniería, Arquitectura o carrera afín.",
      "Mínimo tres años, sí se cuenta con Diploma de Carrera Técnica relacionada con la construcción.",
      "Mínimo cinco años, sí se cuenta con certificado de preparatoria o equivalente.",
      "Sí el aspirante aprueba las evaluaciones y tiene la escolaridad necesaria, pero no la experiencia requerida, se le entregará una Constancia 'En Entrenamiento' (In Training) con una vigencia de cinco años, la que será canjeada cuando demuestre que cumple con el requisito de experiencia."
    ]
  },
  {
    "nombre": "SUPERVISOR Y TÉCNICO DE CONSTRUCCIONES TILT-UP",
    "duracion": "8 Horas",
    "objetivo": "Asegurar que el aspirante cuenta con la experiencia en temas de seguridad, lectura de planos, programación, preparación del sitio y cimentaciones, losas sobre el terreno, disposición, moldaje. Así como, proporcionar los conocimientos relacionados con las propiedades del concreto, su colocación y erección de elementos en los diferentes sistemas estructurales.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, etc., dedicados a la supervisión y construcción Tilt-up .",
    "temario": [
      "Tecnología básica del concreto.",
      "Planeación del edificio Tilt-up.",
      "Cimentaciones para pisos y losas.",
      "Disposición y moldajes para paneles.",
      "Colocación del refuerzo e insertos ahogados.",
      "Colocación y acabado de paneles.",
      "Elevación, colocación y arriostramiento de paneles",
      "Conexiones y acabado"
    ]
  },
  {
    "nombre": "TÉCNICO LABORATORISTA NIVEL II",
    "duracion": "8 Horas",
    "objetivo": "Certificar que el aspirante ha demostrado el conocimiento y la capacidad para realizar de manera adecuada, registrar y reportar los resultados de procedimientos avanzados de laboratorio para agregados y concreto de cinco procedimientos ASTM básicos de laboratorio.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos y personal dedicado a la evaluación de resultados de las pruebas de laboratorios de concreto y personal dedicado a la realización de pruebas especiales al concreto.",
    "temario": [
      "1.- PRUEBAS ASTM Y CONOCIMIENTOS PARA EL TRABAJO",
      "1.1 Elaboración y curado de especímenes de concreto en el laboratorio, ASTM C192 (Este estándar también requiere el conocimiento y la capacidad para llevar a cabo la prueba de revenimiento, ASTM C143; contenido de aire, ASTM C173 y ASTM C231; peso unitario, ASTM C138, y temperatura, ASTM C1046).",
      "1.2 Moldes para la elaboración vertical de cilindros de concreto, ASTM C470*.",
      "1.3 Resistencia a la tensión por compresión diametral (prueba brasileña) de especímenes cilíndricos de concreto, ASTM C496*.",
      "1.4 Obtención y prueba de núcleos perforados y vigas aserradas de concreto, ASTM C42*",
      "1.5 Método de ensaye estándar para determinar cambios de longitud del concreto y del mortero de cemento hidráulico endurecidos, ASTM C157.",
      "1.6 Evaluación de los resultados de resistencia del concreto, ACI 214*.",
      "1.7 Proporcionamiento de mezclas, ACI 211.1*.",
      "2.- DEMOSTRACIÓN EN EL LABORATORIO",
      "2.1 Elaboración y curado de especímenes de concreto en el laboratorio, ASTM C192.",
      "2.2 Método de ensaye estándar para determinar cambios de longitud del concreto y del mortero de cemento hidráulico endurecidos, ASTM C157"
    ]
  },
  {
    "nombre": "CONCRETO LANZADO",
    "duracion": "16 Horas",
    "objetivo": "Este programa requiere la demostración de los conocimientos cubiertos en el análisis de tareas de trabajo (JTA) para el inspector de concreto lanzado.",
    "dirigido": "La certificación está dirigida a supervisores y lanzadores de concreto, los cuales se dedican a la ejecución de obras y verificación de calidad de estas técnicas de aplicación.",
    "temario": [
      "Guía ACI 305R-10 para colocación de concreto en climas cálidos",
      "Especificación ACI 305.1-14 para colocación de concreto en climas cálidos",
      "Guía ACI 306R-16 para colocación de concreto en climas fríos",
      "ACI 306.1-90 (02) Especificación estándar colocación de concreto en climas fríos",
      "Guía ACI 506R-16 para concreto lanzado",
      "ACI 506.1R-08 Guía de concreto lanzado reforzado con fibra",
      "Especificación ACI 506.2-13 para concreto lanzado",
      "ACI 506.4R-94 (04) Guía para la evaluación del concreto lanzado",
      "Evaluación visual de la calidad del núcleo del concreto lanzado ACI 506.6T-17",
      "ACI CCS-4 (08) Concreto lanzado para el artesano",
      "ASTM C1140 / C1140M-11 Práctica estándar para preparar y probar muestras de paneles de prueba de concreto lanzado",
      "ASTM C1604 / C1604M-05 (12) Método de prueba estándar para obtener y probar núcleos perforados de concreto lanzado",
      "Directrices de seguridad de ASA para el concreto lanzado",
    ]
  }
];

export default function CertificacionesAci() {
  const [useCurso, setCurso] = useState("Técnico para pruebas al concreto en la obra-Grado I");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100 py-20">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> CERTIFICACIONES ACI
          </h1>
          <p className="text-xs pl-5">American Concrete Institute</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("Técnico para pruebas al concreto en la obra-Grado I")} className={`font-montserrat btn ${useCurso === "Técnico para pruebas al concreto en la obra-Grado I" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                  Técnico para pruebas al concreto en la obra-Grado I
                </h3>
                <h3 onClick={() => setCurso("Técnico en pruebas de resistencia al concreto endurecido")} className={`font-montserrat btn ${useCurso === "Técnico en pruebas de resistencia al concreto endurecido" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                  Técnico en pruebas de resistencia al concreto endurecido
                </h3>
                <h3 onClick={() => setCurso("Técnico y acabador de superficies planas de concreto")} className={`font-montserrat btn ${useCurso === "Técnico y acabador de superficies planas de concreto" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                  Técnico y acabador de superficies planas de concreto
                </h3>
                <h3 onClick={() => setCurso("Técnico en pruebas de agregados")} className={`font-montserrat btn ${useCurso === "Técnico en pruebas de agregados" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center justify-between`}>
                  Técnico en pruebas de agregados
                </h3>
                <h3 onClick={() => setCurso("Supervisor especializado en obras de concreto")} className={`font-montserrat btn ${useCurso === "Supervisor especializado en obras de concreto" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                  Supervisor especializado en obras de concreto
                </h3>
                <h3 onClick={() => setCurso("Supervisor y técnico de construcciones Tilt-up")} className={`font-montserrat btn ${useCurso === "Supervisor y técnico de construcciones Tilt-up" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                  Supervisor y técnico de construcciones Tilt-up
                </h3>
                <h3 onClick={() => setCurso("Técnico laboratorista Nivel II")} className={`font-montserrat btn ${useCurso === "Técnico laboratorista Nivel II" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                  Técnico laboratorista Nivel II
                </h3>
                <h3 onClick={() => setCurso("Concreto lanzado")} className={`font-montserrat btn ${useCurso === "Concreto lanzado" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                  Concreto lanzado
                </h3>
                <div className="flex items-center justify-center mt-5">
                  <a href="https://www.concrete.org/verify" target="_blank">
                    <Image
                      src="/logos/aci.png"
                      alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      width={200}
                      height={0}
                    />
                    <p className="mt-3">Supporter of ACI Certification</p>
                  </a>
                </div>
                
              </div>
            </div>
            <div>
              {useCurso === "Técnico para pruebas al concreto en la obra-Grado I" && <Curso curso={cursos[0]} />}
              {useCurso === "Técnico en pruebas de resistencia al concreto endurecido" && <Curso curso={cursos[1]} />}
              {useCurso === "Técnico y acabador de superficies planas de concreto" && <Curso curso={cursos[2]} />}
              {useCurso === "Técnico en pruebas de agregados" && <Curso curso={cursos[3]} />}
              {useCurso === "Supervisor especializado en obras de concreto" && <Curso curso={cursos[4]} />}
              {useCurso === "Supervisor y técnico de construcciones Tilt-up" && <Curso curso={cursos[5]} />}
              {useCurso === "Técnico laboratorista Nivel II" && <Curso curso={cursos[6]} />}
              {useCurso === "Concreto lanzado" && <Curso curso={cursos[7]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
