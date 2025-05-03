import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generate Captions & Hashtags - CaptionForge AI',
  description:
    'Upload your image and let CaptionForge AI generate viral, SEO-friendly captions and trending hashtags tailored to your content. Perfect for Instagram, Twitter, LinkedIn, and more.',
  keywords: [
    'generate captions',
    'AI hashtag generator',
    'caption tool',
    'social media tool',
    'Instagram caption generator',
    'AI content writer',
    'trending hashtags',
    'SEO captions',
    'caption AI',
    'caption generator',
  ],
  openGraph: {
    title: 'Generate Captions & Hashtags - CaptionForge AI',
    description:
      'Upload your image and let CaptionForge AI generate viral, SEO-friendly captions and trending hashtags tailored to your content.',
    url: 'https://caption-forge-ai.vercel.app/generate-caption',
    siteName: 'CaptionForge AI',
    images: [
      {
        url: 'https://caption-forge-ai.vercel.app/generate-caption/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CaptionForge AI - Generate Captions & Hashtags',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generate Captions & Hashtags - CaptionForge AI',
    description:
      'Upload your image and let CaptionForge AI generate viral, SEO-friendly captions and trending hashtags tailored to your content.',
    images: ['https://caption-forge-ai.vercel.app/generate-caption/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://caption-forge-ai.vercel.app/generate-caption',
  },
};

export default function GenerateCaptionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex-grow">{children}</main>;
}
