"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "FORMACIÓN DE AUDITORES INTERNOS NORMA ISO 19011:2001",
    "duracion": "8 Horas",
    "objetivo": "Al terminar el curso, el participante conocerá los lineamientos para la realización de auditorías internas a sistemas de gestión de la calidad, las etapas del proceso de auditoría, así como su utilidad en el desarrollo de la empresa.",
    "dirigido": "Al personal de laboratorios en la gestión y realización de auditorias para al verificación de la calidad.",
    "temario": [
      "INTRODUCCIÓN A LAS AUDITORÍAS DE SISTEMAS DE GESTIÓN",
      "(Incluye comentarios de los problemas más comunes en las auditorías).",
      "TÉRMINOS, DEFINICIONES Y PRINCIPIOS DE AUDITORÍAS",
      "Ejercicios. Identificación de no conformidades, CASOS PRÁCTICOS CON ENFOQUE EN LA NORMA NMX-EC-17025-IMNC-2006 (ISO/IEC 17025:2005)",
      "GESTIÓN DE UN PROGRAMA DE AUDITORÍA",
      "Ejercicios. Identificación de no conformidades, CASOS PRÁCTICOS CON ENFOQUE EN LA NORMA NMX-EC-17025-IMNC-2006 (ISO/IEC 17025:2005).",
      "REALIZACIÓN DE UNA AUDITORÍA",
      "(Inicio, preparación, realización, informe, finalización y seguimiento de la auditoría)",
      "Ejercicios. Plan de auditoría, listas de verificación, informe. etc.",
      "Simulacro de auditoría",
      "COMPETENCIA Y EVALUACIÓN DE LOS AUDITORES",
      "(Establecimiento de los criterios, selección del método apropiado y realización de la evaluación del auditor, así como el mantenimiento y mejora de la competencia de los auditores)",
    ]
  },
  {
    "nombre": "ESTIMACIÓN DE LA INCERTIDUMBRE EN LA MEDICIÓN EN MÉTODOS DE PRUEBA EN EL SECTOR DE LA CONSTRUCCIÓN",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar a los participantes los conceptos básicos sobre la estimación de la incertidumbre de los resultados en las mediciones de métodos de prueba. Explicar la metodología de la estimación de la incertidumbre con base a la norma NMX-CH-140 “Guía para la expresión de incertidumbre en las mediciones”. Determinar la incertidumbre del resultado de las mediciones involucradas en los ensayes básicos del área de construcción. Unificar los criterios de aplicación de la estimación de la incertidumbre entre los participantes.",
    "dirigido": "Al personal que analiza los resultados del personal que realiza las pruebas de laboratorio.",
    "temario": [
      "Importancia de la medición",
      "Conceptos metrológicos generales",
      "Incertidumbre (fuentes de incertidumbre, como evaluarla, modelo de medición)",
      "Metodología para la expresión de la incertidumbre en las mediciones de acuerdo a la NMX-CH-140-IMNC-2002 (descripción del mensurando y de su medición, relación matemática, incertidumbre normal, incertidumbre tipo a, incertidumbre tipo b, coeficientes de sensibilidad, incertidumbre combinada, incertidumbre expandida, factor de cobertura, grados de libertad)",
      "Ejemplos de la expresión de la incertidumbre del resultado de la medición en métodos de prueba de cemento, concreto, agregados y geotecnia"
    ]
  },
  {
    "nombre": "TRATAMIENTO DE NO CONFORMIDADES, ACCIONES CORRECTIVAS Y PREVENTIVAS",
    "duracion": "8 Horas",
    "objetivo": "Promover una sistemática de mejora continua PARA tratamiento de las no conformidades. Tomar consciencia de los riesgos, tomando una política de anticipación en el tratamiento de no conformidades de gestión de reclamaciones. Conocer el correcto tratamiento de las no conformidades en relación al Sistema de Calidad",
    "dirigido": "Al personal de laboratorios que pueden aplicar mejoras de acuerdo a las practicas que se tienen en una laboratorio y brindar acciones de prevención y seguridad al sitio de trabajo.",
    "temario": [
      "Introducción",
      "Técnicas de identificación de la causa raíz",
      "Herramientas básicas de análisis",
      "Identificación de soluciones posibles",
      "Evaluación del impacto",
      "Implementación y mantenimiento de la solución",
      "Evaluación de la eficacia"
    ]
  },
  {
    "nombre": "ASEGURAMIENTO DE LA VALIDEZ DE LOS RESULTADOS",
    "duracion": "8 Horas",
    "objetivo": "Proporcionar a los participantes diversas formas de asegurar la calidad de los resultados de los ensayos a través de la aplicación de herramientas estadísticas, ejemplificando casos prácticos de ensayos en el sector de la construcción.",
    "dirigido": "Al personal que verifica las pruebas para verificar la calidad de los productos, así avalando la correcta ejecución de los mismos.",
    "temario": [
      "Conceptos Generales sobre los procesos de medición, error, estadística",
      "Requisitos solicitados por la norma NMX-EC-17025-IMNC-2006 y, demás documentos a cumplir ante la EMA relacionados con el aseguramiento de la calidad de los resultados de los ensayos",
      "Aplicación de los ensayos de aptitud como parte del aseguramiento de la calidad",
      "Criterios predefinidos de aceptación y rechazo para los datos de control de calidad",
      "Herramientas estadísticas y su aplicación en el aseguramiento de la calidad de los resultados de la medición:",
      "Cartas de control",
      "Análisis de varianza",
      "T-student",
      "Tstudios r y R (Conforme a la norma ISO 5725-2 y su uso en a la validación de métodos y estimación de la incertidumbre de la medición)",
      "Análisis de la diferencia de resistencia a la compresión de cilindros compañeros de acuerdo al ACI 214",
      "Interpretación de los valores de precisión de acuerdo a la normatividad ASTM",
      "Ejemplos Prácticos para ensayos realizados en el sector de la construcción: concreto, agregados, suelos, cemento, etc.",
    ]
  },
  {
    "nombre": "ADMINISTRACIÓN DE UN LABORATORIO CON BASE A LA NORMA 17025",
    "duracion": "8 Horas",
    "objetivo": "Al terminar el curso, el participante conocerá los requisitos que deben ser cumplidos de acuerdo a la norma NMX-EC-17025-IMNC-2006 “Requisitos generales para la competencia de los laboratorios de ensayo y de calibración” y, aquellos adicionales solicitados para obtener y mantener la acreditación.",
    "dirigido": "Al personal de laboratorios de calidad que realizan pruebas al concreto y puedan realizarse de acuerdo a la normativa.",
    "temario": [
      "INTRODUCCIÓN",
      "Presentación",
      "Conceptos Básicos relativos a la calidad, metrología y la acreditación",
      "EVALUACIÓN DE LOS REQUISITOS DE LA NORMA NMX-EC-17025-IMNC-2006",
      "Parte de la Gestión",
      "Parte Técnica",
      "PROCESO DE LA ACREDITACIÓN",
      "Requisitos adicionales que los laboratorios deben conocer y aplicar para obtener la acreditación",
      "Políticas de trazabilidad, incertidumbre y ensayos de aptitud",
      "Criterios de aplicación de la norma (actualizados)",
      "Listas de verificación",
      "Ley Federal sobre Metrología y Normalización y su Reglamento",
      "Procedimientos de la propia entidad",
      "EJERCICIOS PRÁCTICOS",
      "EXAMEN FINAL",
    ]
  }
];

