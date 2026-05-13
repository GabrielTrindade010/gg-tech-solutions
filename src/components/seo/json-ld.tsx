import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { absoluteUrl } from "@/utils/url";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: absoluteUrl("/assets/images/logo.jpeg"),
    sameAs: [
      "https://www.linkedin.com/company/gg-tech-solutions",
      "https://github.com/gg-tech-solutions",
      "https://www.instagram.com/ggtechsolutions",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contato@ggtechsolutions.com.br",
        areaServed: "BR",
        availableLanguage: ["Portuguese", "English"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/images/logo.jpeg"),
      },
    },
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
