export default function LaboratorioDeEnsayos() {
  const servicios = [
    {
      nombre: "Concreto",
      imagen: "/ensayos/concreto.jpg"
    },
    {
      nombre: "Agregados",
      imagen: "/ensayos/agregados.jpg"
    },
    {
      nombre: "Prefabricados",
      imagen: "/ensayos/prefabricados.jpg"
    },
    {
      nombre: "Cemento",
      imagen: "/ensayos/cemento.jpg"
    },
    {
      nombre: "Adhesivos",
      imagen: "/ensayos/adhesivos.jpg"
    },
    {
      nombre: "Acero",
      imagen: "/ensayos/acero.jpg"
    },
    {
      nombre: "Otros servicios",
      imagen: "/ensayos/otros_servicios.jpg"
    }
  ];
  return (
    <>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 bg-opacity-80 bg-[url('/gerencia-tecnica.jpg')] bg-cover bg-gray-900 bg-blend-multiply">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
          <ul className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] gap-8 pt-0 sm:pt-20">
            {servicios.map((servicio) => (
              <li>
                <div className="max-w-sm bg-gray-900 border border-gray-700 hover:border-gray-500 rounded-sm shadow hover:opacity-70">
                    <a href="#">
                        <img className="rounded-t-sm" src={servicio.imagen} alt={servicio.nombre} />
                    </a>
                    <div className="p-5 text-center">
                        <a href="#">
                            <h5 className="font-montserrat mb-2 text-2xl tracking-tight text-white uppercase font-light">{servicio.nombre}</h5>
                        </a>
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
