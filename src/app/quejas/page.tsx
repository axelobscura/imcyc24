"use client";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";

export default function QuejasYApelaciones() {
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/quejas.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                  Quejas
                </h1>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-10">
                <div>
                </div>
                <div>
                  <div className='bg-slate-900 bg-opacity-80 p-5'>
                      <>
                        <form className="flex w-full flex-col gap-4">
                          <div>
                            <div className="mb-2 flex items-center">
                            <FaArrowCircleDown className='mr-2' /> <Label htmlFor="email1" value="*Nombre completo:" className="font-montserrat text-1xl font-light flex items-center text-gray-100" />
                            </div>
                            <TextInput id="email1" type="text" placeholder="Nombre completo" required />
                          </div>
                          <div>
                            <div className="mb-2 flex items-center">
                            <FaArrowCircleDown className='mr-2' /> <Label htmlFor="password1" value="*Teléfono:" className="font-montserrat text-1xl font-light pb-2 flex items-center text-gray-100" />
                            </div>
                            <TextInput id="email1" type="number" placeholder="Teléfono" required />
                          </div>
                          <div>
                            <div className="mb-2 flex items-center">
                            <FaArrowCircleDown className='mr-2' /> <Label htmlFor="email1" value="*Correo electrónico:" className="font-montserrat text-1xl font-light flex items-center text-gray-100" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="Correo electrónico" required />
                          </div>
                          <div>
                            <div className="mb-2 flex items-center">
                            <FaArrowCircleDown className='mr-2' /> <Label htmlFor="email1" value="*Área:" className="font-montserrat text-1xl font-light flex items-center text-gray-100" />
                            </div>
                            <Select id="countries" required>
                              <option value="">Seleccionar</option>
                              <option value="Organismo de certificación de producto">Organismo de certificación de producto</option>
                              <option value="Organismo de certificación de personas">Organismo de certificación de personas</option>
                              <option value="Proveedor de ensayos de aptitud">Proveedor de ensayos de aptitud</option>
                            </Select>
                          </div>
                          <div>
                            <div className="mb-2 flex items-center">
                            <FaArrowCircleDown className='mr-2' /> <Label htmlFor="email1" value="*Mensaje:" className="font-montserrat text-1xl font-light flex items-center text-gray-100" />
                            </div>
                            <Textarea id="comment" placeholder="Escriba su queja..." required rows={4} />
                          </div>
                          <Button type="submit" className='font-montserrat uppercase font-bold'>ENVIAR</Button>
                        </form>
                      </>
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
