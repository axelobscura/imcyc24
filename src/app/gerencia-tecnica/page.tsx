import { Slider } from "../components/Carousel";

const imagenes = ["/estructuras/AE_1.jpg", "/estructuras/AE_2.jpg", "/estructuras/AE_3.jpg", "/estructuras/AE_4.jpg", "/estructuras/AE_5.jpg", "/estructuras/AE_6.jpg", "/estructuras/AE_7.jpg"];

export default function GerenciaTecnica() {
  return (
    <div>
      <div className="font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-90 sm:pt-150 pb-0 lg:py-40">
        <main className="flex flex-col gap-8 row-start-2 sm:items-start z-0 pt-10">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-start justify-items-center mt-10">
            <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
              <h1 className="font-montserrat text-3xl font-light text-white pt-0 sm:pl-50">
                ¿Qué es la GERENCIA TÉCNICA?
              </h1>
              <br />
              <hr />
              <br />
              <p className="text-justify font-montserrat text-1xl text-white">
              <strong>La Gerencia Técnica del Instituto tiene como objetivo representar una autoridad técnica reconocida en materia del cemento y del concreto</strong>. Esta Gerencia se encuentra integrada por seis áreas, que
              ofrecen asesorías técnicas y <strong>diversos servicios de Evaluación de la Conformidad, que son:</strong></p>.
              <ul className="text-justify font-montserrat text-1xl text-white list-disc pl-10 mb-5">
                <li>Laboratorio de Ensayos</li>
                <li>Laboratorio de Calibración</li>
                <li>Proveedor de Ensayos de Aptitud</li>
                <li>Organismo de Certificación de Personas</li>
                <li>Organismo de Certificación de Producto</li>
              </ul>
              <p className="text-justify font-montserrat text-1xl text-white">
              El laboratorio de ensayos se encuentra conformado por el laboratorio de concreto y el laboratorio de cemento, <strong>ambos laboratorios cuentan con un sistema de gestión acreditado ante la entidad mexicana de acreditación (ema) en las ramas de construcción y metalmecánica</strong>.
              <br />
              <br />
              En la rama de construcción, <strong>el laboratorio cuenta con 18 métodos
              acreditados en la subrama de cemento; 15 métodos acreditados para
              la subrama de concreto; 9 métodos de agregados y 6 métodos
              acreditados para prefabricados; en muchos de estos métodos, somos
              el único laboratorio acreditado a nivel nacional</strong>, como es el caso
              de las pruebas para concreto reforzado con fibras, ensayos de
              paneles, sistemas de losas prefabricadas, pruebas físicas de
              adhesivos, asesorías en Estructuras, OCPER, entre otros.
              <br />
              <br />
              Dentro de la rama de Metalmecánica, contamos con 6 métodos
              acreditados para realizar pruebas en varillas de acero de refuerzo
              de concreto.
              <br />
              <br />
              Además de los métodos acreditados, los laboratorios cuentan con
              diversos métodos implementados para brindar servicios especiales,
              como son: las pruebas de durabilidad en el concreto (permeabilidad
              al ion cloruro, penetración de agua y resistividad eléctrica),
              evaluación de aditivos, ensayos a las membranas de curado,
              análisis químicos de materiales, análisis de agua para concreto,
              petrografías de agregados y de concreto, pruebas estáticas en
              durmientes de concreto, ensayos de torones y conectores, y otras
              pruebas especiales.
              <br />
              <br />
              El laboratorio de calibración también cuenta con acreditación ante
              la entidad mexicana de acreditación (ema) en las magnitudes de
              fuerza y masa, entre los servicios que ofrece este laboratorio, se
              encuentra también el mantenimiento y la reparación de equipos de
              ensayo, así como la calibración de otro tipo de equipo, como las
              ollas para determinación de contenido de aire en el concreto y la
              verificación de termómetros. Este laboratorio brinda servicios en
              las instalaciones de los clientes a nivel nacional y
              Latinoamérica.
              <br />
              <br />
              En 2022, el Proveedor de Ensayos de Aptitud del Instituto cumple
              quince años como acreditado ante la entidad mexicana de
              acreditación, es el primer Proveedor de Ensayos de Aptitud en el
              sector construcción y en el área de Metalmecánica, actualmente se
              encuentra alineado a los estándares internacionales con los
              alcances flexibles, lo que permite a los participantes de los
              programas emplear metodologías equivalentes entre sí para su
              participación. El Proveedor de Ensayos de Aptitud cuenta con
              programas para la participación de los laboratorios interesados en
              Concreto, Agregados, Geotecnia, Cemento y Acero, el calendario
              anual de los programas se publica en diciembre de cada año en la
              página del Instituto.
              <br />
              <br />
              El Organismo de Certificación de Producto es el Organismo de
              Evaluación de la Conformidad más reciente del Instituto, cuenta
              con acreditación ante la entidad mexicana de acreditación para
              cementantes hidráulicos, bloques, tabiques o tabicones, adoquines,
              paneles, losas prefabricadas y adhesivos. Así mismo, puede ofrecer
              evaluaciones de tercera parte para los fabricantes que no cuenten
              con especificaciones estandarizadas para sus p roductos o que
              desarrollen nuevas tecnologías en materia de cemento y de concreto
              que requieren una validación por una institución independiente.
              <br />
              <br />
              Pensando en las necesidades de la industria de la construcción,
              nos encontramos en proceso de implementación del Organismo de
              Certificación de Personas, que nos permitirá crear un mecanismo
              para que las personas interesadas puedan demostrar competencia en
              habilidades específicas para desempeñarse como técnicos
              laboratoristas en concreto, agregados y cemento, supervisores de
              laboratorio, operadores de ollas de mezclado de concreto, y otras
              actividades clave en la industria.
            </p>
            </div>
            <div>
              <Slider imagenes={imagenes} />
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
