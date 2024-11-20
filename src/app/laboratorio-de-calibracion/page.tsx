import Link from "next/link";
import { Slider } from "../components/Carousel";
const imagenes = ["/calibracion/1.jpg","/calibracion/2.jpg","/calibracion/3.jpg"];

export default function LaboratorioDeCalibracion() {
  return (
    <div>
      <div className={`flex items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/calibracion.jpg')] bg-gray-700 bg-blend-multiply bg-fixed z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Laboratorio de Calibración
                </h1>
                <p className='font-montserrat'>Ofrece servicios de calibración de equipos en las magnitudes de fuerza y masa, verificación de ollas de contenido de aire y termómetros, así como mantenimiento de equipos.</p>
              </div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className='font-montserrat'><strong>Ing. Vicente Gómez Bezarez</strong></p>
                <p><Link href="mailto:vgomez@mail.imcyc.com">vgomez@mail.imcyc.com</Link></p>
              </div>
              <Slider imagenes={imagenes} />
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              <h3 className="font-montserrat font-bold text-2xl p-3">Acreditación F-32</h3>
              <ul className="font-montserrat font-light m-5">
                <li>Instrumentos de medición de fuerza.</li>
                <li>Transductores de fuerza.</li>
                <li>Máquinas de medición de fuerza.</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3">Acreditación M-76</h3>
              <ul className="font-montserrat font-light m-5">
                <li>Instrumentos para pesar de funcionamiento no automático.</li>
                <li>Calibración de ollas para contenido de aire.</li>
                <li>Mantenimiento de equipo.</li>
                <li>Reparación de equipo.</li>
              </ul>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
