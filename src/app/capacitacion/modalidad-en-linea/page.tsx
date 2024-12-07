"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "TÉCNICO ESPECIALISTA EN TÓPICOS DE DURABILIDAD",
    "duracion": "90-120 min por módulo",
    "objetivo": "Conocer los aspectos más importantes asociados al diagnóstico y evaluación de una estructura de concreto caracterizada por la presencia de alguna sintomatología patológica anómala e identificar los métodos para la prevención de las fallas y el deterioro prematuro.",
    "dirigido": "Personal de la construcción, estudiantes, ingenieros, arquitectos y técnicos de la construcción que quieren obtener conocimientos de durabilidad del concreto.",
    "temario": [
      "Módulo 1: Causas del deterioro y patologías",
      "Módulo 2: Diseño- Requisitos y especificaciones",
      "Módulo 3: Modelos de prevención",
      "Módulo 4: Métodos de prueba",
      "Módulo 5: Inspección y evaluación de estructuras"
    ]
  },
  {
    "nombre": "TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA CÁLIDO",
    "duracion": "90-120 min por módulo",
    "objetivo": "El objetivo de la certificación es que el participante podrá reconocer los efectos de colocar el concreto en climas con temperaturas elevadas y que acciones se deben tomar en cuenta para poder minimizar las consecuencias de colocar concreto en climas calurosos.",
    "dirigido": "Personal de la construcción, estudiantes, ingenieros, arquitectos y técnicos de la construcción que se interesen en temas relacionados con la colocación de concreto en clima cálido.",
    "temario": [
      "Introducción",
      "Efectos del concreto en clima cálido",
      "Producción y entrega",
      "Colocación y curado",
      "Pruebas e inspección"
    ]
  },
  {
    "nombre": "TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA FRÍO",
    "duracion": "90-120 min por módulo",
    "objetivo": "El objetivo de la certificación es que el participante podrá reconocer los efectos de colocar el concreto en fríos moderado y severo con temperaturas bajas y que acciones se deben tomar en cuenta para poder minimizar las consecuencias de colocar concreto en climas fríos.",
    "dirigido": "Personal de la construcción, estudiantes, ingenieros, arquitectos y técnicos de la construcción que se interesen en temas relacionados con la colocación de concreto en clima frío.",
    "temario": [
      "Definiciones",
      "Principales objetivos para realizar un colado",
      "Recomendaciones generales",
      "Temperatura del concreto",
      "Sistemas de protección",
      "Tiempo de protección",
      "Curado"
    ]
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE CAMPO DE CONCRETO – GRADO I",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificar el personal técnico y adquiera las habilidades para ejecutar y registrar correctamente los resultados de las pruebas de campo básicas con base a la normas ASTM y NMX en la mezcla de concreto fresco.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal de gobierno, proveedores de materiales y profesionales de la industria del concreto.",
    "temario": [
      "Medición de temperatura del concreto recién mezclado con cemento hidráulico. NMX C 435 ONNCCE / ASTM C 1064",
      "Muestreo del concreto recién mezclado NMX C 161 ONNCCE / ASTM C 172",
      "Determinación del revenimiento en el concreto a base de cemento hidráulico. NMX C 156 ONNCCE / ASTM C 143",
      "Determinación del peso unitario, volumen producido y contenido de aire del concreto por medio del método gravimétrico. NMX C 162 ONNCCE/ ASTM C 138",
      "Determinación del contenido de aire del concreto recién mezclado por el método de presión NMX C 157 ONNCCE / ASTM C 231",
      "Determinación del contenido de aire del concreto recién mezclado por el método volumétrico NMX C 158 ONNCCE / ASTM C 173",
      "Elaboración y curado en campo de especímenes de concreto para su ensaye NMX C 159 ONNCCE / ASTM C 31"
    ]
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE RESISTENCIA",
    "duracion": "90-120 min por módulo",
    "objetivo": "Conocer el procedimiento normalizado de las cuatro pruebas que se realizan al concreto endurecido con base en ASTM y NMX.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, contratistas, productores de concreto, personal que se dedica a la evaluación de la calidad del concreto endurecido.",
    "temario": [
      "Método de prueba estándar para la resistencia a la compresión de especímenes cilíndricos de concreto. ASTM C39 / NMX C 083 ONNCCE",
      "Método de prueba estándar para la resistencia a la flexión del concreto (empleando una viga simple con cargas en los tercios medios). ASTM C78 / NMX C 191 ONNCCE",
      "Práctica estándar para el cabeceo de especímenes cilíndricos de concreto. ASTM C617 / NMX C 109 ONNCCE",
      "Práctica estándar para el uso de cubiertas no unidas para la determinación de la resistencia a la compresión de cilindros de concreto endurecidos. ASTM C1231 / NMX C 469 ONNCCE"
    ]
  },
  {
    "nombre": "TÉCNICO EN PRUEBAS DE AGREGADOS NIVEL I",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificación de técnicos con experiencia en el ensaye de agregados para concreto con tomando en cuenta las normas mexicanas NMX y normas internacionales ASTM.",
    "dirigido": "La certificación está dirigida a supervisores, técnicos, ingenieros, arquitectos, etc., dedicados a la evaluación de los agregados usados para la elaboración de concreto.",
    "temario": [
      "Método estándar para el muestreo de agregados (NMX C 030 ONNCCE/ ASTM D 75)",
      "Método estándar para reducir muestras de agregados al tamaño de prueba (NMX C 170 ONNCCE / ASTM C702)",
      "Método estándar de prueba para materiales que pasan la malla de 75um (No. 200) en agregados minerales mediante lavado (NMX C 084 ONNCCE/ASTM C117)",
      "Método estándar de prueba para cribado por mallas de agregados finos y gruesos (NMX C 077 ONNCCE/ASTM C136)",
      "Método estándar de prueba para determinar la masa específica y la absorción de agregados gruesos (NMX C 164 ONNCCE/ASTM C127",
      "Método estándar de prueba para determinar la masa específica y la absorción de agregados finos (NMX C 165 ONNCCE/ASTM C128)",
      "Método estándar de prueba para determinar el contenido de humedad total de los agregados mediante secado (NMX C 166 /ASTM C566)",
      "Método estándar de prueba para determinar impurezas orgánicas en agregados finos para concreto (NMX C 088/ASTM C40)",
    ]
  },
  {
    "nombre": "SISTEMAS LIGEROS Y FIJACIÓN DIRECTA",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificación de técnicos con experiencia en el área de sistemas de fijación garantizando un personal con conocimientos en temas de métodos constructivos, generando alternativas más eficientes y sustentables.",
    "dirigido": "La certificación está dirigida al personal que se dedica a la fijación y aplicación de sistemas ligeros en la construcción.",
    "temario": [
      "Módulo 1: Sistemas de construcción para interiores",
      "Módulo 2: Sistemas de construcción para exteriores",
      "Módulo 3: Productos comercializados",
      "Módulo 4: Sistemas de fijación"
    ]
  },
  {
    "nombre": "TÉCNICO ESPECIALISTA EN TECNOLOGÍA DE ADITIVOS",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificar al personal de la industria de la construcción que realiza pruebas de desempeño del concreto usando aditivos, para la comprensión de los efectos que se pueden obtener y puedan aplicar el conocimiento a las pruebas de campo y en la obra de construcción.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que utiliza aditivos para implementar concreto de alta vanguardia y comprenda los efectos que brinda el usar aditivos en el concreto.",
    "temario": [
      "Módulo 1: Aditivos para concreto",
      "Definición",
      "Generalidades",
      "Uso de los aditivos",
      "Beneficios",
      "Clasificación",
      "Módulo 2: Efecto de los aditivos para concreto",
      "Efectos previsibles",
      "En estado fresco",
      "En estado endurecido",
      "Efecto de la dosificación",
      "Efectos del concreto con puzolanas y reductores de agua",
      "Efectos útiles e indeseables",
      "Muestreo de aditivos",
      "Pruebas de verificación",
      "Pruebas de selección",
      "Pruebas de calidad",
      "Pruebas de comportamiento",
      "Métodos de ensayo",
      "Marcado, etiquetado y embalaje"
    ]
  },
  {
    "nombre": "BOMBEO DE CONCRETO",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificar al personal involucrado en sistemas de aplicación de concreto mediante bombeo, garantizando una operación segura y eficaz en obras de construcción.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que esté involucrado en la colocación de concreto por medio de bombeo.",
    "temario": [
      "Módulo 1: Colocación de concreto por medio de bombeo",
      "Equipo de bombeo",
      "Colocación de plumas",
      "Tuberías y accesorios",
      "Líneas de colocación rígida, secciones curvas y codos",
      "Sistemas de conexión",
      "Sistemas flexible",
      "Accesorios del sistema",
      "Proporcionamiento de concreto bombeable",
      "Mezclas de prueba",
      "Prueba de bombeo",
      "Practicas de campo",
      "Tubería de colocación",
      "Colocación de plumas motorizadas",
      "Control de campo",
      "Módulo 2: Seguridad en bombeo",
      "Seguridad general",
      "Operación segura",
      "Equipo de seguridad",
      "Comprobación e inspección",
      "Información previa",
      "Medidas de seguridad",
      "Conocimientos de operador",
      "Aspectos técnicos",
      "Bombeo de lechada",
      "Bombas de línea",
      "Recomendaciones",
      "Bombeo a gran altura",
      "Aire comprimido para limpieza",
      "Plumas",
      "Terminación del vertido"
    ]
  },
  {
    "nombre": "TÉCNICO ESPECIALISTA EN TÓPICOS DE POSTENSADO",
    "duracion": "90-120 min por módulo",
    "objetivo": "Promover la certificación del personal que realiza y verifica los sistemas postensados que se aplican al concreto, enfocado en la situación actual en pisos postensados.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que esté involucrado en sistemas de postensado en la industria de la construcción.",
    "temario": [
      "Aspectos fundamentales del postensado",
      "Situación actual en pisos",
      "Soluciones de sistema de pisos postensados",
      "Parte 2:",
      "Análisis y diseño estructural de pisos postensados",
      "Normativa",
      "Pisos postensados para control de agrietamientos",
      "Tipos de carga",
      "Fuerzas de presfuerzo",
      "Análisis estructural",
      "Componentes del sistema",
      "Procedimiento constructivo",
      "Esquema económico",
      "Investigación y desarrollo",
    ]
  },
  {
    "nombre": "FUNDAMENTOS DEL CONCRETO",
    "duracion": "90-120 min por módulo",
    "objetivo": "Proporcionar al personal de la industria de la construcción información esencial sobre la tecnología del concreto, durabilidad y posibles fallas que se puedan presentar para aplicarlo en las pruebas, colocación y evaluación de concreto.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que esté involucrado en la industria de la construcción.",
    "temario": [
      "Concreto recién mezclado",
      "Concreto endurecido",
      "Durabilidad",
      "Cementantes del concreto hidráulico",
      "Selección del cemento apropiado",
      "Usos y efectos de la puzolana"
    ]
  },
  {
    "nombre": "DURABILIDAD",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificar a los trabajadores dedicados a procesos de autoconstrucción para que apliquen los fundamentos principales para la construcción de una vivienda, usando materiales de vanguardia.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que esté involucrado en la industria de la construcción.",
    "temario": [
      "Definición",
      "Antecedentes",
      "Causas de durabilidad inadecuada",
      "Calidad del concreto",
      "Selección del cemento apropiado",
      "Condiciones de exposición y servicio"
    ]
  },
  {
    "nombre": "PATOLOGÍAS DEL CONCRETO",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificar a los trabajadores dedicados a procesos de autoconstrucción para que apliquen los fundamentos principales para la construcción de una vivienda, usando materiales de vanguardia.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que esté involucrado en la industria de la construcción.",
    "temario": [
      "Reconocimiento y evaluación de riesgos (patologías)",
      "Factores intrínsecos",
      "Aspectos propios de las estructuras",
      "Aspecto inherentes de los agregados",
      "Aspectos relativos al cemento",
      "Deficiencias constructivas",
      "Factores extrínsecos",
      "Condiciones climáticas",
      "Acciones del medio de contacto (agentes dañinos o perjudiciales)",
      "Efecto en las condiciones de servicio"
    ]
  },
  {
    "nombre": "TÉCNICO EN PROCESOS GENERALES DE AUTOCONSTRUCCIÓN",
    "duracion": "90-120 min por módulo",
    "objetivo": "Certificar a los trabajadores dedicados a procesos de autoconstrucción para que apliquen los fundamentos principales para la construcción de una vivienda, usando materiales de vanguardia.",
    "dirigido": "A los técnico, ingenieros, arquitectos, a todo el personal que esté involucrado en la industria de la autoconstrucción.",
    "temario": [
      "Modulo 1: Preliminares",
      "Módulo 2: Cimientos",
      "Módulo 3: Muros",
      "Módulo 4: Techos, escaleras y cápsulas"
    ]
  }
];

