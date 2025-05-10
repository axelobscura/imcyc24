"use client";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

export default function Eventos() {
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/quejas.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                  Eventos IMCYC
                </h1>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10">
                <div>
                </div>
                <div>
                  <div className='bg-slate-900 bg-opacity-80 p-5'>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
