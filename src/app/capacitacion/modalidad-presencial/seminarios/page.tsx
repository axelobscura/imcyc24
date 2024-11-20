"use client"
import { useState } from "react";
import Curso from "@/app/components/Curso";
import { FaRegUserCircle } from "react-icons/fa";

const cursos = [
  {
    "nombre": "NUEVAS TÉCNICAS EN EL DISEÑO Y CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO",
    "duracion": "4 horas de duración",
    "objetivo": "El participante conocerá las técnicas novedosas acerca del diseño y la construcción de pavimentos de concreto para poder aplicarlo en la obra.",
    "dirigido": "Personal interesado en los aspectos novedosos acerca del diseño de pavimentos de concreto, construcción, evaluación y diseño de pisos."
  },
  {
    "nombre": "DISEÑO POR DURABILIDAD Y PATOLOGÍAS EN LAS ESTRUCTURAS DE CONCRETO",
    "duracion": "4 horas de duración",
    "objetivo": "El personal que asista al seminario conocerá los métodos y técnicas para la predicción de durabilidad de estructuras de concreto, así como las patologías que se pueden presentar, se establecerán algunas soluciones para incrementar el tiempo de servicio de elementos estructurales.",
    "dirigido": "Personal interesado en las patologías que se presentan en el concreto, así como ingenieros, arquitectos y técnicos de la industria de construcción y evaluación del concreto."
  },
  {
    "nombre": "EVALUACIÓN Y DIAGNOSTICO INTEGRAL DEL NIVEL DE DAÑO EN LAS ESTRUCTURAS DE CONCRETO (PND)",
    "duracion": "4 horas de duración",
    "objetivo": "Conocer los sistemas de evaluación de estructuras de concreto<br/>Comprender de que consta el diagnostico integral acerca de los daños que se presentan en las estructuras de concreto<br/>Conocer las pruebas no destructivas que se tienen en la industria del concreto",
    "dirigido": "Personal interesado en temas con relación a evaluación y diagnósticos de nivel de daño de estructuras de concreto, para poder realizar las pruebas no destructivas."
  },
  {
    "nombre": "EVALUACIÓN DE ESTRUCTURAS DE CONCRETO Y EL ESTADO DEL ARTE EN SUS TÉCNICAS DE REPARACIÓN",
    "duracion": "4 horas de duración",
    "objetivo": "Conocer las patologías que se presentan en el concreto y las medidas de corrección<br/>Comprender como se realizar el diagnostico y la corrección de los daños<br/>Identificar los materiales para la reparación, refuerzo y protección<br/>Conocer los procedimientos de reparación, refuerzo y protección para el mantenimiento de las estructuras",
    "dirigido": "Personal interesado en temas con relación a evaluación y reparación de fallas o daños a las estructuras de concreto, para poder realizar las pruebas no destructivas.",
    "temario": [
      "Daños en el concreto armado",
      "Patología",
      "Apreciación de los daños en el concreto y medidas de corrección",
      "Guía para el diagnóstico y la corrección de problemas",
      "Trabajos de saneamiento",
      "Proceso de reparación",
      "Preparación del soporte del concreto",
      "Métodos para el tratamiento previo",
      "Preparación y acondicionamiento de superficies",
      "Limpieza y reparación del acero de refuerzo",
      "Acondicionamiento de bordes y de superficies",
      "Medidas adicionales de protección",
      "Materiales para reparación, refuerzo y protección",
      "Procedimientos de reparación y refuerzo de estructuras",
      "Protección y mantenimiento de las superficies de concreto"
    ]
  },
  {
    "nombre": "CRITERIOS DE EVALUACIÓN PARA LOS LABORATORIOS DE ENSAYO",
    "duracion": "4 horas de duración",
    "objetivo": "Identificar los criterios que se marcan para evaluar laboratorios de concreto para avalar la calidad e integridad del personal que realiza las pruebas.",
    "dirigido": "Al personal que realiza y analiza los resultados de pruebas de laboratorio."
  },
  {
    "nombre": "CAUSAS, EVALUACIÓN Y REPARACIÓN DE GRIETAS EN ESTRUCTURAS DE CONCRETO",
    "duracion": "4 horas de duración",
    "objetivo": "Identificar los mecanismos de formación de grietas en el concreto<br/>Presentar como controlar el agrietamiento debido a las diferentes causas<br/>Reconocer los efectos del agrietamiento a largo plazo",
    "dirigido": "Personal interesado en temas con relación a evaluación y reparación de fallas o daños a las estructuras de concreto, para poder realizar las pruebas no destructivas.",
    "temario": [
      "Mecanismo de grietas en el concreto",
      "Micro fisuras por compresión",
      "Fracturas",
      "Control de agrietamiento debido a contracción por secado",
      "Causas del agrietamiento debido a contracción por secado",
      "Control del agrietamiento debido a contracción por secado",
      "Concreto de contracción compensada",
      "Control del agrietamiento en elementos sujetos a flexión",
      "Ancho de las grietas tolerables en relación a las condiciones de exposición",
      "Agrietamiento en concreto presforzado",
      "Agrietamiento por tensión",
      "Efectos del agrietamiento a largo plazo",
      "Efectos de cargas a largo plazo",
      "Efectos ambientales",
      "Agregados y otros efectos",
      "El uso de polímeros para el mejoramiento de las características de agrietamiento",
      "Control del agrietamiento en recubrimientos",
      "Recubrimientos de concreto con fibras, materiales epóxidos y otros polímeros",
      "Control del agrietamiento en concreto masivo",
      "Métodos para el control de agrietamiento",
      "Diseño, construcción y operación de concretos masivos",
      "Control del agrietamiento con prácticas apropiadas de construcción"
    ]
  },
  {
    "nombre": "EXPLORACIÓN Y EVALUACIÓN INTEGRAL DE BANCOS DE AGREGADOS PARA CONCRETO",
    "duracion": "4 horas de duración",
    "objetivo": "Dar a conocer los procesos de exploración de bancos de agregados utilizados para elaboración de concreto. Presentar la evaluación de bancos de agregados para verificación de calidad de los materiales.",
    "dirigido": "Personal interesado en temas de exploración y evaluación de los bancos de agregados que se usan en la industria de la construcción."
  },
  {
    "nombre": "TECNOLOGÍA Y PATOLOGÍA DEL CONCRETO PARA LA INDUSTRIA MINERA",
    "duracion": "4 horas de duración",
    "objetivo": "Identificar las fallas que puedan ocurrirle al concreto en la industria de la minería.<br/>Conocer los fundamentos básicos de tecnología de concreto aplicada a la industria minera",
    "dirigido": "Personal interesado en temas con relación a las fallas del concreto en la industria minera."
  },
  {
    "nombre": "NUEVAS TECNOLOGÍAS EN MACROFIBRAS DE ALTO DESEMPEÑO Y SU EVALUACIÓN TÉCNICA",
    "duracion": "4 horas de duración",
    "objetivo": "Identificar tecnologías novedosas en el uso de macrofibras en la industria del concreto de alto desempeño.<br/>Reconocer la evaluación técnica que se realiza al concreto de alto desempeño con fibras",
    "dirigido": "Personal interesado en temas sobre las novedosas tecnologías en uso de macrofibras de alto desempeño en el conceto y evaluación de las mismas."
  },
  {
    "nombre": "LAS NUEVAS TENDENCIAS EN LA CONSTRUCCIÓN/ EL ESTADO DEL ARTE DE FIBROCEMENTO",
    "duracion": "4 horas de duración",
    "objetivo": "Reconocer las nuevas tendencias que se realizan en la industria de la construcción para poder aplicarlas<br/>Identificar las generalidades sobre fibrocemento aplicado en la construcción",
    "dirigido": "Personal interesado en temas de nuevas tendencias en la industria de la construcción, estudiantes, ingenieros, arquitectos y técnicos de la construcción."
  }
];

