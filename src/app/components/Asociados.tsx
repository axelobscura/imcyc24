import React from "react";
import Link from "next/link";
import Image from "next/image";

const Asociados = () => {
  return (
    <>
      <div className="flex w-full">
        <ul className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center justify-center w-full py-10 mx-auto gap-10">
          <li className="flex text-center items-center margin-auto justify-center">
            <Link href="https://www.cemexmexico.com/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/asociados/logo_cemex.svg"
                  alt="Asociados"
                  width={170}
                  height={0}
                />
            </Link>
          </li>
          <li className="justify-center">
            <Link href="https://www.cmoctezuma.com.mx/" rel="noopener noreferrer" target="_blank" className="text-center w-full flex items-center justify-center">
                <Image
                  src="/asociados/logo_moctezuma_b.svg"
                  alt="Asociados"
                  width={160}
                  height={0}
                />
            </Link>
          </li>
          <li className="flex text-center w-full items-center justify-center">
            <Link href="https://www.cementosfortaleza.com/" rel="noopener noreferrer" target="_blank" className="text-center w-full flex items-center justify-center">
                <Image
                  src="/asociados/logo_fortaleza_b.svg"
                  alt="Asociados"
                  width={80}
                  height={0}
                />
            </Link>
          </li>
          <li className="justufy-center">
            <Link href="https://www.gcc.com/" rel="noopener noreferrer" target="_blank" className="flex text-center w-full justify-center">
                <Image
                  src="/asociados/logo_chihuahua_b.svg"
                  alt="Asociados"
                  width={110}
                  height={0}
                />
            </Link>
          </li>
          <li className="ustufy-center">
            <Link href="https://www.holcim.com.mx/" rel="noopener noreferrer" target="_blank" className="flex text-center w-full justify-center">
                <Image
                  src="/asociados/logo_holcim_b.svg"
                  alt="Asociados"
                  width={140}
                  height={0}
                />
            </Link>
          </li>
          <li className="flex w-full justufy-center">
            <Link href="https://www.cementocruzazul.com.mx/" rel="noopener noreferrer" target="_blank" className="text-right w-full flex items-center justify-center">
                <Image
                  src="/asociados/logo_cruzazul_b.svg"
                  alt="Asociados"
                  width={130}
                  height={0}
                />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Asociados;
