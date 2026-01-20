import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Ganti domain sesuai domain kamu
  const baseUrl = 'https://alpan-agro-jaya.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Mencegah Google meng-index jalur API
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}