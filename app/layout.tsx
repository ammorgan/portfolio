import type { Metadata } from "next";
import "./globals.css";

const title = "Mandie Morgan — Lead Technical Product Manager";
const description = "Mandie Morgan is a lead technical product manager who turns complex cross-system problems into clear product direction, delivery-ready scope, measurable outcomes, and human-reviewed AI-assisted workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mandiemorgan.dev"),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, siteName: "Mandie Morgan", type: "website", images: [{ url: "/mandie-morgan-social-october-2026.png", width: 1200, height: 630, type: "image/png", alt: "Mandie Morgan — I set product direction and connect strategy to delivery." }] },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/mandie-morgan-social-october-2026.png", alt: "Mandie Morgan — I set product direction and connect strategy to delivery." }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
