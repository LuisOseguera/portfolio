export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luis Alejandro Oseguera Osorto",
    alternateName: "Luis Oseguera",
    url: "https://luisoseguera.com",
    image: "https://luisoseguera.com/og-image.jpg",
    jobTitle: "Ingeniero en Ciencias de la Computación",
    description:
      "Desarrollador Full-Stack especializado en desarrollo web y banca digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tegucigalpa",
      addressRegion: "Francisco Morazán",
      addressCountry: "HN",
    },
    email: "osegueraluis436@gmail.com",
    telephone: "+504-8778-1543",
    sameAs: [
      "https://www.linkedin.com/in/osegueraluis/",
      "https://github.com/LuisOseguera",
    ],
    worksFor: {
      "@type": "Organization",
      name: "BAC Latam Honduras",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad Católica de Honduras",
      location: "Tegucigalpa, Honduras",
    },
    knowsAbout: [
      "Angular",
      "React",
      "Next.js",
      ".NET",
      "C#",
      "Java",
      "Spring Boot",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Git",
      "Linux",
      "Cybersecurity",
      "Full-Stack Development",
      "Web Development",
      "Mobile Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
