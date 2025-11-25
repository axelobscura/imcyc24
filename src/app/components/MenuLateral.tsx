import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MenuLateral(
    {
        id,
        imagen,
        nombre,
        seccion,
        categoria,
    }: {
        id: number | null,
        imagen: string | null,
        nombre: string | null,
        seccion: () => void | null,
        categoria: string | null,
    }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <div className='barra_lateral'>

            <h2 className="text-white text-center">{nombre}</h2>
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
