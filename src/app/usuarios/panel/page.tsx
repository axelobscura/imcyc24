//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client";
import { useState, useEffect } from 'react'
import BreadCrumbUser from '@/app/components/BreadCrumbUser';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '@/app/components/Loader';
import { CiCirclePlus } from "react-icons/ci";
import { IoArrowDownCircle } from "react-icons/io5";
import { useUser } from '@/app/context/UserContext';
import { useRouter } from 'next/navigation';

export default function Panel() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("test");
  const [categorias, setCategorias] = useState([]);
  const { user, isLoggedIn } = useUser();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/usuarios');
    }
  }, [isLoggedIn, router]);

  const checkCategorias = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch('/api/get_categorias_webinars', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('User exists!');
        setCategorias(data);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Network error occurred');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkCategorias();
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(message);
  console.log('user: ', user);

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
        <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-0 row-start-2 items-center sm:items-start z-0">
          <div className="text-center">
            <div className="grid grid-cols-[1fr] gap-14 mt-10">
              <BreadCrumbUser />
            </div>
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-4">
              <div className="bg-opacity-75 shadow-lg border-blue-700">
                <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 mt-4'>
                  <div className='p-3 bg-slate-850'>
                    <h3 className='text-left text-2xl text-white uppercase flex items-center'><IoArrowDownCircle className="mr-2" /> Contenido IMCYC</h3>
                    <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] gap-4 mt-4 items-center'>
                      {categorias && categorias.map((categoria: { id: number; nombre: string; descripcion: string; imagen: string, id_tipo: number, link: string }) => {
                        if (categoria.id_tipo === 1) {
                          return (
                            <Link key={categoria.id} href={`/usuarios/${categoria.link}`} className='hover:scale-110 transition duration-500 ease-in-out hover:z-10 hover:shadow-lg hover:shadow-gray-900 hover:border-gray-900'>
                              <div className="mt-1 p-0 bg-gray-800 hover:bg-slate-300 bg-opacity-50 rounded-lg shadow-md text-left items-center justify-center w-full hover:text-gray-900">
                                <div className="w-full h-[150px] overflow-hidden  bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
                                  <Image src={`/webinars/categorias/${categoria.imagen}`} alt="Logo" width={1500} height={150} className="w-full h-auto" />
                                </div>
                                <h2 className="text-sm text-white font-light py-3 px-2 min-h-[100px] hover:text-slate-900 w-full flex items-center justify-center text-center bg-slate-800 hover:bg-slate-900 hover:text-white">{categoria.nombre}</h2>
                                <p className="mt-1 text-gray-300">{categoria.descripcion}</p>
                              </div>
                            </Link>
                          )
                        }
                      })}
                    </div>
                  </div>
                  <div className='p-3 border-slate-700 border-l-2'>
                    <h3 className='text-left text-2xl text-white uppercase flex items-center'><CiCirclePlus className="mr-2" /> Valor Agregado</h3>
                    <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] gap-4 mt-4 items-center'>
                      {categorias && categorias.map((categoria: { id: number; nombre: string; descripcion: string; imagen: string, id_tipo: number, link: string }) => {
                        if (categoria.id_tipo === 2) {
                          return (
                            <Link key={categoria.id} href={`/usuarios/${categoria.link}`} className='hover:scale-110 transition duration-500 ease-in-out hover:z-10 hover:shadow-lg hover:shadow-gray-900 hover:border-gray-900'>
                              <div className="mt-1 p-0 bg-gray-800 hover:bg-slate-300 bg-opacity-50 rounded-lg shadow-md text-left items-center justify-center w-full hover:text-gray-900">
                                <div className="w-full h-[150px] overflow-hidden  bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
                                  <Image src={`/webinars/categorias/${categoria.imagen}`} alt="Logo" width={1500} height={150} className="w-full h-auto" />
                                </div>
                                <h2 className="text-sm text-white font-light py-5 px-3 min-h-[100px] hover:text-slate-900 w-full flex items-center justify-center text-center bg-slate-800 hover:bg-slate-900 hover:text-white">{categoria.nombre}</h2>
                                <p className="mt-1 text-gray-300">{categoria.descripcion}</p>
                              </div>
                            </Link>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
