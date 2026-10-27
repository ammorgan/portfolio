import type { Metadata } from "next";
import "./globals.css";

const title = "Mandie Morgan — Lead Technical Product Manager";
const description = "Mandie Morgan is a lead technical product manager who turns complex cross-system problems into clear product direction, delivery-ready scope, measurable outcomes, and human-reviewed AI-assisted workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mandiemorgan.dev"),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, type: "website", images: [{ url: "/og-v3.png", width: 1731, height: 909, alt: "Mandie Morgan — Lead Technical Product Manager" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-v3.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
