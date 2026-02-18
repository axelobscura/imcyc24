'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from 'next/navigation'
import { FaInstagram, FaFacebook, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import AsociadosTop from "./AsociadosTop";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import LogosMembresias from './LogosMembresias';

function updateClock(
  setTime: React.Dispatch<React.SetStateAction<string>>,
  setDate: React.Dispatch<React.SetStateAction<string>>
) {
  const now = new Date();

  // Get time components
  let hours: string | number = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format if needed
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, '0');

  // Get date components
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayName = days[now.getDay()];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthName = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  // Set the time and date in the component state
  if (setTime && setDate) {
    setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    setDate(`${dayName} ${date} de ${monthName} ${year}`);
  }
}

const TopBar = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  useEffect(() => {
    // Initialize the clock when the component mounts
    updateClock(setTime, setDate);
    const intervalId = setInterval(() => {
      updateClock(setTime, setDate);
    }, 1000);
    console.log('TopBar component mounted, ', intervalId);
  }, []);
  const pathname = usePathname();
  const path = pathname.split('/');
  let correo = 'imcyc@imcyc.com';
  let telefono = '(52) 55 5322 5740';
  switch (path[1]) {
    case 'laboratorio-de-ensayos':
      correo = "mhernandez@imcyc.com";
      telefono = '(52) 55 5276 7200';
      break;
    case 'capacitacion':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'gerencia-ensenanza':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'asesoria-en-estructuras':
      correo = "bperez@imcyc.com";
      telefono = '(52) 55 5276 7200';
      break;
    case 'laboratorio-de-calibracion':
      correo = "vgomez@imcyc.com";
      telefono = '(52) 55 5276 7200';
      break;
    case 'proveedor-de-ensayos-de-aptitud':
      correo = "dzamora@imcyc.com";
      telefono = '(52) 55 5276 7200';
      break;
    case 'organismo-de-certificacion-de-producto':
      correo = "dzamora@imcyc.com";
      telefono = '(52) 55 5276 7200';
      break;
    case 'organismo-de-certificacion-de-personas':
      correo = "dzamora@imcyc.com";
      telefono = '(52) 55 5276 7200';
      break;
    case 'membresias':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'publicaciones':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'sellos-de-calidad':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'revista-cyt':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'tienda':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    case 'co-working':
      correo = "cursos@imcyc.com";
      telefono = '(52) 55 5322 5740';
      break;
    default:
      correo = "imcyc@imcyc.com";
      telefono = '(52) 55 5322 5740';
  }

  return (
    <>
      <div className="fixed z-50 w-full headerimcyc">
        <nav className="bg-black border-gray-200 dark:bg-gray-900 xs:hidden block sm:block md:block lg:block dark:bg-opacity-90">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-0 pb-0">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Link href={`tel:${telefono}`} className="ffont-montserrat text-xs text-gray-200 dark:text-gray-200 hover:underline flex-row hidden sm:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="ml-2 flex items-center"><strong>{telefono}</strong></span>
              </Link>
              <Link href={`mailto:${correo}`} className="font-montserrat text-xs  text-white dark:text-gray-200 hover:underline flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="ml-2 flex items-center"><strong>{correo}</strong></span>
              </Link>
              <Link href="tel:5541251234" className="font-montserrat text-xs  text-white dark:text-gray-200 hover:underline flex-row hidden sm:flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="ml-2 flex items-center">Lun - Vie 8:30 am - 18:30 pm</span>
              </Link>
              <div className="flex items-center font-montserrat text-xs" style={{ fontSize: '0.59rem' }}>
                {date && (
                  <span className="ml-2 flex items-center">
                    <strong className="text-white dark:text-gray-200 mr-2">{date}</strong> |
                  </span>
                )}
                {time && (
                  <span className="ml-2 flex items-center">
                    <strong className="text-white dark:text-gray-200">{time}</strong>
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Link href="https://www.facebook.com/imcycoficial/" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaFacebook size={22} />
              </Link>
              <Link href="https://instagram.com/imcyc_oficial?r=nametag" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaInstagram size={23} />
              </Link>
              <Link href="https://x.com/imcyc_oficial" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <RiTwitterXLine size={20} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCIG6a667-g1L3b6mYdBjHbA" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaYoutubeSquare size={20} />
              </Link>
              <Link href="https://mx.linkedin.com/company/imcyc-oficial" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaLinkedin size={21} />
              </Link>
              <Link href="/usuarios" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <FaRegUserCircle size={22} />
              </Link>
              <Link href="/" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                <IoIosSearch size={27} />
              </Link>
              <Link href="/apps" className="text-xs sm:text-sm font-bold text-white dark:text-slate-800 bg-slate-700 hover:bg-slate-500 flex flex-row p-2 items-center px-2">
                APPS <BsArrowRightSquareFill size={20} className="ml-2" />
              </Link>
              <Link href="/eventos" className="text-xs sm:text-sm font-bold text-white dark:text-slate-800 bg-blue-700 hover:bg-slate-500 flex flex-row p-2 items-center px-2">
                EVENTOS IMCYC <BsArrowRightSquareFill size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </nav>
        <div className="bg-gray-900 border-gray-200 dark:bg-gray-900 xs:hidden hidden sm:hidden md:block lg:block dark:bg-opacity-90">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-2 pb-2">
            <AsociadosTop />
          </div>
        </div>
        <div className="bg-white border-gray-200 xs:hidden hidden sm:hidden md:block lg:block dark:bg-opacity-90">
          <div className="flex flex-wrap justify-between w-full p-0">
            <LogosMembresias />
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default TopBar;
