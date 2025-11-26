"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";
import Loader from './Loader';

interface Evaluacion {
    message?: string;
    preguntas?: unknown[];
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
                <p className="font-montserrat text-blue-500 w-full text-center text-2xl font-bold">
                </p>
            </div>
        </div>
    );
}