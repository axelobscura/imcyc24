//FLOWBITE - https://flowbite.com/docs/components/navbar/
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/seminario-pisos-industriales-concreto-monterrey-imcyc-2025.jpg')] bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0">
        <section className="z-0 mt-20">
          <div className="py-8 pb-0 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative bg-black bg-opacity-70">
            <div className="flex justify-center items-center text-center w-full pb-10">
              <Image
                src="/seminario/udem.jpg"
                alt="Instituto Mexicano del Cemento y del Concreto A.C."
                width={100}
                height={0}
              />
            </div>
            <p className="font-montserrat pb-5">El Instituto Mexicano del Cemento y del Concreto | Universidad de Monterrey<br/>presentan</p>
            <h1 className="font-montserrat pb-7 text-white text-3xl font-bold">SEMINARIO</h1>
            <h2 className="font-montserrat mb-7 text-3xl font-bold tracking-tight leading-none text-yellow-300 md:text-4xl lg:text-6xl dark:text-yellow-300">
              PISOS INDUSTRIALES DE CONCRETO
            </h2>
            <h3 className="font-montserrat mb-7 text-3xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-yellow-300">22 y 23 Mayo</h3>
            
            <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200">EXPERTOS EN DISEÑO, CONSTRUCCIÓN, EVALUACIÓN, REPARACIÓN Y MANTENIMIENTO DE PISOS INDUSTRIALES COMPARTIENDO SUS CASOS DE ÉXITO
            </p>
            <p className="mb-7">SALA POLIVALENTE DE LA PREPARATORIA UNIDAD SAN PEDRO (USP-UDEM)</p>
            <Link
              href="https://www.imcyc.com/seminario-pisos-industriales-concreto-monterrey-2025/"
              className="inline-flex items-center justify-center px-5 py-3 text-2xl font-medium text-center text-gray-900 bg-yellow-300 hover:bg-gray-800 hover:text-white"
            >
              REGÍSTRATE
            </Link>
            <form className="w-full max-w-md mx-auto">
              <label
                className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
              >
                Email sign-up
              </label>
              {/* <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="default-email"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-900 rounded-lg bg-gray-900 focus:ring-blue-900 focus:border-blue-500 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese su correo electrónico..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  REGISTRARSE
                </button>
              </div> */}
            </form>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
