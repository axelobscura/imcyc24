"use client";

export default function CalendarioProveedorDeEnsayosDeAptitud() {
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/proveedor.jpg')] bg-fixed bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <div className="bg-slate-900 bg-opacity-70 bg-blend-multiply w-full p-5 sm:pl-5 md:pl-5 lg:pl-8 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold mb-3">
                  Proveedor de Ensayos de Aptitud
                </h1>
              </div>
              <iframe src='/docs/Calendario_de_Programas_PEA_2025.pdf' style={{
                  width: '100%',
                  height: '100vh'
              }} />
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
