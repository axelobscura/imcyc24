"use client";
import { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import { Button, Modal, Label, TextInput, Accordion } from "flowbite-react";
import { FaArrowAltCircleRight, FaArrowCircleDown } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { PiUserCirclePlusFill } from "react-icons/pi";

type Credencial = {
  nombre: string;
  fecha: string;
  certificado: string;
  credencial: string;
  estatus: string;
};

const esquemas = [
  {
    "nombre": "Técnico Laboratorista en ensayos de Concreto Fresco (TLCF)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo secundaria).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": [],
    "normas": [
      {
        "nmx": "NMX-C-161-ONNCCE-2013",
        "astm": "ASTM C172/C172M",
      },
      {
        "nmx": "NMX-C-156-ONNCCE-2010",
        "astm": "ASTM C143/C143M",
      },
      {
        "nmx": "NMX-C-157-ONNCCE-2006",
        "astm": "ASTM C231/C231M",
      },
      {
        "nmx": "NMX-C-158-ONNCCE-2006",
        "astm": "ASTM C173/C173M",
      },
      {
        "nmx": "NMX-C-159-ONNCCE-2016",
        "astm": "ASTM C31/C31M",
      },
      {
        "nmx": "NMX-C-162-ONNCCE-2014",
        "astm": "ASTM C138/C138M",
      },
      {
        "nmx": "NMX-C-435-ONNCCE-2010",
        "astm": "ASTM C1064/C1064M",
      }
    ]
  },
  {
    "nombre": "Técnico Laboratorista en ensayos de Concreto Endurecido (TLCE)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo secundaria).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": [],
    "normas": [
      {
        "nmx": "NMX-C-083-ONNCCE-2014",
        "astm": "ASTM C39/C39M",
      },
      {
        "nmx": "NMX-C-109-ONNCCE-2013",
        "astm": "ASTM C617/C617M",
      },
      {
        "nmx": "NMX-C-191-ONNCCE-2015",
        "astm": "ASTM C78/C78M",
      },
      {
        "nmx": "NMX-C-469-ONNCCE-2013",
        "astm": "ASTM C1231/C1231M",
      }
    ]
  },
  {
    "nombre": "Técnico Laboratorista en ensayos Físicos de Agregados (TLFA)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo secundaria).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "normas": [
      {
        "nmx": "NMX-C-030-ONNCCE-2004",
        "astm": "ASTM D75/D75M",
      },
      {
        "nmx": "NMX-C-077-ONNCCE-2019",
        "astm": "ASTM C136/C136M",
      },
      {
        "nmx": "NMX-C-084-ONNCCE-2018",
        "astm": "ASTM C117",
      },
      {
        "nmx": "NMX-C-088-ONNCCE-2019",
        "astm": "ASTM C40/C40M",
      },
      {
        "nmx": "NMX-C-164-ONNCCE-2014",
        "astm": "ASTM C127",
      },
      {
        "nmx": "NMX-C-165-ONNCCE-2014",
        "astm": "ASTM C128",
      },
      {
        "nmx": "NMX-C-166-ONNCCE-2018",
        "astm": "ASTM C566",
      },
      {
        "nmx": "NMX-C-170-ONNCCE-2019",
        "astm": "ASTM C702/C702M",
      }
    ]
  },
  {
    "nombre": "Supervisor de laboratorio de ensayos en la rama de construcción (SL)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo nivel medio superior).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": ["Conocimientos generales en ISO/IEC 17025:2017 NMX-EC-17025-IMNC-2018 'Requisitos generales para la competencia de los laboratorios de ensayo y calibración'.","Aseguramiento de la validez de los resultados.","Estimación de la incertidumbre.","Buenas prácticas de laboratorio."],
    "normas": [
      {
        "nmx": "NMX-C-030-ONNCCE-2004",
        "astm": "ASTM D75/D75M",
      },
      {
        "nmx": "NMX-C-077-ONNCCE-2019",
        "astm": "ASTM C136/C136M",
      },
      {
        "nmx": "NMX-C-084-ONNCCE-2018",
        "astm": "ASTM C117",
      },
      {
        "nmx": "NMX-C-088-ONNCCE-2019",
        "astm": "ASTM C40/C40M",
      },
      {
        "nmx": "NMX-C-164-ONNCCE-2014",
        "astm": "ASTM C127",
      },
      {
        "nmx": "NMX-C-165-ONNCCE-2014",
        "astm": "ASTM C128",
      },
      {
        "nmx": "NMX-C-166-ONNCCE-2018",
        "astm": "ASTM C566",
      },
      {
        "nmx": "NMX-C-170-ONNCCE-2019",
        "astm": "ASTM C702/C702M",
      }
    ]
  },
  {
    "nombre": "Técnico Laboratorista en ensayos Físicos de Cemento (TLFC)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo secundaria).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "normas": [
      {
        "nmx": "NMX-C-049-ONNCCE-2015",
        "astm": "ASTM C430",
      },
      {
        "nmx": "NMX-C-056-ONNCCE-2019",
        "astm": "ASTM C204",
      },
      {
        "nmx": "NMX-C-057-ONNCCE-2015",
        "astm": "ASTM C187",
      },
      {
        "nmx": "NMX-C-059-ONNCCE-2017",
        "astm": "ASTM C191",
      },
      {
        "nmx": "NMX-C-061-ONNCCE-2015",
        "astm": "ASTM C109/C109M",
      },
      {
        "nmx": "NMX-C-062-ONNCCE-2015",
        "astm": "ASTM C151/C151M - ASTM C490/C490M",
      },
      {
        "nmx": "NMX-C-132-ONNCCE-2015",
        "astm": "ASTM C451",
      },
      {
        "nmx": "NMX-C-152-ONNCCE-2015",
        "astm": "ASTM C188",
      },
      {
        "nmx": "NMX-C-185-ONNCCE-2015",
        "astm": "ASTM 1038/C1038M",
      }
    ]
  },
  {
    "nombre": "Técnico Laboratorista en ensayos Químicos de Cemento (TLQC)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo secundaria).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "normas": [
      {
        "nmx": "NMX-C-131-ONNCCE-2016",
        "astm": "ASTM C114",
      }
    ]
  },
  {
    "nombre": "Operador de camión mezclador (OCM)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo secundaria).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": ["Atención al cliente","Mantenimiento preventivo de ollas mezcladoras","Operación del camión revolvedor","Carga, muestreo y descarga del concreto","Inspección del camión mezclador antes, durante y después del transporte del concreto","Tecnología del concreto","Manejo a la defensiva"],
    "normas": []
  },
  {
    "nombre": "Técnico Especialista en Durabilidad (TED)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo medio superior).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": ["Tecnología del concreto","Durabilidad de estructuras de concreto","Inspección y evaluación de estructuras de concreto","Medidas preventivas y métodos de prueba"],
    "normas": []
  },
  {
    "nombre": "Técnico Especialista en uso de Aditivos (TEA)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo medio superior).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": ["Tecnología del concreto","Tecnología de aditivos para concreto","Muestreo de aditivos y pruebas de verificacióno","Pruebas de selección, evaluación, calidad y comportamiento","Métodos de ensayo","Marcado, etiquetado y embalaje"],
    "normas": []
  },
  {
    "nombre": "Técnico Especialista en colocación de Concreto en Climas Extremos (TECCE)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo medio superior).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": ["Tecnología del concreto","Producción, entrega y colocación de concreto en climas cálido y frío","Pruebas e inspección"],
    "normas": []
  },
  {
    "nombre": "Técnico especialista en Tecnología de Agregados para Concreto (TEAC)",
    "educacion": "*Certificado de estudios con reconocimiento de validez oficial (mínimo medio superior).",
    "experiencia": "(1 Año al menos realizando ensayos)",
    "doc": "Carta emitida por una organización o laboratorio de ensayos (con fecha de emisión no mayor a 1 año) donde indiquen sus actividades y responsabilidades vinculadas con este esquema de certificación.",
    "formacion": "Diploma, certificado o constancia que demuestre capacitación teórica-práctica considerando los siguientes estándares:",
    "extras": ["Tecnología del concreto","Agregados para concreto","Muestreo y pruebas de agregados"],
    "normas": []
  }
]

