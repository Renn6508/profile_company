// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

// 1. Definisikan URL Production di sini (PENTING untuk OG Image)
const DOMAIN_URL = "https://cvalpanagrojaya.com"; // Ganti dengan domain aslimu

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff", // Bisa sesuaikan warna brand
};

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL), // Wajib ada di Next.js 13+
  title: {
    default: "CV. Alpan Agro Jaya | Agripreneur & Agroindustri Terpercaya",
    template: "%s | CV. Alpan Agro Jaya" // Berguna untuk halaman lain nanti
  },
  description: "Penyedia sarana produksi pertanian dari hulu hingga hilir. Kami meningkatkan efisiensi produk industri hulu (petani) dan memberikan layanan terbaik bagi industri hilir.",
  keywords: ["pertanian", "agribisnis", "CV Alpan Agro Jaya", "agroindustri Indonesia", "hasil alam", "pupuk", "bibit"],
  authors: [{ name: "Leoren", url: "https://github.com/Renn6508" }],
  
  openGraph: {
    title: "CV. Alpan Agro Jaya | Solusi Agribisnis Terpercaya",
    description: "Mitra terbaik pertanian Indonesia. Dari hulu ke hilir.",
    url: DOMAIN_URL,
    siteName: "CV. Alpan Agro Jaya",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: "CV Alpan Agro Jaya Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Alpan Agro Jaya",
    description: "Penyedia sarana produksi pertanian terpercaya.",
    images: ["/og-image.jpg"], // Menggunakan gambar yang sama
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GANTI_KODE_VERIFIKASI_DISINI', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Viewport dihapus dari sini karena sudah diexport di atas */}
      
      <body className={`${montserrat.variable} font-sans antialiased text-secondary bg-white`}>
        {/* Schema Markup untuk Bisnis (LocalBusiness/Organization) */}
        <Script id="schema-org" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CV. Alpan Agro Jaya",
              "url": "${DOMAIN_URL}",
              "logo": "${DOMAIN_URL}/logo.png",
              "description": "Penyedia sarana produksi pertanian dari hulu hingga hilir.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alamat Lengkap Perusahaan",
                "addressLocality": "Nama Kota",
                "addressRegion": "Jawa Timur",
                "postalCode": "KodePos",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-8xx-xxxx-xxxx",
                "contactType": "customer service"
              }
            }
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}