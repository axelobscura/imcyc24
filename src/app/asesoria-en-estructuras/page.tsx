import Link from "next/link";

export default function AsesoriaEnEstructuras() {
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/calibracion.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  ASESORÍAS TÉCNICAS DE ESTRUCTURAS
                </h1>
                <p className='font-montserrat'>Servicio de evaluación de estructuras de concreto en sus diversas etapas, apoyados de equipo especializado y pruebas a nivel laboratorio para identificar su correcto desempeño estructural o posibles causas de daño en las mismas.</p>
              </div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className='font-montserrat'><strong>	Ing. Benito Pérez Alto</strong></p>
                <p><Link href="mailto:bperez@mail.imcyc.com">bperez@mail.imcyc.com</Link></p>
              </div>
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              <h3 className="font-montserrat font-bold text-2xl p-3">Dipstick</h3>
              <p className="font-montserrat font-light m-5">Determinación del perfil de la superficie de los pisos industriales y pavimentos de concreto para estimar sus características de planicidad y nivelación reportados con el sistema de números F (FF Planicidad, FL Nivelación).</p>
              <h3 className="font-montserrat font-bold text-2xl p-3">HILTI PS200</h3>
              <p className="font-montserrat font-light m-5">El sistema sirve para detectar de manera sonora, visualizar, determinar la profundidad y estimar el diámetro de metales ferrosos, tales como varillas de refuerzo en estructuras de concreto.</p>
              <ul className="font-montserrat font-light m-5 list-disc pl-7">
                <li>Estimación aproximada del diámetro de acero de refuerzo, separación entre barras y profundidad y/o recubrimiento neto de varillas.</li>
                <li>Visualización de la configuración del acero en 2D y 3D.</li>
                <li>Rango de localización de objetos hasta 160 mm.</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3">HILTI X-Scan PS 1000 + trolley</h3>
              <p className="font-montserrat font-light m-5">Ofrece una vista en tiempo real del interior de las estructuras de concreto y automáticamente genera imágenes precisas para la evaluación directa in situ.</p>
              <ul className="font-montserrat font-light m-5 list-disc pl-7">
                <li>Minimiza los daños en trabajos de perforación en la masa de concreto ya que puede localizar objetos ocultos, así como detectar huecos y cavidadesR.</li>
                <li>Se puede realizar una inspección general en prácticamente cualquier estructura de concreto</li>
                <li>Vistas en 2D y 3D de la exploración. Rango de localización de objetos hasta 400 mm</li>
              </ul>
              <h3 className="font-montserrat font-bold text-2xl p-3">HILTI Transpointer PX 10</h3>
              <p className="font-montserrat font-light m-5">Capacidad para medir el espesor de paredes y techos en la mayoría de los materiales, es decir, madera, paneles de yeso, bloques y concreto con o sin barras de refuerzo.</p>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
