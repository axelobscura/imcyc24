import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

export default function MenuLateral(
    {
        seccion,
        categoria,
    }: {
        seccion: () => void | null,
        categoria: string | null,
    }) {
    return (
        <div className='barra_lateral'>
            <ul className='menu interno bg-slate-800 bg-opacity-50'>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' EVALUACIÓN FINAL' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> EVALUACIÓN DIAGNÓSTICO</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' PRESENTACIÓN EJECUTIVA' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> PRESENTACIÓN EJECUTIVA</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' PRESENTACIÓN GRABADA' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> PRESENTACIÓN GRABADA</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' PRESENTACIÓN EJECUTIVA' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> DATO EN CONCRETO</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' PRESENTACIÓN EJECUTIVA' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> INFOGRAFÍAS</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' PRESENTACIÓN EJECUTIVA' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> VIDEOS</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' EVALUACIÓN FINAL' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> EVALUACIÓN FINAL</Link>
                </li>
                <li>
                    <Link href={`/usuarios/${categoria}/`} onClick={seccion} className={categoria === ' CONTENIDO ADICIONAL' ? 'active mb-0' : 'mb-0'}><BsChevronRight /> CONTENIDO ADICIONAL</Link>
                </li>
            </ul>
        </div>
    )
}