export default function OrganismoDeCertificacionDePersonas() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalApelacion, setOpenModalApelacion] = useState(false);
  const [useProducto, setProducto] = useState("proceso");
  const [posts, setPosts] = useState([]);
  const [useCertificado, setCertificado] = useState(false);
  const [useCredencial, setCredencial] = useState<Credencial[]>([]);
 
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/certificados')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);
 
  if (!posts) return <div>Loading...</div>

  const buscarCert = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCertificado(true);
    const form = e.target as HTMLFormElement;
    posts.filter(certificado => {
      if(certificado[2] === form.certificado.value || certificado[3] === form.credencial.value){
        setCredencial([{
          nombre: certificado[0],
          fecha: certificado[1],
          certificado: certificado[2],
          credencial: certificado[3],
          estatus: certificado[4],
        }]);
        setCertificado(true);
      }
    });
  }
  
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/bkgs/bkg2.jpeg')] bg-fixed bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40 text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Organismo de Certificación de Personas
                </h1>
                <p className='font-montserrat text-justify'>El Organismo de Certififcación de Personas de El Instituto Mexicano del Cemento y del Concreto A.C., cuenta con la acreditación <strong>No. 157/22 otorgada por la Entidad Mexicana de Acreditación (ema)</strong>.</p><br/>
                <p className='font-montserrat text-justify text-tiny'>Pensando en las necesidades de la industria de la construcción, El Organismo de Certificación de Personas (OCPER) cuenta con la acreditación No. 157/22, la cual nos permitirá crear un mecanismo para que las personas interesadas puedan demostrar competencia en habilidades específicas para desempeñarse como técnicos laboratoristas en concreto, agregados y cemento, supervisores de laboratorio, operadores de ollas de mezclado de concreto, y otras actividades clave en la industria.</p>
              </div>
              <div className="w-full">
                <p className={`bg-opacity-70 ${useProducto === "proceso" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("proceso")}>PROCESO DE CERTIFICACIÓN <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "esquemas" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("esquemas")}>ESQUEMAS DE CERTIFICACIÓN <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                {/* <p className={`bg-opacity-70 ${useProducto === "personas" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("personas")}>PERSONAS CERTIFICADAS <FaArrowAltCircleRight className="mr-3" size={20} /></p> */}
                <p className={`bg-opacity-70 ${useProducto === "consultar" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("consultar")}>CONSULTAR CERTIFICADO Y CREDENCIAL <FaArrowAltCircleRight className="mr-3" size={20} /></p>
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
                        <Accordion collapseAll className='mb-2 border-none'>
                          <Accordion.Panel>
                            <Accordion.Title className='p-0 border border-none flex items-center font-montserrat text-medium bg-slate-800 hover:bg-slate-700 font-light cursor-pointer'>
                              <span className='flex items-center p-3'>
                                <MdAddBox size={25} className="mr-2" /> {index + 1} - {esq.nombre}
                              </span>
                            </Accordion.Title>
                            <Accordion.Content className='border border-none'>
                              <h2 className="font-montserrat text-1xl text-gray-200 mb-2 text-justify"><strong className='flex items-center'><IoIosAddCircle className='mr-1' /> Educación</strong>{esq.educacion}</h2>
                              <h2 className="font-montserrat text-1xl text-gray-200 mb-2 text-justify"><strong className='flex items-center'><IoIosAddCircle className='mr-1' /> Experiencia</strong>{esq.experiencia}</h2>
                              <h2 className="font-montserrat text-1xl text-gray-200 mb-2 text-justify"><strong className='flex items-center'><IoIosAddCircle className='mr-1' /> Documentos</strong>{esq.doc}</h2>
                              <h2 className="font-montserrat text-1xl text-gray-200 mb-2 text-justify mb-3"><strong className='flex items-center'><IoIosAddCircle className='mr-1' /> Formación</strong>{esq.formacion}</h2>
                              {esq.normas.map((norma, index) => (
                                <div key={index} className='grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5'>
                                  <div className='bg-slate-800 bg-opacity-90 p-3 border border-spacing-3 border-slate-700 mb-1'>
                                    <h2 className="font-montserrat text-1xl text-gray-200 text-justify flex items-center"><IoIosAddCircle className='mr-2' /> <strong>{norma.nmx}</strong></h2>
                                  </div>
                                  <div className='bg-slate-800 bg-opacity-90 p-3 border border-spacing-3 border-slate-700 mb-1'>
                                    <h2 className="font-montserrat text-1xl text-gray-200 text-justify flex items-center"><IoIosAddCircle className='mr-2' /> <strong>{norma.astm}</strong></h2>
                                  </div>
                                </div>
                              ))}
                              {esq.extras && esq.extras.map((norma, index) => (
                                <div key={index} className='grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-5'>
                                  <div className='bg-slate-800 bg-opacity-90 p-3 border border-spacing-3 border-slate-700 mb-1'>
                                    <h2 className="font-montserrat text-1xl text-gray-200 text-justify flex items-center"><IoIosAddCircle className='mr-2' /> <strong>{norma}</strong></h2>
                                  </div>
                                </div>
                              ))}
                              <hr className='mt-3'/>
                              <p className="font-montserrat py-1 text-tiny font-bold">*Cuando el candidato sea extranjero y presente evidencias de educación, estas deben ser equivalentes al nivel educativo en México y del esquema de certificación que solicite.</p>
                              <p className="font-montserrat py-1 text-tiny font-bold">En caso de tener alguna duda al respecto, por favor comunicarse a los datos indicados en el apartado de contacto.</p>
                            </Accordion.Content>
                          </Accordion.Panel>
                        </Accordion>
                      </li>
                    ))}
                  </ul>
                </>
              }
              {useProducto === "personas" &&
                <>
                  <h2 className="font-montserrat font-light p-3 mb-3 text-2xl font-bold pb-2 flex items-center uppercase bg-green-900 bg-opacity-80">Certificados Vigentes</h2>
                  {posts && posts.map((cert, index) => {
                    if(cert[0] === "vigente"){
                      return (
                        <div key={index} className='bg-slate-900 bg-opacity-55 mb-2 p-3 border border-spacing-3 border-green-800'>
                          <h2 className="font-montserrat px-3 text-2xl font-bold pb-2 flex items-center"><span><PiUserCirclePlusFill size={50} className='mr-2' /></span><span className='text-slate-400'>{cert[1]}<br/>{cert[4]}</span></h2>
                          <p className="font-montserrat px-3 text-1xl">Certificado: <strong>{cert[2]}</strong></p>
                          <p className="font-montserrat px-3 text-1xl">Credencial de certificación: <strong>{cert[3]}</strong></p>
                          <p className="font-montserrat px-3 text-1xl">Vigencia: <strong>{cert[5]}</strong></p>
                        </div>
                      )
                    }
                  })}
                  <h2 className="font-montserrat font-light p-3 mb-3 text-2xl font-bold pb-2 flex items-center uppercase bg-red-950 bg-opacity-80">Certificados Cancelados</h2>
                  {posts && posts.map((cert, index) => {
                    if(cert[0] === "cancelado"){
                      return (
                        <div key={index} className='bg-slate-900 bg-opacity-55 mb-2 p-3 border border-spacing-3 border-red-950'>
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
                <div className='bg-slate-900 bg-opacity-80 p-5'>
                  
                  {useCertificado ?
                    <div>
                      <p className="font-montserrat text-1xl font-bold pb-2 flex items-center text-gray-100">Resultado:</p>
                      {useCredencial.map((cert, index) => (
                        <div key={index} className='bg-slate-900 bg-opacity-55 mb-2 p-3 border border-spacing-3 border-green-800'>
                          <h2 className="font-montserrat px-3 text-2xl font-bold pb-2 flex items-center"><span><PiUserCirclePlusFill size={50} className='mr-2' /></span><span className='text-slate-400'>{cert.nombre}<br/>{cert.estatus}</span></h2>
                          <p className="font-montserrat px-3 text-1xl">Nombre: <strong>{cert.fecha}</strong></p>
                          <p className="font-montserrat px-3 text-1xl">Certificado: <strong>{cert.certificado}</strong></p>
                          <p className="font-montserrat px-3 text-1xl">Credencial de certificación: <strong>{cert.credencial}</strong></p>
                        </div>
                      ))}
                    </div>
                  :
                    <>
                      <p className="font-montserrat text-1xl font-bold pb-2 flex items-center text-gray-100">Por favor, introduzca el número de certificado o credencial que desee consultar y posteriormente, buscar:</p>
                      <form className="flex w-full flex-col gap-4" onSubmit={buscarCert}>
                        <div>
                          <div className="mb-2 flex items-center">
                          <FaArrowCircleDown className='mr-2' /> <Label htmlFor="email1" value="Introduzca el No. de certificado:" className="font-montserrat text-1xl font-bold flex items-center text-gray-100" />
                          </div>
                          <TextInput id="certificado" type="text" name='certificado' placeholder="Introducir número de certificado" required />
                        </div>
                        <div>
                          <div className="mb-2 flex items-center">
                          <FaArrowCircleDown className='mr-2' /> <Label htmlFor="password1" value="Introduzca el No. de credencial:" className="font-montserrat text-1xl font-bold pb-2 flex items-center text-gray-100" />
                          </div>
                          <TextInput id="credencial" type="credencial" name='credencial' placeholder="Número de credencial" required />
                        </div>
                        <Button type="submit" className='font-montserrat uppercase font-bold'>Buscar</Button>
                      </form>
                    </>
                  }
                </div>
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
