import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "@/app/_styles/globals.scss";
import { Toaster } from "react-hot-toast";
import { Modal } from "@/app/_components/Modal";
import { JsonLd } from "@/app/_components/JsonLd";
import { getSiteUrlString, siteConfig } from "@/app/_lib/site";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-serif",
});

const siteUrl = getSiteUrlString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Elle Rogers",
    "writer",
    "editor",
    "The Tanglefolk",
    "New Hampshire author",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImagePath,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerif.variable}>
        <JsonLd />
        <Toaster />

        <Modal>{children}</Modal>
      </body>
    </html>
  );
}
