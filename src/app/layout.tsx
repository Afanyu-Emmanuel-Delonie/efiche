import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://efiche.africa'),
  title: {
    default: 'eFiche — Transforming Healthcare By Connecting Africa',
    template: '%s | eFiche',
  },
  description: 'eFiche is a health-tech platform that connects medical data between providers and patients across Africa — securely, efficiently, and at scale.',
  keywords: ['eFiche', 'healthcare Africa', 'EMR', 'electronic medical records', 'health tech', 'Rwanda', 'digital health'],
  authors: [{ name: 'eFiche', url: 'https://efiche.africa' }],
  creator: 'eFiche',
  icons: {
    icon: '/general/icon logo.png',
    shortcut: '/general/icon logo.png',
    apple: '/general/icon logo.png',
  },
  openGraph: {
    title: 'eFiche — Transforming Healthcare By Connecting Africa',
    description: 'eFiche is a health-tech platform that connects medical data between providers and patients across Africa.',
    url: 'https://efiche.africa',
    siteName: 'eFiche',
    images: [{ url: '/general/about.png', width: 1200, height: 630, alt: 'eFiche' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eFiche — Transforming Healthcare By Connecting Africa',
    description: 'eFiche is a health-tech platform that connects medical data between providers and patients across Africa.',
    images: ['/general/about.png'],
    creator: '@efiche',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
