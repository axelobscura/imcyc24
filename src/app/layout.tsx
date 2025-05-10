import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import localFont from "next/font/local";
import TopBar from "./components/TopBar";
import Membresias from "./components/Membresias";
import Footer from "./components/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Instituto Mexicano del Cemento y del Concreto A.C.",
  description: "El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-7SERF2HH4M" />
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7SERF2HH4M"
        />

        <script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7SERF2HH4M');
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar/>
        {children}
        <Membresias />
        <Footer/>
      </body>
    </html>
  );
}
