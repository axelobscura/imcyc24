'use client'
import { Table } from "flowbite-react";

export default function TipoEnsenanza() {

  const vigentes = [
    {
      "nombre": "RICARDO MARURI COLIN",
      "constancia": "CA-IMCYC-24001334",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN VERTICAL"
    },
    {
      "nombre": "MARCO ANTONIO DÍAZ BASTIDA",
      "constancia": "CA-IMCYC-24002335",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN VERTICAL"
    },
    {
      "nombre": "MARCO ANTONIO DÍAZ BASTIDA",
      "constancia": "CA-IMCYC-24003339",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN SOBRE CABEZA"
    },
    {
      "nombre": "CRISTIAN JESUS JAIMES ESTRADA",
      "constancia": "CA-IMCYC-24004336",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN VERTICAL"
    },
    {
      "nombre": "ERICK MORA MORALES",
      "constancia": "CA-IMCYC-24005337",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN VERTICAL"
    },
    {
      "nombre": "ERICK MORA MORALES",
      "constancia": "CA-IMCYC-24006340",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN SOBRE CABEZA"
    },
    {
      "nombre": "OLEGARIO SALAZAR TIRADO",
      "constancia": "CA-IMCYC-24007338",
      "expedicion": "2024-07-01",
      "vigencia": "2029-07-01",
      "programa": "CONCRETO LANZADO VÍA HÚMEDA - POSICIÓN VERTICAL"
    }
  ]

  return (
    <div>
      <div className="flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/constancias.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
            <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
              <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                CONSTANCIAS DE APTITUD VIGENTES
              </h1>
              <p className='font-montserrat'>Servicios especializados en Enseñanza.</p>
            </div>
            <div className='bg-gray-900 bg-opacity-50 border-gray-200'>
            <div className="overflow-x-auto">
              <Table striped>
                <Table.Head className="border-gray-700 bg-gray-800">
                  <Table.HeadCell>NOMBRE</Table.HeadCell>
                  <Table.HeadCell>CONSTANCIA</Table.HeadCell>
                  <Table.HeadCell>EXPEDICIÓN</Table.HeadCell>
                  <Table.HeadCell>VIGENCIA</Table.HeadCell>
                  <Table.HeadCell>PROGRAMA</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {vigentes.map((ele, index) => (
                    <Table.Row key={index} className="border-gray-700 bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{ele.nombre}</Table.Cell>
                      <Table.Cell>{ele.constancia}</Table.Cell>
                      <Table.Cell>{ele.expedicion}</Table.Cell>
                      <Table.Cell>{ele.vigencia}</Table.Cell>
                      <Table.Cell>{ele.programa}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
