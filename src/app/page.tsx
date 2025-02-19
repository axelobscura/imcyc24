//FLOWBITE - https://flowbite.com/docs/components/navbar/
import Link from "next/link";
//<Link href="https://www.cmoctezuma.com.mx/" rel="noopener noreferrer" target="_blank">

export default function Home() {
  return (
    <div>
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0">
        <section className="z-0">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <p className="pb-7 text-white">INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</p>
            <h1 className="font-montserrat mb-7 text-3xl font-light tracking-tight leading-none text-white md:text-4xl lg:text-6xl dark:text-white">
              COMPARTIR EL CONOCIMIENTO
            </h1>
            <Link
              href="/calendario-de-cursos"
              className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-2 text-sm text-blue-700 rounded-full bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 mr-3"
            >
              <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
                Nuevo calendario de cursos 2025
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
              href="https://www.imcyc.com/gerencia-tecnica/pdfs/Calendario_de_Programas_PEA_2025.pdf"
              rel="noopener noreferrer" target="_blank"
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
              href="/calendario-de-cursos"
              rel="noopener noreferrer" target="_blank"
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
            
            
            <p className="font-montserrat mb-8 text-xs font-light text-white lg:text-xl sm:px-14 lg:px-24 dark:text-gray-200">
            El Instituto Mexicano del Cemento y del Concreto A.C. es una organización dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.
            </p>
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
