import {
  MegaMenu,
  MegaMenuDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Menu() {
  return (
    <MegaMenu className="bg-gray-900 bg-opacity-50 border-gray-200 dark:bg-gray-900 z-50 shadow-lg dark:bg-opacity-50">
      <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-2 pb-2 pl-4 pr-4">
        <NavbarBrand href="/">
          <Image
            src="/logo-imcyc.svg"
            alt="Instituto Mexicano del Cemento y del Concreto A.C."
            width={170}
            height={0}
          />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            href="/que-es-el-imcyc"
            className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase"
          >
            Quienes Somos
          </NavbarLink>
          <MegaMenuDropdown
            className="bg-gray-900 bg-opacity-95 border-none m-0 ml-0 text-white"
            toggle={
              <div className="font-montserrat whitespace-nowrap text-white bg-blue-700 md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase flex items-center">
                Gerencia Técnica
              </div>
            }
          >
            <p className="p-5 pb-3 font-bold border-b border-gray-600">Servicios Técnicos Especializados:</p>
            <ul className="grid grid-cols-4">
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/laboratorio-de-ensayos"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Laboratorio de ensayos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/laboratorio-de-calibracion"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Laboratorio de calibración
                  </Link>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a
                    href="/asesoria-en-estructuras"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Asesoría técnica en estructuras
                  </a>
                </li>
                <li>
                  <Link
                    href="/proveedor-de-ensayos-de-aptitud"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Proveedor de ensayos de aptitud
                  </Link>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="https://imcyc.net/ocper/"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                    rel="noopener noreferrer" target="_blank"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Organismo de certificación de personas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/organismo-de-certificacion-de-producto"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Organismo de certificación de producto
                  </Link>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/asociados"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Nuestros asociados
                  </Link>
                </li>
                <li>
                  <Link
                    href="quejas-y-apelaciones"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Quejas y apelaciones
                  </Link>
                </li>
              </div>
            </ul>
          </MegaMenuDropdown>

          <MegaMenuDropdown
            className="p-0 m-0 top-96 bg-gray-900 bg-opacity-90 border-none ml-0 mr-0 pl-0 pr-0 text-white"
            style={{ top: "196px" }}
            toggle={
              <div className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase flex items-center mr-0 pr-0">
                Enseñanza
              </div>
            }
          >
            <p className="p-5 pb-3 font-bold border-b border-gray-600">Servicios de Enseñanza y Empresariales:</p>
            <ul className="grid grid-cols-4">
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/capacitacion"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Capacitación
                  </Link>
                </li>
                <li>
                  <Link
                    href="/membresias"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Membresías
                  </Link>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/gerencia-ensenanza/plataforma-en-linea"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Plataforma en línea
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sellos-de-calidad"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Sellos de calidad
                  </Link>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/gerencia-ensenanza/revista-cyt"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Revista CYT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tienda"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Tienda IMCYC
                  </Link>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/co-working"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    CO-Working
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gerencia-ensenanza/constancia-de-aptitud"
                    className="group flex items-center hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <AiOutlinePlusCircle className="mr-2 text-2xl" />
                    Constancias de aptitud
                  </Link>
                </li>
              </div>
            </ul>
          </MegaMenuDropdown>
          <NavbarLink
            href="/contacto"
            className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase"
          >
            Contacto
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </MegaMenu>
  );
}

export default Menu;
