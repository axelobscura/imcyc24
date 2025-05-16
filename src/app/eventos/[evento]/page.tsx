"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

export default function Articulo() {
  const params = useParams<{ evento: string }>();
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/seminario-pisos-industriales-concreto-monterrey-imcyc-2025.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:pt-40 sm:pt-0 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h3 className='font-montserrat text-white bg-red-700 mb-3 text-center text-4xl'>APROVECHA NUESTRO <b>20%</b> DE DESCUENTO</h3>
                {params.evento === "seminario-pisos-industriales-de-concreto" && (
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-10">
                    <div className="text-white text-justify">
                      <p className="text-gray-300 mb-5 text-center">El Instituto Mexicano del Cemento y del Concreto | Universidad de Monterrey presentan</p>
                      <h1 className="font-montserrat mb-7 text-3xl text-center font-bold tracking-tight leading-none text-yellow-300 md:text-4xl lg:text-6xl dark:text-yellow-300">
                        SEMINARIO
                      </h1>
                      <h3 className="font-montserrat mb-7 text-3xl font-bold text-center tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-yellow-300">PISOS INDUSTRIALES DE CONCRETO</h3>
                      <h2 className="font-montserrat mb-7 text-3xl text-center font-bold tracking-tight leading-none text-yellow-300 md:text-4xl lg:text-6xl dark:text-yellow-300">
                        22 y 23 de mayo de 2025
                      </h2>
                      <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200 text-center">EXPERTOS EN DISEÑO, CONSTRUCCIÓN, EVALUACIÓN, REPARACIÓN Y MANTENIMIENTO DE PISOS INDUSTRIALES COMPARTIENDO SUS CASOS DE ÉXITO
                      </p>
                      <h4>Horario: 08:00 a 18:00 horas</h4>
                      <h4>Costo: $1,500.00 MXN + IVA</h4>
                      <p className="mb-0">Sede: SALA POLIVALENTE DE LA PREPARATORIA UNIDAD SAN PEDRO (USP-UDEM)</p>
                      <p className="text-xs mb-10">AV. IGNACIO MORONES PRIETO 4500-PTE, ZONA VALLE PONIENTE, 66238 SAN PEDRO GARZA GARCÍA, N.L.</p>
                      <p>El Seminario de Pisos Industriales de Concreto reúne a destacados especialistas en diseño, construcción, evaluación, mantenimiento y reparación de pisos industriales. Durante dos días se compartirán casos de éxito, soluciones tecnológicas y enfoques innovadores del sector. Un espacio ideal para el aprendizaje, networking y actualización profesional.</p>
                      <Link
                          href="/docs/seminario_udem.pdf"
                          className="inline-flex items-center justify-center w-full bg-yellow-400 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-1xl text-gray-900 font-bold"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          DESCARGAR PDF
                      </Link>
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
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-yellow-300 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Inscripciones:
                      </h2>
                      <p>
                        <Link
                          href="mailto:cursos@imcyc.com"
                          className="">
                            cursos@imcyc.com
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="mailto:chernandez@imcyc.com"
                          className="">
                            chernandez@imcyc.com
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="tel:5511568957"
                          className="">
                            Teléfono móvil: 55 1156 8957
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="tel:5591708059"
                          className="">
                            Teléfono móvil: 55 9170 8059
                        </Link>
                      </p>
                      <Link
                          href="https://pay.conekta.com/link/3c93077fb6da4113912d26b554a7d171"
                          className="inline-flex items-center justify-center w-full bg-yellow-400 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          Regístrate hoy mismo
                      </Link>
                      <Link
                          href="https://wa.me/5554671492"
                          className="inline-flex items-center justify-center w-full bg-green-500 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          <FaWhatsapp style={{ marginRight: '20px' }} /> Más Información y Asistencia para Inscripciones
                      </Link>
                      <Link
                          href="https://pay.conekta.com/link/3c93077fb6da4113912d26b554a7d171"
                          className="inline-flex items-center justify-center w-full bg-yellow-400 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          PAGA Y REGISTRATE AQUÍ
                      </Link>
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
