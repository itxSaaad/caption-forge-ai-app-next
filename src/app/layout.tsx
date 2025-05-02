import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CaptionForge - AI Social Media Caption Generator',
  description:
    'Generate viral, SEO-friendly captions and hashtags for your images using AI in one-click.',
  keywords: [
    'caption generator',
    'social media captions',
    'AI caption tool',
    'hashtag generator',
    'content marketing',
  ],
  openGraph: {
    title: 'CaptionForge AI',
    description:
      'Generate viral, SEO-friendly captions and hashtags from your images using AI in one-click.',
    url: 'https://caption-forge-ai.vercel.app',
    siteName: 'CaptionForge AI',
    images: [
      {
        url: 'https://caption-forge-ai.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CaptionForge AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaptionForge AI',
    description:
      'Generate viral, SEO-friendly captions and hashtags from your images using AI in one-click.',
    images: ['https://caption-forge-ai.vercel.app/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
