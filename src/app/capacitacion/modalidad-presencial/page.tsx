import Link from "next/link";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ModalidadPresencial() {
  return (
    <div>
      <div className="grid grid-rows-[1fr] items-center justify-items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-rows-[1fr] gap-8 z-0 mx-auto max-w-screen-xl text-white my-20">
          <h1 className="font-montserrat text-2xl font-bold uppercase mt-10 pt-10 pl-5 flex font-light">
          <FaRegArrowAltCircleRight size={30} className="mr-3" />  Modalidad Presencial
          </h1>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10 pl-5">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <Link href="/capacitacion/modalidad-presencial/certificaciones-aci" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  CERTIFICACIONES ACI
                  <p className="text-xs">American Concrete Institute</p>
                </Link>
                <Link href="/capacitacion/modalidad-presencial/certificaciones-imcyc" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  CERTIFICACIONES IMCYC
                  <p className="text-xs">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                </Link>
                <Link href="/capacitacion/modalidad-presencial/cursos-imcyc" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  CURSOS IMCYC
                  <p className="text-xs">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                </Link>
                <Link href="/capacitacion/modalidad-presencial/cursos-imcyc-calidad" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  CURSOS IMCYC - CALIDAD
                  <p className="text-xs">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                </Link>
                <Link href="/capacitacion/modalidad-presencial/talleres" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  TALLERES
                </Link>
                <Link href="/capacitacion/modalidad-presencial/diplomados" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  DIPLOMADOS
                </Link>
                <Link href="/capacitacion/modalidad-presencial/seminarios" className="font-montserrat btn bg-slate-900 bg-opacity-50 hover:bg-slate-500 p-3 text-left text-xl">
                  SEMINARIOS
                </Link>
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
            <div className="bg-black bg-opacity-50 text-gray-100 px-10 py-10 border border-gray-900">
              <p className="font-montserrat text-justify">
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
                Bajo este esquema, <strong>se mantienen convenios con cámaras,
                federaciones, consejos, asociaciones, incluyendo universidades
                de México y el resto del mundo, principalmente de Latinoamérica,
                se ofrecen cursos, diplomados, programas de certificación,
                seminarios nacionales e internacionales, foros, simposios y
                congresos, con la elección de temáticas y contenidos pertinentes
                al desarrollo profesional de los participantes</strong>, con la selección
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
