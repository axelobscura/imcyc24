//FLOWBITE - https://flowbite.com/docs/components/navbar/
import MenuUsuarios from "@/app/components/MenuUsuarios";
import BreadCrumbUser from "@/app/components/BreadCrumbUser";
import { FaRegUserCircle } from "react-icons/fa";

export default function Panel() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
        <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-8 row-start-2 items-center sm:items-start z-0">
          <div className="text-center">
            <div className="grid grid-cols-[1fr] gap-14 mt-10 mx-4">
              <BreadCrumbUser />
            </div>
            <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_3fr] gap-8">
              <div className="mt-4 p-0 mx-4 mr-0 bg-slate-900 bg-opacity-90 rounded-lg shadow-lg border-2 border-blue-900">
                <MenuUsuarios />
              </div>
              <div className="mt-4 p-3 mx-5 mr-5 bg-slate-900 bg-opacity-75 rounded-lg shadow-lg border-2 border-blue-900">
                <h1 className="text-2xl text-white font-bold text-left flex items-center"><FaRegUserCircle className="mr-2" /> ¡BIENVENIDO A SU PANEL DE ADMINISTRACIÓN!</h1>
                <p className="mt-2 text-white mb-3 text-left font-medium">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <hr/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
