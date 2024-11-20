
"use client";
import { Carousel } from "flowbite-react";

export function Slider({imagenes}: {
  imagenes: string[]
}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {imagenes.map((img, index) => (
          <img key={index} src={img} alt="Instituto Mexicano del Cemento y del Concreto A.C." />
        ))}
      </Carousel>
    </div>
  );
}
