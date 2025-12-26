import { projects } from "@/data/projects";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://el-seginy.me';

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed El-Seginy",
    "jobTitle": "Software Engineer",
    "description": "Passionate Java backend developer with 3+ years of experience building scalable enterprise applications using Spring Boot, PostgreSQL, and modern software architecture.",
    "url": baseUrl,
    "image": `${baseUrl}/images/me.jpg`,
    "sameAs": [
      "https://github.com/ahmed0elseginy",
      "https://linkedin.com/in/ahmed0elseginy",
      "https://x.com/ahmed0elseginy",
      "https://t.me/ahmed0elseginy"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "EG"
    },
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "Backend Development",
      "RESTful APIs",
      "PostgreSQL",
      "MySQL",
      "Microservices",
      "Software Architecture",
      "Clean Code",
      "SOLID Principles"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Educational Institution"
    }
  };

  // Portfolio/WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ahmed El-Seginy Portfolio",
    "url": baseUrl,
    "description": "Portfolio website showcasing projects, skills, and experience of Ahmed El-Seginy, a Java backend developer.",
    "author": {
      "@type": "Person",
      "name": "Ahmed El-Seginy"
    },
    "inLanguage": "en-US"
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ahmed El-Seginy - Software Development Services",
    "description": "Java backend development, Spring Boot applications, RESTful API design, enterprise software architecture, and database management services.",
    "provider": {
      "@type": "Person",
      "name": "Ahmed El-Seginy"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Egypt"
    },
    "serviceType": [
      "Backend Development",
      "API Development",
      "Software Architecture",
      "Database Design",
      "Enterprise Applications"
    ]
  };

  // Collection of Projects Schema
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Software Development Projects",
    "description": "A collection of software development projects by Ahmed El-Seginy",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "applicationCategory": project.category,
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}

