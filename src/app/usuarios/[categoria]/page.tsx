"use client"
import { useState, useEffect } from 'react'
import { IoArrowDownCircleOutline } from "react-icons/io5";
import BreadCrumbUser from '@/app/components/BreadCrumbUser';
import { useParams } from 'next/navigation';
import Loader from '@/app/components/Loader';
import Link from 'next/link';
import Image from 'next/image';

interface Categoria {
    id: number;
    nombre: string;
    link: string;
    imagen: string;
    descripcion: string;
}

interface Webinar {
    id: number;
    nombre: string;
    descripcion: string;
    fecha: string;
    url: string;
    id_categoria: number;
    imagen?: string;
}

interface ApiResponse {
    message: string;
    webinars: Webinar[];
    categoria: Categoria[];
}

interface BreadCrumb {
    categoria: string;
    url: string;
}

export default function Categoria() {
    const params = useParams();
    const categoria = params.categoria as string;
    const [categoriaData, setCategoriaData] = useState<Categoria | null>(null);
    const [webinars, setWebinars] = useState<Webinar[] | null>(null);
    const [breadCrumb, setBreadCrumb] = useState<BreadCrumb | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/get_categoria/${categoria}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setCategoriaData(data.categoria[0]);
                setWebinars(data.webinars[0]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [categoria]);

    useEffect(() => {
        setBreadCrumb({
            url: categoriaData?.link || '',
            categoria: categoriaData?.nombre || ''
        });
    }, [categoriaData]);

    if (!webinars || !categoriaData) {
        return <Loader />;
    }

    console.log("webinars", webinars);
    console.log("categoriaData", categoriaData);

    return (
        <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
                <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-0 row-start-2 items-center sm:items-start z-0">
                    <div className="text-center">
                        <div className="grid grid-cols-[1fr] gap-14 mt-10">
                            <BreadCrumbUser categoria={breadCrumb} />
                        </div>
                        <div className="grid grid-cols-[1fr] gap-14 mt-5">
                            <h2 className="text-left text-2xl text-white uppercase flex items-center"><IoArrowDownCircleOutline className="mr-2" /> {categoriaData ? categoriaData?.nombre : 'Cargando...'} </h2>
                        </div>
                        <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] gap-4 mt-4 items-center'>
                            {webinars && webinars.map((webinar) => (
                                <Link key={webinar.id} href={`/usuarios/webinar/${webinar.url}`} className='hover:scale-110 transition duration-500 ease-in-out hover:z-10 hover:shadow-lg hover:shadow-gray-900 hover:border-gray-900'>
                                    <div className="mt-1 p-0 bg-gray-800 hover:bg-slate-300 bg-opacity-50 rounded-lg shadow-md text-left items-center justify-center w-full hover:text-gray-900">
                                        <div className="w-full h-[100px] overflow-hidden  bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
                                            {webinar.imagen && <Image src={`/webinars/${webinar.imagen}`} alt={webinar.nombre} width={1500} height={100} className="w-full h-auto" />}
                                        </div>
                                        <h2 className="text-sm text-white font-light py-5 px-2 min-h-[100px] hover:text-slate-900 w-full flex items-center justify-center text-center bg-slate-800 hover:bg-slate-900 hover:text-white">{webinar.nombre}</h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}