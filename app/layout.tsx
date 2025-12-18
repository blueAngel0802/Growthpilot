import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "GrowthPilot Demo | Full Stack SEO/SEM Agency Project",
  description:
    "A full stack portfolio demo for agency web development, SEO/SEM landing pages, analytics tracking, CMS content, and AI automation workflows.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
