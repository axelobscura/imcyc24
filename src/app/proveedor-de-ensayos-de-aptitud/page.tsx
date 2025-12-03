"use client";
import Link from "next/link";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Slider } from "../components/Carousel";
import { BsArrowDownCircleFill } from "react-icons/bs";

const imagenes = ["/aptitud/PE_01.jpg","/aptitud/PE_02.jpg","/aptitud/PE_03.jpg"];

export default function ProveedorDeEnsayosDeAptitud() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalApelacion, setOpenModalApelacion] = useState(false);
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/proveedor.jpg')] bg-fixed bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Proveedor de Ensayos de Aptitud
                </h1>
                <p className='font-montserrat text-justify'>Servicios de evaluación del desempeño de los laboratorios mediante su participación en Ensayos de Aptitud en las ramas de Agregados, Cemento, Concreto, Geotecnia y Acero de refuerzo, así como organización de comparativas interlaboratorio para pruebas especiales.</p>
              </div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className='font-montserrat'><strong>Ing. Diana Zamora Godínez</strong></p>
                <p><Link href="mailto:dzamora@mail.imcyc.com">dzamora@mail.imcyc.com</Link></p>
              </div>
              <div className="w-full">
                <Link href="/calendario-proveedor-de-ensayos-de-aptitud">
                  <p className="bg-slate-800 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center"><BiPlusCircle className="mr-3" size={20} /> CONSULTA EL CALENDARIO 2026</p>
                </Link>
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
                <p className="bg-slate-800 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer" onClick={() => setOpenModal(true)}><BiPlusCircle className="mr-3" size={20} /> PROCESO DE QUEJA</p>
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
                <p className="bg-slate-800 bg-opacity-70 bg-blend-multiply w-full p-5 sm:mb-5 hover:bg-slate-100 hover:text-gray-900 font-bold flex flex-row items-center text-gray-100 cursor-pointer" onClick={() => setOpenModalApelacion(true)}><BiPlusCircle className="mr-3" size={20} /> PROCESO DE APELACIÓN</p>
              </div>
              <Slider imagenes={imagenes} />
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900 flex items-center"><BsArrowDownCircleFill className="mr-2" /> AGREGADOS</h3>
              <ul className="font-montserrat font-light m-5 list-disc">
                <li>Agregados finos - Muestreo de agregados (método de apoyo)</li>
                <li>Agregados finos - Reducción de muestras al tamaño requerido para los ensayos (método de apoyo)</li>
                <li>Agregados finos - Determinación de la masa volumétrica suelta y compactada con varilla</li>
                <li>Agregados finos - Determinación del análisis granulométrico</li>
                <li>Agregados finos - Determinación de partículas más finas que la criba 0,075 mm (No. 200) por medio de lavado</li>
                <li>Agregados finos - Determinación de la masa específica saturada y superficialmente seca</li>
                <li>Agregados finos - Determinación de la absorción de agua</li>
                <li>Agregados finos - Determinación del equivalente de arena</li>
                <li>Agregados gruesos - Muestreo de agregados (método de apoyo)</li>
                <li>Agregados gruesos - Reducción de muestras al tamaño requerido para los ensayos (método de apoyo)</li>
                <li>Agregados gruesos - Determinación del contenido de agua por secado (método de apoyo)</li>
                <li>Agregados gruesos - Determinación de la masa volumétrica suelta y compactada con varilla</li>
                <li>Agregados gruesos - Determinación del análisis granulométrico</li>
                <li>Agregados gruesos - Determinación de la masa específica saturada y superficialmente seca</li>
                <li>Agregados gruesos - Determinación de la absorción de agua</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">CEMENTOS</h3>
              <ul className="font-montserrat font-light m-5 list-disc">
                <li>Cementantes hidráulicos - Determinación de la finura mediante la malla 0,045 mm (no. 325)</li>
                <li>Cementantes hidráulicos - Determinación de la finura mediante el método de permeabilidad al aire</li>
                <li>Cementantes hidráulicos - Determinación de la consistencia normal</li>
                <li>Cementantes hidráulicos - Determinación del tiempo de fraguado inicial</li>
                <li>Cementantes hidráulicos - Determinación del tiempo de fraguado final</li>
                <li>Cementantes hidráulicos - Determinación de la resistencia a la compresión</li>
                <li>Cementantes hidráulicos - Determinación de la resistencia a los sulfatos</li>
                <li>Cementantes hidráulicos - Determinación del calor de hidratación</li>
                <li>Cementantes hidráulicos - Determinación de la sanidad</li>
                <li>Cementantes hidráulicos - Determinación del fraguado falso</li>
                <li>Cementantes hidráulicos - Determinación de la densidad</li>
                <li>Cementantes hidráulicos - Determinación de la expansión de barras de mortero sumergidas en agua</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">CONCRETOS</h3>
              <ul className="font-montserrat font-light m-5 list-disc">
                <li>Concreto fresco - Muestreo (método de apoyo)</li>
                <li>Concreto fresco - Elaboración y curado de especímenes de concreto (método de apoyo)</li>
                <li>Concreto fresco - Determinación del revenimiento</li>
                <li>Concreto fresco - Determinación de la temperatura</li>
                <li>Concreto fresco - Determinación de la masa unitaria</li>
                <li>Concreto fresco - Determinación del contenido de aire por el método gravimétrico</li>
                <li>Concreto fresco - Determinación del contenido de aire por el método de presión</li>
                <li>Concreto endurecido - Cabeceo de especímenes de concreto (método de apoyo)</li>
                <li>Concreto endurecido - Determinación de la resistencia a la compresión de especímenes cilíndricos</li>
                <li>Concreto endurecido - Determinación de la resistencia a la compresión de especímenes cúbicos</li>
                <li>Concreto endurecido - Determinación de la resistencia a la flexión usando una viga simple con carga en los tercios del claro</li>
                <li>Concreto endurecido - Determinación del módulo de elasticidad estático</li>
                <li>Concreto endurecido - Extracción de especímenes cilíndricos (método de apoyo)</li>
                <li>Concreto endurecido - Determinación de la resistencia a la compresión de especímenes cilíndricos extraídos</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">GEOTECNICA</h3>
              <ul className="font-montserrat font-light m-5 list-disc">
              <li>Geotecnia - Compactación - Determinación de la masa volumétrica húmeda en el lugar</li>
              <li>Geotecnia - Compactación - Determinación de la masa volumétrica seca en el lugar</li>
              <li>Geotecnia - Compactación - Determinación del contenido de agua en materiales térreos</li>
              <li>Geotecnia - Terracerías - Muestreo (método de apoyo)</li>
              <li>Geotecnia - Terracerías - Preparación de muestras alteradas en el laboratorio (método de apoyo)</li>
              <li>Geotecnia - Terracerías - Determinación de la masa volumétrica seca máxima</li>
              <li>Geotecnia - Terracerías - Determinación del contenido de agua (método de apoyo)</li>
              <li>Geotecnia - Terracerías - Determinación del contenido de agua óptimo</li>
              <li>Geotecnia - Terracerías - Determinación del CBR de suelos compactados en el laboratorio</li>
              <li>Geotecnia - Terracerías - Determinación del porcentaje de expansión</li>
              <li>Geotecnia - Terracerías - Determinación del análisis granulométrico</li>
              <li>Geotecnia - Terracerías - Determinación del límite líquido</li>
              <li>Geotecnia - Terracerías - Determinación del límite plástico</li>
              <li>Geotecnia - Terracerías - Determinación del índice de plasticidad</li>
              <li>Geotecnia - Terracerías - Determinación del equivalente de arena</li>
              <li>Geotecnia - Terracerías - Determinación de la masa específica</li>
              <li>Geotecnia - Terracerías - Determinación de partículas más finas que la criba 0,075 mm (No. 200) por medio de lavado</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3 bg-slate-900">METALMECÁNICA</h3>
                <ul className="font-montserrat font-light m-5 list-disc">
                <li>Varillas para refuerzo de concreto - Determinación del peso unitario</li>
                <li>Varillas para refuerzo de concreto - Determinación del área transversal</li>
                <li>Varillas para refuerzo de concreto - Determinación de la resistencia a la tensión</li>
                <li>Varillas para refuerzo de concreto - Determinación del esfuerzo de fluencia</li>
                <li>Varillas para refuerzo de concreto - Determinación del porcentaje de alargamiento</li>
                <li>Varillas para refuerzo de concreto - Determinación de las dimensiones de las corrugaciones</li>
                <li>Varillas para refuerzo de concreto - Prueba de doblado</li>
                <li>Elementos de acero estructural - Determinación del peso unitario</li>
                <li>Elementos de acero estructural - Determinación del área transversal</li>
                <li>Elementos de acero estructural - Determinación de la resistencia a la tensión</li>
                <li>Elementos de acero estructural - Determinación del esfuerzo de fluencia</li>
                <li>Elementos de acero estructural - Determinación del porcentaje de alargamiento</li>
                <li>Elementos de acero estructural - Prueba de doblado</li>
                </ul>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
