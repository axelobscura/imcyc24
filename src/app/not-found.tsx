export default function NotFound() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] bg-[url('/qs2.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
            <div className="mx-auto w-full max-w-screen-xl p-4 pt-90 sm:pt-150 pb-0 lg:py-40">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 pt-160">
                    <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-0 items-center justify-items-center mt-28">
                        <div className="bg-gray-900 bg-opacity-50 bg-blend-multiply w-full p-10 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50">
                            <h1 className="text-4xl font-bold text-white pt-0 sm:pl-50">
                                404 - Página no encontrada
                            </h1>
                            <p className="text-justify font-montserrat text-sm text-white pt-5">
                                La página que estás buscando no se encuentra. Por favor, verifica la dirección y vuelve a intentarlo.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}