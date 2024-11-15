import CardHorizontal from "../components/Card";

export default function Historia() {

  const historia = [
    {
      "ano": "2022",
      "descripcion": "El PEA cumple 15 años acreditado.",
      "imagen": "/historia/2021.jpg"
    },
    {
      "ano": "2021",
      "descripcion": "Se amplió el alcance acreditado del laboratorio para ensayar concreto reforzado con fibras. Se implementaron los métodos de prueba estáticos para durmientes de concreto.",
      "imagen": "/historia/2020.jpg"
    },
    {
      "ano": "2019 | Sesenta Aniversario",
      "descripcion": "<strong>El IMCYC surgió en 1923</strong> como un «Comité para Propagar el Uso del Cemento Portland». Ya en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, A.C., <strong>con el objetivo de investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción</strong>, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br/><br/>Se obtuvo la acreditación del OCP.",
      "imagen": "/historia/2019.jpg"
    },
    {
      "ano": "2018",
      "descripcion": "Luego de un turbulento, sorpresivo y dinámico año, nos preparamos para bajar la cortina del 2018 con la última edición de nuestra revista. Este número lo hemos dedicado, primordialmente, a la supervisión de obra, un tema que resulta fundamental porque es en esta área que recae, quizá, la responsabilidad más grande a la hora de “cortar el listón” de una obra, sea esta pequeña, mediana, grande o de infraestructura.",
      "imagen": "/historia/2018_1.jpg"
    },
    {
      "ano": "2017",
      "descripcion": "IMCYC inicia este 2017 con una gran transformación, entusiasmo y con grandes celebraciones. No sólo estamos estrenando y poniendo a su disposición instalaciones de capacitación y de laboratorios totalmente renovadas y con excelente estándares de calidad para darles un mejor servicio y confort, sino que además cumpliremos 58 años de haber sido fundados y de servir a la industria del cemento y del concreto. Años llenos de experiencia, crecimiento, aprendizaje y de desarrollo para que cada uno de nuestros servicios sea cada vez más eficiente, de calidad y con el propósito de ser un organismo que de soluciones y alternativas a la industria.",
      "imagen": "/historia/2017.jpg"
    }
  ];


  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-500 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start z-0 mx-auto w-full max-w-screen-xl px-5">
        <h1 className="font-montserrat text-4xl font-bold pb-0 mb-0">Historia</h1>
        <p className="font-montserrat">Instituto Mexicano del Cemento y del Concreto A.C.</p>
        {historia.map((contenido, index) => (
          <div key={index} className="w-full">
            <CardHorizontal titulo={contenido.ano} desc={contenido.descripcion} imagen={contenido.imagen} />
          </div>
        ))}
      </main>
    </div>
  );
}
