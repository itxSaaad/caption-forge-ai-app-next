import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caption-forge-ai.vercel.app';

  const pages = [
    {
      path: '',
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      path: '/generate-caption',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/pricing',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/privacy',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      path: '/terms',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      path: '/cookies',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return pages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
