import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Mandie Morgan — Technical Product & Engineering Leader";
const description = "Mandie Morgan is a technical product leader specializing in complex problem discovery, enterprise integrations, AI-assisted analysis, and cross-functional solution design.";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:5173";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og.png`, width: 1730, height: 909, alt: "Mandie Morgan — Technical Product and Engineering Leader" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
