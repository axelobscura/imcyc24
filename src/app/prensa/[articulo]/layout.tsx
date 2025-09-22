
// Define types for our article data
type Articulo = [string, string, string, string, string];

export async function generateMetadata({ params }: { params: { articulo: string } }) {
  const res = await fetch(`https://imcyc.com.mx/api/prensa/`);
  const articulos = await res.json();
  const post = articulos.find((articulo: Articulo) => articulo[4] === params.articulo);

  const articulo = {
    titulo: post?.[0] || 'Artículo IMCYC',
    descripcion: post?.[0] || 'Artículo de prensa IMCYC',
    imagen: post ? `/prensa/${post[2]}` : '/default-image.jpg',
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