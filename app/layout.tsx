import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Mandie Morgan — Lead Technical Product Manager";
const description = "Mandie Morgan is a lead technical product manager specializing in complex problem discovery, enterprise integrations, AI-assisted analysis, platform modernization, and cross-functional solution design.";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:5173";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og-v3.png`, width: 1731, height: 909, alt: "Mandie Morgan — Lead Technical Product Manager" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og-v3.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
