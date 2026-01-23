"use client";
import React, { useState, useEffect} from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonMasInformacion({ selectedPlan }: { selectedPlan?: string }) {

  console.log("Selected Plan:", selectedPlan);
  const [useLink , setLink] = useState<string>("https://wa.me/5636853914");

  useEffect(() => {
    if(selectedPlan) {
      if(selectedPlan === 'pro-mes') {
        setLink("https://pay.conekta.com/link/b867b825d19a4522a75b88cae3f3f7ec")
      } else if(selectedPlan === 'pro-anual') {
        setLink("https://pay.conekta.com/link/367fd7ec93124287af69e05a4a4dc180")
      } else if(selectedPlan === 'proplus-mes') {
        setLink("https://pay.conekta.com/link/21e4d57e92ee450b909523127b672ed9")
      } else if(selectedPlan === 'proplus-anual') {
        setLink("https://pay.conekta.com/link/367fd7ec93124287af69e05a4a4dc180")
      } else {
        setLink("https://wa.me/5636853914");
      }
    } else {
      setLink("https://wa.me/5636853914");
    }
  }, [selectedPlan]);

  return (
      <Link href={useLink} target="_blank" className="w-full bg-blue-500 hover:bg-slate-600 transition-all ease-in-out text-white text-center flex justify-center items-center p-2 rounded-[10px] font-bold">
        <FaWhatsapp size={30} className="mr-2" /> MÁS INFORMACIÓN 
      </Link>
  );
}