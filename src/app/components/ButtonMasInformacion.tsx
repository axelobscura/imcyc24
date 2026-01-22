import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonMasInformacion() {
  return (
      <Link href="https://wa.me/5554671492" target="_blank" className="w-full bg-blue-500 hover:bg-slate-600 transition-all ease-in-out text-white text-center flex justify-center items-center p-2 rounded-[10px] font-bold">
        <FaWhatsapp size={30} className="mr-2" /> MÁS INFORMACIÓN 
      </Link>
  );
}