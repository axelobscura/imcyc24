"use client"
import Image from "next/image";

export default function CalendarioDeCursos() {
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/revista.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center">
                <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_3fr] items-start">
                  <div className="flex items-center justify-center mt-5">
                    <a href="https://www.concrete.org/verify" target="_blank">
                      <Image
                        src="/logos/aci.png"
                        alt="Instituto Mexicano del Cemento y del Concreto A.C."
                        width={200}
                        height={0}
                      />
                      <p className="mt-3 text-white">Supporter of ACI Certification</p>
                    </a>
                  </div>
                  <div>
                    <Image
                      src="https://imcyc.net/2025/calendario25_Page_1.jpg"
                      alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      width={900}
                      height={0}
                    />
                    <Image
                      src="https://imcyc.net/2025/calendario25_Page_2.jpg"
                      alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      width={900}
                      height={0}
                    />
                    <Image
                      src="https://imcyc.net/2025/calendario25_Page_3.jpg"
                      alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      width={900}
                      height={0}
                    />
                    <Image
                      src="https://imcyc.net/2025/calendario25_Page_4.jpg"
                      alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      width={900}
                      height={0}
                    />
                    <Image
                      src="https://imcyc.net/2025/calendario25_Page_5.jpg"
                      alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      width={900}
                      height={0}
                    />
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
