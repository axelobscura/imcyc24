import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

interface BreadCrumbUserProps {
    categoria?: string;
    webinar?: string;
}

export default function MenuLateral(
    {
        params
    }: {
        params: BreadCrumbUserProps
    }) {
    const { categoria, webinar } = params || {};
    return (
        <div className='barra_lateral'>
            <ul className='menu interno bg-slate-800 bg-opacity-50'>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/evaluación-diagnóstico`} className={'mb-0'}><BsChevronRight /> EVALUACIÓN DIAGNÓSTICO</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/presentación-ejecutiva`} className={'mb-0'}><BsChevronRight /> PRESENTACIÓN EJECUTIVA</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/presentación-grabada`} className={'mb-0'}><BsChevronRight /> PRESENTACIÓN GRABADA</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/dato-en-concreto`} className={'mb-0'}><BsChevronRight /> DATO EN CONCRETO</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/infografías`} className={'mb-0'}><BsChevronRight /> INFOGRAFÍAS</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/videos`} className={'mb-0'}><BsChevronRight /> VIDEOS</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/evaluación-final`} className={'mb-0'}><BsChevronRight /> EVALUACIÓN FINAL</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/${webinar}/contenido-adicional`} className={'mb-0'}><BsChevronRight /> CONTENIDO ADICIONAL</Link>
                </li>
            </ul>
        </div>
    )
}
