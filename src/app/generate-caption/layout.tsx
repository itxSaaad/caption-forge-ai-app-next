import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generate Caption - CaptionForge AI',
  description:
    'Generate viral, SEO-friendly captions and hashtags for your videos with CaptionForge AI',
  keywords: [
    'video caption generator',
    'social media video captions',
    'AI video caption tool',
    'video content marketing',
  ],
  openGraph: {
    title: 'Generate Caption - CaptionForge AI',
    description:
      'Generate viral, SEO-friendly captions and hashtags for your videos with CaptionForge AI',
    url: 'https://caption-forge-ai.vercel.app/generate-caption',
    siteName: 'CaptionForge AI',
    images: [
      {
        url: 'https://caption-forge-ai.vercel.app/generate-caption/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CaptionForge AI Caption Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generate Caption - CaptionForge AI',
    description:
      'Generate viral, SEO-friendly captions and hashtags for your videos with CaptionForge AI',
    images: ['https://caption-forge-ai.vercel.app/generate-caption/twitter-image.png'],
  },
};

export default function GenerateCaptionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="container mx-auto px-4 py-8">{children}</section>;
}
