//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client";
import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function Home() {
  return (
    <div>
    <div className="w-full bg-black">
      <main className="w-full pt-28">
        <section>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 100000, // 5 seconds between transitions (default is 3000ms)
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            speed={3000}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{
              width: '100%',
            }}
          >
            <SwiperSlide 
              className="bg-[url('/prensa/acapulco.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat h-auto"
              style={{ height: '100vh' }}
            >
              <div className="py-0 px-0 mx-auto max-w-screen-xl text-center z-10 relativepb-36 pt-36">
                <h1 className="font-montserrat pt-40 pb-0 text-white text-2xl">EL INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
                <h2 className="font-montserrat mb-2 text-3xl font-light tracking-tight leading-none text-white md:text-2xl lg:text-2xl dark:text-white">
                PRESENTA</h2>
                <h3 className="font-montserrat pt-10 pb-2 text-white font-bold text-4xl md:text-2xl lg:text-5xl">4<sup>to</sup> ENCUENTRO DEL CEMENTO Y DEL CONCRETO</h3>
                <h4 className="font-montserrat pb-5 text-white text-2xl">12, 13 y 14 DE NOVIEMBRE 2025 | ACAPULCO MÉXICO</h4>
                <h2 className="font-montserrat mb-2 text-3xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-4xl dark:text-white">¡BIENVENIDOS!</h2>
                <p className="font-montserrat mt-5 mb-3 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200">El evento de mayor relevancia en la agenda de la construcción, <b>en el emblemático Hotel Princess, Acapulco, México</b>. Bajo la temática:
                </p>
                <p className='font-montserrat font-bold md:text-2xl lg:text-2xl text-white mb-7 uppercase'>El futuro de la industria de la construcción en materia de cemento, concreto y sostenibilidad</p>
                <Link
                  href="/prensa/encuentro-cemento-y-concreto-2025"
                  className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-blue-700 rounded-full bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 mr-3"
                >
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
                    MÁS INFORMACIÓN
                  </span>{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide 
              className="bg-[url('/prensa/diplomado.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat h-auto"
              style={{ height: '100vh' }}
            >
              <div className="py-0 px-0 mx-auto max-w-screen-xl text-center z-10 relativepb-36 pt-36">
                <h1 className="font-montserrat pt-40 pb-0 text-white text-2xl">INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
                <h2 className="font-montserrat mb-2 text-3xl font-light tracking-tight leading-none text-white md:text-2xl lg:text-2xl dark:text-white">
                CAPACÍTATE CON LOS LÍDERES DEL CONCRETO</h2>
                <h3 className="font-montserrat pt-10 pb-2 text-white font-bold text-4xl md:text-2xl lg:text-5xl">DIPLOMADO EN TECNOLOGÍA DEL CONCRETO</h3>
                <h4 className="font-montserrat pb-10 text-white text-2xl">INICIA EL 30 DE OCTUBRE 2025</h4>
                <p className="font-montserrat mb-16 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200">Forma parte del diplomado que construye el conocimiento del mañana.<br/>10 módulos mensuales hasta octubre 2026.
                </p>
                <Link
                  href="/eventos/diplomado-tecnologia-del-concreto"
                  className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-blue-700 rounded-full bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 mr-3"
                >
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
                    MÁS INFORMACIÓN
                  </span>{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide 
              className="bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat h-auto"
              style={{ height: '100vh' }}
            >
              <div className="py-0 px-0 mx-auto max-w-screen-xl text-center z-10 relativepb-36 pt-36">
                <h1 className="font-montserrat pt-40 pb-0 text-white text-2xl">INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
                <h2 className="font-montserrat mb-7 text-3xl font-light tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-white">
                COMPARTIR EL CONOCIMIENTO</h2>
                <Link
                  href="/calendario-de-cursos"
                  className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-blue-700 rounded-full bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 mr-3"
                >
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
                    Calendario de cursos 2025
                  </span>{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </Link>
                <Link
                  href="/calendario-proveedor-de-ensayos-de-aptitud"
                  className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-green-700 rounded-full bg-green-900 dark:text-blue-300 hover:bg-green-200 dark:hover:bg-blue-800 mr-3"
                >
                  <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
                    Calendario de Proveedor de Ensayos de Aptitud 2025
                  </span>{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </Link>
                <Link
                  href="/calendario-certificacion-de-personas"
                  className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 rounded-full bg-yellow-900 dark:text-blue-300 hover:bg-yellow-200 dark:hover:bg-blue-800"
                >
                  <span className="text-xs bg-yellow-600 rounded-full text-white px-4 py-1.5 me-3">
                    Calendario de Organismo de Certificación de Personas 2025
                  </span>{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </Link>
                <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200">El Instituto Mexicano del Cemento y del Concreto A.C. es una organización dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.
                </p>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </section>
      </main>
    </div>
    </div>
  );
}
