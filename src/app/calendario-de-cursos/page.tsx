"use client"

export default function CalendarioDeCursos() {
  return (
    <div>
      <div className="flex items-center justify-items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/revista.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-40">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] items-center">
                <div>
                  <iframe src='/docs/calendario25.pdf' style={{
                    width: '100%',
                    height: '100vh'
                  }} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
