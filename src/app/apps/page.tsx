//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client";
"use client"
import { useState, useEffect } from 'react'
import Image from "next/image";

export default function Apps() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("test");
  interface Aplicacion {
    id: string;
    nombre: string;
    url: string;
    icono: string;
  }
  
  const [aplicaciones, setAplicaciones] = useState<Aplicacion[]>([]);

  const checkAplicaciones = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch('/api/get-aplicaciones', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("Response data:", data);
        setMessage('User exists!');
        setAplicaciones(data);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Network error occurred');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkAplicaciones();
  }, []);

  if(loading){
    <h2 className="text-white">CARGANDO...</h2>
  }

  console.log("aplicaciones", aplicaciones);
  console.log("message", message);
  
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 mt-10 sm:pt-120 pb-0 lg:py-90">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <h1 className="font-montserrat text-4xl font-light text-white text-center uppercase">Aplicaciones para la construcción</h1>
              <div className="grid grid-cols-[1fr_1fr_1fr] py-10 gap-5">
                {aplicaciones.map((app) => (
                  <a key={app.id} href={app.url} target='_blank' className="grid grid-cols-[1fr_3fr] items-center w-full p-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-100 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:text-gray-900">
                    <div className="bg-gray-100 mr-5 text-center relative rounded-full">
                      <Image src={`/iconos/${app.icono}.svg`} alt="Image description" width={50} height={30} className="relative m-3 rounded-lg" />
                    </div>
                    <div>
                      <h5 className="m-2 text-1xl font-light tracking-tight dark:text-white">{app.nombre}</h5>
                    </div>
                  </a>
                ))}
                {loading && <h2 className="text-white">CARGANDO...</h2>}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
