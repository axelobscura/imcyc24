"use client";
import Image from "next/image";

export default function CardHorizontal({titulo, desc, imagen}:{
  titulo: string;
  desc: string;
  imagen: string;
}) {
  return (
      <div className="grid grid-cols-[190px_1fr] w-full bg-slate-800 bg-opacity-80 border border-slate-600 my-1 rounded-md items-center">
        <div>
          <Image
            src={imagen}
            alt={desc}
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <div className="w-full p-5">
          <h5 className="font-montserrat text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
            {titulo}
          </h5>
          <p className="font-montserrat text-gray-200 dark:text-gray-200 w-full pt-3" dangerouslySetInnerHTML={{__html: desc}}></p>
        </div>
      </div>
  );
}