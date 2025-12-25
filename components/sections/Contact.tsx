"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: process.env.NEXT_PUBLIC_EMAIL || "osegueraluis436@gmail.com",
      href: `mailto:${
        process.env.NEXT_PUBLIC_EMAIL || "osegueraluis436@gmail.com"
      }`,
      description: "Envíame un correo",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/osegueraluis",
      href:
        process.env.NEXT_PUBLIC_LINKEDIN ||
        "https://www.linkedin.com/in/osegueraluis/",
      description: "Conectemos en LinkedIn",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/LuisOseguera",
      href: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/LuisOseguera",
      description: "Revisa mi código",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: process.env.NEXT_PUBLIC_PHONE || "+504 8778-1543",
      href: `tel:${
        process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, "") || "+50487781543"
      }`,
      description: "Llámame o envía WhatsApp",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Tegucigalpa, Honduras",
      href: "https://www.google.com/maps/place/Tegucigalpa",
      description: "Basado en Honduras",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en
            contactarme
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/70 transition-colors">
                  <Icon
                    className="text-primary-600 dark:text-primary-400"
                    size={24}
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {method.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {method.description}
                </p>

                {/* Value */}
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium break-words">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Prefieres enviarme un mensaje directo?
          </p>
          <a
            href={`mailto:${
              process.env.NEXT_PUBLIC_EMAIL || "osegueraluis436@gmail.com"
            }?subject=Contacto desde luisoseguera.com`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200 font-medium"
          >
            <Mail size={20} />
            Enviar Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
