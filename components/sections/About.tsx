"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Shield } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Experiencia en Angular, React, .NET, Java Spring Boot y desarrollo móvil con Flutter",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description:
        "Diseño y gestión de bases de datos SQL Server, MySQL y PostgreSQL",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Implementación en AWS, flujos DevOps y sistemas basados en Linux",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description:
        "Implementación de normas NIST y auditorías de seguridad con Burp Suite",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ingeniero en Ciencias de la Computación
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Soy un desarrollador full-stack con más de 2 años de experiencia
                en el sector bancario, especializado en el desarrollo de
                plataformas web críticas y aplicaciones móviles.
              </p>
              <p>
                Actualmente trabajo en{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  BAC Latam Honduras
                </span>{" "}
                como Desarrollador QA, enfocado en ciberseguridad y
                aseguramiento de la calidad. Anteriormente, como Analista
                Programador, desarrollé sistemas de redención de puntos, módulos
                de seguridad para tarjetas de crédito y portales de educación
                financiera.
              </p>
              <p>
                Me apasiona crear soluciones tecnológicas eficientes, aprender
                nuevas tecnologías y contribuir al éxito de proyectos
                desafiantes. Tengo facilidad para el trabajo en equipo y un
                compromiso constante con la excelencia técnica.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      className="text-primary-600 dark:text-primary-400"
                      size={24}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
