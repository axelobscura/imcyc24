import Image from "next/image";

//FLOWBITE - https://flowbite.com/docs/components/navbar/

export default function QueEsElImcyc() {
  return (
    <div>
      <div className="font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-90 sm:pt-150 pb-0 lg:py-40">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 pt-160">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-center justify-items-center mt-28">
            <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
              <h1 className="text-4xl font-bold text-white pt-0 sm:pl-50">
                ¿Qué es el IMCYC?
              </h1>
              <br />
              <hr />
              <br />
              <p className="text-justify font-montserrat text-sm text-white">
                El <b>Instituto Mexicano del Cemento y del Concreto A.C.</b> es
                una asociación no lucrativa dedicada a la investigación,
                enseñanza y difusión de las técnicas de aplicación del cemento y
                del concreto.{" "}
                <b>
                  Su misión es promover la utilización óptima del cemento y del
                  concreto
                </b>{" "}
                para satisfacer las necesidades del mercado con calidad,
                productividad y oportunidad, contribuyendo a mejorar el
                desempeño profesional, el desarrollo y beneficio económico de la
                industria, así como de la sociedad.
                <br />
                <br />
                El IMCYC{" "}
                <b>
                  surgió en 1923 como un «Comité para Propagar el Uso del
                  Cemento Portland». Ya en 1959 se constituyó como Instituto
                  Mexicano del Cemento y del Concreto, A.C.
                </b>
                , con el objetivo de investigar y promover métodos constructivos
                y soluciones técnicas que permitan un uso más económico y
                racional del concreto en la construcción, para ofrecer el
                concreto al diseñador, al constructor y al propietario como la
                alternativa más ventajosa frente al empleo de otros materiales,
                además de crear más y mejores satisfactores para los asociados y
                sus clientes.
                <br />
                <br />
                De este modo,{" "}
                <b>
                  se aportan nuevos conocimientos sobre el cemento y el
                  concreto, y se enseña a trabajarlo con calidad, resolviendo
                  los problemas de aplicación en las obras y orientando a los
                  profesionales en sus múltiples oportunidades de utilización
                </b>
                . Así mismo, se fortalecen nuestras estructuras, desarrollando
                al personal, ampliando nuestra presencia nacional e
                internacional y haciendo más efectivas y eficientes las
                operaciones.{" "}
                <b>
                  El Instituto Mexicano del Cemento y del Concreto A.C., es
                  imagen, voz y representatividad del Sector Cemento y Concreto
                  ante la sociedad
                </b>
                , las autoridades nacionales y entidades internacionales, no
                estando comprometido con ninguna de las empresas del ramo.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <Image
                src="/qs1.jpg"
                alt="IMCYC"
                width={700}
                height={0}
                layout="intrinsic"
              />
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
