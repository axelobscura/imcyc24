"use client";
import React from "react";
import { FaRegUserCircle, FaBuilding, FaUserCheck, FaUserPlus, FaBrain } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import { SlClose } from "react-icons/sl";

export default function Membresias() {


    return (
        <div>
            <div className="grid grid-rows-[1fr] pb-20 gap-16 sm:p-20 bg-gray-900 bg-gradient-to-t from-gray-800 to-slate-900 font-[family-name:var(--font-geist-sans)] z-10 bg-cover bg-center bg-no-repeat py-40 sm:py-40">
                <div className="mx-auto max-w-screen-xl px-5">
                <main className="pt-20">
                    <h1 className="font-montserrat text-4xl font-bold text-white pt-0 mb-0 pb-0 text-center">MEMBRESÍAS IMCYC</h1>
                    <h2 className="text-center text-white text-6xl font-bold py-5">Precios <span className="text-blue-500">Universidad Digital IMCYC</span></h2>
                    <p className="text-center text-white text-1xl">Elige el plan perfecto para tu carrera.<br/>Aprende sin límites y acelera tu crecimiento profesional.</p>
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] gap-5 p-5 my-9 mb-3 bg-slate-950 rounded-[50px]">
                        <div className="bg-slate-700 flex flex-col items-center justify-center p-2 rounded-[30px] text-center border-2 border-blue-500 cursor-pointer">
                            <p className="text-white text-1xl uppercase flex items-center"><FaRegUserCircle size={20} className="mr-3" /> Individual</p>
                        </div>
                        <div className="bg-slate-950 flex flex-col items-center justify-center p-2 rounded-[30px] text-center">
                            <p className="text-white text-1xl uppercase">Membresías</p>
                            <p className="text-1xl text-blue-500">Para empresas y profesionales</p>
                        </div>
                        <div className="bg-slate-900 flex flex-col items-center justify-center p-2 rounded-[30px] text-center cursor-pointer">
                            <p className="text-white text-1xl uppercase flex items-center"><FaBuilding size={20} className="mr-3" /> Empresarial</p>
                        </div>
                    </div>
                </main>
                <div>
                    <div className="text-center">
                        <p className="text-gray-900 mb-5 flex items-center bg-blue-500 rounded-[30px] mx-3 p-3 px-9 text-center font-bold"><IoIosAlert className="mr-2" /> Importante: Las membresías NO incluyen constancias de aptitud ni certificaciones presenciales.</p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] pt-0 gap-2 p-5 my-5">
                    <div className="m-2 p-5 bg-slate-950 rounded-[20px]">
                        <h2 className="text-2xl font-bold text-gray-100 pb-3 flex items-center"><FaUserCheck className="mr-3" /> Profesional</h2>
                        <p className="text-white text-3xl font-bold">$99 <span className="text-sm text-gray-400">/mes</span></p>
                        <p className="text-gray-200 mt-3">Lo que incluye:</p>
                        <ul className="list-disc font-montserrat text-gray-200 mt-5 px-5">
                            <li className="pb-2 line-through">Acceso a IA, IMCYC</li>
                            <li className="pb-2">Plataforma En Línea</li>
                            <li className="pb-2">Con anuncios</li>
                            <li className="pb-2">20% de descuento para estudiantes y profesores</li>
                        </ul>
                    </div>
                    <div className="m-2 p-5 bg-slate-950 rounded-[20px]">
                        <h2 className="text-2xl font-bold text-gray-100 pb-3 flex items-center"><FaUserPlus className="mr-3" /> Profesional Plus</h2>
                        <p className="text-white text-3xl font-bold">$299 <span className="text-sm text-gray-400">/mes</span></p>
                        <p className="text-gray-200 mt-3">Lo que incluye:</p>
                        <ul className="list-disc font-montserrat text-gray-200 mt-5 px-5">
                            <li className="pb-2">Acceso a IA, IMCYC (incl. 750K créditos)</li>
                            <li className="pb-2">Plataforma En Línea + contenido adicional</li>
                            <li className="pb-2">Con anuncios ligeros</li>
                            <li className="pb-2">10% de descuento en publicaciones</li>
                            <li className="pb-2">10% de descuento en enseñanza</li>
                        </ul>   
                    </div>
                    <div className="m-2 p-5 bg-slate-950 rounded-[20px]">
                        <h2 className="text-2xl font-bold text-gray-100 pb-3 flex items-center"><FaBrain className="mr-3" /> Inteligencia Artificial</h2>
                        <p className="text-gray-200 mt-3">Costo por persona:</p>
                        <div className="text-white grid grid-cols-[1fr_1fr] bg-slate-700 p-3 rounded-[15px] mt-5">
                            <div>
                                <div><p className="text-2xl font-bold">500K</p></div>
                                <div><p>Créditos</p></div>
                            </div>
                            <div>
                                <div><p className="text-2xl font-bold">$129</p></div>
                                <div><p>MXN</p></div>
                            </div>
                        </div>
                        <div className="text-white grid grid-cols-[1fr_1fr] bg-slate-700 p-3 rounded-[15px] mt-5">
                            <div>
                                <div><p className="text-2xl font-bold">1.25M</p></div>
                                <div><p>Créditos</p></div>
                            </div>
                            <div>
                                <div><p className="text-2xl font-bold">$299</p></div>
                                <div><p>MXN</p></div>
                            </div>
                        </div>
                        <div className="text-white grid grid-cols-[1fr_1fr] bg-slate-700 p-3 rounded-[15px] mt-5">
                            <div>
                                <div><p className="text-2xl font-bold">2M</p></div>
                                <div><p>Créditos</p></div>
                            </div>
                            <div>
                                <div><p className="text-2xl font-bold">$499</p></div>
                                <div><p>MXN</p></div>
                            </div>
                        </div>
                        <div className="text-white grid grid-cols-[1fr_1fr] bg-slate-700 p-3 rounded-[15px] mt-5">
                            <div>
                                <div><p className="text-2xl font-bold">5M</p></div>
                                <div><p>Créditos</p></div>
                            </div>
                            <div>
                                <div><p className="text-2xl font-bold">$999</p></div>
                                <div><p>MXN</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="font-montserrat text-4xl font-bold text-white pt-0 mb-0 pb-0 text-center">Métodos de Pago Seguros</h2>
                <p className="text-white text-center">Elige la forma de pago que más te convenga. Todos nuestros pagos son 100% seguros.</p>
                <div className="my-5 grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-4 gap-6 text-white font-montserrat text-center mt-7">
                    <div className="bg-slate-900 border border-slate-500 p-3 py-5 rounded-[30px] flex flex-col items-center">
                        <BsCreditCard2FrontFill size={30} className="mb-3" />
                        <p className="font-bold">Tarjetas de Crédito</p>
                        <p>Visa, MasterCard, American Express</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-500 p-3 pt-4 rounded-[30px] flex flex-col items-center">
                        <FaMobile size={30} className="mb-3" />
                        <p className="font-bold">Pagos Móviles</p>
                        <p>Apple Pay, Google Pay, PayPal</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-500 p-3 rounded-[30px] flex flex-col items-center">
                        <BsCreditCard2FrontFill size={30} className="mb-3" />
                        <p className="font-bold">Transferencia Bancaria</p>
                        <p>Transferencias locales e internacionales</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-500 p-3 rounded-[30px] flex flex-col items-center">
                        <IoShieldCheckmark size={30} className="mb-3" />
                        <p className="font-bold">Pago Seguro</p>
                        <p>Encriptación SSL de 256 bits</p>
                    </div>
                </div>
                <div className="bg-blue-900 p-5 rounded-[20px] mt-10">
                    <h2 className="font-montserrat text-4xl font-bold text-white pt-0 mb-0 pb-0 flex items-center"><IoIosAlert className="mr-2" /> Información Importante</h2>
                    <p className="text-white my-3 font-bold">Lo que NO incluyen nuestros planes:</p>
                    <p className="text-white flex items-center"><SlClose className="mr-3" size={15} /> Constancias de aptitud profesional</p>
                    <p className="text-white flex items-center"><SlClose className="mr-3" size={15} /> Certificaciones oficiales de competencia</p>
                    <p className="text-white flex items-center"><SlClose className="mr-3" size={15} />Exámenes de certificación técnica</p>
                    <div className="my-5 bg-slate-500 p-3 px-5 rounded-[20px]">
                        <p className="text-white font-bold">Los planes se enfocan en capacitación y desarrollo profesional. Para obtener certificaciones oficiales y ensayos de aptitud, consulta nuestros servicios especializados.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
