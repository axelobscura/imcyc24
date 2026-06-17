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
import Image from 'next/legacy/image';


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
              className="bg-[url('/banner/pisos.jpg')] bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat h-auto"
              style={{ height: '100vh' }}
            >
              <div className="py-0 px-0 mx-auto max-w-screen-xl text-center z-10 relative pb-36 pt-36">
                <h1 className="font-montserrat pt-20 pb-0 text-white text-2xl mb-5">INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</h1>
                <Image src="/banner/logo_aci.png" alt="TÉCNICO Y ACABADOR DE SUPERFICIES PLANAS DE CONCRETO" width={200} height={100} className="my-5" />
                <h3 className="font-montserrat pt-5 pb-0 text-5xl mb-3 text-purple-400 font-bold">EXAMEN ACI</h3>
                <h2 className="font-montserrat mb-0 text-3xl font-light tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-white">
                TÉCNICO Y ACABADOR DE SUPERFICIES PLANAS DE CONCRETO</h2>
                <p className="text-2xl font-montserrat py-5 text-purple-300">Certifica tu conocimiento técnico en la colocación, compactado, extendido, curado y acabado profesional de las superficies planas de concreto bajo estándares internacionales</p>
                <p className="text-2xl font-montserrat py-1 text-purple-200 font-bold">Al aprobar obtienes Certificado ACI</p>
                <p className="text-white text-2xl font-montserrat py-3 pb-1">DURACIÓN: 5h de 9h a 14h</p>
                <p className="text-white text-2xl font-montserrat py-1 pb-3 font-bold">COSTO: $8,000.00 MXN + IVA</p>
                <p className="bg-yellow-300 bg-opacity-80 b-3 text-2xl p-2 rounded-full text-white font-bold">INCLUYE SESIÓN TÉCNICA PREVIA, DE 9 A 12 H</p>
                <h3 className="font-montserrat text-4xl font-bold text-purple-400 mb-5 mt-5">25 DE JUNIO 2026</h3>
                <Link
                  href="/eventos/examen-aci-tecnico-y-acabador-de-superficies-planas-de-concreto-certifica-tu-conocimiento-tecnico-en-la-colocacion-compactado-extendido-curado-y-acabado-profesional-de-las-superficies-planas-de-concreto-bajo-estandares-internacionales"
                  className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-blue-700 rounded-full bg-purple-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 mr-3"
                >
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
                    Más información
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
                    Calendario de cursos 2026
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
                    Calendario de Proveedor de Ensayos de Aptitud 2026
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
                    Calendario de Organismo de Certificación de Personas 2026
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
            
          </Swiper>
        </section>
      </main>
    </div>
    </div>
  );
}
