import React from "react";
import Link from "next/link";
import Image from "next/image";

const AsociadosTop = () => {
  return (
    <>
      <div className="flex w-full">
        <ul className="flex justify-between items-center w-full">
          <li>
            <Link href="https://www.cemexmexico.com/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/asociados/logo_cemex.svg"
                  alt="Asociados"
                  width={110}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.cmoctezuma.com.mx/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/asociados/logo_moctezuma_b.svg"
                  alt="Asociados"
                  width={170}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.cementosfortaleza.com/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/asociados/logo_fortaleza_b.svg"
                  alt="Asociados"
                  width={80}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.gcc.com/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/asociados/logo_chihuahua_b.svg"
                  alt="Asociados"
                  width={110}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.holcim.com.mx/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/asociados/logo_holcim_b.svg"
                  alt="Asociados"
                  width={140}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.cementocruzazul.com.mx/" rel="noopener noreferrer" target="_blank">
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

export default AsociadosTop;
