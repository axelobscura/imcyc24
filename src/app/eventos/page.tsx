"use client";
import Link from "next/link";
import Image from "next/image";

export default function Eventos() {
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/quejas.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                  Eventos IMCYC
                </h1>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-10">
                <div>
                  <div className='bg-slate-900 bg-opacity-80 p-5'>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-10">
                      <div>
                        <Link
                          href="/eventos/encuentro-del-cemento-y-del-concreto"
                          className="inline-flex items-center justify-center w-full"
                        >
                          <Image
                            src="/seminario-industria-cemento.jpg"
                            alt="Instituto Mexicano del Cemento y del Concreto A.C."
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            layout="intrinsic"
                            className="mb-5"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="/eventos/diplomado-tecnologia-del-concreto"
                          className="inline-flex items-center justify-center w-full"
                        >
                          <Image
                            src="/banner/IM-HERO-BANNER.jpg"
                            alt="Instituto Mexicano del Cemento y del Concreto A.C."
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            layout="intrinsic"
                            className="mb-5"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
