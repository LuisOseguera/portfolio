"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { skills } from "@/lib/data/skills";
import { Skill } from "@/types";

export default function Skills() {
  const categories = {
    frontend: { name: "Frontend", icon: Code2, color: "blue" },
    backend: { name: "Backend", icon: Database, color: "green" },
    database: { name: "Bases de Datos", icon: Database, color: "purple" },
    cloud: { name: "Cloud & DevOps", icon: Cloud, color: "cyan" },
    tools: { name: "Herramientas", icon: Wrench, color: "orange" },
  };

  const groupedSkills = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    database: skills.filter((s) => s.category === "database"),
    cloud: skills.filter((s) => s.category === "cloud"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que he trabajado a lo largo de mi
            carrera
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(
            ([key, categorySkills], categoryIndex) => {
              const category = categories[key as keyof typeof categories];
              const Icon = category.icon;

              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={key}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                      <Icon
                        className="text-primary-600 dark:text-primary-400"
                        size={20}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill: Skill, index: number) => (
                      <motion.div
                        key={skill.name}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + index * 0.05,
                        }}
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                          {skill.experience}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
