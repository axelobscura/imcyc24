"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

export default function Articulo() {
  const params = useParams<{ evento: string }>();
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/bkgs/tecnologia.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-fixed bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:pt-40 sm:pt-0 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                {params.evento === "encuentro-del-cemento-y-del-concreto" && (
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-10">
                    <div className="text-white text-justify">
                      <p className="text-gray-300 mb-5 text-center">El Instituto Mexicano del Cemento y del Concreto le invitan al</p>
                      <h1 className="font-montserrat mb-7 text-2xl text-center font-bold tracking-tight leading-none text-blue-300 md:text-2xl lg:text-6xl dark:text-blue-300">
                        4<sup>to</sup> Encuentro del Cemento y del Concreto
                      </h1>
                      <h2 className="font-montserrat mb-7 text-3xl text-center font-bold tracking-tight leading-none text-blue-500 md:text-4xl lg:text-6xl dark:text-blue-300">
                        12, 13 y 14 de noviembre de 2025
                      </h2>
                      <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200 text-center">El <b>Instituto Mexicano del Cemento y del Concreto (IMCYC)</b> presenta el <b>4<sup>to</sup> Encuentro del Cemento y del Concreto 2025</b></p>
                      <p className='font-montserrat'>Se celebrará los días <b>12, 13 y 14 de noviembre en el Hotel Princess, Acapulco</b>, reuniendo a líderes nacionales e internacionales para compartir innovaciones, soluciones sostenibles y avances tecnológicos en cemento, concreto y sostenibilidad.</p><br/>
                      <p className="mb-0 font-montserrat text-2xl">Sede: <b>Hotel Princess, Acapulco</b></p><br/>
                      <p className='font-montserrat'>El Seminario de Pisos Industriales de Concreto reúne a destacados especialistas en diseño, construcción, evaluación, mantenimiento y reparación de pisos industriales. Durante dos días se compartirán casos de éxito, soluciones tecnológicas y enfoques innovadores del sector. Un espacio ideal para el aprendizaje, networking y actualización profesional.</p><br/>
                      <p className='font-montserrat'>Durante tres días se llevarán a cabo <b>conferencias magistrales, paneles técnicos y actividades de networking</b>, que abordarán temas clave, como:</p><br/>
                      <ul className="list-disc list-inside">
                        <li>Nuevas tecnologías en concreto y cemento</li>
                        <li>Innovación y sostenibilidad en la construcción</li>
                        <li>Soluciones técnicas de alta resistencia y durabilidad</li>
                        <li>Tendencias globales en infraestructura y edificación</li>
                      </ul>
                      <br/>
                      <p className='font-montserrat'>Este encuentro es una plataforma única para <b>profesionales, investigadores, académicos y empresas</b> interesadas en el futuro de la construcción.</p>
                      <Link
                          href="/seminario/seminario-imcyc.pdf"
                          className="inline-flex items-center justify-center w-full bg-blue-400 color-gray-900 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-600 mt-10 text-1xl text-gray-900 font-bold font-montserrat"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          DESCARGAR PDF
                      </Link>
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-blue-300 md:text-2xl lg:text-3xl dark:text-blue-300 mt-9">
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
                          href="https://pay.conekta.com/link/30f0ca2e9ed6400f8ede10a5fe6fb30a"
                          className="inline-flex items-center justify-center w-full bg-blue-400 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          Regístrate hoy mismo - 1 persona (15,500 + IVA)
                      </Link>
                      <Link
                          href="https://pay.conekta.com/link/be0d8d27b59149d99133068a711bce6b"
                          className="inline-flex items-center justify-center w-full bg-blue-400 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          Regístrate hoy mismo - 2 personas (19,500 + IVA)
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
                          className="inline-flex items-center justify-center w-full bg-blue-400 color-gray-900 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          PAGA Y REGISTRATE AQUÍ
                      </Link>
                    </div>
                  </div>
                  )
                }
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
                      <h4>Costo: <span className='line-through'>$1,500.00 MXN</span> <b>$1,200.00 MXN</b> + IVA</h4>
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
                {params.evento === "diplomado-tecnologia-del-concreto" && (
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-10">
                    <div className="text-white text-justify">
                      <p className="text-gray-300 mb-5 text-center">El Instituto Mexicano del Cemento y del Concreto | Universidad de Monterrey presentan</p>
                      <h1 className="font-montserrat mb-7 text-3xl text-center font-bold tracking-tight leading-none text-red-700 md:text-4xl lg:text-6xl dark:text-yellow-300">
                        DIPLOMADO
                      </h1>
                      <h3 className="font-montserrat mb-7 text-3xl font-bold text-center tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-yellow-300">TECNOLOGÍA DEL CONCRETO</h3>
                      <h2 className="font-montserrat mb-7 text-3xl text-center font-bold tracking-tight leading-none text-red-600 md:text-4xl lg:text-6xl dark:text-yellow-300">
                        30 de octubre de 2025
                      </h2>
                      <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200 text-center">10 módulos mensuales hasta octubre 2026
                      </p>
                      <h4>Horario por módulo: Día 1: 09:00 a 18:00 h</h4>
                      <h4>Horario por módulo: Día 2: 09:00 a 13:00 h</h4>
                      <h4>Costo: $45,000.00 MXN + IVA</h4>
                      <p className="mb-0">Sede: IMCYC Insurgentes: Insurgentes Sur 1846, Col. Florida, C.P. 01030, Ciudad de México</p><br/>
                      <p>El Diplomado en Tecnología del Concreto (DTC) es un programa presencial, estructurado en 10 módulos clave que brindan formación técnica especializada sobre el concreto. Aborda desde la composición y fabricación hasta su durabilidad, sostenibilidad, operación en obra, control de calidad, evaluación y venta técnica.<br/><br/>Conducido por un panel de expertos del IMCYC y profesionales líderes en el sector, este diplomado prepara a los asistentes para enfrentar con solidez técnica los retos actuales de la industria de la construcción.<br/><br/>Una experiencia de aprendizaje completa: conocimiento actualizado, networking estratégico y enfoque aplicado.</p>
                      
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-gray-400 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Temario por módulo:
                      </h2>
                      <ul className="list-disc list-inside">
                        <li>Cemento, adiciones, agregados y aditivos</li>
                        <li>Concreto en estado fresco y endurecido</li>
                        <li>Control de calidad y diseño de mezclas</li>
                        <li>Durabilidad del concreto</li>
                        <li>Evaluación y reparación de estructuras</li>
                        <li>Operaciones de concreto</li>
                        <li>Temas selectos</li>
                        <li>Venta técnica</li>
                        <li>Sostenibilidad</li>
                        <li>Visita técnica</li>
                      </ul>
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-gray-400 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Al finalizar el diplomado, serás capaz de:
                      </h2>
                      <ul className="list-disc list-inside">
                        <li>Analizar y seleccionar tipos de cemento y aditivos según aplicación</li>
                        <li>Diagnosticar patologías del concreto y aplicar normas técnicas</li>
                        <li>Aplicar principios de diseño de mezclas y control de calidad</li>
                        <li>Usar herramientas de atención técnica al cliente</li>
                        <li>Entender la sostenibilidad y nuevas tecnologías aplicadas al concreto</li>
                      </ul>
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-gray-400 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Ponentes:
                      </h2>
                      <ul className="list-disc list-inside">
                        <li><b>Ing. Roberto Uribe</b> – Director General IMCYC</li>
                        <li><b>Ing. Diana Zamora G.</b> – Jefa de Evaluación de la Conformidad</li>
                        <li><b>Ing. Ángel Ponce</b> – Especialista en Evaluación Forense</li>
                        <li><b>Arq. José A. del Rosal</b> – Gerente de Enseñanza, Promoción y Difusión</li>
                      </ul>
                      <h2 className="font-montserrat mb-7 text-1xl font-bold tracking-tight leading-none text-gray-400 md:text-2xl lg:text-3xl dark:text-yellow-300 mt-9">
                        Temas destacados:
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
                      <Link
                          href="/eventos/seminario-pisos.pdf"
                          className="inline-flex items-center justify-center w-full bg-red-700 color-gray-100 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-3xl text-gray-100 font-bold"
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          DESCARGAR PDF
                      </Link>
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
                          href="mailto:cursos2@imcyc.com"
                          className="">
                            cursos2@imcyc.com
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="mailto:cursos3@imcyc.com"
                          className="">
                            cursos3@imcyc.com
                        </Link>
                      </p>
                      <br/>
                      <p>
                        <Link
                          href="tel:5554671492"
                          className="">
                            Teléfono móvil: 55 5467 1492
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="tel:5591708059"
                          className="">
                            Teléfono móvil: 55 9170 8059
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="tel:5572030483"
                          className="">
                            Teléfono móvil: 55 7203 0483
                        </Link>
                      </p>
                      <Link
                          href="https://pay.conekta.com/link/c8fb6b6c78ff4509a37c3d0ddf40444f"
                          className="inline-flex items-center justify-center w-full bg-red-700 color-gray-100 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
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
                          href="https://pay.conekta.com/link/c8fb6b6c78ff4509a37c3d0ddf40444f"
                          className="inline-flex items-center justify-center w-full bg-red-700 color-gray-100 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 mt-10 text-4xl"
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
