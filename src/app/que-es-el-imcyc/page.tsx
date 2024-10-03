import Image from "next/image";

//FLOWBITE - https://flowbite.com/docs/components/navbar/

export default function QueEsElImcyc() {
  return (
    <div>
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 pb-10 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0">
        <div className="grid grid-cols-[1fr_1fr] gap-5 items-center justify-items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">¿Qué es el IMCYC?</h1><br/>
            <hr/><br/>
            <p className="text-justify">El IMCYC, A.C. es una asociación no lucrativa dedicada a la investigación, enseñanza y difusión de las técnicas de aplicación del cemento y del concreto. <b>Su misión es promover la utilización óptima del cemento y del concreto</b> para satisfacer las necesidades del mercado con calidad, productividad y oportunidad, contribuyendo a mejorar el desempeño profesional, el desarrollo y beneficio económico de la industria, así como de la sociedad.<br/><br/>El IMCYC surgió en 1923 como un «Comité para Propagar el Uso del Cemento Portland». Ya en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, A.C., con el objetivo de investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br/><br/>De este modo, se aportan nuevos conocimientos sobre el cemento y el concreto, y se enseña a trabajarlo con calidad, resolviendo los problemas de aplicación en las obras y orientando a los profesionales en sus múltiples oportunidades de utilización. Así mismo, se fortalecen nuestras estructuras, desarrollando al personal, ampliando nuestra presencia nacional e internacional y haciendo más efectivas y eficientes las operaciones. El IMCYC es imagen, voz y representatividad del Sector Cemento y Concreto ante la sociedad, las autoridades nacionales y entidades internacionales, no estando comprometido con ninguna de las empresas del ramo.</p>
          </div>
          <div>
            <Image
              src="/qs1.jpg"
              alt="Instituto Mexicano del Cemento y del Concreto A.C."
              width={550}
              height={0}
            />
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
