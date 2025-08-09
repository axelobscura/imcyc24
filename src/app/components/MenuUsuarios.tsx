"use client";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function MenuUsuarios() {
  return (
    <nav>
      <ul className="flex flex-col uppercase text-left">
        <li>
          <a
            href="/usuarios/panel"
            className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Inicio
          </a>
        </li>
        <li className="m-0">
          <a
            href="#usuarios"
            className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Enseñanza
          </a>
        </li>
        <li className="m-0">
          <a
            href="#usuarios"
            className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Laboratorio
          </a>
        </li>
        <li>
          <a
            href="#reportes"
            className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Webinars
          </a>
        </li>
        <li className="m-0">
          <a
            href="/usuarios/concreton"
            className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Concretón
          </a>
        </li>

        <li>
          <a
            href="#configuracion"
            className="flex items-center px-4 py-4 rounded hover:bg-slate-700 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Productos
          </a>
        </li>
        <li>
          <a
            href="/usuarios"
            className="flex items-center px-4 py-4 rounded hover:bg-red-600 hover:text-white transition border-b-2 border-slate-600 text-white"
          >
            <FaRegArrowAltCircleRight className="mr-2" /> Cerrar sesión
          </a>
        </li>
      </ul>
    </nav>
  );
}
