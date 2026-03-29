import { getSiteUrlString, siteConfig } from "@/app/_lib/site";

const TANGLEFOLK_DESCRIPTION =
  "From Santa's sleigh to the Tooth Fairy's wings, from the Easter Bunny's hop to Jack Frost's sparkling touch, childhood is full of magical visitors. Among them are the Tanglefolk—tiny forest people who leave tangle kisses in a child's hair as a thank-you. Each night, the Tanglefolk gather the strands children naturally shed and spin them into twinkling thread for tiny hats, coats, and dresses. Morning bead head? Not an issue. It's a sprinkle of magic, proof that tiny weavers visited while your child dreamt.";

const AMAZON_TANGLEFOLK_URL = "https://www.amazon.com/dp/B0GV1SHVPR";
const BN_TANGLEFOLK_URL =
  "https://www.barnesandnoble.com/w/the-tanglefolk-elle-saoirse-rogers/1149778921?ean=9798822985858";

export function JsonLd() {
  const base = getSiteUrlString();
  const personId = `${base}/#about`;
  const bookId = `${base}/#tanglefolk`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: "Elle Saoirse Rogers",
        description: siteConfig.description,
        url: base,
        jobTitle: "Writer and editor",
        address: {
          "@type": "PostalAddress",
          addressRegion: "NH",
          addressCountry: "US",
        },
      },
      {
        "@type": "Book",
        "@id": bookId,
        name: "The Tanglefolk",
        author: { "@id": personId },
        description: TANGLEFOLK_DESCRIPTION,
        image: `${base}/images/tanglefolk.jpeg`,
        isbn: "9798822985858",
        url: `${base}/#tanglefolk`,
        offers: [
          {
            "@type": "Offer",
            url: AMAZON_TANGLEFOLK_URL,
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Amazon" },
          },
          {
            "@type": "Offer",
            url: BN_TANGLEFOLK_URL,
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Barnes & Noble" },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
