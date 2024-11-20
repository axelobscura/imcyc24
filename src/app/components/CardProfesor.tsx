
"use client";
import { Card, Dropdown } from "flowbite-react";
import Image from "next/image";

export function CardProfesor({nombre, imagen, certificado, descripcion} : {
  nombre: string,
  imagen: string,
  certificado: string,
  descripcion: string
}) {
  return (
    <Card className="w-full bg-slate-900 bg-opacity-75 border border-slate-700 my-1">
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Bonnie image"
          height="96"
          src={imagen}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h2 className="mb-1 text-xl text-gray-100 dark:text-white text-center font-bold">{nombre}</h2>
        <div className="text-sm text-gray-300 dark:text-gray-400 py-3 list-disc text-justify" dangerouslySetInnerHTML={{__html: descripcion}}></div>
        <p className="py-3 text-center" dangerouslySetInnerHTML={{__html: certificado}}></p>
      </div>
    </Card>
  );
}
