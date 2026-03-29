import { getSiteUrlString, siteConfig } from "@/app/_lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    description: siteConfig.description,
    url: getSiteUrlString(),
    jobTitle: "Writer and editor",
    address: {
      "@type": "PostalAddress",
      addressRegion: "NH",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
