import Image from "next/image";

export default function GerenciaEnsenanza() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0">
        <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-center justify-items-center">
          <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-26 md:pl-26 lg:pl-40 pb-20">
            <h1 className="text-4xl font-bold text-white pt-10 sm:pl-190">
              ¿Qué es la GERENCIA DE ENSEÑANZA?
            </h1>
            <br />
            <hr />
            <br />
            <p className="text-justify font-montserrat text-sm text-white">
              Las actividades de enseñanza del IMCYC están encaminadas fundamentalmente a fomentar las actualizaciones de conocimientos y la especialización de los profesionales en el campo de la construcción y la competencia laboral, a través de conferencias técnicas, cursos básicos y de certificación, seminarios nacionales e internacionales, diplomados, simposios y congresos, los cuales cuentan con el apoyo y la participación de los más reconocidos profesores, ponentes y conferencistas, líderes mundiales en la teoría y la práctica de la construcción con concreto.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/qs2.jpg"
              alt="IMCYC"
              width={900}
              height={0}
              layout="intrinsic"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
