import Link from "next/link";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { BiBookmarkHeart } from "react-icons/bi";

export default function Membresias() {
    return (
        <div>
            <div className="grid grid-rows-[1fr] pb-20 gap-16 sm:p-20 bg-gray-900 bg-gradient-to-t from-gray-800 to-slate-900 font-[family-name:var(--font-geist-sans)] z-10 bg-cover bg-center bg-no-repeat py-40 sm:py-40">
                <div className=" mx-auto max-w-screen-xl px-5">
                <main className="pt-20">
                    <h1 className="font-montserrat text-4xl font-bold text-white pt-0 mb-0 pb-0">MEMBRESÍAS IMCYC</h1>
                    <p className="font-montserrat text-sm text-white pt-0 mt-0">Instituto Mexicano del Cemento y del Concreto A.C.</p>
                </main>
                <div className="grid grid-rows-[1fr] pt-0 ">
                    <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="font-montserrat text-md text-gray-100 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    MEMBRESÍAS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ESTUDIANTES Y DOCENTES
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    INDIVIDUAL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ORO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PLATINO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DIAMANTE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center font-montserrat border-b bg-gray-800 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    ACCESOS A LA PLATAFORMA EDUCATIVA
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                    <CiCircleCheck size={40} />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center">
                                        <CiCircleCheck size={40} />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    15 ACCESOS
                                </td>
                                <td className="px-6 py-4">
                                    20 ACCESOS
                                </td>
                                <td className="px-6 py-4">
                                    25 ACCESOS
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-700 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    PUBLICACIONES
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                    20%
                                </td>
                                <td className="px-6 py-4">
                                    20%
                                </td>
                                <td className="px-6 py-4">
                                    15%
                                </td>
                                <td className="px-6 py-4">
                                    20%
                                </td>
                                <td className="px-6 py-4">
                                    25%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-800 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    LOGOTIPO EN PÁGINA WEB
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="flex justify-center items-center">
                                    <CiCircleCheck size={40} className="mt-4" />
                                </td>
                                <td className="justify-center">
                                    <div className="flex justify-center">
                                        <CiCircleCheck size={40} className="flex justify-center" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center">
                                        <CiCircleCheck size={40} />
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-700 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    PRESENCIA EN REDES SOCIALES (PUBLICACIÓN POR MES)
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    2
                                </td>
                                <td className="px-6 py-4">
                                    4
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-800 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    DESCUENTOS EN PUBLICIDAD
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 text-center">
                                    10%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    15%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    20%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-700 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    DESCUENTOS EN SERVICIOS EMPRESARIALES
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 text-center">
                                    10%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    15%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    20%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-800 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    DESCUENTOS EN ENSEÑANZA
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                    30%
                                </td>
                                <td className="px-6 py-4">
                                    10%
                                </td>
                                <td className="px-6 text-center">
                                    10%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    15%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    20%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-700 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    DESCUENTOS EN PRUEBAS DE LABORATORIO
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 text-center">
                                    3%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    5%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    10%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-800 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    DESCUENTOS EN VIAJES TÉCNICOS
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                    
                                </td>
                                <td className="px-6 py-4">
                                    5%
                                </td>
                                <td className="px-6 text-center">
                                    5%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    5%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    5%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-700 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    DESCUENTOS EN SELLOS DE CALIDAD
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 text-center">
                                    3%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    5%
                                </td>
                                <td className="px-6 py-4 text-center">
                                    10%
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-gray-800 border-gray-700 text-gray-100">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    CO-WORKING
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 text-center">
                                    1 estación<br/>*5 veces al mes	
                                </td>
                                <td className="px-6 py-4 text-center">
                                    1 estación<br/>*10 veces al mes	
                                </td>
                                <td className="px-6 py-4 text-center">
                                    1 estación<br/>*15 veces al mes
                                </td>
                            </tr>
                            <tr className="text-center font-montserrat border-b bg-slate-900 border-gray-700 text-gray-100 font-bold">
                                <th scope="row" className="text-left px-6 py-4 font-medium text-gray-200 whitespace-nowrap dark:text-white">
                                    PRECIO MEMBRESÍA
                                </th>
                                <td className="px-6 py-4 flex justify-center">
                                    $1,650.00
                                </td>
                                <td className="px-6 py-4">
                                    $3,300.00
                                </td>
                                <td className="px-6 text-center">
                                    $18,150.00
                                </td>
                                <td className="px-6 py-4 text-center">
                                    $30,250.00
                                </td>
                                <td className="px-6 py-4 text-center">
                                    $42,350.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="font-montserrat text-xs mt-3 ml-5 mb-10">* SUJETO A DISPONIBILIDAD</p>
                    </div>
                </div>
                <div className="font-montserrat grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] pt-0 gap-5 p-5">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-100 pb-3 flex items-center"><BiBookmarkHeart className="mr-3" /> MIEMBROS DIAMANTE</h2>
                        <hr/>
                        <div className="font-montserrat grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] items-center text-center justify-center bg-white p-3 pb-5">
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center">
                                <Image
                                    src="/asociados/logo_ingetek.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={100}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center">
                                <Image
                                    src="/asociados/element5qa.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={90}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center">
                                <Image
                                src="/asociados/logoic.png"
                                alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                width={95}
                                height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center">
                                <Image
                                src="/asociados/mapei.svg"
                                alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                width={140}
                                height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-10">
                                <Image
                                src="/asociados/logo_comosa.png"
                                alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                width={140}
                                height={0}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-100 pb-3 flex items-center"><BiBookmarkHeart className="mr-3" /> MIEMBROS PLATINO</h2>
                        <hr/>
                        <div className="font-montserrat grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] items-center text-center justify-center bg-white p-3 pb-5">
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/Uanl-color.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={150}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/snf.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={100}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/MBS_Logo_RGB_pos.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={150}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/Imagotipo_IBMEX_Horizontal.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={300}
                                    height={0}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-100 pb-3 flex items-center"><BiBookmarkHeart className="mr-3" /> MIEMBROS ORO</h2>
                        <hr/>
                        <div className="font-montserrat grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] items-center text-center justify-center bg-white p-3 pb-5">
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/sika22.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={70}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/Concretos_la_pena.jpg"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={100}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/concretos-am.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={130}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/lamaco.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={130}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/Lanco_logo_Plasta_Azul.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={130}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/Triaxial_premezclados.png"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={130}
                                    height={0}
                                />
                            </Link>
                            <Link href="/membresias" rel="noopener noreferrer" className="flex items-center justify-center mt-5">
                                <Image
                                    src="/asociados/CRDC.jpg"
                                    alt="Membresìas Instituto Mexicano del Cemento y del Concreto"
                                    width={100}
                                    height={0}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
