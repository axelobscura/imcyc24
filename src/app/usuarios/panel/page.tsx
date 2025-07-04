//FLOWBITE - https://flowbite.com/docs/components/navbar/
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Panel() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
        <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-8 row-start-2 items-center sm:items-start z-0">
          <div className="text-center">
            <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] gap-8 mt-1">
              <div className="mt-8 p-0 bg-slate-900 bg-opacity-90 rounded-lg shadow-lg">
              <nav>
                <ul className="flex flex-col uppercase text-left">
                  <li>
                    <a
                      href="/usuarios/panel"
                      className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Inicio
                    </a>
                  </li>
                  <li className="m-0">
                    <a
                      href="#usuarios"
                      className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Enseñanza
                    </a>
                  </li>
                  <li className="m-0">
                    <a
                      href="#usuarios"
                      className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Laboratorio
                    </a>
                  </li>
                  <li className="m-0">
                    <a
                      href="#usuarios"
                      className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Concretón
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reportes"
                      className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Webinars
                    </a>
                  </li>
                  <li>
                    <a
                      href="#configuracion"
                      className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Productos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/usuarios"
                      className="flex items-center px-4 py-4 rounded hover:bg-red-600 hover:text-white transition border-b-2 border-slate-600"
                    >
                      <FaRegArrowAltCircleRight className="mr-2" /> Cerrar sesión
                    </a>
                  </li>
                </ul>
              </nav>
              </div>
              <div className="mt-8 p-6 bg-slate-900 bg-opacity-75 rounded-lg shadow-lg">
                <h1 className="text-4xl text-white font-light text-center">¡BIENVENIDO A SU PANEL DE ADMINISTRACIÓN!</h1>
                <p className="mt-3">Instituto Mexicano del Cemento y del Concreto A.C.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
