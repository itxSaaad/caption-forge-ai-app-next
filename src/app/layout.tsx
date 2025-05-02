import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CaptionForge - AI Social Media Caption Generator',
  description:
    'Generate viral, SEO-friendly captions and hashtags for your images using AI in one-click.',
  keywords: [
    'AI',
    'caption generator',
    'social media',
    'hashtags',
    'image captioning',
    'SEO',
    'viral content',
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
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
