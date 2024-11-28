"use client";
import { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import { Button, Modal } from "flowbite-react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { PiUserCirclePlusFill } from "react-icons/pi";

const esquemas = ["Técnico Laboratorista en ensayos de Concreto Fresco (TLCF)","Técnico Laboratorista en ensayos de Concreto Endurecido (TLCE)","Técnico Laboratorista en ensayos Físicos de Agregados (TLFA)","Supervisor de laboratorio de ensayos en la rama de construcción (SL)","Técnico Laboratorista en ensayos Físicos de Cemento (TLFC)","Técnico Laboratorista en ensayos Químicos de Cemento (TLQC)","Operador de camión mezclador (OCM)","Técnico Especialista en Durabilidad (TED)","Técnico Especialista en uso de Aditivos (TEA)","Técnico Especialista en colocación de Concreto en Climas Extremos (TECCE)","Técnico especialista en Tecnología de Agregados para Concreto (TEAC)"]

export default function OrganismoDeCertificacionDePersonas() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalApelacion, setOpenModalApelacion] = useState(false);
  const [useProducto, setProducto] = useState("proceso");
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/certificados')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);
 
  if (!posts) return <div>Loading...</div>
  
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/bkgs/bkg2.jpeg')] bg-fixed bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20 text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Organismo de Certificación de Personas
                </h1>
                <p className='font-montserrat text-justify'>El Organismo de Certififcación de Personas de El Instituto Mexicano del Cemento y del Concreto A.C., cuenta con la acreditación <strong>No. 157/2 otorgada por la Entidad Mexicana de Acreditación (ema)</strong>.</p>
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
              <div className="bg-slate-800 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className='font-montserrat text-justify text-sm'><strong>El tiempo promedio puede reducirse, pero dependerá de que el solicitante entregue la documentación completa al organismo y su disponibilidad para presentar las evaluaciones correspondientes al esquema de certificación que solicite.</strong></p>
              </div>
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              {useProducto === "proceso" &&
                <>
                  <div className="bg-slate-900 bg-opacity-70 p-3">
                    <h2 className="font-montserrat p-3 text-2xl font-bold">1) Solicitud de Certificación</h2>
                    <p className="font-montserrat pl-3">Enviar al correo dzamora@mail.imcyc.com la siguiente información:</p>
                    <ul className="font-montserrat px-10 py-3 list-disc">
                      <li>Solicitud de certificación debidamente llenada y firmada (solicitar el formato de solicitud a los correos anteriores o al teléfono 5276 7200 Ext. 124).</li>
                      <li>Condición de certificación firmada, la cual debe ser enviada en conjunto con la solicitud de certificación.</li>
                      <li>Evidencias requeridas de prerrequisitos (ver apartado de prerrequisitos), de acuerdo al esquema de certificación de interés.</li>
                      <li>Fotografía, de acuerdo con los lineamientos que le serán indicados.</li>
                      <li>Comprobante de pago.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 bg-opacity-70 p-3 mt-3">
                    <h2 className="font-montserrat p-3 text-2xl font-bold">2) Evaluaciones a realizar</h2>
                    <p className="font-montserrat pl-3">Duración promedio de 1 a 2 meses.</p>
                    <ul className="font-montserrat px-10 py-3 list-disc">
                      <li>Evaluación de prerrequisitos para determinar si el solicitante es candidato para continuar con el proceso de certificación.</li>
                      <li>Evaluación de conocimiento teórico acorde al esquema de certificación solictado con oportunidad de realizar segunda vuelta en caso de no aprobar la primera.</li>
                      <li>Evaluación práctica acorde al esquema de certificación solicitado, con oportunidad de realizar segunda vuelta en caso de no aprobar la primera.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 bg-opacity-70 p-3 mt-3">
                    <h2 className="font-montserrat p-3 text-2xl font-bold">3) Dictaminación</h2>
                    <p className="font-montserrat pl-3">Revisión y toma de decisión para otorgar la certificación con base en las evaluaciones aplicadas y presentadas por el candidato.<br/><br/>En caso de otorgarse la certificación, ésta tendra una duración de 3 años.</p>
                  </div>
                  <div className="bg-slate-900 bg-opacity-70 p-3 mt-3">
                    <h2 className="font-montserrat p-3 text-2xl font-bold">4) Ampliación o Renovación</h2>
                    <p className="font-montserrat pl-3">Duración promedio de 1 a 2 meses.</p>
                    <h3 className="font-montserrat p-3 text-1xl font-bold">Ampliación</h3>
                    <p className="font-montserrat pl-3">Durante la vigencia del certificado, la persona certificada podrá solicitar la ampliación de su alcance de certificación.</p>
                    <h3 className="font-montserrat p-3 text-1xl font-bold">Renovación</h3>
                    <p className="font-montserrat pl-3">Al acercarse el termino de la vigencia de su certificación, el organismo le notificará o usted puede solicitar su renovación.</p>
                  </div>
                </>
              }
              {useProducto === "esquemas" &&
                <>
                  <ul>
                    {esquemas.map((esq, index) => (
                      <li key={index} className="bg-slate-900 bg-opacity-90 mb-1">
                        <h2 className="flex items-center font-montserrat p-3 text-medium hover:bg-slate-700 font-light cursor-pointer"><MdAddBox size={25} className="mr-2" /> {esq}</h2>
                      </li>
                    ))}
                  </ul>
                </>
              }
              {useProducto === "personas" &&
                <>
                {posts && posts.map((cert, index) => {
                  if(cert[0] === "vigente"){
                    return (
                      <div key={index} className='bg-slate-900 bg-opacity-55 mb-2 p-3'>
                        <h2 className="font-montserrat px-3 text-2xl font-bold pb-2 flex items-center"><span><PiUserCirclePlusFill size={50} className='mr-2' /></span><span className='text-slate-400'>{cert[1]}<br/>{cert[4]}</span></h2>
                        <p className="font-montserrat px-3 text-1xl">Certificado: <strong>{cert[2]}</strong></p>
                        <p className="font-montserrat px-3 text-1xl">Credencial de certificación: <strong>{cert[3]}</strong></p>
                        <p className="font-montserrat px-3 text-1xl">Vigencia: <strong>{cert[5]}</strong></p>
                      </div>
                    )
                  }
                })}
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
