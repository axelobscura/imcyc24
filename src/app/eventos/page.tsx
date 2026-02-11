"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Loader from "../components/Loader";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

interface Banner {
  zona: string;
  link: string;
  imagen: string;
}

export default function Eventos() {
  const [posts, setPosts] = useState([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/eventos')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);

  useEffect(() => {
    async function fetchBanners() {
      const res = await fetch('/api/banners')
      const data = await res.json()
      data.forEach((banner: string[]) => {
        setBanners(prevBanners => [...prevBanners, {
          "zona": banner[0],
          "link": banner[1],
          "imagen": banner[2],
        }]);
      });
    }
    fetchBanners()
  }, []);
 
  if (!posts || !banners) return <Loader/>

  if(posts.length === 0) {
    return <Loader/>
  };

  console.log('banners: ', banners);

  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/asociados.webp')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-0 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold flex items-center">
                  <FaCircleArrowRight className="mr-3" /> Eventos IMCYC
                </h1>
                <h3 className="font-montserrat text-1xl pt-2 text-white">Instituto Mexicano del Cemento y del Concreto A.C.</h3>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[6fr_1fr] items-start justify-start">
                <div>
                  {posts.map((post, index) => (
                    <Link
                      href={`/eventos/${post[4]}`}
                      key={index}
                    >
                      <div key={index} className="font-montserrat grid grid-cols-[1fr] sm:grid-cols-[1fr_3fr] gap-4 bg-gray-950 hover:bg-slate-800 cursor-pointer bg-opacity-50 bg-blend-multiply p-2 items-center justify-center mb-2 border border-gray-700">
                        <div>
                          <img src={post[2]} alt={post[3]} style={{ width: '100%' }} />
                        </div>
                        <div>
                          <p className='text-blue-300 font-bold text-2xl flex items-center'><FaCalendarCheck className="mr-3" /> {post[3]}</p>
                          <p className='text-2xl font-bold py-3 pr-7 text-left sm:text-justify text-white'>{post[0]}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="hidden sm:block">
                    {banners.map((banner, index) => {
                      if(banner.zona === "z2") {
                        return (
                          <div key={index} className="my-0">
                            <Link href={banner.link} target="_blank" rel="noopener noreferrer">
                              <img src={banner.imagen} alt="eventos instituto mexicano del cemento y del concreto a.c." />
                            </Link>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
                <div>
                  <div className="hidden sm:block">
                    {banners.map((banner, index) => {
                      if(banner.zona === "z1") {
                        return (
                          <div key={index} className="my-0">
                            <Link href={banner.link} target="_blank" rel="noopener noreferrer">
                              <img src={banner.imagen} alt="eventos instituto mexicano del cemento y del concreto a.c." />
                            </Link>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
