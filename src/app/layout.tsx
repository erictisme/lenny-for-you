import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: "Lenny, For You — Your Personalized Lenny's Newsletter Feed",
  description:
    "650 posts. 300 guests. Which ones matter for YOU? Tell me your situation and I'll curate the perfect reading list from Lenny's archive.",
  openGraph: {
    type: "website",
    title: "Lenny, For You — Your Personalized Lenny's Newsletter Feed",
    description:
      "650 posts. 300 guests. Which ones matter for YOU? Tell me your situation and I'll curate the perfect reading list from Lenny's archive.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenny, For You — Your Personalized Lenny's Newsletter Feed",
    description:
      "650 posts. 300 guests. Which ones matter for YOU? Tell me your situation and I'll curate the perfect reading list from Lenny's archive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spectral.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
