'use client'
import { usePathname } from 'next/navigation';

export default function TipoEnsenanza() {
  const pathname = usePathname();
  const param = pathname.split('/')[2].split('-').join(" ");

  return (
    <div>
      <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 xs:hidden hidden sm:hidden md:block lg:block dark:bg-opacity-90">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-2 pb-2 pl-4 pr-4">
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  <a href="tel:5541251234" className="flex font-montserrat text-xs text-gray-200 dark:text-gray-200 hover:underline flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span className="ml-2 flex items-center">(55) 53 22 57 40 Ext. 210</span>
                  </a>
                  <a href="tel:5541251234" className="flex font-montserrat text-xs  text-white dark:text-gray-200 hover:underline flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span className="ml-2 flex items-center">imcyc@imcyc.com</span>
                  </a>
                  <a href="tel:5541251234" className="flex font-montserrat text-xs  text-white dark:text-gray-200 hover:underline flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="ml-2 flex items-center">Lun - Vie 8:30 am - 18:30 pm</span>
                  </a>
              </div>
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                  <a href="https://www.facebook.com/imcycoficial/" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                      <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/imcycoficial/" target="_blank" className="text-sm  text-gray-500 dark:text-gray-400 hover:underline flex flex-row mt-2">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      />
                    </svg>
                  </a>
              </div>
          </div>
      </nav>
      <div className="flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/ensayos/concreto.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-0 items-center justify-items-stretch pt-20 w-full">
            <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
              <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                {param}
              </h1>
              <p className='font-montserrat'>Servicios especializados en Enseñanza.</p>
            </div>
            <div className='bg-gray-900 bg-opacity-50 border-gray-200'>
              
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
