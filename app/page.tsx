import { Sprout, Users, Target, ShieldCheck, Globe2 } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import ServiceRibbon from "../components/section/ServiceRibbon";
import Stack from "../components/ui/Stack";

export default function Home() {
  return (
    <main className="overflow-x-hidden"> {/* Mencegah kebocoran layout ke samping */}
      <Navbar />
      
      {/* HERO SECTION */}
      {/* Gunakan min-h-screen agar fleksibel jika konten memanjang di mobile */}
      <section className="relative min-h-screen md:h-screen flex items-center text-white z-20 overflow-visible py-20 md:py-0">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/background.jpg"
            alt="Farm Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent opacity-90" />
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            {/* Ukuran teks adaptif: Kecil di HP, Besar di Desktop */}
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] mb-4 text-emerald-300 uppercase">
              CV. ALPAN AGRO JAYA
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white mb-6 leading-tight font-bold uppercase">
              Solusi Agribisnis <br className="hidden md:block" /> 
              <span className="text-emerald-400">Hulu ke Hilir</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-lg mb-8 max-w-2xl leading-relaxed">
              Meningkatkan efisiensi produk pertanian lokal dengan sistem terintegrasi,
              melayani kebutuhan dari penyediaan sarana hingga pemasaran produk.
            </p>
            
            {/* Tombol: Full width di HP, Auto di Desktop */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-all text-sm">
                Layanan Kami
              </button>
              <button className="border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/10 uppercase text-sm tracking-wider transition-all">
                Visi & Misi
              </button>
            </div>
          </div>
        </div>

        <ServiceRibbon />
      </section>

      {/* About section */}
      <section className="pt-48 md:pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 uppercase text-center">
            Tentang Kami
          </h2>
          <div className="flex items-center justify-center mb-8" style={{ width: 208, height: 208 }}>
            <Stack
              randomRotation
            />
          </div>
          <p className="text-gray-600 leading-relaxed text-center">
            CV. Alpan Agro Jaya adalah perusahaan yang bergerak di bidang agribisnis, dengan fokus pada pengadaan, pengolahan, dan pemasaran hasil pertanian kepada konsumen akhir. Kami berkomitmen untuk meningkatkan efisiensi produk pertanian lokal dengan sistem terintegrasi, serta memberikan layanan terbaik bagi industri hilir.
          </p>
        </div>
      </section>

      {/* VISI & MISI SECTION */}
      <section className="pt-48 md:pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            
            {/* Visi */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border-t-4 border-emerald-500">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-emerald-500" size={32} />
                <h2 className="text-xl md:text-2xl font-bold text-emerald-600 uppercase">Visi Kami</h2>
              </div>
              <p className="text-lg md:text-xl italic font-medium leading-relaxed">
                Meningkatkan Efisiensi Produk Industri Hulu (Petani) dan Service yang memuaskan Industri Hilir (Client)
              </p>
            </div>

            {/* Misi */}
            <div className="px-2 md:px-0">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-emerald-500" size={32} />
                <h2 className="text-xl md:text-2xl font-bold text-emerald-600 uppercase">Misi Kami</h2>
              </div>
              <ul className="space-y-4 text-sm md:text-base">
                {[
                  "Pengadaan Produksi, Pengolahan, hingga Pemasaran hasil Pertanian kepada Konsumen Akhir.",
                  "Memberikan Saran kepada Petani mengenai Teknologi dan Praktik Pertanian yang Baik.",
                  "Menganalisis Tren Pasar untuk membuat Strategi Pemasaran yang Tepat.",
                  "Memasarkan Produk ke Konsumen melalui berbagai saluran Daring maupun Luring."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#064e3b] py-12 text-center text-white border-t border-emerald-800">
        <div className="container mx-auto px-6">
          <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-sm">
            Asosiasi Hasil Alam dan Pangan
          </h3>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto mb-8">
            Bekerja sama langsung dengan asosiasi petani, nelayan, dan peternak dari Aceh hingga Papua.
          </p>
          <div className="pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest opacity-50">
            © 2026 CV. Alpan Agro Jaya. Developed by {`Leoren`}.
          </div>
        </div>
      </footer>
    </main>
  );
}