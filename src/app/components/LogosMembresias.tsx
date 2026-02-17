import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogosMembresias = () => {
  return (
    <>
      <div className="flex w-full bg-white">
        <div className="mx-auto w-full max-w-screen-xl py-2 lg:py-2">
        <ul className="flex justify-between items-center w-full">
          <li>
            <Link href="https://www.mapei.com/mx/es-mx/home" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/membresias/mapei.svg"
                  alt="Membresías"
                  width={140}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://adisa.mx/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/membresias/adisa.png"
                  alt="Membresías"
                  width={130}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.ingetek.mx/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/membresias/ingetek.png"
                  alt="Membresías"
                  width={130}
                  height={0}
                />
            </Link>
          </li>
          <li>
            <Link href="https://www.penetron.mx/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/membresias/penetron.png"
                  alt="Membresías"
                  width={130}
                  height={0}
                />
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default LogosMembresias;
