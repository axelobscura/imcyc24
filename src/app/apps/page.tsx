//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client";
"use client"
import { useState, useEffect } from 'react'
import Image from "next/image";
import Loader from '../components/Loader';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Apps() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("test");
  interface Aplicacion {
    id: string;
    nombre: string;
    url: string;
    icono: string;
    categoria: string;
    imagen: string;
    usuarios: number;
  }

  const cardapp = (tipo: string, app: Aplicacion) => {
    return (
      <a key={app.id} href={app.url} target='_blank' className="grid grid-cols-[1fr] items-center w-full p-2 bg-gray-900 border border-gray-500 rounded-lg text-gray-100 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:text-gray-900">
        <div>
          <Image 
            src={`/apps/${app.imagen}`} 
            alt="Image description" 
            width={0}
            height={0}
            sizes="100vw"
            className="relative rounded-lg w-full h-auto border border-gray-900"
          />
        </div>
        <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_12fr] items-center mt-3'>
          <div className="bg-slate-700 text-center mr-1 relative rounded-full p-1">
            <FaCircleArrowRight size={30} color={'white'} />
          </div>
          <div>
            <h5 className="ml-2 text-1xl font-light tracking-tight dark:text-white">{app.nombre}</h5>
            <h3 className="ml-2 text-1xl font-bold tracking-tight dark:text-white">Número de Usuarios por mes: {app.usuarios.toLocaleString()}</h3>
          </div>
        </div>
      </a>
    )
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
        setMessage('Aplicaciones para la construcción');
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
    <Loader />
  }

  console.log(message);

  if(loading){
    return <Loader />;
  }
  
  return (
    <div>
      <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-fixed bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 mt-10 sm:pt-120 pb-0 lg:py-90">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <h1 className="font-montserrat text-4xl font-light text-white text-center uppercase pb-7">Aplicaciones para la construcción</h1>
              <h3 className='flex items-center font-montserrat text-2xl font-light text-white text-left uppercase my-4 py-5 mb-0 border-t-[1px] border-t-white border-t-solid'><IoIosArrowDroprightCircle className='mr-1' /> Plataformas educativas</h3>
              <div className='grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] py-1 gap-5'>
                {!loading && aplicaciones.map((app) => {
                  if(app.categoria === 'plataforma-educativa'){
                    return cardapp('plataforma-educativa', app)
                  }
                  return null;
                })}
              </div>
              <h3 className='flex items-center font-montserrat text-2xl font-light text-white text-left uppercase my-4 py-5 mb-0 border-t-[1px] border-t-white border-t-solid'><IoIosArrowDroprightCircle className='mr-1' /> Certificaciones | Sellos de calidad</h3>
              <div className='grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] py-1 gap-5'>
              {!loading && aplicaciones.map((app) => {
                if(app.categoria === 'certificaciones'){
                  return cardapp('certificaciones', app)
                }
                return null;
              })}
              </div>
              <h3 className='flex items-center font-montserrat text-2xl font-light text-white text-left uppercase my-4 py-5 mb-0 border-t-[1px] border-t-white border-t-solid'><IoIosArrowDroprightCircle className='mr-1' /> Industria</h3>
              <div className='grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] py-1 gap-5'>
              {!loading && aplicaciones.map((app) => {
                if(app.categoria === 'industria'){
                  return cardapp('industria', app)
                }
                return null;
              })}
              </div>
              <h3 className='flex items-center font-montserrat text-2xl font-light text-white text-left uppercase my-4 py-5 mb-0 border-t-[1px] border-t-white border-t-solid'><IoIosArrowDroprightCircle className='mr-1' /> Personalizadas</h3>
              <div className='grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] py-1 gap-5'>
              {!loading && aplicaciones.map((app) => {
                if(app.categoria === 'personalizadas'){
                  return cardapp('personalizadas', app)
                }
                return null;
              })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
