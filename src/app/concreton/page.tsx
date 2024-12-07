import Image from "next/image";
import { RiRobot2Line } from "react-icons/ri";


export default function Concreton() {
  return (
    <div>
      <div className="flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/ai.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="flex flex-col w-full sm:mb-5 text-center justify-center items-center">
                <Image
                  src="/concreton.png"
                  alt="IMCYC"
                  width={200}
                  height={0}
                  layout="intrinsic"
                  className="mb-5"
                />
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold text-center">
                  Asistente Concretón IMCYC
                </h1>
                <p className="font-montserrat text-center">Asistente en tecnología del Concreto y del Cemento</p>
                <p className="font-montserrat text-tiny text-center">Instituto Mexicano del Cemento y del Concreto A.C.</p>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center w-full">
                <form className="font-montserrat flex items-center mx-auto w-full px-20">   
                    <label className="sr-only">Ingrese su consulta</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <RiRobot2Line size={25} className="text-slate-900" />
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-5.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-4" placeholder="Ingrese su consulta..." required />
                    </div>
                    <button type="submit" className="p-5 ms-2 text-sm font-medium text-white bg-slate-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
