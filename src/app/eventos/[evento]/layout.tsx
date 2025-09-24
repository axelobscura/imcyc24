import { Metadata } from "next";
import { headers } from 'next/headers';
import "react-image-gallery/styles/css/image-gallery.css";
import "../../globals.css";

type Props = {
  params: { evento: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Get the current URL from headers
  const headersList = await headers();
  const domain = headersList.get('host') || 'imcyc.com';
  const fullUrl = `https://${domain}/eventos/${params.evento}`;
  const evento = params.evento.split('-').join(' ').toUpperCase();

  return {
    title: `${evento} | Instituto Mexicano del Cemento y del Concreto A.C.`,
    description: `${evento} | El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.`,
    openGraph: {
      title: `${evento} | Instituto Mexicano del Cemento y del Concreto A.C.`,
      description: `${evento} | El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.`,
      url: fullUrl, // Using the dynamic URL here
      siteName: `${evento} | Instituto Mexicano del Cemento y del Concreto A.C.`,
      images: [
        {
          url: fullUrl,
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
      title: `${evento} | Instituto Mexicano del Cemento y del Concreto A.C.`,
      description: `${evento} | El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.`,
      images: fullUrl,
    },
  }
}

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
