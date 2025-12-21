import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bac-redempcion-puntos",
    title: "Sistema de Redención de Puntos",
    description:
      "Desarrollo completo del flujo de redención de puntos para Banca en Línea y Banca Móvil de BAC. Sistema crítico que maneja transacciones de clientes en tiempo real.",
    image: "/images/projects/placeholder-1.jpg", // Change later
    tags: ["Angular", ".NET", "SQL Server", "Banking"],
    featured: true,
    github: undefined, // Private project
    demo: undefined,
  },
  {
    id: "bac-bloqueo-tarjetas",
    title: "Módulo de Bloqueo/Desbloqueo de Tarjetas",
    description:
      "Módulo de seguridad para que usuarios puedan bloquear y desbloquear sus tarjetas de crédito de manera instantánea desde la plataforma web.",
    image: "/images/projects/placeholder-2.jpg",
    tags: ["Angular", "TypeScript", "Security", "Banking"],
    featured: true,
    github: undefined,
    demo: undefined,
  },
  {
    id: "educacion-financiera",
    title: "Portal de Educación Financiera",
    description:
      "Diseño e implementación de sección educativa sobre el uso responsable de tarjetas de crédito, tasas de interés y mejores prácticas financieras.",
    image: "/images/projects/placeholder-3.jpg",
    tags: ["Angular", "UX/UI", "Content Management"],
    featured: true,
    github: undefined,
    demo: undefined,
  },
  // You can add more personal projects here later
];
