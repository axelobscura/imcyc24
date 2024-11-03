import Image from "next/image";

export default function Capacitacion() {
  return (
    <div>
    
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/capacitacion.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="grid grid-rows-[1fr] gap-8 z-0">
        <h1 className="font-montserrat text-5xl font-bold uppercase mt-10 px-10">Capacitación</h1>
        <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-10 px-10">
          <div>
            <Image
              src="/capacitacion.jpg"
              alt="IMCYC"
              width={900}
              height={0}
              layout="intrinsic"
            />
          </div>
          <div>
            <p className="font-montserrat">El IMCYC desarrolla un programa permanente de enseñanza y capacitación, fomentando la actualización de profesionales y técnicos, con el fin de promover el uso eficiente del cemento y el concreto en la rama de la construcción, así como de coadyuvar con universidades e instituciones de educación superior en la mejoría del nivel educativo de estudiantes de licenciatura y postgrado.<br/><br/>Bajo este esquema, se mantienen convenios con cámaras, federaciones, consejos, asociaciones, incluyendo universidades de México y el resto del mundo, principalmente de Latinoamérica, se ofrecen cursos, diplomados, programas de certificación, seminarios nacionales e internacionales, foros, simposios y congresos, con la elección de temáticas y contenidos pertinentes al desarrollo profesional de los participantes, con la selección de materiales bibliográficos de alto valor técnico y la participación de profesores, ponentes, conferencistas y profesionales destacados líderes en la teoría, la práctica del diseño, la investigación, todo lo anterior enfocado a la construcción con concreto.<br/><br/>Los programas educativos del IMCYC se ofrecen en diversas modalidades que incluyen:</p><br/>
            <ul className="font-montserrat list-disc pl-10">
              <li>Cursos abiertos que se ofrecen al público en general y se imparten en las instalaciones del IMCYC</li>
              <li>Cursos y Seminarios cerrados diseñados conforme a las necesidades de empresas e instituciones.</li>
              <li>Cursos a distancia.</li>
              <li>Cursos en asociación con organismos, universidades y otras instituciones.</li>
              <li>Cursos para certificación abiertos y cerrados.</li>
              <li>Seminarios Nacionales e Internacionales.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
