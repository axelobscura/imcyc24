import type { Metadata } from "next";
import TopBar from "../components/TopBar";
import "../globals.css";

export const metadata: Metadata = {
  title: "Calendario Certificación de personas - Instituto Mexicano del Cemento y del Concreto A.C.",
  description: "Asesoría técnica en estructuras de concreto - El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.",
};

export default function LayoutProveedor({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar/>
      {children}
      </>
  );
}
