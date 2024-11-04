"use client"
import { useState } from "react";
import Link from "next/link";

export default function CertificacionesAci() {
  const [useCurso, setCurso] = useState("");
  return (
    <div>
      <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/capacitacion.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="grid grid-rows-[1fr] gap-8 z-0 mx-auto max-w-screen-xl text-white">
          <h1 className="font-montserrat text-2xl uppercase mt-10 pt-10 pl-5 font-bold">
            Modalidad Presencial
          </h1>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-10 pl-5">
            <div>
              <div className="grid grid-cols-[1fr] gap-1 mb-3">
                <Link href="/capacitacion/modalidad-presencial/certificaciones-aci" className="font-montserrat btn bg-slate-500 hover:bg-slate-500 p-3 text-left text-xl">
                  CERTIFICACIONES ACI
                </Link>
                <h3 onClick={() => setCurso("Técnico para pruebas al concreto en la obra-Grado I")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                  Técnico para pruebas al concreto en la obra-Grado I
                </h3>
                <h3 onClick={() => setCurso("Técnico en pruebas de resistencia al concreto endurecido")} className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Técnico en pruebas de resistencia al concreto endurecido
                </h3>
                <h3 className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Técnico y acabador de superficies planas de concreto
                </h3>
                <h3 className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Técnico en pruebas de agregados
                </h3>
                <h3 className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Supervisor especializado en obras de concreto
                </h3>
                <h3 className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Supervisor y técnico de construcciones Tilt-up
                </h3>
                <h3 className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Técnico laboratorista Nivel II
                </h3>
                <h3 className="font-montserrat btn bg-slate-900 hover:bg-slate-500 p-5 text-left text-md cursor-pointer">
                Concreto lanzado
                </h3>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl">{useCurso}</h3>
              <h4 className="font-montserrat text-md mt-3">Objetivo</h4>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
