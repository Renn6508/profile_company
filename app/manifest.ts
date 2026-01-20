import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CV. Alpan Agro Jaya',
    short_name: 'Alpan Agro',
    description: 'Penyedia sarana produksi pertanian dari hulu hingga hilir',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#059669',
    icons: [
      {
        src: '/favicon.ico', // Pastikan file ini ada di folder public/favicon.ico
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}