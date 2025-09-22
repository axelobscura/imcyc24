import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { [key: string]: string } }
): Promise<Metadata> {
  const res = await fetch(`https://imcyc.com.mx/api/prensa/`);
  const articulos = await res.json();
  const post = articulos.find((articulo: { [key: string]: string }) => articulo[4] === params.articulo);

  const articulo = {
    titulo: post[0],
    descripcion: post[0],
    imagen: `/prensa/${post[2]}`,
  };

  return {
    title: articulo.titulo,
    description: articulo.descripcion,
    openGraph: {
      title: articulo.titulo,
      description: articulo.descripcion,
      images: [
        {
          url: articulo.imagen,
          width: 1200,
          height: 630,
          alt: articulo.titulo,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: articulo.titulo,
      description: articulo.descripcion,
      images: [articulo.imagen],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}