export default function ModalidadEnLinea() {
  const [useCurso, setCurso] = useState("TÉCNICO ESPECIALISTA EN TÓPICOS DE DURABILIDAD");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100 my-20">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> MODALIDAD EN LÍNEA
          </h1>
          <p className="text-xs pl-5 mb-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("TÉCNICO ESPECIALISTA EN TÓPICOS DE DURABILIDAD")} className={`font-montserrat btn ${useCurso === "TÉCNICO ESPECIALISTA EN TÓPICOS DE DURABILIDAD" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO ESPECIALISTA EN TÓPICOS DE DURABILIDAD
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA CÁLIDO")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA CÁLIDO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA CÁLIDO
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA FRÍO")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA FRÍO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA FRÍO
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN PRUEBAS DE CAMPO DE CONCRETO – GRADO I")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PRUEBAS DE CAMPO DE CONCRETO – GRADO I" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO EN PRUEBAS DE CAMPO DE CONCRETO – GRADO I
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN PRUEBAS DE RESISTENCIA")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PRUEBAS DE RESISTENCIA" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO EN PRUEBAS DE RESISTENCIA
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN PRUEBAS DE AGREGADOS NIVEL I")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PRUEBAS DE AGREGADOS NIVEL I" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO EN PRUEBAS DE AGREGADOS NIVEL-I
                </h3>
                <h3 onClick={() => setCurso("SISTEMAS LIGEROS Y FIJACIÓN DIRECTA")} className={`font-montserrat btn ${useCurso === "SISTEMAS LIGEROS Y FIJACIÓN DIRECTA" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                SISTEMAS LIGEROS Y FIJACIÓN DIRECTA
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO ESPECIALISTA EN TECNOLOGÍA DE ADITIVOS")} className={`font-montserrat btn ${useCurso === "TÉCNICO ESPECIALISTA EN TECNOLOGÍA DE ADITIVOS" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO ESPECIALISTA EN TECNOLOGÍA DE ADITIVOS
                </h3>
                <h3 onClick={() => setCurso("BOMBEO DE CONCRETO")} className={`font-montserrat btn ${useCurso === "BOMBEO DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                BOMBEO DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO ESPECIALISTA EN TÓPICOS DE POSTENSADO")} className={`font-montserrat btn ${useCurso === "TÉCNICO ESPECIALISTA EN TÓPICOS DE POSTENSADO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO ESPECIALISTA EN TÓPICOS DE POSTENSADO
                </h3>
                <h3 onClick={() => setCurso("FUNDAMENTOS DEL CONCRETO")} className={`font-montserrat btn ${useCurso === "FUNDAMENTOS DEL CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                FUNDAMENTOS DEL CONCRETO
                </h3>
                <h3 onClick={() => setCurso("DURABILIDAD")} className={`font-montserrat btn ${useCurso === "DURABILIDAD" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                DURABILIDAD
                </h3>
                <h3 onClick={() => setCurso("PATOLOGÍAS DEL CONCRETO")} className={`font-montserrat btn ${useCurso === "PATOLOGÍAS DEL CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                PATOLOGÍAS DEL CONCRETO
                </h3>
                <h3 onClick={() => setCurso("TÉCNICO EN PROCESOS GENERALES DE AUTOCONSTRUCCIÓN")} className={`font-montserrat btn ${useCurso === "TÉCNICO EN PROCESOS GENERALES DE AUTOCONSTRUCCIÓN" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TÉCNICO EN PROCESOS GENERALES DE AUTOCONSTRUCCIÓN
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "TÉCNICO ESPECIALISTA EN TÓPICOS DE DURABILIDAD" && <Curso curso={cursos[0]} />}
              {useCurso === "TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA CÁLIDO" && <Curso curso={cursos[1]} />}
              {useCurso === "TÉCNICO EN COLOCACIÓN DE CONCRETO EN CLIMA FRÍO" && <Curso curso={cursos[2]} />}
              {useCurso === "TÉCNICO EN PRUEBAS DE CAMPO DE CONCRETO – GRADO I" && <Curso curso={cursos[3]} />}
              {useCurso === "TÉCNICO EN PRUEBAS DE RESISTENCIA" && <Curso curso={cursos[4]} />}
              {useCurso === "TÉCNICO EN PRUEBAS DE AGREGADOS NIVEL I" && <Curso curso={cursos[5]} />}
              {useCurso === "SISTEMAS LIGEROS Y FIJACIÓN DIRECTA" && <Curso curso={cursos[6]} />}
              {useCurso === "TÉCNICO ESPECIALISTA EN TECNOLOGÍA DE ADITIVOS" && <Curso curso={cursos[7]} />}
              {useCurso === "BOMBEO DE CONCRETO" && <Curso curso={cursos[8]} />}
              {useCurso === "TÉCNICO ESPECIALISTA EN TÓPICOS DE POSTENSADO" && <Curso curso={cursos[9]} />}
              {useCurso === "FUNDAMENTOS DEL CONCRETO" && <Curso curso={cursos[10]} />}
              {useCurso === "DURABILIDAD" && <Curso curso={cursos[11]} />}
              {useCurso === "PATOLOGÍAS DEL CONCRETO" && <Curso curso={cursos[12]} />}
              {useCurso === "TÉCNICO EN PROCESOS GENERALES DE AUTOCONSTRUCCIÓN" && <Curso curso={cursos[13]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
