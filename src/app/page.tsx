//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client";
import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

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
            autoplay={true}
            speed={900}
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
              className="bg-[url('/banner/IM-HERO-BANNER.jpg')] bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat h-auto"
              style={{ height: '100vh' }}
            >
              <div className="py-0 px-0 mx-auto max-w-screen-xl text-center z-10 relativepb-36 pt-36">
                <Link href={"/eventos"}>
                  <Image
                    src="/banner/IM-HERO-BANNER.jpg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    width={2500}
                    height={0}
                    className="mx-auto mb-4"
                    style={{ width: '100%', height: 'auto' }}
                  />
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
