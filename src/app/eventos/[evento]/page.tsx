"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Loader from "../../components/Loader";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

export default function Evento() {
  const params = useParams<{ evento: string }>();
  const [posts, setPosts] = useState([]);
  const [contenido, setContenido] = useState();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/eventos')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, []);

  useEffect(() => {
    if (!posts) return;
    const post = posts.find(post => post[4] === params.evento);
    setContenido(post);
  }, [posts, params]);

  if(posts.length === 0) {
    return <Loader/>
  };

  return (
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/asociados.webp')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-0 md:pt-40 sm:pt-0 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] gap-0 items-start justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-ligth mb-2 flex items-center">
                  <FaCircleArrowRight className="mr-3" /> {contenido && contenido[0]}
                </h1>
                <h2 className="text-slate-200 text-xl my-3 font-bold flex items-center"><FaCircleArrowRight className="mr-3" /> {contenido && contenido[5]}</h2>
                <p className='text-gray-300 mb-5 font-bold text-xl flex items-center'><FaCalendar className="mr-3" /> {contenido && contenido[3]}</p>
                <Image
                  src={`/cursos/${contenido && contenido[2]}`}
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
                <h2 className="text-2xl text-blue-400 text-bold flex items-center"><FaCircleArrowRight className="mr-3" /> POLÍTICAS DE INSCRIPCIÓN Y CANCELACIÓN</h2>
                <ul className="text-white mx-16 my-3 list-decimal">
                  <li>La confirmación de asistencia a los cursos, seminarios o programas de certificación se deberá realizar como límite 2 semanas antes de su impartición.</li>
                  <li>Los pagos de asistencia a los cursos, seminarios o programas de certificación se deberán cubrir antes de su realización.</li>
                  <li>Los profesores y el contenido de los cursos o seminarios, pueden cambiar por causas externas al IMCYC.</li>
                  <li>Los precios y fechas están sujetos a cambios sin previo aviso.</li>
                  <li>Para la realización de cada curso, examen, certificación, etc., se requiere una cantidad mínima de participantes. En caso de no cubrirse, el IMCYC pospondrá o cancelará dicho curso y le avisará al participante que se haya inscrito a más tardar 5 días antes.</li>
                  <li>En caso de cancelación por parte del participante, ésta se deberá enviar por escrito máximo una semana antes del evento solicitando el traspaso de fondos a otro curso o servicio durante el calendario lectivo 2026, no hay devoluciones.</li>
                  <li>Precios más IVA.</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
}
