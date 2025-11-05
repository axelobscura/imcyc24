"use client";
import { useState, useEffect } from "react";

export default function CardHorizontal({ fecha }: {
  fecha: string;
}) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const countDownDate = new Date(fecha).getTime();
      const distance = countDownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days} Días, ${hours} Horas, ${minutes} Minutos y ${seconds} Segundos`);
      } else {
        setTimeLeft("¡Tiempo terminado!");
      }
    };

    // Update immediately
    updateTimer();

    // Set up interval
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  return (
    <div className="grid grid-cols-[1fr] w-full rounded-md items-center">
      <div className="w-full p-5 py-0">
        <p className="font-montserrat text-blue-500 w-full text-center text-2xl font-bold">
          FALTAN {timeLeft}
        </p>
      </div>
    </div>
  );
}