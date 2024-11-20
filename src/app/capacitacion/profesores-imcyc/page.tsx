import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ProfesoresImcyc() {
  return (
    <div>
      <div className="grid grid-rows-[1fr] items-center justify-items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/certificacion/bkg.jpeg')] bg-gray-900 bg-opacity-80 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 z-0 px-5 max-w-screen-xl items-start text-white">
          <h1 className="font-montserrat text-2xl uppercase mt-10 pt-10 mb-0 flex font-light">
            <FaRegArrowAltCircleRight size={30} className="mr-3" />  Profesores IMCYC
          </h1>
          <div className="grid grid-rows-[1fr] sm:grid-cols-[1fr_1fr] items-start gap-8 z-0 max-w-screen-xl text-white">
            <div>
              <h2 className="font-montserrat text-2xl font-bold uppercase mt-10">EL PERSONAL IMCYC QUE IMPARTE LAS CAPACITACIONES ESTA CERTIFICADO ANTE:</h2>
            </div>
            <div>
              <h2 className="font-montserrat text-2xl font-bold uppercase mt-10">CLAUSTRO IMCYC:</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
