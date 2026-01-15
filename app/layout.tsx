// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "CV. Alpan Agro Jaya | Agripreneur & Agroindustri Terpercaya",
  description: "Penyedia sarana produksi pertanian dari hulu hingga hilir. Kami meningkatkan efisiensi produk industri hulu (petani) dan memberikan layanan terbaik bagi industri hilir.",
  keywords: ["pertanian", "agribisnis", "CV Alpan Agro Jaya", "agroindustri Indonesia", "hasil alam"],
  authors: [{ name: "Leoren", url: "https://github.com/Renn6508" }], // Berdasarkan profil kamu
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body className={`${montserrat.variable} font-sans antialiased text-secondary bg-white`}>
        {children}
      </body>
    </html>
  );
}