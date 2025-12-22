"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/LuisOseguera",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url:
        process.env.NEXT_PUBLIC_LINKEDIN ||
        "https://www.linkedin.com/in/osegueraluis/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: `mailto:${
        process.env.NEXT_PUBLIC_EMAIL || "osegueraluis436@gmail.com"
      }`,
      icon: Mail,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>

      {/* Animated circles in background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-100 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-4000 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-600 font-medium mb-4">Hola, soy</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Luis Alejandro
            <br />
            <span className="text-primary-600">Oseguera Osorto</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ingeniero en Ciencias de la Computación
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-500 mb-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Desarrollador Full-Stack especializado en desarrollo web y banca
            digital
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MapPin size={18} />
            <span>Tegucigalpa, Honduras</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="lg" onClick={() => scrollToSection("#projects")}>
              Ver Proyectos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Contactar
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
