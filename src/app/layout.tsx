import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://victorgotfrid.com"),
  title: "Victor Gotfrid — Product & Web Designer",
  description: "Portfólio de Victor Gotfrid. Design de produto, interfaces no Figma, engenharia de software full-stack e direção de arte.",
  keywords: [
    "Product Designer",
    "Web Designer",
    "Design Engineer",
    "Creative Technologist",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Figma",
    "Three.js",
    "Victor Gotfrid"
  ],
  authors: [{ name: "Victor Gotfrid", url: "https://github.com/victorgrcabral" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Victor Gotfrid — Product & Web Designer",
    description: "Bridging full-stack software engineering with high-impact art direction and product design.",
    url: "https://victorgotfrid.com",
    siteName: "Victor Gotfrid — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Victor Gotfrid — Product & Web Designer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Gotfrid — Product & Web Designer",
    description: "Bridging full-stack software engineering with high-impact art direction and product design.",
    images: ["/og-image.png"],
    creator: "@victorgrcabral",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${jetbrainsMono.variable} dark antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,600,500,400&f[]=general-sans@700,600,500,400,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#05181D] text-[#F7F7F8] selection:bg-[#73D1E0] selection:text-[#05181D]">
        {children}
      </body>
    </html>
  );
}
