
"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Slider({imagenes}: {
  imagenes: string[],
  link?: string,
}) {
  return (
    console.log(imagenes),
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {imagenes.map(img => (
          <Image
            src={img}
            width={800}
            height={0}
            key={img}
            alt="Instituto Mexicano del Cemento y del Concreto A.C."
          />
        ))}
      </Carousel>
    </div>
  );
}
