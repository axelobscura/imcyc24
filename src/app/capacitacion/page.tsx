import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

export default function Capacitacion() {
  return (
    <div>
      <div className="grid grid-rows-[1fr] items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/capacitacion.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] gap-8 z-0 mx-auto max-w-screen-xl text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5 mt-40">
            <div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-1 mb-3">
                <Link href="/capacitacion/modalidad-presencial" className="font-montserrat btn bg-slate-800 border border-slate-700 hover:bg-slate-500 p-1 py-3 text-left px-3 font-bold text-md flex items-center">
                  <CiCirclePlus size={30} className="mr-3" /> MODALIDAD PRESENCIAL
                </Link>
                <Link href="/capacitacion/modalidad-en-linea" className="font-montserrat btn bg-slate-800 border border-slate-700 hover:bg-slate-500 p-1 py-3 text-left px-3 font-bold text-md flex items-center">
                  <CiCirclePlus size={30} className="mr-3" /> MODALIDAD EN LÍNEA
                </Link>
                <Link href="/capacitacion/profesores-imcyc" className="font-montserrat btn bg-slate-800 border border-slate-700 hover:bg-slate-500 p-1 py-3 text-left px-3 font-bold text-md flex items-center">
                  <CiCirclePlus size={30} className="mr-3" /> PROFESORES IMCYC
                </Link>
              </div>
            </div>
            <div className="bg-slate-900 p-5 border border-slate-700 bg-opacity-75">
              <h1 className="font-montserrat text-4xl uppercase pb-5 border-b border-gray-200">Capacitación IMCYC</h1>
              <p className="font-montserrat text-justify pt-5">
                <strong>
                  El IMCYC desarrolla un programa permanente de enseñanza y
                  capacitación
                </strong>
                , fomentando la actualización de profesionales y técnicos, con
                el fin de{" "}
                <strong>
                  promover el uso eficiente del cemento y el concreto en la rama
                  de la construcción
                </strong>
                , así como de coadyuvar con universidades e instituciones de
                educación superior en la mejoría del nivel educativo de
                estudiantes de licenciatura y postgrado.
                <br />
                <br />
                Bajo este esquema, se mantienen convenios con cámaras,
                federaciones, consejos, asociaciones, incluyendo universidades
                de México y el resto del mundo, principalmente de Latinoamérica,
                se ofrecen cursos, diplomados, programas de certificación,
                seminarios nacionales e internacionales, foros, simposios y
                congresos, con la elección de temáticas y contenidos pertinentes
                al desarrollo profesional de los participantes, con la selección
                de materiales bibliográficos de alto valor técnico y la
                participación de profesores, ponentes, conferencistas y
                profesionales destacados líderes en la teoría, la práctica del
                diseño, la investigación, todo lo anterior enfocado a la
                construcción con concreto.
                <br />
                <br />
                Los programas educativos del IMCYC se ofrecen en diversas
                modalidades que incluyen:
              </p>
              <br />
              <ul className="font-montserrat list-disc pl-10">
                <li>
                  <strong>
                    Cursos abiertos que se ofrecen al público en general y se
                    imparten en las instalaciones del IMCYC.
                  </strong>
                </li>
                <li>
                  <strong>
                    Cursos y Seminarios cerrados diseñados conforme a las
                    necesidades de empresas e instituciones.
                  </strong>
                </li>
                <li>
                  <strong>Cursos a distancia.</strong>
                </li>
                <li>
                  <strong>
                    Cursos en asociación con organismos, universidades y otras
                    instituciones.
                  </strong>
                </li>
                <li>
                  <strong>
                    Cursos para certificación abiertos y cerrados.
                  </strong>
                </li>
                <li>
                  <strong>Seminarios Nacionales e Internacionales.</strong>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
