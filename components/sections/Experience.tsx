"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
            Experiencia Profesional
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software y tecnología
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* Company and position */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center ${
                          index % 2 === 0 ? "md:order-last" : ""
                        }`}
                      >
                        <Briefcase
                          className="text-primary-600 dark:text-primary-400"
                          size={20}
                        />
                      </div>
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div
                      className={`flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span>📍 {exp.location}</span>
                    </div>

                    {/* Description */}
                    <ul
                      className={`space-y-2 text-gray-600 dark:text-gray-300 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          {index % 2 === 0 ? (
                            <span className="inline-flex items-start gap-2 flex-row-reverse">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">
                                •
                              </span>
                              <span>{item}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-start gap-2">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">
                                •
                              </span>
                              <span>{item}</span>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Supervisor (if exists) */}
                    {exp.supervisor && (
                      <p
                        className={`text-xs text-gray-400 dark:text-gray-500 mt-3 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        {exp.supervisor}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
