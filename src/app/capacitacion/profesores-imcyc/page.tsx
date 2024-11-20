import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CardCertificados from "@/app/components/CardCertificados";
import { CardProfesor } from "@/app/components/CardProfesor";

const certificados = [
  {
    "titulo": "SISTEMA CONOCER / SEP",
    "descripcion": "DISEÑO E IMPARTICIÓN Y DE CURSOS EC-0217 / EC-0301",
    "imagen": "/certificados/conocer.jpg"
  },
  {
    "titulo": "AMERICAN CONCRETE INSTITUTE (ACI)",
    "descripcion": "TÉCNICO PARA PRUEBAS AL CONCRETO EN LA OBRA. GRADO I<br/>TÉCNICO EN PRUEBAS DE RESISTENCIA<br/>TÉCNICO EN PRUEBAS DE AGREGADOS<br/>SUPERVISOR ESPECIALIZADO EN OBRAS DE CONCRETO<br/>TÉCNICO Y ACABADOR DE SUPERFICIES PLANAS DE CONCRETO",
    "imagen": "/certificados/ACI.jpg"
  },
  {
    "titulo": "INSTITUTO MÉXICANO DEL CEMENTO Y DEL CONCRETO, A.C.",
    "descripcion": "TÉCNICO PARA PRUEBAS AL CONCRETO EN LA OBRA. GRADO I<br/>TÉCNICO EN PRUEBAS DE RESISTENCIA<br/>TÉCNICO EN PRUEBAS DE AGREGADOS<br/>SUPERVISOR ESPECIALIZADO EN OBRAS DE CONCRETO",
    "imagen": "/certificados/logo_imcyc.svg"
  }
];

const profesores = [
  {
    "nombre": "Dr. Roberto Uribe Afif",
    "imagen": "/profesores/uribe.jpg",
    "descripcion": "<span><ul className='list-disc'><li>Ing. Geólogo egresado de la UNAM</li><li>M en I, con especialidad en exploración de recursos energéticos del subsuelo (UNAM)</li><li>Dr. En Honoris Causa, Simón Bolívar</li><li>Ingeniero de proyecto de CFE durante 8 años</li><li>Director técnico para México y Latinoamérica en CEMEX México.</li><li>Director general del Instituto Mexicano Del Cemento Y del Concreto, A.C.</li></ul></span>",
    "certificado": "Certificado ante el<br/>CONOCER DISEÑO E IMPARTICIÓN DE CURSOS EC-0217 / EC-0301"
  },
  {
    "nombre": "Arq. José Antonio del Rosal",
    "imagen": "/profesores/antonio.jpg",
    "descripcion": "<span><p>Arquitecto egresado de la universidad tecnológica de México. Tiene estudios de maestría en dirección de proyectos en la división de estudios de posgrado de la misma universidad, del 2010 al 2012.</p><br/><p>Certificado por el ACI como:</p><br/><ul><li>Técnico y el acabador de superficies planas de concreto</li><li>Técnico para pruebas al concreto en la obra. Grado I</li><li>Técnico laboratorista nivel 1 y nivel 2</li><li>Supervisor especializado en obras de concreto</li></ul></span>",
    "certificado": "Certificado ante el<br/>CONOCER DISEÑO E IMPARTICIÓN DE CURSOS EC-0217 / EC-0301"
  },
  {
    "nombre": "Ing. Mario Hernández",
    "imagen": "/profesores/mario.jpg",
    "descripcion": "<span><p>Ing. Civil egresado de la Universidad Autónoma de Puebla, realizó su posgrado en la Universidad Autónoma de México.</p><br/><p>Examinador autorizado por el ACI en los programas:</p><br/><ul><li>Concrete Field Testing Technician - Grade I</li><li>Concrete Construction Special Inspector</li><li>Concrete Flatwork Finisher & Technician</li><li>Concrete Transportation Construction Inspector</li><li>Concrete Strength Testing Technician</li><li>Concrete Laboratory Testing Technician – Level 2</li><li>Aggregate Testing Technician – Level 1 & 2</li></ul></span>",
    "certificado": "Experto técnico de la EMA en Concreto, Agregados y Prefabricados"
  },
  {
    "nombre": "Ing. Elizabeth A. Dávila Flores",
    "imagen": "/profesores/elizabeth.jpg",
    "descripcion": "Profesor de la materia de Diseño de Estructuras",
    "certificado": "Certificado ante el<br/>CONOCER DISEÑO E IMPARTICIÓN DE CURSOS EC-0217 / EC-0301"
  },
  {
    "nombre": "Ing. Diana Zamora Godínez",
    "imagen": "/profesores/diana.jpg",
    "descripcion": "Profesor de la materia de Diseño de Estructuras",
    "certificado": ""
  },
  {
    "nombre": "Ing. Ángel Ponce",
    "imagen": "/profesores/angel.jpg",
    "descripcion": "Profesor de la materia de Diseño de Estructuras",
    "certificado": ""
  },
  {
    "nombre": "M.I. Raúl Bracamontes",
    "imagen": "/profesores/raul.jpg",
    "descripcion": "Profesor de la materia de Diseño de Estructuras",
    "certificado": "Lanzador certificado por el ACI vigencia hasta enero 16, 2021 Examinador internacional de concreto lanzado por parte de American Shotcrete Association"
  },
  {
    "nombre": "Ing. Ricardo Alatorre",
    "imagen": "/profesores/ricardo.jpg",
    "descripcion": "Profesor de la materia de Diseño de Estructuras",
    "certificado": "Lanzador certificado por el ACI vigencia hasta enero 16, 2021 Examinador internacional de concreto lanzado por parte de American Shotcrete Association"
  },
  {
    "nombre": "Ing. Óscar González A.",
    "imagen": "/profesores/oscar.jpg",
    "descripcion": "Profesor de la materia de Diseño de Estructuras",
    "certificado": ""
  }
]

export default function ProfesoresImcyc() {
  return (
    <div>
      <div className="grid grid-rows-[1fr] items-center justify-items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/bkgs/bkg1.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply bg-fixed z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 z-0 px-5 max-w-screen-xl items-start text-white">
          <h1 className="font-montserrat text-2xl uppercase mt-10 pt-10 mb-0 flex font-light">
            <FaRegArrowAltCircleRight size={30} className="mr-3" />  Profesores IMCYC
          </h1>
          <div className="grid grid-rows-[1fr] sm:grid-cols-[1fr_2fr] items-start gap-8 z-0 max-w-screen-xl text-white">
            <div>
              <h2 className="font-montserrat text-1xl font-light uppercase mt-10 mb-5 text-center">EL PERSONAL IMCYC QUE IMPARTE LAS CAPACITACIONES ESTA CERTIFICADO ANTE</h2>
              {certificados.map((cert, index) => (
                <div key={index}>
                  <CardCertificados titulo={cert.titulo} desc={cert.descripcion} imagen={cert.imagen} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-4">
              {profesores.map((prof, index) => (
                <div key={index}>
                  <CardProfesor nombre={prof.nombre} imagen={prof.imagen} certificado={prof.certificado} descripcion={prof.descripcion} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
