//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client";

import Link from "next/link";
<style jsx>{`
  .headerimcyc {
    display: none !important;
  }
  .footerimcyc {
    display: none !important;
  }
`}</style>

export default function Bio() {
  return (
    <div>
      <div className="flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-gray-200 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center">
                <Link href="/bio" className="hover:underline bg-gray-300 p-5 rounded-xl text-gray-900 font-montserrat text-lg text-center uppercase font-bold m-3">
                  WEB
                </Link>
                <Link href="https://whatsapp.com/channel/0029VaxAc7bBadmZxBEODC21" target="_blank" className="hover:underline bg-gray-300 p-5 rounded-xl text-gray-900 font-montserrat text-lg text-center uppercase font-bold m-3">
                  CANAL DE WHATSAPP
                </Link>
                <Link href="https://www.instagram.com/imcyc_oficial/" className="hover:underline bg-gray-300 p-5 rounded-xl text-gray-900 font-montserrat text-lg text-center uppercase font-bold m-3">
                  INSTAGRAM
                </Link>
                <Link href="https://www.facebook.com/imcycoficial" className="hover:underline bg-gray-300 p-5 rounded-xl text-gray-900 font-montserrat text-lg text-center uppercase font-bold m-3">
                  FACEBOOK
                </Link>
                <Link href="https://mx.linkedin.com/company/imcyc-oficial" className="hover:underline bg-gray-300 p-5 rounded-xl text-gray-900 font-montserrat text-lg text-center uppercase font-bold m-3">
                  LINKEDIN
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