export default function Seminarios() {
  const [useCurso, setCurso] = useState("NUEVAS TÉCNICAS EN EL DISEÑO Y CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO");
  return (
    <div>
      <div className="grid grid-rows-[1fr] p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/pavimentos.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] justify-start z-0 mx-auto max-w-screen-xl text-gray-100">
          <h1 className="font-montserrat text-2xl uppercase mt-14 p-5 font-light flex items-center pb-3">
            <FaRegUserCircle className="mr-2" /> SEMINARIOS IMCYC
          </h1>
          <p className="text-xs pl-5 mb-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-3">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <h3 onClick={() => setCurso("NUEVAS TÉCNICAS EN EL DISEÑO Y CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "NUEVAS TÉCNICAS EN EL DISEÑO Y CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                NUEVAS TÉCNICAS EN EL DISEÑO Y CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("DISEÑO POR DURABILIDAD Y PATOLOGÍAS EN LAS ESTRUCTURAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "DISEÑO POR DURABILIDAD Y PATOLOGÍAS EN LAS ESTRUCTURAS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                DISEÑO POR DURABILIDAD Y PATOLOGÍAS EN LAS ESTRUCTURAS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("EVALUACIÓN Y DIAGNOSTICO INTEGRAL DEL NIVEL DE DAÑO EN LAS ESTRUCTURAS DE CONCRETO (PND)")} className={`font-montserrat btn ${useCurso === "EVALUACIÓN Y DIAGNOSTICO INTEGRAL DEL NIVEL DE DAÑO EN LAS ESTRUCTURAS DE CONCRETO (PND)" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                EVALUACIÓN Y DIAGNOSTICO INTEGRAL DEL NIVEL DE DAÑO EN LAS ESTRUCTURAS DE CONCRETO (PND)
                </h3>
                <h3 onClick={() => setCurso("EVALUACIÓN DE ESTRUCTURAS DE CONCRETO Y EL ESTADO DEL ARTE EN SUS TÉCNICAS DE REPARACIÓN")} className={`font-montserrat btn ${useCurso === "EVALUACIÓN DE ESTRUCTURAS DE CONCRETO Y EL ESTADO DEL ARTE EN SUS TÉCNICAS DE REPARACIÓN" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                EVALUACIÓN DE ESTRUCTURAS DE CONCRETO Y EL ESTADO DEL ARTE EN SUS TÉCNICAS DE REPARACIÓN
                </h3>
                <h3 onClick={() => setCurso("CRITERIOS DE EVALUACIÓN PARA LOS LABORATORIOS DE ENSAYO")} className={`font-montserrat btn ${useCurso === "CRITERIOS DE EVALUACIÓN PARA LOS LABORATORIOS DE ENSAYO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                CRITERIOS DE EVALUACIÓN PARA LOS LABORATORIOS DE ENSAYO
                </h3>
                <h3 onClick={() => setCurso("CAUSAS, EVALUACIÓN Y REPARACIÓN DE GRIETAS EN ESTRUCTURAS DE CONCRETO")} className={`font-montserrat btn ${useCurso === "CAUSAS, EVALUACIÓN Y REPARACIÓN DE GRIETAS EN ESTRUCTURAS DE CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                CAUSAS, EVALUACIÓN Y REPARACIÓN DE GRIETAS EN ESTRUCTURAS DE CONCRETO
                </h3>
                <h3 onClick={() => setCurso("EXPLORACIÓN Y EVALUACIÓN INTEGRAL DE BANCOS DE AGREGADOS PARA CONCRETO")} className={`font-montserrat btn ${useCurso === "EXPLORACIÓN Y EVALUACIÓN INTEGRAL DE BANCOS DE AGREGADOS PARA CONCRETO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                EXPLORACIÓN Y EVALUACIÓN INTEGRAL DE BANCOS DE AGREGADOS PARA CONCRETO
                </h3>
                <h3 onClick={() => setCurso("TECNOLOGÍA Y PATOLOGÍA DEL CONCRETO PARA LA INDUSTRIA MINERA")} className={`font-montserrat btn ${useCurso === "TECNOLOGÍA Y PATOLOGÍA DEL CONCRETO PARA LA INDUSTRIA MINERA" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                TECNOLOGÍA Y PATOLOGÍA DEL CONCRETO PARA LA INDUSTRIA MINERA
                </h3>
                <h3 onClick={() => setCurso("NUEVAS TECNOLOGÍAS EN MACROFIBRAS DE ALTO DESEMPEÑO Y SU EVALUACIÓN TÉCNICA")} className={`font-montserrat btn ${useCurso === "NUEVAS TECNOLOGÍAS EN MACROFIBRAS DE ALTO DESEMPEÑO Y SU EVALUACIÓN TÉCNICA" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                NUEVAS TECNOLOGÍAS EN MACROFIBRAS DE ALTO DESEMPEÑO Y SU EVALUACIÓN TÉCNICA
                </h3>
                <h3 onClick={() => setCurso("LAS NUEVAS TENDENCIAS EN LA CONSTRUCCIÓN EL ESTADO DEL ARTE DE FIBROCEMENTO")} className={`font-montserrat btn ${useCurso === "LAS NUEVAS TENDENCIAS EN LA CONSTRUCCIÓN EL ESTADO DEL ARTE DE FIBROCEMENTO" ? "bg-gray-100 text-gray-900 font-bold" : "bg-gray-900"} hover:bg-slate-500 p-3 text-left text-md cursor-pointer uppercase flex items-center`}>
                LAS NUEVAS TENDENCIAS EN LA CONSTRUCCIÓN EL ESTADO DEL ARTE DE FIBROCEMENTO
                </h3>
              </div>
            </div>
            <div>
              {useCurso === "NUEVAS TÉCNICAS EN EL DISEÑO Y CONSTRUCCIÓN DE PAVIMENTOS DE CONCRETO" && <Curso curso={cursos[0]} />}
              {useCurso === "DISEÑO POR DURABILIDAD Y PATOLOGÍAS EN LAS ESTRUCTURAS DE CONCRETO" && <Curso curso={cursos[1]} />}
              {useCurso === "EVALUACIÓN Y DIAGNOSTICO INTEGRAL DEL NIVEL DE DAÑO EN LAS ESTRUCTURAS DE CONCRETO (PND)" && <Curso curso={cursos[2]} />}
              {useCurso === "EVALUACIÓN DE ESTRUCTURAS DE CONCRETO Y EL ESTADO DEL ARTE EN SUS TÉCNICAS DE REPARACIÓN" && <Curso curso={cursos[3]} />}
              {useCurso === "CRITERIOS DE EVALUACIÓN PARA LOS LABORATORIOS DE ENSAYO" && <Curso curso={cursos[4]} />}
              {useCurso === "CAUSAS, EVALUACIÓN Y REPARACIÓN DE GRIETAS EN ESTRUCTURAS DE CONCRETO" && <Curso curso={cursos[5]} />}
              {useCurso === "EXPLORACIÓN Y EVALUACIÓN INTEGRAL DE BANCOS DE AGREGADOS PARA CONCRETO" && <Curso curso={cursos[6]} />}
              {useCurso === "TECNOLOGÍA Y PATOLOGÍA DEL CONCRETO PARA LA INDUSTRIA MINERA" && <Curso curso={cursos[7]} />}
              {useCurso === "NUEVAS TECNOLOGÍAS EN MACROFIBRAS DE ALTO DESEMPEÑO Y SU EVALUACIÓN TÉCNICA" && <Curso curso={cursos[8]} />}
              {useCurso === "LAS NUEVAS TENDENCIAS EN LA CONSTRUCCIÓN EL ESTADO DEL ARTE DE FIBROCEMENTO" && <Curso curso={cursos[9]} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