export default function CursosImcycCalidad() {
  const [useCurso, setCurso] = useState("FORMACIÓN DE AUDITORES INTERNOS NORMA ISO 19011:2001");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100 my-20">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> CURSOS IMCYC CALIDAD
          </h1>
          <p className="text-xs pl-5 mb-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("FORMACIÓN DE AUDITORES INTERNOS NORMA ISO 19011:2001")} className={`font-montserrat btn ${useCurso === "FORMACIÓN DE AUDITORES INTERNOS NORMA ISO 19011:2001" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                FORMACIÓN DE AUDITORES INTERNOS NORMA ISO 19011:2001
                </h3>
                <h3 onClick={() => setCurso("ESTIMACIÓN DE LA INCERTIDUMBRE EN LA MEDICIÓN EN MÉTODOS DE PRUEBA EN EL SECTOR DE LA CONSTRUCCIÓN")} className={`font-montserrat btn ${useCurso === "ESTIMACIÓN DE LA INCERTIDUMBRE EN LA MEDICIÓN EN MÉTODOS DE PRUEBA EN EL SECTOR DE LA CONSTRUCCIÓN" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                ESTIMACIÓN DE LA INCERTIDUMBRE EN LA MEDICIÓN EN MÉTODOS DE PRUEBA EN EL SECTOR DE LA CONSTRUCCIÓN
                </h3>
                <h3 onClick={() => setCurso("TRATAMIENTO DE NO CONFORMIDADES, ACCIONES CORRECTIVAS Y PREVENTIVAS")} className={`font-montserrat btn ${useCurso === "TRATAMIENTO DE NO CONFORMIDADES, ACCIONES CORRECTIVAS Y PREVENTIVAS" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TRATAMIENTO DE NO CONFORMIDADES, ACCIONES CORRECTIVAS Y PREVENTIVAS
                </h3>
                <h3 onClick={() => setCurso("ASEGURAMIENTO DE LA VALIDEZ DE LOS RESULTADOS")} className={`font-montserrat btn ${useCurso === "ASEGURAMIENTO DE LA VALIDEZ DE LOS RESULTADOS" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center justify-between`}>
                ASEGURAMIENTO DE LA VALIDEZ DE LOS RESULTADOS
                </h3>
                <h3 onClick={() => setCurso("ADMINISTRACIÓN DE UN LABORATORIO CON BASE A LA NORMA 17025")} className={`font-montserrat btn ${useCurso === "ADMINISTRACIÓN DE UN LABORATORIO CON BASE A LA NORMA 17025" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                ADMINISTRACIÓN DE UN LABORATORIO CON BASE A LA NORMA 17025
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "FORMACIÓN DE AUDITORES INTERNOS NORMA ISO 19011:2001" && <Curso curso={cursos[0]} />}
              {useCurso === "ESTIMACIÓN DE LA INCERTIDUMBRE EN LA MEDICIÓN EN MÉTODOS DE PRUEBA EN EL SECTOR DE LA CONSTRUCCIÓN" && <Curso curso={cursos[1]} />}
              {useCurso === "TRATAMIENTO DE NO CONFORMIDADES, ACCIONES CORRECTIVAS Y PREVENTIVAS" && <Curso curso={cursos[2]} />}
              {useCurso === "ASEGURAMIENTO DE LA VALIDEZ DE LOS RESULTADOS" && <Curso curso={cursos[3]} />}
              {useCurso === "ADMINISTRACIÓN DE UN LABORATORIO CON BASE A LA NORMA 17025" && <Curso curso={cursos[4]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
