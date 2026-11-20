import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const SITE_URL = "https://tgmgoethals.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Thomas Goethals · Full-Stack Engineer & Tech Lead",
  description:
    "Senior full-stack engineer and tech lead in Barcelona with twelve years of building web products. Founding engineer at CardNexus, previously tech lead at Kahoot!",
  authors: [{ name: "Thomas Goethals" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Thomas",
    lastName: "Goethals",
    locale: "en_US",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="cv"
      className={`${oswald.variable} ${openSans.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
