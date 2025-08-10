//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client"
import { useState, useEffect } from 'react'
import BreadCrumbUser from '@/app/components/BreadCrumbUser';
import MenuUsuarios from '../../components/MenuUsuarios';
import { FaRegUserCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function Panel() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("test");
  const [categorias, setCategorias] = useState([]);

  const checkCategorias = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch('/api/get_categorias', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("Response data:", data);
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

  console.log("categorias", message);

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
        <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-8 row-start-2 items-center sm:items-start z-0">
          <div className="text-center">
            <div className="grid grid-cols-[1fr] gap-14 mt-10 mx-4">
              <BreadCrumbUser />
            </div>
            <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_3fr] gap-8">
              <div className="mt-4 p-0 mx-4 mr-0 bg-slate-900 bg-opacity-90 rounded-lg shadow-lg border-2 border-blue-900">
                <MenuUsuarios />
              </div>
              <div className="mt-4 p-3 mx-5 mr-5 bg-slate-900 bg-opacity-75 rounded-lg shadow-lg border-2 border-blue-900">
                <h1 className="text-2xl text-white font-bold text-left flex items-center"><FaRegUserCircle className="mr-2" /> ¡BIENVENIDO A SU PANEL DE ADMINISTRACIÓN!</h1>
                <p className="mt-2 text-white mb-3 text-left font-medium">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <hr/>
                <div className='grid grid-cols-[1fr_1fr_1fr] gap-4 mt-4 items-center'>
                  {categorias && categorias.map((categoria: { id: number; nombre: string; descripcion: string }) => (
                    <Link key={categoria.id} href={`/usuarios/concreton/${categoria.id}`}>
                      <div className="mt-1 p-4 bg-gray-800 hover:bg-slate-300 bg-opacity-50 rounded-lg shadow-md border border-gray-700 text-left items-center justify-center w-full hover:text-gray-900">
                        <h2 className="text-xs text-blue-400 font-semibold hover:text-slate-900 w-full">{categoria.nombre}</h2>
                        <p className="mt-1 text-gray-300">{categoria.descripcion}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                {loading && <h2 className="text-white">CARGANDO...</h2>}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
