import Image from "next/image";
import Link from "next/link";

export default function LaboratorioDeEnsayos() {
  const servicios = [
    {
      nombre: "Concreto",
      imagen: "/ensayos/concreto.jpg",
      url: "concreto"
    },
    {
      nombre: "Agregados",
      imagen: "/ensayos/agregados.jpg",
      url: "agregados"
    },
    {
      nombre: "Prefabricados",
      imagen: "/ensayos/prefabricados.jpg",
      url: "prefabricados"
    },
    {
      nombre: "Cemento",
      imagen: "/ensayos/cemento.jpg",
      url: "cemento"
    },
    {
      nombre: "Adhesivos",
      imagen: "/ensayos/adhesivos.jpg",
      url: "adhesivos"
    },
    {
      nombre: "Acero",
      imagen: "/ensayos/acero.jpg",
      url: "acero"
    },
    {
      nombre: "Otros servicios",
      imagen: "/ensayos/otros_servicios.jpg",
      url: "otros-servicios"
    }
  ];
  return (
    <>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 bg-opacity-80 bg-[url('/gerencia-tecnica.jpg')] bg-cover bg-gray-900 bg-blend-multiply pt-50">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-96 sm:pt-96 pb-0 lg:py-40">
          <p className="font-montserrat mb-0 text-2md font-light tracking-tight leading-none text-white md:text-2xl lg:text-2xl dark:text-white sm:pt-20 text-center uppercase pt-90">
            Servicios de
          </p>
          <h1 className="font-montserrat mb-0 text-2md font-light tracking-tight leading-none text-white md:text-2xl lg:text-4xl dark:text-white sm:pt-0 text-center uppercase">
            Laboratorio de Ensayos
          </h1>
          
          <ul className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] gap-8 pt-0 sm:pt-10">
            {servicios.map((servicio) => (
              <li key={servicio.nombre}>
                <div className="max-w-sm bg-gray-900 border border-gray-700 hover:border-gray-500 rounded-sm shadow hover:opacity-70">
                    <Link href={`/laboratorio-de-ensayos/${encodeURIComponent(servicio.url)}`}>
                        <Image 
                          className="rounded-t-sm" src={servicio.imagen} alt={servicio.nombre} 
                          width="300"
                          height="0"
                        />
                    </Link>
                    <div className="p-5 text-center">
                        <Link href="/">
                            <h5 className="font-montserrat mb-2 text-2xl tracking-tight text-white uppercase font-light">{servicio.nombre}</h5>
                        </Link>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
