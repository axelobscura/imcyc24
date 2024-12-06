"use client"
import Image from "next/image";
import { useState } from "react";
import { BiBadgeCheck, BiCross } from "react-icons/bi";


export default function SellosDeCalidad() {
  const [sellos, setSellos] = useState("ollas");
  return (
    <div>
      <div className="flex p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/sellos/ollas.jpg')] bg-fixed bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-40 sm:pt-30 pb-0">
          <main className="flex flex-col gap-8 row-start-2 items-center mx-auto max-w-screen-xl sm:items-start z-0 w-full text-white">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-start justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-light mb-2 flex items-center">
                  <BiBadgeCheck className="mr-3" /> Sellos de Calidad
                </h1>
                <hr/>
                <div>
                  <h3 onClick={() => setSellos("ollas")} className={`font-montserrat btn text-xl font-bold my-1 ${sellos === "ollas" ? "bg-slate-700" : "bg-slate-900"} hover:bg-slate-700 p-5 text-left text-md cursor-pointer`}>
                    OLLAS REVOLVEDORAS DE CONCRETO
                  </h3>
                  <h3 onClick={() => setSellos("prensas")} className="font-montserrat btn text-xl font-bold my-1 bg-slate-900 hover:bg-slate-700 p-5 text-left text-md cursor-pointer">
                    PRENSAS DE CONCRETO
                  </h3>
                  <h3 onClick={() => setSellos("laboratorios")} className="font-montserrat btn text-xl font-bold my-1 bg-slate-900 hover:bg-slate-700 p-5 text-left text-md cursor-pointer">
                    LABORATORIOS
                  </h3>
                  <h3 onClick={() => setSellos("plantas")} className="font-montserrat btn text-xl font-bold my-1 bg-slate-900 hover:bg-slate-700 p-5 text-left text-md cursor-pointer">
                    PLANTAS
                  </h3>
                </div>
                {sellos === "ollas" && 
                  <>
                    <Image
                      src="/sellos/sello_ollas.jpg"
                      alt="IMCYC"
                      width={700}
                      height={0}
                      layout="intrinsic"
                    />
                  </>
                }
              </div>
              <div className="bg-gray-900 bg-opacity-70">
                {sellos === "ollas" && 
                  <div className="pb-5">
                    <h3 className="font-montserrat text-2xl font-100 p-2 flex items-center pt-5 font-bold"><BiCross className="mr-3" /> OLLAS REVOLVEDORAS DE CONCRETO</h3>
                    <h4 className="font-montserrat ml-5 font-bold">SELLO DE CALIDAD IMCYC</h4>
                    <p className="font-montserrat text-justify p-5">Trabajar para la profesionalización de la industria es un interés común de todo aquel que participa en las áreas relativas al cemento y el concreto.<br/><br/>Por ello El IMCYC ha buscado la manera de reconocer los esfuerzos de aquellas compañías que tienen ese objetivo como parte de su esencia. Con esa visión el instituto ha creado un nuevo producto que se identifica con el nombre de “Sello de Garantía IMCYC”.<br/><br/>Es una estrategia que busca dar certidumbre sobre la calidad de un producto, proceso y/o servicio y que tiene un carácter no obligatorio para su aplicación y cumplimiento, en opinión de esta institución este carácter le da un mayor valor para quién lo recibe, ya que deja claro su compromiso con la calidad de sus productos.</p>
                    <h4 className="font-montserrat ml-5 font-bold">LAS CARACTERISTICAS PRICIPALES DE ESTE ESFUERZO Y QUE SON IMPORTANTES DE DISTINGUIR SON:</h4>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] items-start pt-5 ml-5 mr-5 mb-5">
                      <div>
                        <p className="font-bold text-sm">Es un esfuerzo voluntario por parte de las empresas</p>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Evaluación sistematizada del producto, servicio y/o proceso, el mismo se lleva mediante una aplicación móvil</p>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Incluye una evaluación semaforizada, que garantiza una evaluación consistente de acuerdo a los criterios establecidos</p>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Tiene una visión integral, ya que su obtención incluye la certificación del operador en el caso de los equipos que así lo requieran</p>
                      </div>
                    </div>
                    <p className="font-montserrat font-light px-5 text-justify">Es importante destacar que Cargotecnia es la primera empresa en confiar en esta nueva estrategia del IMCYC, estableciendo una alianza por la calidad y la profesionalización de la industria. Es posible mencionar que ya hay otras empresas y productos que se han sumado a este trabajo y que se darán a conocer en futuras comunicaciones.<br/><br/>En resumen en un mismo esfuerzo se califica el desempeño del equipo y se certifica al operador del mismo.</p><br/>
                    <h4 className="font-montserrat ml-5 font-bold">¿CÓMO SE OBTIENE EL SELLO DE GARANTÍA?</h4><br/>
                    <p className="font-montserrat font-light px-5 text-justify">Mediante una verificación sistematizada de sus equipos directamente en la planta de producción. La misma consiste en la evaluación detallada del sistema de revoltura mediante una aplicación desarrollada por el equipo del instituto, en el proceso de validación de cumplimiento del desempeño del sistema se toman en cuenta para esta calificación 6 zonas del sistema de revoltura, claramente identificadas y que integran la totalidad de la evaluación, cada una de estas zonas tiene definida una calificación mínima a cumplir que se integra a la evaluación final del equipo, que en caso de resultar satisfactoria aplica para recibir el Sello de Garantía del Instituto Mexicano del cemento y el Concreto.</p>
                    <h4 className="font-montserrat ml-5 font-bold mt-5">EL PROCESO DE LA VERIFICACIÓN</h4><br/>
                    <p className="font-montserrat font-light px-5 text-justify">Esta verificación da inicio con la selección de un lote de Ollas de manera aleatoria, las secciones a evaluar son:</p><br/>
                    <ul className="font-montserrat ml-5 list-disc pl-5 mb-5">
                      <li>Tambor</li>
                      <li>Pedestal frontal</li>
                      <li>Pedestal trasero</li>
                      <li>Sistema de lavado</li>
                      <li>Sistema general</li>
                      <li>Sistema de luces</li>
                    </ul>
                    <p className="font-montserrat font-light px-5 text-justify">En estas secciones se inspecciona, el volumen real de la olla, peso total del camión, la presurización del tanque de agua, así como los sistemas generales de la olla y del camión, entre otros. La inspección la realiza un evaluador oficial directamente en una APP ESPECIALIZADA IMCYC, en la cual, se registra sección por sección cada uno de los puntos a verificar, una vez concluida la revisión detallada, se emite un resultado, determinando de forma automática si cumple o no, con los requerimientos mínimos necesarios.</p>
                    <h4 className="font-montserrat ml-5 font-bold mt-5">EN CASO DE APROBAR LA EVALUACIÓN, SE ENTREGA AL CLIENTE LO SIGUIENTE:</h4><br/>
                  </div>
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
