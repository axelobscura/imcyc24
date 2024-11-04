'use client';
import { usePathname } from 'next/navigation';

export default function TipoEnsayo() {
  const pathname = usePathname();
  const param = pathname.split('/')[2].split('-').join(" ");

  const concreto = [
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

  const agregados = [
    "Muestreo de agregados y reducción de muestras.*",
    "Masa específica y absorción de grava o arena.*",
    "Pérdida por lavado de arena.*",
    "Cantidad de agua por secado.*",
    "Masa volumétrica suelta y compactada de grava o arena.*",
    "Materia orgánica de arena.*",
    "Análisis granulométrico de agregados gruesos y finos.*",
    "Prueba de abrasión en máquina de los ángeles.<sup><b>NA</b></sup>",
    "Coeficiente de forma.<sup><b>NA</b></sup>",
    "Partículas planas y alargadas.<sup><b>NA</b></sup>",
    "Análisis petrográfico de muestra de agregado.<sup><b>NA</b></sup>",
    "Sanidad (intemperismo acelerado) de agregado.<sup><b>NA</b></sup>",
    "Parámetros agresivos (cloruros, sulfatos y pH) en agregados.<sup><b>NA</b></sup>",
    "Contenido de terrones de arcilla y partículas deleznables en muestra de agregado.<sup><b>NA</b></sup>",
    "Contenido de partículas ligeras en muestra de agregado.<sup><b>NA</b></sup>",
    "Efecto de las impurezas orgánicas en el agregado fino sobre la resistencia del concreto.<sup><b>NA</b></sup>",
    "Reactividad potencial (método químico) de agregado.<sup><b>NA</b></sup>",
    "Reactividad potencial (método acelerado de barras) de muestras de agregado.<sup><b>NA</b></sup>",
    "Reactividad potencial de los agregados con los álcalis del cemento por medio de barras de mortero.*",
    "Reactividad potencial álcali de rocas de carbonato a un año.<sup><b>NA</b></sup>",
    "Cambio de longitud de agregados debido a la reacción álcali carbonato -método de barras-.<sup><b>NA</b></sup>",
    "Determinación del peso específico de muestra de agregado.*",
    "Determinación de la dureza en escala de Mohs.<sup><b>NA</b></sup>",
    "Contenido de carbonato de magnesio en agregado calizo.<sup><b>NA</b></sup>",
    "Contenido de carbonatos totales en agregado calizo.<sup><b>NA</b></sup>"
  ];

  const prefabricados = [
    {
      "nombre": "Ensayos de bloques, tabiques, tabicones y adoquines.",
      "categorias": [
        "Ensayos físicos de adoquines de concreto.*",
        "Compresión de bloques.*",
        "Contracción por secado de bloques de concreto. NA",
        "Absorción inicial.*",
        "Absorción total.*",
        "Resistencia a la abrasión.",
        "Esfuerzo resistente a compresión de pilas. NA",
        "Esfuerzo cortante resistente en compresión diagonal de muretes. NA",
        "Módulo de elasticidad de mampostería. NA",
        "Módulo de rigidez de la mampostería. NA",
        "Cubos de mortero de junteo. NA"
      ]
    },
    {
      "nombre": "Ensayos de componentes de sistemas de losas",
      "categorias": [
        "Ensaye de elementos aligerantes. NA",
        "Ensaye a flexión con carga al centro de elementos portantes.*",
        "Ensaye a flexión del sistema completo de vigueta y bovedilla.*"
      ]
    },
    {
      "nombre": "Paneles tipo I, II y III",
      "categorias": [
        "Resistencia a compresión simple en paneles individuales.",
        "Resistencia a carga lateral en paneles individuales.",
        "Resistencia al fuego.*",
        "Resistencia al impacto en paneles.",
        "Carga uniformemente repartida en paneles individuales.",
        "Resistencia a flexión en piezas individuales simplemente apoyadas.*"
      ]
    },
    {
      "nombre": "Pruebas estáticas de durmientes",
      "categorias": [
        "Ensayo a flexión por momento negativo en la sección del riel.",
        "Ensayo a flexión por momento positivo en la sección del riel.",
        "Ensayo de desarrollo de adherencia y carga de falla en la sección del riel por momento positivo.*",
        "Ensayo de agrietamiento en la sección del riel por momento positivo.*",
        "Ensayo a flexión por momento negativo en el centro del durmiente.*",
        "Ensayo de extracción de insertos.*",
        "Ensayo de torque en insertos.*",
        "Ensayo de la extracción de la fijación.*",
        "Ensayo de resistencia eléctrica.*"
      ]
    }
  ];

  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                  {param}
                </h1>
                <p className='font-montserrat'>Servicios especializados en {param}.</p>
              </div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <p className="text-3xs font-bold text-white text-right sm:text-right">Acreditación No. <strong>C-053-059/11</strong></p>
              </div>
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center'>
              {param === "concreto" && concreto.map((item, index) => (
                <div className='font-montserrat bg-gray-950 bg-opacity-50 border border-gray-700 p-2 pl-5 m-0 flex items-center uppercase font-bold' key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
              ))}
              {param === "agregados" && agregados.map((item, index) => (
                <div className='font-montserrat bg-gray-950 bg-opacity-50 border border-gray-700 p-2 pl-5 m-0 flex items-center uppercase font-bold' key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
              ))}
              {param === "prefabricados" && prefabricados.map((item, index) => {
                return(
                  <div key={index}>
                    <div className='font-montserrat bg-gray-950 bg-opacity-50 border border-gray-700 p-2 pl-5 m-0 flex items-center uppercase font-bold' key={index} dangerouslySetInnerHTML={{ __html: item.nombre }}></div>
                    <ul className='font-montserrat bg-gray-950 bg-opacity-50 border border-gray-700 pl-10 list-disc py-3'>
                      {item.categorias.map((sub, index) => (
                        <div key={index}>
                          <li>{sub}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
