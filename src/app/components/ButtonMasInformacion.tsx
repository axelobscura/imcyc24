"use client";
import React, { useState, useEffect} from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonMasInformacion({ selectedPlan }: { selectedPlan?: string }) {

  console.log("Selected Plan:", selectedPlan);
  const [useLink , setLink] = useState<string>("https://wa.me/525521045612");

  useEffect(() => {
    if(selectedPlan) {
      if(selectedPlan === 'pro-mes') {
        setLink("https://pay.conekta.com/link/1db095ad31b74460ad75ac98a291489d")
      } else if(selectedPlan === 'pro-anual') {
        setLink("https://pay.conekta.com/link/5ec65adb9f7e4a4ab12556e4a7ee7cce")
      } else if(selectedPlan === 'proplus-mes') {
        setLink("https://pay.conekta.com/link/2cb089d2f1c548dca837108684cbbb9b")
      } else if(selectedPlan === 'proplus-anual') {
        setLink("https://pay.conekta.com/link/7b121a30b8ff4c65b44b79669232bd6d")
      } else {
        setLink("https://wa.me/525521045612");
      }
    } else {
      setLink("https://wa.me/525521045612");
    }
  }, [selectedPlan]);

  return (
      <Link href={useLink} target="_blank" className="w-full bg-blue-500 hover:bg-slate-600 transition-all ease-in-out text-white text-center flex justify-center items-center p-2 rounded-[10px] font-bold">
        <FaWhatsapp size={30} className="mr-2" /> MÁS INFORMACIÓN 
      </Link>
  );
}