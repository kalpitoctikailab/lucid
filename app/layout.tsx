import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { LayoutProvider } from "@/components/providers/LayoutProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-outfit text-text-primary bg-bg">
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
