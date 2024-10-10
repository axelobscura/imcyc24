'use client'
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function TipoEnsayo() {
  const pathname = usePathname();
  const param = pathname.split('/')[2].split('-').join(" ");

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-center justify-items-center">
            <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
              <h1 className="text-4xl font-bold text-white pt-10 sm:pl-50 uppercase">
                {param}
              </h1>
              
            </div>
            <div className="w-full flex justify-center">
              <Image
                src="/qs1.jpg"
                alt="IMCYC"
                width={700}
                height={0}
                layout="intrinsic"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
