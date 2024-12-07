"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "DISEÑO Y CONSTRUCCIÓN DE PISOS INDUSTRIALES",
    "duracion": "8 Horas",
    "objetivo": "Presentar la importancia que tiene la estructura de una losa de concreto que estará apoyada sobre el terreno en especial la subrasante y la subbase. Así como los efectos de la humedad que pueden influir en la calidad de la estructura. Seleccionar la calidad del concreto que será utilizado durante la construcción de una losa apoyada sobre el terreno. ",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la evaluación y supervisor de estructuras de concreto.",
    "temario": [
      "Contracción por secado. Efectos en los pisos de concreto y las causas que provocan concretos de alta contracción",
      "Especificación de concreto. Alternativas y diferencias de distintos tipos de concreto para pisos",
      "Aspectos relevantes en el diseño de pisos sobre rasante (ACI 360)",
      "Números f y pisos super planos",
      "Procedimiento constructivo",
      "Mantenimiento y reparaciones más comunes",
      "Estudios y pruebas no destructivas para evaluar pisos de concreto"
    ]
  },
  {
    "nombre": "EVALUACIÓN DE ESTRUCTURAS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "El objetivo general de la certificación radica en que al final del evento el alumno conozca los aspectos más importantes asociados al diagnóstico, la evaluación y la intervención de una estructura de concreto caracterizada por la presencia de alguna sintomatología patológica anómala.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la evaluación y supervisor de estructuras de concreto.",
    "temario": [
      "Introducción a la evaluación de estructuras de concreto",
      "Evaluación del daño en las construcciones de concreto",
      "Durabilidad de estructuras de concreto",
      "Pruebas semidestructivas y no destructivas para evaluar el concreto"
    ]
  },
  {
    "nombre": "TECNOLOGÍA DE ADITIVOS PARA CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Dar a conocer y mostrar los temas avanzados de aditivos químicos que se utilizan en las mezclas de concreto y que demanda la industria de la construcción en estos momentos.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que utiliza aditivos para implementar concreto de alta vanguardia.",
    "temario": [
      "Historia de los aditivos",
      "Clasificación de los aditivos",
      "Normativa",
      "Aditivos para concreto",
      "Plastificantes o reductores de agua de medio rango",
      "Superplastificantes o reductores de agua de alto rango",
      "Acelerantes",
      "Retardantes",
      "Adiciones",
      "Concretos especiales",
      "Aditivos para cemento",
    ]
  },
  {
    "nombre": "CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Conocer las consideraciones previas que hay que tomarse en cuenta antes de realizar la pavimentación de un proyecto carretero, se analizará la mezcla de concreto y la importancia que juega en este tipo de estructuras.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la construcción y ejecución de pavimentos de concreto.",
    "temario": [
      "Introducción",
      "Producción de concreto",
      "Supervisión de materiales para concreto",
      "Uniformidad del concreto",
      "Secuencia de construcción",
      "Control de calidad de pavimentos de concreto"
    ]
  },
  {
    "nombre": "EVALUACIÓN DE PAVIMENTOS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Contar con herramientas que permitan entender el deterioro ocasionado por las cargas o solicitaciones externas, así como por los agentes erosivos que causan un daño a los pavimentos rígidos.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la ejecución y evaluación de pavimentos de concreto.",
    "temario": [
      "Introducción",
      "Concepto de falla estructural y funcional",
      "Degradación gradual del pavimento",
      "Evaluación funcional",
      "Evaluación estructural"
    ]
  },
  {
    "nombre": "PRUEBAS FÍSICAS AL CEMENTO",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar al participante de conocimientos y habilidades para ejecutar las pruebas básicas en pastas de cemento hidráulicas con base a las normas NMX correspondientes.",
    "dirigido": "Al personal que realiza las pruebas físicas y de desempeño de cementos en laboratorios de la industria d de a construcción.",
    "temario": [
      "Determinación de la Consistencia Normal de Cementos Hidráulicos NMX-C-057-ONNCCE",
      "Determinación de la Expansión en Autoclave (Sanidad) de Cementos Hidráulicos NMX-C-062-0NNCCE",
      "Determinación del Fraguado Falso de Cementos Hidráulicos NMX-C-132-ONNCCE",
      "Determinación de la Resistencia a la Compresión de Cementos Hidráulicos (cubos de 2 in o 50 mm) NMX-C-061-ONNCCE",
      "Determinación de la Finura de Cementos Hidráulicos (No. 325) NMX-C-049-ONNCCE",
      "Determinación de la Finura de Cementos Hidráulicos por medio de la Permeabilidad del Aire NMX-C-056-ONNCCE",
    ]
  },
  {
    "nombre": "REPARACIÓN DE ESTRUCTURAS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Dar a conocer los aspectos básicos del Reglamento ACI 318, presentar la manera de realizar la evaluación de las estructuras de concreto así como las bases de la rehabilitación y mantenimiento, ejemplificando algunas de ellas con casos de estudio.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la supervisión y reparación de estructuras de concreto.",
    "temario": [
      "Módulo 1. Conceptos Básicos de Reparación de Estructuras de Concreto",
      "Módulo 2. Impermeabilización en la Construcción",
      "Módulo 3. Conservación y Rehabilitación de Pavimentos de Concreto",
      "Módulo 4. Aspectos de la Durabilidad en las Estructuras de Concreto",
      "Módulo 5. Casos de éxito en la Reparación de Estructuras de Concreto",
      "1.5 Método de ensaye estándar para determinar cambios de longitud del concreto y del mortero de cemento hidráulico endurecidos, ASTM C157."
    ]
  },
  {
    "nombre": "DISEÑO DE ESTRUCTURAS DE CONCRETO CON BASE AL REGLAMENTO ACI 318-19",
    "duracion": "8 Horas",
    "objetivo": "Introducir al usuario al nuevo reglamento ACI 318-14 reorganizado. Actualizar al asistente en el manejo y entendimiento de la reorganización completa del reglamento ACI 318-14. Mostrar como impactará el capítulo de Construcción del ACI 318-14 a la industria.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la construcción , ejecución, análisis de obras de construcción de concreto.",
    "temario": [
      "Presentación e Introducción",
      "Notación y terminología",
      "Normas de referencia",
      "Requisitos de Sistemas Estructurales",
      "Cargas",
      "Análisis estructural",
      "Losas en una dirección",
      "Losas en dos direcciones",
      "Vigas",
      "Columnas",
      "Muros",
      "Diafragmas",
      "Cimentaciones",
      "Concreto simple",
      "Uniones viga-columna y losa-columna",
      "Conexiones entre miembros",
      "Anclaje al concreto",
      "Estructuras resistentes a sismos",
      "Diseño y requerimientos de durabilidad",
      "Propiedades del acero de refuerzo, durabilidad y ahogados (Embebidos).",
      "Factores de reducción de resistencia",
      "Resistencia de secciones",
      "Modelo puntual y tensor"
    ]
  },
  {
    "nombre": "DURABILIDAD DE ESTRUCTURAS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Que los participantes adquieran los conocimientos básicos necesarios para saber detectar e identificar las diferentes patologías que se pueden desarrollar en las estructuras de concreto; con lo que será posible de primera instancia, desarrollar diagnósticos eficaces encaminados a evaluar y reparar dichas estructuras, antes acciones de posible ocurrencia.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la construcción y diseño de estructuras de concreto.",
    "temario": [
      "Duración de las estructuras de concreto",
      "Vida de proyecto",
      "Vida potencial",
      "Causas de deterioro del concreto",
      "Condiciones de exposición",
      "Condiciones de servicio",
      "Reconocimiento y evaluación de los factores intrínsecos y extrínsecos que ponen en riesgo la durabilidad de las estructuras de concreto",
      "Factores intrínsecos",
      "Cambios volumétricos",
      "Aspectos relativos a los agregados",
      "Aspectos relativos al cemento y sus distintos tipos",
      "Deficiencias constructivas",
      "Factores extrínsecos",
      "Condiciones climáticas",
      "Acciones de los medios de contacto",
      "Condiciones de servicio",
      "Medidas de prevención aplicables para resguardar la calidad y durabilidad de las estructuras de concreto",
      "Análisis preliminar de las condiciones a las cuales estará expuesta el concreto",
      "Previsiones y recomendaciones para los distintos ambientes de exposición",
      "Diseño por desempeño de la mezcla de concreto"
    ]
  },
  {
    "nombre": "PRUEBAS NO DESTRUCTIVAS (PND)",
    "duracion": "8 Horas",
    "objetivo": "Ofrecer una descripción y las ventajas de la ejecución de pruebas no destructivas en la evaluación de las estructuras de concreto. Así como, la aplicación y los alcances de las pruebas más comunes. Mostrar como se puede realizar un diagnóstico rápido y confiable del estado que guarda la estructura, los materiales con los que fue construida y su comportamiento futuro.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a realizar pruebas no destructivas al concreto en servicio.",
    "temario": [
      "Introducción al estudio de las pruebas no destructivas",
      "Estudios de campo y laboratorio",
      "Pruebas “semi-destructivas” para evaluar las propiedades del concreto endurecido: resistencia a la compresión, resistencia a la compresión diametral, módulo de elasticidad",
      "Pruebas físicas: contracción por secado",
      "Flujo plástico",
      "Pruebas para evaluar la durabilidad del concreto. Generalidades",
      "Estudios ferromagnéticos para la determinación representativa de los niveles de armado de refuerzo: principio de funcionamiento. Uso y aplicaciones.",
      "Pruebas electroquímicas para la evaluación de los niveles de corrosión en estructuras de concreto: principios teóricos fundamentales y aplicaciones prácticas.",
      "Pruebas de pull off: uso y aplicaciones en la reparación y el reforzamiento de estructuras de concreto armado",
      "Pruebas de pull out: uso y aplicaciones",
      "Esclerometría: uso, aplicaciones y limitaciones",
      "Métodos, equipos y tecnologías avanzadas para la evaluación de estructuras de concreto",
      "Aplicaciones prácticas"
    ]
  },
  {
    "nombre": "SUPERVISOR DE CONCRETO LANZADO",
    "duracion": "8 Horas",
    "objetivo": "Respaldar los conocimientos que el aspirante posee respecto a las tecnologías del concreto lanzado, así como tipos, aplicaciones, condiciones climáticas, curado y formas para evitar las malas aplicaciones del concreto lanzado.",
    "dirigido": "Al personal de supervisión de la técnica de colocación de concreto lanzado, también aplica a los lanzadores de concreto.",
    "temario": [
      "Tecnología del concreto",
      "Tecnología del concreto lanzado",
      "Historia del concreto lanzado",
      "Introducción al diseño de mezclas",
      "Propiedades en estado fresco y endurecido del concreto lanzado",
      "Tipos y aplicaciones de concreto lanzado",
      "Control de calidad en estado fresco y endurecido",
      "Evaluación especificación vs desempeño",
      "Equipos de concreto lanzado",
      "Aplicación manual y robótica",
      "Técnicas de colocación",
      "Concreto lanzado como sistema de soporte",
      "Soporte de roca Anclas, malla, acero de refuerzo",
      "Reparación",
      "Condiciones climáticas",
      "Técnicas de acabado",
      "Curado",
      "Seguridad",
      "Cómo evitar las Malas aplicaciones"
    ]
  },
  {
    "nombre": "TECNOLOGÍA DEL CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar a los participantes información relacionada con los materiales y Normas Mexicanas de los componentes del concreto. Presentar temas relacionados con sus propiedades, así como algunos aspectos de durabilidad y conceptos que son necesarios en la práctica.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la construcción, técnico de pruebas y persona que interviene en la ejecución de estructuras de concreto.",
    "temario": [
      "INTRODUCCIÓN",
      "Deterioro de las estructuras",
      "Definiciones",
      "Proporciones típicas",
      "Usos y tipos del concreto",
      "Naturaleza de la resistencia del concreto",
      "MATERIALES",
      "Cemento hidráulico",
      "Agregados para concreto",
      "Agua",
      "Aditivos",
      "CONCRETO DURABLE",
      "Condiciones de exposición",
      "Condiciones de servicio",
      "DISEÑO DE MEZCLAS",
      "Para concreto normal y pesado, requisitos: Resistencia, Consistencia, TMA, Rendimiento",
      "CONCRETO FRESCO Y ENDURECIDO",
      "Propiedades evaluables",
      "Pruebas al concreto"
    ]
  },
  {
    "nombre": "DISEÑO DE PAVIMENTOS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar a los participantes información actualizada del proyecto y diseño, transmitir las ideas y criterios básicos de diseño; posteriormente se hace un recuento minucioso sobre cada uno de los componentes y aspectos a considerar en el proyecto y diseño de los pavimentos.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado al diseño de pavimentos de concreto.",
    "temario": [
      "Consideraciones generales",
      "Tipos de pavimentos de concreto",
      "Criterios geotécnicos en el diseño de pavimentos",
      "Fundamentos de diseño",
      "Diseño de pavimentos de carreteras",
      "Detalles especiales y transiciones",
      "Ejemplos",
      "El sistema de drenaje de las carreteras"
    ]
  },
  {
    "nombre": "REPARACIÓN DE PAVIMENTOS DE CONCRETO",
    "duracion": "8 Horas",
    "objetivo": "Identificar los deterioros en pavimentos de concreto mediante pruebas y técnicas de RPC para optar por la o las estrategias y procesos de rehabilitación adecuados, así como las causas de los deterioros y aplicación de técnicas preventivas.",
    "dirigido": "A supervisores, técnicos de la construcción, ingenieros, arquitectos y personal dedicado a la evaluación y reparación de pavimentos de concreto.",
    "temario": [
      "INTRODUCCIÓN A LA CONSERVACIÓN DE PAVIMENTOS DE CONCRETO",
      "Ciclo de vida de los pavimentos de concreto hidráulico",
      "Deterioros en los pavimentos de concreto y sus causas",
      "Conservación rutinaria, preventiva y correctiva",
      "Reparaciones superficiales, a profundidad parcial y profundidad total",
      "CONSERVACIÓN RUTINARIA",
      "Juntas",
      "Grietas longitudinales y transversales",
      "Bacheo",
      "TÉCNICAS DE REPARACIÓN",
      "Reparaciones a profundidad parcial",
      "Reparaciones a profundidad total",
      "Cosido de losas",
      "Restauración de transferencia de carga",
      "Microperfilado superficial",
      "Estabilización de losas",
      "Sustitución de losas",
      "SOBRECARPETAS EN PAVIMENTOS DE CONCRETO",
      "Sobrelosas no adheridas",
      "Sobrelosas adheridas",
      "Sobrecarpetas de concreto en pavimentos flexibles",
      "Sobrecarpetas asfálticas en pavimentos de concreto"
    ]
  }
];

