"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Loader from "../../components/Loader";

export default function Articulo() {
  const params = useParams<{ articulo: string }>()
  const [posts, setPosts] = useState([]);
  const [contenido, setContenido] = useState();

  console.log(params);

  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/libreria.png')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:pt-40 sm:pt-0 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                wefwefwefwef
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
