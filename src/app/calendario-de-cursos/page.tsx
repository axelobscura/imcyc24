"use client";
import { useState, useEffect } from 'react'

export default function CalendarioDeCursos() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/cursos')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);
 
  if (!posts) return <div>Loading...</div>

  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/revista.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-5 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold">
                CURSOS 2025
                </h1>
                <p className="font-montserrat text-1xl text-white">Instituto Mexicano del Cemento y del Concreto A.C.</p>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center">
                <div>
                  {posts.map((post, index) => (
                    <div key={index} className="font-montserrat grid grid-cols-[1fr_1fr_5fr_1fr] gap-4 bg-gray-950 bg-opacity-50 bg-blend-multiply p-2 my-1 items-center">
                      <p className='flex items-center justify-left text-2xl font-bold text-white'>{post[0]}</p>
                      <p className='flex items-center justify-center text-2xl font-bold text-white'>{post[1]}</p>
                      <div className='bg-gray-800 bg-opacity-50 p-3'>
                        <p className='text-justify text-medium mt-2 text-white'>{post[5]}</p>
                        <p className="text-2xl font-bold text-white">{post[2]}</p>
                        <p className='text-justify text-medium mt-2 text-white'>{post[3]}</p>
                      </div>
                      <p className='flex items-center justify-left text-2xl font-bold text-white'>${new Intl.NumberFormat('en-US').format(post[4])}.00</p>
                    </div>
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
