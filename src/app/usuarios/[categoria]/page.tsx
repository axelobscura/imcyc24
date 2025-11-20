export default function Categoria({ params }: { params: { categoria: string } }) {
    console.log(params.categoria);
    return (
        <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
                <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-0 row-start-2 items-center sm:items-start z-0">
                    <div className="text-center">
                        <div className="grid grid-cols-[1fr] gap-14 mt-10">
                            <h1>{params.categoria}</h1>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}