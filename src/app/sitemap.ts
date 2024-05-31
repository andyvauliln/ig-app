import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://histoverse.org/',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://histoverse.org/en',
          // de: 'https://histoverse.org/de',
        },
      },
    },
  ]
}