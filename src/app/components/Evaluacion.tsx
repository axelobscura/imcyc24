"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";
import Loader from './Loader';

interface Respuesta {
    id: number;
    id_pregunta: string;
    pregunta: string;
    correcta: string;
}

interface Pregunta {
    pregunta: string;
    respuesta: Respuesta[];
}

interface Evaluacion {
    message?: string;
    preguntas?: Pregunta[];
}

export default function Evaluacion() {
    const params = useParams();
    const [evaluacion, setEvaluacion] = useState<Evaluacion>({});

    useEffect(() => {
        const fetchEvaluacion = async () => {
            const response = await fetch(`/api/get_evaluacion/${params.webinar}`);
            const data = await response.json();
            setEvaluacion(data);
        };
        fetchEvaluacion();
    }, [params.webinar]);

    if (!evaluacion.preguntas) {
        return <Loader />;
    }

    console.log(evaluacion)
    return (
        <div className="grid grid-cols-[1fr] w-full rounded-md items-center">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 my-5">
                <h3 className="text-center text-1xl font-bold text-white p-0 m-0">EVALUACIÓN PARA</h3>
                <h2 className="text-center text-4xl font-bold text-white p-0 m-0">{typeof params?.webinar === 'string' ? decodeURIComponent(params.webinar.split('-').join(' ')).toUpperCase() : ''}</h2>
            </div>
            <div className="w-full p-5 py-0">
                {evaluacion.preguntas.map((pregunta: Pregunta, index: number) => (
                    <div key={index}>
                        <p className="text-white my-2 bg-gray-800 bg-opacity-50 p-2 grid grid-cols-[1fr] sm:grid-cols-[1fr_20fr] gap-0 items-center"><span className="text-white flex justify-center items-center bg-slate-500 p-2 mr-3 border-2 border-blue-500">{index + 1}</span> <span className="text-white text-left">{pregunta.pregunta}</span></p>
                        <div className="mx-4 my-4 bg-slate-900 bg-opacity-50 p-3">
                            {pregunta.respuesta.map((respuestaObj: Respuesta, respuestaIndex: number) => (
                                <label key={respuestaIndex} className="block text-white my-2 cursor-pointer hover:text-gray-300 grid grid-cols-[1fr] sm:grid-cols-[1fr_20fr] gap-0 items-center">
                                    <input
                                        type="radio"
                                        name={`pregunta-${index}`}
                                        value={respuestaObj.pregunta}
                                        className="mr-2 p-3 border border-gray-300 rounded-md bg-gray-800 bg-opacity-50"
                                    />
                                    {respuestaObj.pregunta}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}