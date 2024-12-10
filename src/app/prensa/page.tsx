"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Loader from "../components/Loader";

export default function Prensa() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/prensa')
      const data = await res.json()
      setPosts(data.reverse())
    }
    fetchPosts()
  }, []);
 
  if (!posts) return <Loader/>

  if(posts.length === 0) {
    return <Loader/>
  };

  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/libreria.png')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                  Prensa
                </h1>
                <h3 className="font-montserrat text-1xl pt-2 text-white">Instituto Mexicano del Cemento y del Concreto A.C.</h3>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center">
                <div>
                  {posts.map((post, index) => (
                    <Link
                      href={`/prensa/${post[4]}`}
                      key={index}
                    >
                      <div key={index} className="font-montserrat grid grid-cols-[1fr_3fr] gap-4 bg-gray-950 hover:bg-slate-800 cursor-pointer bg-opacity-50 bg-blend-multiply p-2 items-center justify-center mb-2">
                        <div>
                          <Image
                            src={`/prensa/${post[2]}`}
                            alt="IMCYC"
                            width={300}
                            height={0}
                            layout="intrinsic"
                          />
                        </div>
                        <div>
                          <p className='text-gray-300'>{post[3]}</p>
                          <p className='flex items-center justify-center text-2xl font-bold py-3 pr-7 text-justify text-white'>{post[0]}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
