import { CiCircleCheck } from "react-icons/ci";

export default function Membresias() {
    return (
        <div>
            <div className="grid grid-rows-[1fr] pb-20 gap-16 sm:p-20 bg-gray-900 bg-gradient-to-t from-gray-800 to-slate-900 font-[family-name:var(--font-geist-sans)] z-10 bg-cover bg-center bg-no-repeat">
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
                                    <CiCircleCheck size={40} />
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
                                <td className="px-6 text-center">
                                    <CiCircleCheck size={40} />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <CiCircleCheck size={40} />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <CiCircleCheck size={40} />
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
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
