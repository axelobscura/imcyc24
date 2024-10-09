
import { 
  MegaMenu, 
  MegaMenuDropdown, 
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import Image from "next/image";

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
        <NavbarLink href="/" className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase">Quienes Somos</NavbarLink>
        <MegaMenuDropdownToggle className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase">
          Gerencia Técnica
          <HiChevronDown className="ml-2" />
        </MegaMenuDropdownToggle>
        <MegaMenuDropdownToggle className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase">
          Enseñanza
          <HiChevronDown className="ml-2" />
        </MegaMenuDropdownToggle>
        <NavbarLink href="/" className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase">Noticias</NavbarLink>
        <NavbarLink href="/" className="font-montserrat whitespace-nowrap py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-100 md:p-0 md:dark:text-gray-100 text-sm uppercase">Contacto</NavbarLink>
      </NavbarCollapse>
      </div>
      <MegaMenuDropdown className='w-full bg-gray-900 bg-opacity-50'>
        <div className="mt-6 bg-gray-900 bg-opacity-20 shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul className="mb-4 hidden space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Segmentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Marketing CRM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </a>
              </li>
            </ul>
            <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Resources
                </a>
              </li>
            </ul>
            <a href="#" className="rounded-lg bg-gray-500 p-8 text-left">
              <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                Preview the new Flowbite dashboard navigation.
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
              >
                Get started
                <HiArrowRight className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}

export default Menu;