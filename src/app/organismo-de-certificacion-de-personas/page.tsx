"use client";
import Link from "next/link";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";


export default function OrganismoDeCertificacionDePersonas() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalApelacion, setOpenModalApelacion] = useState(false);
  const [useProducto, setProducto] = useState("proceso");
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/bkgs/bkg2.jpeg')] bg-fixed bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20 text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Organismo de Certificación de Personas
                </h1>
                <p className='font-montserrat text-justify'>El Organismo de Certififcación de Personas del IMCYC, cuenta con la acreditación <strong>No. 157/2 otorgada por la Entidad Mexicana de Acreditación (ema)</strong>.</p>
              </div>
              
              <div className="w-full">
                <p className={`bg-opacity-70 ${useProducto === "proceso" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("proceso")}>PROCESO DE CERTIFICACIÓN <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "esquemas" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("esquemas")}>ESQUEMAS DE CERTIFICACIÓN <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "personas" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("personas")}>PERSONAS CERTIFICADAS <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "consultar" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("consultar")}>CONSULTAR CERTIFICADO Y GAFETE <FaArrowAltCircleRight className="mr-3" size={20} /></p>
              </div>
              <div className="w-full">
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header className="font-montserrat">Proceso de Queja</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <Image
                        src="/proceso_queja.png"
                        width={800}
                        height={0}
                        alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>CERRAR</Button>
                  </Modal.Footer>
                </Modal>
                <p className="bg-blue-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer" onClick={() => setOpenModal(true)}><BiPlusCircle className="mr-3" size={20} /> PROCESO DE QUEJAS</p>
              </div>
              <div className="w-full">
                <Modal show={openModalApelacion} onClose={() => setOpenModalApelacion(false)}>
                  <Modal.Header className="font-montserrat">Proceso de Apelación</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <Image
                        src="/proceso_apelacion.png"
                        width={800}
                        height={0}
                        alt="Instituto Mexicano del Cemento y del Concreto A.C."
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenModalApelacion(false)}>CERRAR</Button>
                  </Modal.Footer>
                </Modal>
                <p className="bg-blue-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer" onClick={() => setOpenModalApelacion(true)}><BiPlusCircle className="mr-3" size={20} /> PROCESO DE APELACIONES</p>
              </div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className='font-montserrat'><strong>Ing. Diana Zamora Godínez</strong></p>
                <p><Link href="mailto:dzamora@mail.imcyc.com">dzamora@mail.imcyc.com</Link></p>
              </div>
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              {useProducto === "proceso" &&
                <>
                </>
              }
              {useProducto === "esquemas" &&
                <>
                </>
              }
              {useProducto === "personas" &&
                <>
                </>
              }
              {useProducto === "consultar" &&
                <>
                </>
              }
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
