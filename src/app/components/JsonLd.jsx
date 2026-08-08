import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
  generateSoftwareAppJsonLd,
  generateFaqJsonLd,
  generateBreadcrumbJsonLd,
  generateSpeakableJsonLd,
  siteConfig,
} from "../lib/seo";

export default function JsonLd({ page = "home", breadcrumbs }) {
  const schemas = [
    generateOrganizationJsonLd(),
    generateWebsiteJsonLd(),
  ];

  if (page === "home") {
    schemas.push(generateFaqJsonLd());
    schemas.push(generateSoftwareAppJsonLd());
    schemas.push(generateSpeakableJsonLd(siteConfig.url));
  }

  if (page === "faq") {
    schemas.push(generateFaqJsonLd());
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbJsonLd(breadcrumbs));
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
