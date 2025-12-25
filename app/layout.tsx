import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luisoseguera.com"),
  title: {
    default: "Luis Oseguera | Ingeniero en Ciencias de la Computación",
    template: "%s | Luis Oseguera",
  },
  description:
    "Desarrollador Full-Stack con +2 años de experiencia en banca digital. Especializado en Angular, React, .NET, Java Spring Boot y desarrollo móvil. Basado en Tegucigalpa, Honduras.",
  keywords: [
    "Luis Oseguera",
    "Luis Alejandro Oseguera",
    "Desarrollador Full-Stack",
    "Ingeniero en Computación",
    "Programador Honduras",
    "Angular Developer",
    "React Developer",
    ".NET Developer",
    "Java Spring Boot",
    "Desarrollador BAC",
    "Frontend Developer Honduras",
    "Backend Developer Honduras",
    "Tegucigalpa Developer",
  ],
  authors: [
    { name: "Luis Alejandro Oseguera Osorto", url: "https://luisoseguera.com" },
  ],
  creator: "Luis Alejandro Oseguera Osorto",
  publisher: "Luis Alejandro Oseguera Osorto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: "https://luisoseguera.com",
    siteName: "Luis Oseguera - Portfolio",
    title: "Luis Oseguera | Ingeniero en Ciencias de la Computación",
    description:
      "Desarrollador Full-Stack especializado en desarrollo web y banca digital. +2 años de experiencia con Angular, React, .NET y Java Spring Boot.",
    images: [
      {
        url: "/og-image.jpg", // We'll create this later
        width: 1200,
        height: 630,
        alt: "Luis Oseguera - Desarrollador Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Oseguera | Ingeniero en Ciencias de la Computación",
    description:
      "Desarrollador Full-Stack especializado en desarrollo web y banca digital",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://luisoseguera.com",
  },
  verification: {
    google: "tu-codigo-de-verificacion-aqui", // Add this when you verify with Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
