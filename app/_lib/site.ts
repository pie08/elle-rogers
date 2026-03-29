/** Production: set NEXT_PUBLIC_SITE_URL to your canonical origin (e.g. https://ellerogers.com). */
export function getSiteUrlString(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Elle Rogers",
  description:
    "Elle Rogers is a writer and editor who lives in New Hampshire.",
  locale: "en_US",
  ogImagePath: "/images/hero-bg.jpg",
} as const;
