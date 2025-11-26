import "react-image-gallery/styles/css/image-gallery.css";
import { UserProvider } from "../context/UserContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PANEL DE USUARIO - Instituto Mexicano del Cemento y del Concreto A.C.",
    description: "El Instituto Mexicano del Cemento y del Concreto A.C. es una organización sin fines de lucro dedicada a promover el uso óptimo del cemento y del concreto en la construcción, contribuyendo a la mejora del desempeño profesional, el desarrollo industrial y los beneficios económicos para la sociedad.",
};

export default function UsuariosLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
}
