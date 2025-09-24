import type { Metadata } from "next";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../globals.css";

export const metadata: Metadata = {
  title: "EVENTOS | Instituto Mexicano del Cemento y del Concreto A.C.",
  description: "El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.",
  openGraph: {
    title: "EVENTOS | Instituto Mexicano del Cemento y del Concreto A.C.",
    description: "El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.",
    url: "https://www.imcyc.com.mx/eventos",
    siteName: "EVENTOS | Instituto Mexicano del Cemento y del Concreto A.C.",
    images: [
      {
        url: 'https://imcyc.net/images/imcyc-evento-profesionalizacion-industria.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Instituto Mexicano del Cemento y del Concreto A.C.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@imcyc',
    creator: '@imcyc',
    title: 'Instituto Mexicano del Cemento y del Concreto A.C.',
    description: 'El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.',
    images: 'https://imcyc.net/images/imcyc-evento-profesionalizacion-industria.jpg', // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
