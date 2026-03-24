import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import { LayoutProvider } from "@/components/providers/LayoutProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const josefin = Josefin_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucid The Artistry | 3D Architectural Rendering — Vadodara",
    template: "%s | Lucid The Artistry",
  },
  description:
    "Premium 3D architectural rendering studio. We visualize residential, commercial and duplex projects with photorealistic renders, walkthroughs, and 360° virtual tours.",
  keywords: [
    "3D rendering Vadodara",
    "architectural rendering India",
    "residential rendering",
    "3D walkthrough Gujarat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body text-text-primary bg-bg">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
