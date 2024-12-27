"use client"
import Image from "next/image";
import { useState } from "react";
import { BiBadgeCheck, BiCross } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function SellosDeCalidad() {
  const [sellos, setSellos] = useState("ollas");
  return (
    <div>
      <div className="flex p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/sellos/ollas.jpg')] bg-fixed bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-40 sm:pt-30 pb-0">
          <main className="flex flex-col gap-8 row-start-2 items-center mx-auto max-w-screen-xl sm:items-start z-0 w-full text-white">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2 items-start justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-5">
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
                    <h4 className="font-montserrat px-5 font-bold flex items-center"><FaArrowAltCircleRight className="mr-2" /> SELLO DE CALIDAD</h4>
                    <p className="font-montserrat font-light px-5 text-justify">Calcomanía de 30 cm de diámetro para pegar en el Tambor de la Olla Revolvedora, cuenta con un número de folio en la parte superior, con este registro el IMCYC lleva un control para su autenticidad</p>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5"><FaArrowAltCircleRight className="mr-2" /> ACTA DE VERIFICACIÓN</h4>
                    <p className="font-montserrat font-light px-5 text-justify">Documento que avala que la Olla Revolvedora ha sido evaluada y aprobada por el IMYC, cumpliendo satisfactoriamente con todas las secciones, el acta de verificación es única, por lo tanto es identificada con la siguiente información:</p>
                    <ul className="font-montserrat px-10 list-disc">
                      <li>Número de serie de la Olla Revolvedora</li>
                      <li>Vigencia del Sello de calidad</li>
                      <li>Número de folio IMCYC</li>
                      <li>Holograma de Autenticidad IMCYC</li>
                    </ul>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5"><FaArrowAltCircleRight className="mr-2" /> CUPÓN PARA VERIFICAR LA EFICIENCIA DEL MEZCLADO DE LA OLLA REVOLVEDORA</h4>
                    <p className="font-montserrat font-light px-5 text-justify">Su objetivo es completar la verificación de la Olla realizando una revisión detallada en campo de acuerdo con los requisitos de uniformidad con base a la Norma NMX-C-155.</p>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5"><FaArrowAltCircleRight className="mr-2" /> CUPÓN VALIDO PARA UN CURSO DE CAPACITACIÓN PARA UN OPERADOR</h4>
                    <p className="font-montserrat font-light px-5 text-justify">En esta certificación otorgada por el IMCYC, se incluyen cuatro puntos fundamentales para la persona que operara el equipo, los mismos incluyen de forma detallada información del producto, del equipo, de la seguridad y del medio ambiente. La evaluación incluye una evaluación con un puntaje mínimo para poder obtener el certificado de “Operador de Camión Revolvedor”</p>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5">ESTE PAQUETE SE ENTREGA AL CLIENTE AL MOMENTO DE RECIBIR SU OLLA.</h4>
                    <p className="font-montserrat font-light px-5 text-justify">El proyecto inició desde diciembre del año 2017, a la fecha se han verificado 134 Ollas revolvedoras McNeilus. La ventaja principal de este sello de calidad es que permite otorgar un valor agregado al cliente, principalmente asegurando la calidad de los productos a través de una verificación externa a la propia empresa. El IMYC también ha contemplado el sello de calidad enfocado a procesos, así como también a otros equipos, el objetivo es continuar con nuestro programa de calidad verificando que los productos y procesos tengan la calidad necesaria para poder brindar resultados confiables.</p>
                  </div>
                }
                {sellos === "prensas" && 
                  <div className="pb-5">
                    <h3 className="font-montserrat text-2xl font-100 p-2 flex items-center pt-5 font-bold"><BiCross className="mr-3" /> PRENSAS DE CONCRETO</h3>
                    <h4 className="font-montserrat ml-5 font-bold">SELLO DE CALIDAD IMCYC</h4>
                    <p className="font-montserrat text-justify p-5">Trabajar para la profesionalización de la industria es un interés común de todo aquel que participa en las áreas relativas al cemento y el concreto. Por ello El IMCYC ha buscado la manera de reconocer los esfuerzos de aquellas compañías que tienen ese objetivo como parte de su esencia. Con esa visión el instituto ha creado un nuevo producto que se identifica con el nombre de “Sello de Garantía IMCYC”. Es una estrategia que busca dar certidumbre sobre la calidad de un producto, proceso y/o servicio y que tiene un carácter no obligatorio para su aplicación y cumplimiento, en opinión de esta institución este carácter le da un mayor valor para quién lo recibe, ya que deja claro su compromiso con la calidad de sus productos.</p>
                    <ul className="font-montserrat ml-5 list-disc pl-5 mb-5">
                      <li>Es un esfuerzo voluntario por parte de las empresas</li>
                      <li>Evaluación sistematizada del producto, servicio y/o proceso, el mismo se lleva mediante una aplicación móvil</li>
                      <li>Incluye una evaluación semaforizada, que garantiza una evaluación consistente de acuerdo a los criterios establecidos</li>
                      <li>Tiene una visión integral, ya que su obtención incluye la certificación del operador en el caso de los equipos que así lo requieran</li>
                    </ul>
                    <h4 className="font-montserrat ml-5 font-bold">¿COMO SE OBTIENE EL SELLO DE GARANTIA?</h4>
                    <p className="font-montserrat text-justify p-5">Dentro de estas secciones se realizan mediciones con los mejores métodos para obtener valores reales y con base a ellos verificar la calidad de su PRENSA.</p>
                    <ul className="font-montserrat ml-5 list-decimal pl-5 mb-2">
                      <li>DISEÑO</li>
                      <li>PRESICIÓN</li>
                      <li>BLOQUE DE APOYO INFERIOR</li>
                      <li>BLOQUE DE APOYO DE ASIENTO ESFÉRICO</li>
                      <li>INDICACIÓN DE CARGA</li>
                      <li>MÁQUINA DIGITAL</li>
                    </ul>
                    <p className="font-montserrat text-justify p-5">UNA VEZ LLEVADA A CABO LA EVALUACIÓN, SU PRENSA DE CONCRETO OBTENDRÁ UNO DE LOS SIGUIENTES 2 RESULTADOS:</p>
                    <ul className="font-montserrat ml-5 list-decimal pl-5 mb-2">
                      <li>OBTENCIÓN DEL SELLO DE CALIDAD IMCYC</li>
                      <li>NO OBTENCIÓN DEL SELLO DE CALIDAD IMCYC</li>
                    </ul>
                    <p className="font-montserrat text-justify px-5">Por haber cumplido satisfactoriamente con todos los requisitos de las 6 secciones a evaluar en su prensa. Por no haber cumplido con los requisitos mínimos de cada una de las 6 secciones.</p>
                    <p className="font-montserrat text-justify px-5">La vigencia del Sello de Calidad IMCYC es de 1 año.</p>
                    <h4 className="font-montserrat ml-5 font-bold py-5">NOTA IMPORTANTE</h4>
                    <p className="font-montserrat text-justify px-5">NO SE OTORGARÁ EL SELLO DE CALIDAD A:</p>
                    <ul className="font-montserrat ml-5 list-decimal pl-5 mb-2">
                      <li>PRENSAS CON 10 AÑOS DE ANTIGÜEDAD</li>
                      <li>PRENSAS MODIFICADAS</li>
                    </ul>
                    <h4 className="font-montserrat ml-5 font-bold py-5 pb-2">EN CASO DE APROBAR LA EVALUACIÓN, SE ENTREGA AL CLIENTE LO SIGUIENTE:</h4>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5"><FaArrowAltCircleRight className="mr-2" /> SELLO DE CALIDAD</h4>
                    <p className="font-montserrat font-light px-5 pt-3 text-justify">Calcomanía de 30 cm de diámetro para pegar en el Tambor de la Olla Revolvedora, cuenta con un número de folio en la parte superior, con este registro el IMCYC lleva un control para su autenticidad.</p>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5"><FaArrowAltCircleRight className="mr-2" /> ACTA DE VERIFICACIÓN</h4>
                    <p className="font-montserrat font-light px-5 pt-3 text-justify">Documento que avala que la Olla Revolvedora ha sido evaluada y aprobada por el IMYC, cumpliendo satisfactoriamente con todas las secciones, el acta de verificación es única, por lo tanto es identificada con la siguiente información</p>
                    <ul className="font-montserrat ml-5 list-decimal pl-5 my-2">
                      <li>Número de serie de la PRENSA DE CONCRETO</li>
                      <li>Vigencia del Sello de calidad</li>
                      <li>Número de folio IMCYC</li>
                      <li>Holograma de Autenticidad IMCYC</li>
                    </ul>
                    <h4 className="font-montserrat px-5 font-bold flex items-center pt-5"><FaArrowAltCircleRight className="mr-2" /> CUPÓN VALIDO PARA UN CURSO DE CAPACITACIÓN</h4>
                    <p className="font-montserrat font-light px-5 text-justify">Este cupón es válido para tomar un curso en el cual se darán a conocer los detalles para la operación de la Prensa.</p>
                  </div>
                }
                {sellos === "laboratorios" && 
                  <div className="pb-5">
                    <h3 className="font-montserrat text-2xl font-100 p-2 flex items-center pt-5 font-bold"><BiCross className="mr-3" /> LABORATORIOS</h3>
                    <h4 className="font-montserrat ml-5 font-bold">SELLO DE CALIDAD IMCYC</h4>
                    <p className="font-montserrat text-justify p-5">El IMCYC otorga un SELLO DE CALIDAD a través de una VERIFICACIÓN a los LABORATORIOS y PLANTAS DE CONCRETO para garantizar que cumplen con los requisitos establecidos por el Instituto Mexicano del Cemento y del Concreto, A. C. con base a las normas Mexicanas.</p>
                    <p className="font-montserrat text-justify px-5">Las pruebas a evaluar en su Laboratorio NMX y el puntaje mínimo para su aprobación, son las siguientes:</p>
                    <h4 className="font-montserrat ml-5 font-bold my-3">BÁSICAS</h4>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-161</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Muestreo</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-156</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Revenimiento</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-109</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Cabeceo</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-159</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Elaboración de especímenes</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-083</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Compresión</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-161</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Masa unitaria</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-435</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Temperatura</h4>
                      </div>
                    </div>
                    <h4 className="font-montserrat ml-5 font-bold my-3">COMPLEMENTARIAS</h4>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-191</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Flexión de vigas</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-128</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Módulo de elasticidad</h4>
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2">
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">C-157</h4>
                      </div>
                      <div className="bg-gray-950 bg-opacity-50 bg-blend-multiply w-full p-1 sm:mb-2">
                        <h4 className="font-montserrat ml-5 font-bold">Contenido de aire</h4>
                      </div>
                    </div>
                    <p className="font-montserrat text-justify p-5">Dentro de estas secciones se realizan mediciones con los mejores métodos para obtener valores reales y con base a ellos verificar la calidad de su Laboratorio.</p>
                    <ul className="font-montserrat ml-5 list-disc pl-5 mb-5">
                      <li>Vigencia de 1 año, sujeto a seguimiento semestral</li>
                      <li>Con base a la evaluación de requisitos técnicos para la ejecución de las pruebas</li>
                      <li>Establece los indicadores de calidad mínimos requeridos para obtener la aprobación del imcyc</li>
                    </ul>
                    <h4 className="font-montserrat ml-5 font-bold my-3">EL SELLO DE CALIDAD INCLUYE</h4>
                    <ul className="font-montserrat ml-5 list-disc pl-5 mb-5">
                      <li><strong>SELLO DE CALIDAD</strong>
                        <ul className="list-disc ml-3 mb-3">
                          <li>Calcomanía de 30 cm de diámetro para pegar en el Laboratorio</li>
                          <li>El Sello de Calidad tiene un número de folio en la parte superior, con este registro el IMCYC lleva un control para su autenticidad.</li>
                        </ul>
                      </li>
                      <li><strong>ACTA DE VERIFICACIÓN</strong>
                        <ul className="list-disc ml-3 mb-3">
                          <li>El Acta de verificación es un documento que avala que su Laboratorio ha sido evaluado, aprobada por el IMYC y cumple satisfactoriamente con todas las secciones.</li>
                          <li>El Acta de Verificación es única, por lo tanto es identificada con la siguiente información:
                            <ul className="list-disc ml-3 mb-3">
                              <li>Nombre de su Laboratorio</li>
                              <li>Vigencia del Sello de calidad</li>
                              <li>Número de folio IMCYC</li>
                              <li>Holograma de Autenticidad IMCYC</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
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
