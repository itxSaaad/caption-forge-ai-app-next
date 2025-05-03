import { GoogleAnalytics } from '@next/third-parties/google';

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
    'Generate engaging, SEO-friendly captions and trending hashtags for your social media posts in seconds. Powered by advanced AI technology.',
  keywords: [
    'AI caption generator',
    'social media captions',
    'hashtag generator',
    'SEO captions',
    'viral captions',
    'content marketing',
    'Instagram captions',
    'Twitter captions',
    'Facebook captions',
    'CaptionForge',
  ],
  openGraph: {
    title: 'CaptionForge - AI Social Media Caption Generator',
    description:
      'Generate engaging, SEO-friendly captions and trending hashtags for your social media posts in seconds. Powered by advanced AI technology.',
    url: 'https://caption-forge-ai.vercel.app/',
    siteName: 'CaptionForge',
    images: [
      {
        url: 'https://caption-forge-ai.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CaptionForge AI - Social Media Caption Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaptionForge - AI Social Media Caption Generator',
    description:
      'Generate engaging, SEO-friendly captions and trending hashtags for your social media posts in seconds. Powered by advanced AI technology.',
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
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
