"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Loader from "../../components/Loader";
import Link from "next/link";

export default function Articulo() {
  const params = useParams<{ articulo: string }>();
  const [posts, setPosts] = useState([]);
  const [contenido, setContenido] = useState();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/prensa')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);

  useEffect(() => {
    if (!posts) return;
    const post = posts.find(post => post[4] === params.articulo);
    setContenido(post);
  }, [posts, params]);

  if(posts.length === 0) {
    return <Loader/>
  };

  return (
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/libreria.png')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:pt-40 sm:pt-0 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[5fr_1fr] gap-0 items-start justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-ligth mb-5">
                  {contenido && contenido[0]}
                </h1>
                <p className='text-gray-300 mb-5'>{contenido && contenido[3]}</p>
                <Image
                  src={`/prensa/${contenido && contenido[2]}`}
                  alt="IMCYC"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  layout="intrinsic"
                  className="mb-5"
                />
                {contenido ? 
                  <div
                    dangerouslySetInnerHTML={{__html: contenido[1]}}
                    className="text-white text-justify"
                  />
                :
                  ""
                }
              </div>
              <div>
                  <Link href="https://element5.mx/" target="_blank" rel="noopener noreferrer">
                    <Image src="/prensa/banner_elemental.gif" alt="IMCYC" width={200} height={50} />
                  </Link>
                </div>
            </div>
          </main>
        </div>
      </div>
  );
}
