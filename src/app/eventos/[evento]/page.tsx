"use client";
import { useParams } from 'next/navigation';

export default function Articulo() {
  const params = useParams<{ evento: string }>();

  console.log(params);

  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/seminario-pisos-industriales-concreto-monterrey-imcyc-2025.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:pt-40 sm:pt-0 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-white uppercase text-4xl font-bold">{params.evento.split("-").join(" ")}</h1>
                {params.evento === "seminario-pisos-industriales-de-concreto" && (
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-10">
                    <div className="text-white text-justify">
                      <p className="text-gray-300 mb-5">El Instituto Mexicano del Cemento y del Concreto | Universidad de Monterrey presentan</p>
                      <h2 className="font-montserrat mb-7 text-3xl font-bold tracking-tight leading-none text-yellow-300 md:text-4xl lg:text-6xl dark:text-yellow-300">
                        SEMINARIO
                      </h2>
                      <h3 className="font-montserrat mb-7 text-3xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-yellow-300">PISOS INDUSTRIALES DE CONCRETO</h3>
                      <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200 text-center">EXPERTOS EN DISEÑO, CONSTRUCCIÓN, EVALUACIÓN, REPARACIÓN Y MANTENIMIENTO DE PISOS INDUSTRIALES COMPARTIENDO SUS CASOS DE ÉXITO
                      </p>
                      <h4>Fecha: 22 y 23 de mayo de 2025</h4>
                      <h4>Horario: 08:00 a 18:00 horas</h4>
                      <h4>Costo: $1,500.00 MXN + IVA</h4>
                      <p className="mb-0">Sede: SALA POLIVALENTE DE LA PREPARATORIA UNIDAD SAN PEDRO (USP-UDEM)</p>
                      <p className="text-xs mb-10">AV. IGNACIO MORONES PRIETO 4500-PTE, ZONA VALLE PONIENTE, 66238 SAN PEDRO GARZA GARCÍA, N.L.</p>
                      <p>El Seminario de Pisos Industriales de Concreto reúne a destacados especialistas en diseño, construcción, evaluación, mantenimiento y reparación de pisos industriales. Durante dos días se compartirán casos de éxito, soluciones tecnológicas y enfoques innovadores del sector. Un espacio ideal para el aprendizaje, networking y actualización profesional.</p>
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-yellow-300 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Ponentes:
                      </h2>
                      <ul className="list-disc list-inside">
                        <li>Ing. Roberto Uribe | IMCYC</li>
                        <li>Ing. Alejandro Serrano | CEMEX</li>
                        <li>Ing. Mario López | Astrofloors</li>
                        <li>Ing. Ricardo Alatorre | CONCREA</li>
                        <li>Ing. Ramón Planas | Grupo RCR</li>
                        <li>Ing. Pedro A. Sánchez | DELTION</li>
                        <li>Ing. Gabriel Guerra | INGETEK</li>
                        <li>Ing. Jorge Esqueda | SIKA</li>
                        <li>Dr. en Ing. Yoshihiro Sasaki | Sakaegumi (Japón)</li>
                        <li>Alfredo García, Michel Liakov | RYMCO Trading</li>
                      </ul>
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-yellow-300 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Temas Destacados:
                      </h2>
                      <ul className="list-disc list-inside">
                        <li>Tecnología del concreto para pisos industriales</li>
                        <li>Pisos postensados</li>
                        <li>Innovaciones en la industria de los pisos industriales</li>
                        <li>Pisos avanzados</li>
                        <li>Evaluación y reparación de pisos</li>
                        <li>Sostenibilidad en concreto y pisos industriales</li>
                        <li>Características del acero de refuerzo en pisos industriales</li>
                        <li>Tecnología de reparación SAPIS y SIMMS</li>
                        <li>Juntas metálicas en pisos industriales</li>
                      </ul>

                    </div>
                  </div>
                  )
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
