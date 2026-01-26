import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

const DOMAIN_URL = "https://alpan-agro-jaya.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),
  title: {
    default: "CV. Alpan Agro Jaya | Agripreneur & Agroindustri Terpercaya",
    template: "%s | CV. Alpan Agro Jaya"
  },
  description: "Penyedia sarana produksi pertanian dari hulu hingga hilir. Supplier pupuk, bibit, dan hasil alam terpercaya di Indonesia.",
  
  keywords: [
    "CV Alpan Agro Jaya", 
    "Agroindustri Indonesia", 
    "Supplier Pertanian", 
    "Jual Pupuk Murah", 
    "Distributor Bibit Pertanian", 
    "Agribisnis Jawa Timur", 
    "Jasa Pertanian Hulu Hilir",
    "Agripreneur",
    "pertanian", "agribisnis", 
    "CV Alpan Agro Jaya", 
    "agroindustri Indonesia", 
    "hasil alam", 
    "pupuk", 
    "bibit"
    
  ],

  // icons: {
  //   icon: '/favicon.ico', // Next.js akan otomatis mencari ini di folder public
  //   shortcut: '/favicon.ico',
  //   apple: '/favicon.ico', // Atau arahkan ke apple-touch-icon.png jika ada
  // },
  
  authors: [{ name: "Leoren", url: "https://github.com/Renn6508" }],
  
  alternates: {
    canonical: DOMAIN_URL,
  },

  openGraph: {
    title: "CV. Alpan Agro Jaya | Solusi Agribisnis Terpercaya",
    description: "Mitra terbaik pertanian Indonesia. Menyediakan pupuk, bibit, dan solusi agroindustri.",
    url: DOMAIN_URL,
    siteName: "CV. Alpan Agro Jaya",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Profil CV Alpan Agro Jaya",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CV. Alpan Agro Jaya",
    description: "Penyedia sarana produksi pertanian terpercaya.",
    images: ["/og-image.jpg"], 
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
    google: '6dx9cW0hvoa2say_q2HR9SrRd3ifrQeNW9uNIIRYXFo', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CV. Alpan Agro Jaya",
    "url": DOMAIN_URL,
    "logo": `${DOMAIN_URL}/favicon.ico`, 
    "description": "Penyedia sarana produksi pertanian dari hulu hingga hilir.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GRAND ALEXANDRIA AF 8 NOMOR 10, Desa/Kelurahan Damarsi, Kec.Buduran", 
      "addressLocality": "Sidoarjo", 
      "addressRegion": "Jawa Timur",
      "postalCode": "61252", 
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",      
      "telephone": "+62 822-7788-8936", 
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://instagram.com/cv_alpanagrojaya", 
      "https://facebook.com/alpanagrojaya"
    ]
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased text-secondary bg-white`}>
        
        {/* Next.js Script untuk JSON-LD (Cara paling aman) */}
        <Script
          id="schema-org"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        
        {children}
      </body>
    </html>
  );
}