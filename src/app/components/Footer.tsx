import React from "react";
import Link from "next/link";
import Image from "next/image";
import Asociados from "./Asociados";
import { FaInstagram, FaFacebook, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-900 px-2">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <Image
                  src="/logo-imcyc.svg"
                  alt="Instituto Mexicano del Cemento y del Concreto A.C."
                  width={250}
                  height={0}
                />
              </a>
              <a href="https://www.concrete.org/verify" target="_blank" className="flex flex-col items-center mt-5">
                <Image
                  src="/logos/aci.svg"
                  alt="Instituto Mexicano del Cemento y del Concreto A.C."
                  width={250}
                  height={0}
                />
                <p className="text-white pt-3">Supporter of ACI Certification</p>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-3">
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-200 uppercase dark:text-white">
                  ¿Quiénes Somos?
                  <p style={{fontSize: '12px'}}><small>Compartir el conocimiento</small></p>
                </h2>
                <ul className="text-gray-300 font-light text-sm footer">
                  <li className="mb-2">
                    <Link href="/que-es-el-imcyc" className="hover:text-gray-100">
                      ¿Qué es el IMCYC?
                    </Link>
                  </li>
                  
                  <li className="mb-2">
                    <Link href="/historia" className="hover:text-gray-100">
                      Historia
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/mision" className="hover:text-gray-100">
                      Misión, Visión y Política de calidad
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/gerencia-tecnica" className="hover:text-gray-100">
                      ¿Qué es la Gerencia Técnica?
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/gerencia-ensenanza" className="hover:text-gray-100">
                      ¿Qué es la Gerencia de Enseñanza?
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-200 uppercase dark:text-white">
                  Gerencia técnica
                  <p style={{fontSize: '12px'}}><small>Servicios técnicos especializados</small></p>
                </h2>
                <ul className="text-gray-300 font-light text-sm">
                  <li className="mb-2">
                    <Link href="/laboratorio-de-ensayos" className="hover:text-gray-100">
                      Laboratorio de ensayos
                    </Link>
                  </li>
                  
                  <li className="mb-2">
                    <Link href="/laboratorio-de-calibracion" className="hover:text-gray-100">
                      Laboratorio de calibración
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/asesoria-en-estructuras" className="hover:text-gray-100">
                      Asesoría técnica en estructuras
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/organismo-de-certificacion-de-personas" className="hover:text-gray-100">
                      Organismo de certificación de personas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/organismo-de-certificacion-de-producto" className="hover:text-gray-100">
                      Organismo de certificación de producto
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/proveedor-de-ensayos-de-aptitud" className="hover:text-gray-100">
                      Proveedor de ensayos de aptitud
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/nuestros-asociados" className="hover:text-gray-100">
                      Nuestros clientes
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/quejas-y-apelaciones" className="hover:text-gray-100">
                      Quejas y apelaciones
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold text-gray-200 uppercase dark:text-white">
                  Gerencia Enseñanza
                  <p style={{fontSize: '12px'}}><small>Servicios de enseñanza y empresariales</small></p>
                </h2>
                <ul className="text-gray-300 font-light text-sm">
                  <li className="mb-2">
                    <Link href="/capacitacion" className="hover:text-gray-100">
                      Capacitación
                    </Link>
                  </li>
                  
                  <li className="mb-2">
                    <Link href="/membresias" className="hover:text-gray-100">
                      Membresías
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://webinarsenconcreto.com/" rel="noopener noreferrer" target="_blank" className="hover:text-gray-100">
                      Plataforma en línea
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/sellos-de-calidad" className="hover:text-gray-100">
                      Sellos de calidad
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/revista-cyt" className="hover:text-gray-100">
                      Revista CYT
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/tienda-imcyc" className="hover:text-gray-100">
                      Tienda IMCYC
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/co-working" className="hover:text-gray-100">
                      CO - Working
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/gerencia-ensenanza/constancia-de-aptitud" className="hover:text-gray-100">
                      Constancias de aptitud
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/prensa" className="hover:text-gray-100">
                      Prensa
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/libros" className="hover:text-gray-100">
                      Libros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Asociados />
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 1953 - 2025{" "}
              <a href="https://imcyc.com/" className="hover:underline">
                Instituto Mexicano del Cemento y del Concreto A.C.
              </a>
              , Todos los Derechos Revervados. <Link href="/aviso-de-privacidad"><span className="text-gray-100 hover:underline">Aviso de Privacidad.</span></Link>
            </span>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Link href="https://www.facebook.com/imcycoficial/" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaFacebook size={27} />
              </Link>
              <Link href="https://instagram.com/imcyc_oficial?r=nametag" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaInstagram size={29} />
              </Link>
              <Link href="https://x.com/imcyc_oficial" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <RiTwitterXLine size={25} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCGLxU2D2q2i8ny_klAWqPTw" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaYoutubeSquare size={25} />
              </Link>
              <Link href="https://mx.linkedin.com/company/imcyc-oficial" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaLinkedin size={25} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
