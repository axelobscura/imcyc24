import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import { FaInstagram, FaFacebook, FaYoutubeSquare, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const TopBar = () => {
  return (
    <>
    <div className="fixed z-50 w-full">
      <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 xs:hidden hidden sm:hidden md:block lg:block dark:bg-opacity-90">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-2 pb-2 pl-4 pr-4">
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  <Link href="tel:5541251234" className="flex font-montserrat text-xs text-gray-200 dark:text-gray-200 hover:underline flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span className="ml-2 flex items-center"><strong>(52) 55 5467 1493</strong></span>
                  </Link>
                  <Link href="tel:5541251234" className="flex font-montserrat text-xs  text-white dark:text-gray-200 hover:underline flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span className="ml-2 flex items-center">imcyc@imcyc.com</span>
                  </Link>
                  <Link href="tel:5541251234" className="flex font-montserrat text-xs  text-white dark:text-gray-200 hover:underline flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="ml-2 flex items-center">Lun - Vie 8:30 am - 18:30 pm</span>
                  </Link>
              </div>
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  <Link href="https://www.facebook.com/imcycoficial/" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                    <FaFacebook size={22} />
                  </Link>
                  <Link href="https://instagram.com/imcyc_oficial?r=nametag" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                    <FaInstagram size={23} />
                  </Link>
                  <Link href="https://x.com/imcyc_oficial" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                    <RiTwitterXLine size={20} />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCGLxU2D2q2i8ny_klAWqPTw" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                    <FaYoutubeSquare size={20} />
                  </Link>
                  <Link href="https://mx.linkedin.com/company/imcyc-oficial" rel="noopener noreferrer" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                    <FaLinkedin size={21} />
                  </Link>
              </div>
          </div>
      </nav>
      <Menu/>
      </div>
    </>
  );
};

export default TopBar;
