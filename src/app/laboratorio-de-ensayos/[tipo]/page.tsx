'use client'
import { usePathname } from 'next/navigation';

export default function TipoEnsayo() {
  const pathname = usePathname();
  const param = pathname.split('/')[2].split('-').join(" ");

  const concreto = [
    "Diseño de mezclas de concreto. <sup>NA</sup>",
    "Diseño de mezclas de concreto. <sup><b>NA</b></sup>",
    "Tiempos de fraguado.<sup><b>NA</b></sup>",
    "Contenido de aire.*",
    "Reducción de agua <sup><b>NA</b></sup>",
    "Revenimiento.*",
    "Masa unitaria.*",
    "Contenido de aire.*",
    "Temperatura del concreto fresco. <sup><b>NA</b></sup>",
    "Elaboración de especímenes de concreto.*",
    "Resistencia a la compresión de especímenes (cilindros y cubos).*",
    "Resistencia a la flexión.*",
    "Cambio de longitud. <sup><b>NA</b></sup>",
    "Extracción de núcleos de concreto.*",
    "Ensayo a compresión de núcleos.*",
    "Pruebas de carga en elementos estructurales horizontales (trabes y losas). <sup><b>NA</b></sup>",
    "Índice de rebote en concreto, utilizando el esclerómetro.*",
    "Velocidad de pulso en el concreto, utilizando el ultrasonido.*",
    "Módulo de elasticidad con extensómetro.*",
    "Determinación de la relación de Poisson.*",
    "Módulo de elasticidad con strain-gages.*",
    "Determinación de la contracción por secado en barras de concreto. <sup><b>NA</b></sup>",
    "Determinación del coeficiente de deformación diferida. <sup><b>NA</b></sup>",
    "Análisis petrográfico del concreto endurecido. <sup><b>NA</b></sup>",
    "Ensaye a la flexión de vigas de concreto.*",
    "Estudios de fuego. <sup><b>NA</b></sup>",
    "Resistencia a la tensión por compresión diametral de cilindros de concreto. <sup><b>NA</b></sup>",
    "Masa específica, absorción y vacíos en muestras de concreto endurecido. <sup><b>NA</b></sup>",
    "Adherencia de las capas superficiales del concreto utilizando el dispositivo conocido como 'Pull-off'. <sup><b>NA</b></sup>",
    "Profundidad de penetración de agua. <sup><b>NA</b></sup>",
    "Resistencia al agrietamiento, tenacidad y resistencia residual a la tensión (prueba Barcelona).<sup><b>NA</b></sup>",
    "Desempeño a la flexión de concreto reforzado con fibra.*",
    "Resistencia residual a la flexión en viga con ranura.*",
    "Tenacidad a la flexión utilizando panel circular con carga central de concreto reforzado con fibra.*",
    "Capacidad de absorción de energía en panel cuadrado de concreto reforzado con fibra. <sup><b>NA</b></sup>",
    "Resistencia residual promedio del concreto reforzado con fibra.*",
    "Resistencia a la penetración del ion cloruro de muestra de concreto. <sup><b>NA</b></sup>",
    "Parámetros agresivos (cloruros, sulfatos y pH) en concreto endurecido. <sup><b>NA</b></sup>",
    "Contenido de cemento en concreto endurecido. <sup><b>NA</b></sup>",
    "Reactividad potencial álcali-agregado en concreto -método del uranilo. <sup><b>NA</b></sup>",
    "Profundidad de carbonatación por el método de la fenolftaleína. <sup><b>NA</b></sup>"
  ];

  return (
    <div>
      <div className="flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/ensayos/concreto.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] gap-0 items-center justify-items-stretch pt-20 w-full">
            <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
              <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                {param}
              </h1>
              <p>Servicios especializados</p>
            </div>
            <div className='bg-gray-900 bg-opacity-50 border-gray-200'>
              <ul className="font-montserrat text-sm font-medium text-white p-10 list-disc">
                <ul className="font-montserrat text-sm font-medium text-white p-10 list-disc">
                  {param === "concreto" && concreto.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
