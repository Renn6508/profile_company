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
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // Tambahkan ini agar HP Android membaca icon PNG yang jernih
      {
        src: '/icon.png', // Next.js otomatis generate route ini jika file ada di app/
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png', 
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}