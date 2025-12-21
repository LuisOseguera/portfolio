import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Oseguera | Ingeniero en Ciencias de la Computación",
  description:
    "Portafolio profesional de Luis Alejandro Oseguera Osorto - Desarrollador Full-Stack especializado en desarrollo web y banca digital.",
  keywords: [
    "Luis Oseguera",
    "Desarrollador Full-Stack",
    "Ingeniero en Computación",
    "Honduras",
    "Angular",
    ".NET",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Luis Alejandro Oseguera Osorto" }],
  openGraph: {
    title: "Luis Oseguera | Ingeniero en Ciencias de la Computación",
    description: "Portafolio profesional de Luis Alejandro Oseguera Osorto",
    url: "https://luisoseguera.com",
    siteName: "Luis Oseguera Portfolio",
    locale: "es_HN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
