import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Gotfrid — Product & Web Designer",
  description: "Portfólio de Victor Gotfrid. Design de produto, interfaces no Figma, engenharia de software full-stack e direção de arte.",
  keywords: ["Product Designer", "Web Designer", "Creative Technologist", "React", "Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "Figma", "Victor Gotfrid"],
  authors: [{ name: "Victor Gotfrid", url: "https://github.com/victorgrcabral" }],
  openGraph: {
    title: "Victor Gotfrid — Product & Web Designer",
    description: "Bridging full-stack software engineering with high-impact art direction and product design.",
    type: "website",
    locale: "pt_BR",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <body className="min-h-screen bg-[#05181D] text-[#F7F7F8] selection:bg-[#73D1E0] selection:text-[#05181D]">
        {children}
      </body>
    </html>
  );
}
