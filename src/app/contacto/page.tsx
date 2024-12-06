//FLOWBITE - https://flowbite.com/docs/components/navbar/
import { CiCircleChevRight } from "react-icons/ci";

export default function Contacto() {
  return (
    <div>
      <div className="flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)]  bg-gradient-to-t from-gray-900 to-gray-800 z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-gray-200">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
              <div className="bg-gray-800 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5 border border-gray-700">
                <h1 className="flex items-center font-montserrat text-2xl text-white pt-0 sm:pl-50 uppercase font-bold pb-3">
                  <CiCircleChevRight className="mr-2"/> OFICINAS GENERALES
                </h1>
                <hr/>
                <p className="py-5">Av. Insurgentes Sur # 1846<br/>Col. Florida, C.P. 01030<br/>México, CDMX<br/>Teléfonos: (55) 53 22 57 40 Ext. 210</p>
                <hr/>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.53949800972634!2d-99.184641!3d19.355466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fff40b83f2f5%3A0xbb3602ae1eba74ea!2sInstituto%20Mexicano%20del%20Cemento%20y%20del%20Concreto!5e0!3m2!1ses-419!2smx!4v1730341534937!5m2!1ses-419!2smx" width="600" height="450" loading="lazy" className="my-3 w-full"></iframe>
                </div>
                <hr/>
                <h2 className="font-montserrat text-2xl text-white pt-0 sm:pl-50 uppercase font-100 pb-0 my-3">
                  DIRECTORIO
                </h2>
                <div className="directorio">
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>DIRECCIÓN GENERAL</h3>
                    <h4 className="flex justify-end"><strong>Ext. 228</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>ASISTENTE DE DIRECCION GENERAL</h3>
                    <h4 className="flex justify-end"><strong>Ext. 227</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>COMPRAS</h3>
                    <h4 className="flex justify-end"><strong>Ext. 220</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>CONTABILIDAD</h3>
                    <h4 className="flex justify-end"><strong>Ext. 221</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>GERENCIA ADMINISTRATIVA</h3>
                    <h4 className="flex justify-end"><strong>Ext. 258</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>GERENCIA DE ENSEÑANZA Y DIFUSIÓN</h3>
                    <h4 className="flex justify-end"><strong>Ext. 253</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>PUBLICIDAD, LIBRERÍA Y CURSOS</h3>
                    <h4 className="flex justify-end"><strong>Ext. 210</strong></h4>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5 border border-gray-700">
                <h1 className="flex items-center font-montserrat text-2xl text-white pt-0 sm:pl-50 uppercase font-bold pb-3">
                  <CiCircleChevRight className="mr-2"/> GERENCIA TÉCNICA IMCYC
                </h1>
                <hr/>
                <p className="py-5">Constitución # 50<br/>Col. Escandón C.P. 11800<br/>México, CDMX<br/>Teléfonos: <strong>(55) 52 76 72 00 Ext. 122</strong></p>
                <hr/>
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7526.468740831303!2d-99.180921!3d19.402277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff666e276d29%3A0x73697d52ea193707!2sIMCYC!5e0!3m2!1ses-419!2smx!4v1730341760592!5m2!1ses-419!2smx" width="600" height="450" loading="lazy" className="my-3 w-full"></iframe>
                </div>
                <hr/>
                <h2 className="font-montserrat text-2xl text-white pt-0 sm:pl-50 uppercase font-100 pb-0 my-3">
                  DIRECTORIO
                </h2>
                <div className="directorio">
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>DIRECCIÓN GENERAL</h3>
                    <h4 className="flex justify-end"><strong>Ext. 121</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>ASISTENCIA DE GERENCIA TÉCNICA</h3>
                    <h4 className="flex justify-end"><strong>Ext. 122</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>ASESORÍAS TÉCNICAS EN ESTRUCTURAS</h3>
                    <h4 className="flex justify-end"><strong>Ext. 110</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>LABORATORIO DE CONCRETO</h3>
                    <h4 className="flex justify-end"><strong>Ext. 157</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>LABORATORIO DE CEMENTO</h3>
                    <h4 className="flex justify-end"><strong>Ext. 116</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>LABORATORIO DE CALIBRACIÓN</h3>
                    <h4 className="flex justify-end"><strong>Ext. 131</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>EVALUACIÓN DE LA CONFORMIDAD</h3>
                    <h4 className="flex justify-end"><strong>Ext. 124</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>ORGANISMO DE CERTIFICACIÓN DE PRODUCTO</h3>
                    <h4 className="flex justify-end"><strong>Ext. 151</strong></h4>
                  </div>
                  <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-between">
                    <h3>ORGANISMO DE CERTIFICACIÓN DE PERSONAS</h3>
                    <h4 className="flex justify-end"><strong>Ext. 151</strong></h4>
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
