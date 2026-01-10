import { Sprout, Users, Target, ShieldCheck, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center bg-[#064e3b] text-white">
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h2 className="text-accent-agro font-bold tracking-widest mb-4">CV. ALPAN AGRO JAYA</h2>
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Solusi Agribisnis <br /> <span className="text-emerald-400">Hulu ke Hilir</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Meningkatkan efisiensi produk pertanian lokal dengan sistem terintegrasi, 
              melayani kebutuhan dari penyediaan sarana hingga pemasaran produk.
            </p>
            <div className="flex gap-4">
              <button className="btn-agro">Layanan Kami</button>
              <button className="border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/10 uppercase text-sm">Visi & Misi</button>
            </div>
          </div>
        </div>
        
        {/* Background Overlay Decor */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-500/10 skew-x-12 transform translate-x-20" />
      </section>

      {/* VISI & MISI SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Visi */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-emerald-500">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-emerald-500" size={32} />
                <h2 className="text-2xl">Visi Kami</h2>
              </div>
              <p className="text-xl italic font-medium">
                Meningkatkan Efisiensi Produk Industri Hulu (Petani) dan Service yang memuaskan Industri Hilir (Client)
              </p>
            </div>

            {/* Misi */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-emerald-500" size={32} />
                <h2 className="text-2xl">Misi Kami</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Pengadaan Produksi, Pengolahan, hingga Pemasaran hasil Pertanian kepada Konsumen Akhir.",
                  "Memberikan Saran kepada Petani mengenai Teknologi dan Praktik Pertanian yang Baik.",
                  "Menganalisis Tren Pasar untuk membuat Strategi Pemasaran yang Tepat.",
                  "Memasarkan Produk ke Konsumen melalui berbagai saluran Daring maupun Luring."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER INFO - ASOSIASI */}
      <footer className="bg-[#064e3b] py-12 text-center text-white border-t border-emerald-800">
        <div className="container mx-auto px-6">
          <h3 className="text-emerald-400 mb-4">Asosiasi Hasil Alam dan Pangan</h3>
          <p className="text-sm text-gray-400">Bekerja sama langsung dengan asosiasi petani, nelayan, dan peternak dari Aceh hingga Papua.</p>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs">
            © 2026 CV. Alpan Agro Jaya. Developed by {`Leoren`}.
          </div>
        </div>
      </footer>
    </main>
  );
}