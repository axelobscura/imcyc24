"use client";
import Link from "next/link";
import Image from "next/image";

const imageFiles = [
  {
    "nombre": "logo_cemex.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 200
  },
  {
    "nombre": "logo_holcim.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 170
  },
  {
    "nombre": "logo_moctezuma.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 270
  },
  {
    "nombre": "logo_cruzazul.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 230
  },
  {
    "nombre": "logo_fortaleza.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 150
  },
  {
    "nombre": "logo_chihuahua.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 200
  },
  {
    "nombre": "logo_element.png",
    "link": "https://www.cemexmexico.com/",
    "width": 110
  },
  {
    "nombre": "logo_icr.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo_mapei.svg",
    "link": "https://www.cemexmexico.com/",
    "width": 170
  },
  {
    "nombre": "logo_master.png",
    "link": "https://www.cemexmexico.com/",
    "width": 170
  },
  {
    "nombre": "logo_pys.png",
    "link": "https://www.cemexmexico.com/",
    "width": 220
  },
  {
    "nombre": "logo_comosa.png",
    "link": "https://www.cemexmexico.com/",
    "width": 220
  },
  {
    "nombre": "SNF water science.png",
    "link": "https://www.cemexmexico.com/",
    "width": 110
  },
  {
    "nombre": "logo_hqcontrol.png",
    "link": "https://www.cemexmexico.com/",
    "width": 180
  },
  {
    "nombre": "logo_uanl.png",
    "link": "https://www.cemexmexico.com/",
    "width": 180
  },
  {
    "nombre": "logo_peña.jpg",
    "link": "https://www.cemexmexico.com/",
    "width": 90
  },
  {
    "nombre": "logo_am.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo_lanco.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo_triaxal.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo_lamaco.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo_sadasi.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo-itisa.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo_megapanel.png",
    "link": "https://www.cemexmexico.com/",
    "width": 140
  },
  {
    "nombre": "logo-rocacero.png",
    "link": "https://www.cemexmexico.com/",
    "width": 200
  },
  {
    "nombre": "logo_prepa.jpg",
    "link": "https://www.cemexmexico.com/",
    "width": 90
  },
  {
    "nombre": "logo_prelosa.png",
    "link": "https://www.cemexmexico.com/",
    "width": 180
  },
  {
    "nombre": "logo_comosa (1).png",
    "link": "https://www.cemexmexico.com/",
    "width": 90
  },
  {
    "nombre": "logo_concretosabcd.png",
    "link": "https://www.cemexmexico.com/",
    "width": 70
  },
  {
    "nombre": "logo_geogrupo.png",
    "link": "https://www.cemexmexico.com/",
    "width": 200
  },
  {
    "nombre": "logo_lamsyco.png",
    "link": "https://www.cemexmexico.com/",
    "width": 200
  },
  {
    "nombre": "logo_cmi.png",
    "link": "https://www.cemexmexico.com/",
    "width": 230
  }
];

export default function Asociados() {
  return (
    <div>
      <div className={`flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-gray-100 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="w-full sm:mb-5">
                <h1 className="font-montserrat text-4xl text-slate-900 pt-0 sm:pl-0 uppercase font-light mb-3">
                  Nuestros Asociados
                </h1>
              </div>
            </div>
            <div className='grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr] gap-5 items-center justify-center'>
              {imageFiles.map((file, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <Link href={file.link} rel="noopener noreferrer" target="_blank">
                      <Image
                        src={`/asociados/pagina/${file.nombre}`}
                        alt="Asociados Instituto mexicano del Cemento y del Concreto"
                        width={file.width}
                        height={0}
                      />
                    </Link>
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