export default function CursosImcyc() {
  const [useCurso, setCurso] = useState("DISEÑO Y CONSTRUCCIÓN DE PISOS INDUSTRIALES");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100 my-20">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> CURSOS IMCYC
          </h1>
          <p className="text-xs pl-5 mb-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("DISEÑO Y CONSTRUCCIÓN DE PISOS INDUSTRIALES")} className={`font-montserrat btn ${useCurso === "DISEÑO Y CONSTRUCCIÓN DE PISOS INDUSTRIALES" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                DISEÑO Y CONSTRUCCIÓN DE PISOS INDUSTRIALES
                </h3>
                <h3 onClick={() => setCurso("EVALUACIÓN DE ESTRUCTURAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "EVALUACIÓN DE ESTRUCTURAS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                EVALUACIÓN DE ESTRUCTURAS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("TECNOLOGÍA DE ADITIVOS PARA CONCRETO")} className={`font-montserrat btn ${useCurso === "TECNOLOGÍA DE ADITIVOS PARA CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TECNOLOGÍA DE ADITIVOS PARA CONCRETO
                </h3>
                <h3 onClick={() => setCurso("CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center justify-between`}>
                CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("EVALUACIÓN DE PAVIMENTOS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "EVALUACIÓN DE PAVIMENTOS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                EVALUACIÓN DE PAVIMENTOS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("PRUEBAS FÍSICAS AL CEMENTO")} className={`font-montserrat btn ${useCurso === "PRUEBAS FÍSICAS AL CEMENTO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                PRUEBAS FÍSICAS AL CEMENTO
                </h3>
                <h3 onClick={() => setCurso("REPARACIÓN DE ESTRUCTURAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "REPARACIÓN DE ESTRUCTURAS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                REPARACIÓN DE ESTRUCTURAS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("DISEÑO DE ESTRUCTURAS DE CONCRETO CON BASE AL REGLAMENTO ACI 318-19")} className={`font-montserrat btn ${useCurso === "DISEÑO DE ESTRUCTURAS DE CONCRETO CON BASE AL REGLAMENTO ACI 318-19" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                DISEÑO DE ESTRUCTURAS DE CONCRETO CON BASE AL REGLAMENTO ACI 318-19
                </h3>
                <h3 onClick={() => setCurso("DURABILIDAD DE ESTRUCTURAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "DURABILIDAD DE ESTRUCTURAS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                DURABILIDAD DE ESTRUCTURAS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("PRUEBAS NO DESTRUCTIVAS (PND)")} className={`font-montserrat btn ${useCurso === "PRUEBAS NO DESTRUCTIVAS (PND)" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                PRUEBAS NO DESTRUCTIVAS (PND)
                </h3>
                <h3 onClick={() => setCurso("SUPERVISOR DE CONCRETO LANZADO")} className={`font-montserrat btn ${useCurso === "SUPERVISOR DE CONCRETO LANZADO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                SUPERVISOR DE CONCRETO LANZADO
                </h3>
                <h3 onClick={() => setCurso("TECNOLOGÍA DEL CONCRETO")} className={`font-montserrat btn ${useCurso === "TECNOLOGÍA DEL CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                TECNOLOGÍA DEL CONCRETO
                </h3>
                <h3 onClick={() => setCurso("DISEÑO DE PAVIMENTOS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "DISEÑO DE PAVIMENTOS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                DISEÑO DE PAVIMENTOS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("REPARACIÓN DE PAVIMENTOS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "REPARACIÓN DE PAVIMENTOS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase`}>
                REPARACIÓN DE PAVIMENTOS DE CONCRETO
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "DISEÑO Y CONSTRUCCIÓN DE PISOS INDUSTRIALES" && <Curso curso={cursos[0]} />}
              {useCurso === "EVALUACIÓN DE ESTRUCTURAS DE CONCRETO" && <Curso curso={cursos[1]} />}
              {useCurso === "TECNOLOGÍA DE ADITIVOS PARA CONCRETO" && <Curso curso={cursos[2]} />}
              {useCurso === "CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO" && <Curso curso={cursos[3]} />}
              {useCurso === "EVALUACIÓN DE PAVIMENTOS DE CONCRETO" && <Curso curso={cursos[4]} />}
              {useCurso === "PRUEBAS FÍSICAS AL CEMENTO" && <Curso curso={cursos[5]} />}
              {useCurso === "REPARACIÓN DE ESTRUCTURAS DE CONCRETO" && <Curso curso={cursos[6]} />}
              {useCurso === "DISEÑO DE ESTRUCTURAS DE CONCRETO CON BASE AL REGLAMENTO ACI 318-19" && <Curso curso={cursos[7]} />}
              {useCurso === "DURABILIDAD DE ESTRUCTURAS DE CONCRETO" && <Curso curso={cursos[8]} />}
              {useCurso === "PRUEBAS NO DESTRUCTIVAS (PND)" && <Curso curso={cursos[9]} />}
              {useCurso === "SUPERVISOR DE CONCRETO LANZADO" && <Curso curso={cursos[10]} />}
              {useCurso === "TECNOLOGÍA DEL CONCRETO" && <Curso curso={cursos[11]} />}
              {useCurso === "DISEÑO DE PAVIMENTOS DE CONCRETO" && <Curso curso={cursos[12]} />}
              {useCurso === "REPARACIÓN DE PAVIMENTOS DE CONCRETO" && <Curso curso={cursos[13]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
