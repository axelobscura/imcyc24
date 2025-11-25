"use client"
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import MenuLateral from "@/app/components/MenuLateral";
import BreadCrumbUser from "@/app/components/BreadCrumbUser";
import Script from 'next/script';

interface FlipBookButtonOptions {
    enabled?: boolean;
    vAlign?: string;
    hAlign?: string;
    background?: string;
}

interface FlipBookPage {
    title: string;
}

interface FlipBookOptions {
    pdfUrl: string;
    backgroundColor: string;
    viewMode: string;
    singlePageMode: boolean;
    pages: FlipBookPage[];
    btnToc?: FlipBookButtonOptions;
    btnSelect?: FlipBookButtonOptions;
    btnDownloadPages?: FlipBookButtonOptions;
    btnDownloadPdf?: FlipBookButtonOptions;
    btnPrint?: FlipBookButtonOptions;
    btnShare?: FlipBookButtonOptions;
    btnZoomIn?: FlipBookButtonOptions;
    btnZoomOut?: FlipBookButtonOptions;
    btnSound?: FlipBookButtonOptions;
    btnThumbs?: FlipBookButtonOptions;
    btnBookmark?: FlipBookButtonOptions;
    btnExpand?: FlipBookButtonOptions;
    btnAutoplay?: FlipBookButtonOptions;
    currentPage?: { hAlign: string };
    btnBackground?: string;
}

interface JQuery {
    flipBook(options: FlipBookOptions): JQuery;
}

interface JQueryStatic {
    (selector: string): JQuery;
    fn: {
        flipBook?: (options: FlipBookOptions) => JQuery;
    };
}

declare global {
    interface Window {
        $?: JQueryStatic;
    }
}

export default function Webinar() {
    const params = useParams();

    const initializeFlipbook = () => {
        // Wait a bit to ensure both scripts are fully loaded
        setTimeout(() => {
            if (typeof window !== 'undefined' && window.$ && window.$.fn && window.$.fn.flipBook) {
                window.$("#container").flipBook({
                    pdfUrl: "/pdf/presentacion-ejecutiva.pdf",
                    backgroundColor: 'transparent',
                    viewMode: '3d',
                    singlePageMode: true,
                    pages: [
                        { title: "Cover" },
                        { title: "" },
                        { title: "Page 3" },
                        { title: "" },
                        { title: "" },
                        { title: "" },
                        { title: "" },
                        { title: "End" },
                    ],
                    btnToc: { enabled: false },
                    btnSelect: { enabled: false },
                    btnDownloadPages: { enabled: false },
                    btnDownloadPdf: { enabled: false },
                    btnPrint: { enabled: false },
                    btnShare: { enabled: false },
                    btnZoomIn: { vAlign: 'top', hAlign: 'right', background: '#1f4382' },
                    btnZoomOut: { vAlign: 'top', hAlign: 'right', background: '#1f4382' },
                    btnSound: { vAlign: 'top', hAlign: 'right', background: '#1f4382' },
                    btnThumbs: { vAlign: 'top', hAlign: 'right', background: '#1f4382' },
                    btnBookmark: { enabled: false },
                    btnExpand: { vAlign: 'top', hAlign: 'right', background: '#1f4382' },
                    btnAutoplay: { vAlign: 'top', hAlign: 'right', background: '#1f4382' },
                    currentPage: { hAlign: 'center' },
                    btnBackground: 'rgb(35 63 139);'
                });
            } else {
                console.error('jQuery or flipBook not available');
            }
        }, 200);
    };

    useEffect(() => {
        initializeFlipbook()
    }, []);

    return (
        <div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://amci.webinarsenconcreto.com/images/contenido.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
                <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-0 row-start-2 items-center sm:items-start z-0">
                    <div className="grid grid-cols-[1fr] gap-14 mt-10">
                        <BreadCrumbUser params={{ ...params }} />
                    </div>
                    <div>
                        <div className="grid grid-cols-[1fr_3fr] gap-2 mt-5">
                            <div>
                                <MenuLateral seccion={() => { }} categoria={null} />
                            </div>
                            <div>
                                <div style={{ 'width': '100%', 'height': '90%', 'position': 'relative', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                    <div id="container"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Script
                src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // jQuery loaded, now load flipbook
                    const flipbookScript = document.createElement('script');
                    flipbookScript.src = '/js/flipbook.min.js';
                    flipbookScript.onload = initializeFlipbook;
                    document.body.appendChild(flipbookScript);
                }}
            />
        </div>
    );
}