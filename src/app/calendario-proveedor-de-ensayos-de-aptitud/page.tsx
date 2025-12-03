"use client";

export default function CalendarioProveedorDeEnsayosDeAptitud() {
  return (
    <div>
      <div className={`flex items-center justify-items-center min-h-screen p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/proveedor.jpg')] bg-fixed bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat`}>
      <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full text-white">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-5 items-start justify-items-stretch pt-20 w-full">
            <div>
              <iframe src='/docs/Calendario_de_Programas_PEA_2026.pdf' style={{
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
