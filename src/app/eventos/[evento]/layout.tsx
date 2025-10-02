import { Metadata } from "next";
import { headers } from 'next/headers';

type Props = {
  params: Promise<{ evento: string }>;
  // searchParams: { [key: string]: string | string[] | undefined } --- IGNORE ---
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Get the current URL from headers
  const headersList = await headers();
  const domain = headersList.get('host') || 'imcyc.com';
  const { evento } = await params;
  const fullUrl = `https://${domain}/eventos/${evento}`;
  const eventoFormatted = evento.split('-').join(' ').toUpperCase();

  return {
    title: `${eventoFormatted} | Instituto Mexicano del Cemento y del Concreto A.C.`,
    description: `${eventoFormatted} | El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.`,
    openGraph: {
      title: `${eventoFormatted} | Instituto Mexicano del Cemento y del Concreto A.C.`,
      description: `${eventoFormatted} | El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.`,
      url: fullUrl, // Using the dynamic URL here
      siteName: `${eventoFormatted} | Instituto Mexicano del Cemento y del Concreto A.C.`,
      images: [
        {
          url: 'https://imcyc.net/images/imcyc-evento-profesionalizacion-industria.jpg',
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
      title: `${eventoFormatted} | Instituto Mexicano del Cemento y del Concreto A.C.`,
      description: `${eventoFormatted} | El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.`,
      images: 'https://imcyc.net/images/imcyc-evento-profesionalizacion-industria.jpg',
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
