"use client";
import Link from "next/link";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import { Button, Modal, Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";


export default function OrganismoDeCertificacionDeProducto() {
  const [openModal, setOpenModal] = useState(false);
  const [openVigentes, setOpenVigentes] = useState(false);
  const [openSuspendidos, setOpenSuspendidos] = useState(false);
  const [openCancelados, setOpenCancelados] = useState(false);
  const [openModalApelacion, setOpenModalApelacion] = useState(false);
  const [useProducto, setProducto] = useState("alcance");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/empresas')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);
 
  if (!posts) return <div>Cargando...</div>

  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/cert.jpeg')] bg-fixed bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40 text-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Organismo de Certificación de Producto
                </h1>
                <p className='font-montserrat text-justify'>Realiza la evaluación de productos prefabricados, adhesivos y cementantes hidráulicos, mediante la revisión del cumplimiento de requisitos del proceso de fabricación y del desempeño de los productos, con la finalidad de otorgar un certificado de calidad.<br/><br/><strong>El Organismo de Certificación de Producto del IMCYC, cuenta con la acreditación No. 157/19 otorgada por la entidad mexicana de acreditación (ema)</strong>.</p>
              </div>
              
              <div className="w-full">
                <p className={`bg-opacity-70 ${useProducto === "alcance" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("alcance")}>ALCANCE DE ACREDITACIÓN <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "proceso" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("proceso")}>PROCESO DE CERTIFICACIÓN DE PRODUCTO <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "organizaciones" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("organizaciones")}>ORGANIZACIONES CERTIFICADAS <FaArrowAltCircleRight className="mr-3" size={20} /></p>
                <p className={`bg-opacity-70 ${useProducto === "contactos" ? 'bg-slate-100 bg-opacity-100 text-gray-900' : 'bg-slate-800'} bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center justify-between text-gray-100 cursor-pointer`} onClick={() => setProducto("contactos")}>CONTACTOS <FaArrowAltCircleRight className="mr-3" size={20} /></p>
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
                <p className="bg-blue-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer" onClick={() => setOpenModal(true)}><BiPlusCircle className="mr-3" size={20} /> PROCESO DE QUEJA</p>
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
                <p className="bg-blue-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer" onClick={() => setOpenModalApelacion(true)}><BiPlusCircle className="mr-3" size={20} /> PROCESO DE APELACIÓN</p>
              </div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className='font-montserrat'><strong>Ing. Diana Zamora Godínez</strong></p>
                <p><Link href="mailto:dzamora@mail.imcyc.com">dzamora@mail.imcyc.com</Link></p>
              </div>
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              {useProducto === "alcance" &&
                <>
                  <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">PREFABRICADOS</h3>
                  <ul className="font-montserrat font-light m-5 list-disc">
                    <li>
                      <h3><strong>NMX-C-314-ONNCCE-2014</strong></h3>
                      <p>Industria de la Construcción - Mampostería - Adoquines para uso en pavimentos - Especificaciones y Métodos de Ensayo.</p>  
                    </li>
                    <li>
                      <h3><strong>NMX-C-404-ONNCCE-2012</strong></h3>
                      <p>Industria de la Construcción - Mampostería - Bloques, tabiques o ladrillos y tabicones para uso estructural - Especificaciones y Métodos de Ensayo.</p>  
                    </li>
                    <li>
                      <h3><strong>NMX-C-405-ONNCCE-2014</strong></h3>
                      <p>Industria de la Construcción - Paneles para uso Estructural aplicados en sistemas constructivos - Especificaciones y Métodos de Ensayo.</p>  
                    </li>
                    <li>
                      <h3><strong>NMX-C-406-ONNCCE-2019</strong></h3>
                      <p>Industria de la Construcción - Componentes Estructurales Prefabricados de Concreto para Sistemas de Losas - Especificaciones y Métodos de Ensayo.</p>  
                    </li>
                    <li>
                      <h3><strong>NMX-C-441-ONNCCE-2013</strong></h3>
                      <p>Industria de la Construcción - Mampostería - Bloques, tabiques o ladrillos y tabicones para uso no estructural - Especificaciones y Métodos de Ensayo.</p>  
                    </li>
                  </ul>
                  <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">CEMENTO</h3>
                  <ul className="font-montserrat font-light m-5 list-disc">
                    <li>
                      <h3><strong>NMX-C-414-ONNCCE-2017</strong></h3>
                      <p>Industria de la Construcción - Cementantes Hidráulicos - Especificaciones y Métodos de Ensayo.</p>  
                    </li>
                  </ul>
                  <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">ADHESIVOS</h3>
                  <ul className="font-montserrat font-light m-5 list-disc">
                    <li>
                      <h3><strong>NMX-C-420-1-ONNCCE-2017</strong></h3>
                      <p>Industria de la Construcción - Mezclas Adhesivas para Instalación de Recubrimientos Cerámicos y Piedras Naturales - Especificaciones y Métodos de Prueba - Parte 1: Base Cementantes Hidráulicos.</p>  
                    </li>
                  </ul>
                </>
              }
              {useProducto === "proceso" &&
                <>
                  <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">PROCESO DE CERTIFICACIÓN</h3>
                  <h4 className="font-montserrat font-bold text-2xl p-3">CERTIFICACIÓN INICIAL</h4>
                  <Image
                    src="/certificacion/inicial.jpg"
                    width={800}
                    height={0}
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    className="p-3"
                  />
                  <h4 className="font-montserrat font-bold text-2xl p-3">VISITA DE SEGUIMIENTO (VIGILANCIA) </h4>
                  <Image
                    src="/certificacion/seguimiento.jpg"
                    width={800}
                    height={0}
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    className="p-3"
                  />
                  <h4 className="font-montserrat font-bold text-2xl p-3">AMPLIACIÓN O REDUCCIÓN DE ALCANCE </h4>
                  <Image
                    src="/certificacion/proceso.jpg"
                    width={800}
                    height={0}
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    className="p-3"
                  />
                  <h4 className="font-montserrat font-bold text-2xl p-3">RENOVACIÓN DE CERTIFICACIÓN</h4>
                  <Image
                    src="/certificacion/renovacion.jpg"
                    width={800}
                    height={0}
                    alt="Instituto Mexicano del Cemento y del Concreto A.C."
                    className="p-3"
                  />
                  <h4 className="font-montserrat font-bold text-2xl p-3">ESQUEMAS DE CERTIFICACIÓN</h4>
                  <h5 className="font-montserrat font-bold text-1xl p-3">Opción 1.</h5>
                  <ul className="font-montserrat text-md p-3 ml-5 font-light list-disc">
                    <li>Duración de 3 años con visitas de vigilancias anuales.</li>
                    <li>Sistema de gestión de la Calidad.</li>
                    <li>Resultados de ensayos realizados a los productos.</li>
                  </ul>
                  <h5 className="font-montserrat font-bold text-1xl p-3">Opción 2.</h5>
                  <ul className="font-montserrat font-light text-1xl p-3 ml-5 list-disc">
                    <li>Duración de 1 año con visita de vigilancia semestral.</li>
                    <li>Sistema de Control de Calidad.</li>
                    <li>Resultados de ensayos realizados a los productos.</li>
                  </ul> 
                  <h5 className="font-montserrat font-bold text-1xl p-3">Para dar inicio al proceso de certificación de producto, enviar los formatos FIG-GTOCP-002 y FIG-GTOCP-014 llenados a los correos indicados en el apartado de contactos.</h5>
                  <Link href="https://imcyc.com/2024/FIG-GTOCP-002_Solicitud_de_certificacion_de_producto.docx"><p className="bg-slate-800 opacity-900 p-5 mb-3">Descargar FIG-GTOCP-002 - Solicitud de certificación de producto - .</p></Link>
                  <Link href="https://imcyc.com/2022/FIG-GTOCP-014-Condiciones-de-certificacion.pdf"><p className="bg-slate-800 opacity-900 p-5 mb-3">Descargar FIG-GTOCP-014 - Condiciones de certificación - .</p></Link>
                </>
              }
              {useProducto === "organizaciones" &&
                <>
                  <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">ORGANIZACIONES CERTIFICADAS</h3>
                  <Modal show={openVigentes} onClose={() => setOpenVigentes(false)} className="font-montserrat" style={{
                          maxWidth: '70rem',
                          margin: '0 auto',
                        }}>
                    <Modal.Header className="font-montserrat">CERTIFICADOS VIGENTES</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-12">
                        <Table striped>
                          <Table.Head className="border-gray-700 bg-gray-800">
                            <Table.HeadCell>No. Certificado</Table.HeadCell>
                            <Table.HeadCell>Empresa</Table.HeadCell>
                            <Table.HeadCell>Estándar</Table.HeadCell>
                            <Table.HeadCell>Alcance</Table.HeadCell>
                            <Table.HeadCell>Vigencia</Table.HeadCell>
                          </Table.Head>
                          <Table.Body className="divide-y">
                            {posts.map((ele, index) => {
                              if(ele[0] === "vigente"){
                                return (
                                  <Table.Row key={index} className="border-gray-700 bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ele[1]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[2]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[4]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[3]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[5]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[6]}</Table.Cell>
                                  </Table.Row>
                                )
                              }
                            })}
                          </Table.Body>
                        </Table>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setOpenVigentes(false)}>CERRAR</Button>
                    </Modal.Footer>
                  </Modal>
                  <p className="font-montserrat bg-green-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-2 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer my-2 mt-4" onClick={() => setOpenVigentes(true)}><BiPlusCircle className="mr-3" size={20} /> CERTIFICADOS VIGENTES</p>
                  <Modal show={openSuspendidos} onClose={() => setOpenSuspendidos(false)} className="font-montserrat" style={{
                          maxWidth: '70rem',
                          margin: '0 auto',
                        }}>
                    <Modal.Header className="font-montserrat">CERTIFICADOS SUSPENDIDOS</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-12">
                        <p className="font-montserrat text-2xl text-center uppercase text-gray-900">No hay registros</p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setOpenSuspendidos(false)}>CERRAR</Button>
                    </Modal.Footer>
                  </Modal>
                  <p className="font-montserrat bg-yellow-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-2 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer my-2" onClick={() => setOpenSuspendidos(true)}><BiPlusCircle className="mr-3" size={20} /> CERTIFICADOS SUSPENDIDOS</p>
                  <Modal show={openCancelados} onClose={() => setOpenCancelados(false)} className="font-montserrat" style={{
                          maxWidth: '70rem',
                          margin: '0 auto',
                        }}>
                    <Modal.Header className="font-montserrat">CERTIFICADOS CANCELADOS</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-12">
                        <Table striped>
                          <Table.Head className="border-gray-700 bg-gray-800">
                            <Table.HeadCell>No. Certificado</Table.HeadCell>
                            <Table.HeadCell>Empresa</Table.HeadCell>
                            <Table.HeadCell>Estándar</Table.HeadCell>
                            <Table.HeadCell>Alcance</Table.HeadCell>
                            <Table.HeadCell>Vigencia</Table.HeadCell>
                          </Table.Head>
                          <Table.Body className="divide-y">
                            {posts.map((ele, index) => {
                              if(ele[0] === "cancelado"){
                                return (
                                  <Table.Row key={index} className="border-gray-700 bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ele[1]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[2]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[4]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[3]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[5]}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap">{ele[6]}</Table.Cell>
                                  </Table.Row>
                                )
                              }
                            })}
                          </Table.Body>
                        </Table>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => setOpenCancelados(false)}>CERRAR</Button>
                    </Modal.Footer>
                  </Modal>
                  <p className="font-montserrat bg-red-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer my-2" onClick={() => setOpenCancelados(true)}><BiPlusCircle className="mr-3" size={20} /> CERTIFICADOS CANCELADOS</p>
                  </>
              }
              {useProducto === "contactos" &&
                <>
                  <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">CONTACTOS</h3>
                  <h2 className="font-montserrat font-bold text-2xl p-3">ING. DIANA ZAMORA GODÍNEZ</h2>
                  <p className="pl-5">Jefa de Evaluación de la Conformidad</p>
                  <p className="pl-5">dzamora@mail.imcyc.com</p>
                  <p className="pl-5">55 5276 7200 EXT. 124</p>
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
