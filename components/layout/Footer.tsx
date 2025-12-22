import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs border-t border-gray-700 dark:border-gray-800"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm">
              © {currentYear} Luis Alejandro Oseguera Osorto
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-600">
              Desarrollado con Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
