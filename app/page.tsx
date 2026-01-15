import { Sprout, Users, Target, ShieldCheck, Globe2, Phone } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import ServiceRibbon from "../components/section/ServiceRibbon";
import ServicesGallery from "../components/ui/Servicesgallery";
import CardContact from "../components/ui/ContactData";
import AboutContent from "../components/ui/AboutContent";
import Footer from "../components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
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
              <Link href="#layanan" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-all text-sm">
                Layanan Kami
              </Link>
              <Link href="#visi-misi" className="border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/10 uppercase text-sm tracking-wider transition-all">
                Visi & Misi
              </Link>
            </div>
          </div>
        </div>

        <ServiceRibbon />
      </section>

      {/* About section */}
      <section id="tentang-kami" className="pt-48 md:pt-32 pb-20 bg-white">
      <AboutContent />
      </section>

      {/* VISI & MISI SECTION */}
      <section id="visi-misi" className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-emerald-500/50"></div>
              <span className="text-emerald-600 font-bold tracking-[0.3em] text-xs uppercase">
                Focus & Goals
              </span>
              <div className="w-8 h-[2px] bg-emerald-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              Visi & <span className="text-emerald-600">Misi Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-emerald-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 bg-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-emerald-200 relative overflow-hidden group">
              <Target className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500" size={180} />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-emerald-100">Visi Kami</h3>
                <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                  "Meningkatkan Efisiensi Produk Industri Hulu (Petani) dan Service yang memuaskan Industri Hilir (Client)"
                </p>
              </div>
            </div>

            {/* --- KARTU MISI (Dibuat Terang dengan Aksen List Berwarna) --- */}
            <div className="lg:col-span-7 bg-white border-2 border-emerald-400 rounded-3xl p-8 md:p-12 shadow-sm relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight">Misi Strategis</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { title: "Pengadaan", desc: "Produksi hingga pemasaran hasil pertanian ke konsumen." },
                  { title: "Edukasi", desc: "Saran teknologi dan praktik pertanian yang baik bagi petani." },
                  { title: "Analisis", desc: "Strategi pemasaran tepat berdasarkan tren pasar terkini." },
                  { title: "Pemasaran", desc: "Distribusi produk melalui saluran daring maupun luring." }
                ].map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-emerald-100 hover:border-emerald-500 transition-colors group">
                    <span className="absolute -left-[2px] top-0 h-0 w-[2px] bg-emerald-500 group-hover:h-full transition-all duration-300"></span>
                    <h4 className="font-bold text-emerald-600 text-sm uppercase mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="pt-48 md:pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-emerald-500/50"></div>
              <span className="text-emerald-600 font-bold tracking-[0.3em] text-xs uppercase">
                What We Do
              </span>
              <div className="w-8 h-[2px] bg-emerald-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              Layanan <span className="text-emerald-600">Unggulan</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-emerald-600 rounded-full"></div>
          </div>
          <ServicesGallery />
        </div>
      </section>

      {/* <section id="partnership" className="pt-48 md:pt-32 pb-20 bg-emerald-700"> 
       <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 text-white uppercase text-center">
            ─── Partnership ───
          </h2>
          
       </div>
      </section> */}

      <section id="kontak" className="pt-48 md:pt-32 pb-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-4 md:mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-[2px] bg-emerald-500/50"></div>
              <span className="text-emerald-600 font-bold tracking-[0.3em] text-xs uppercase">
                Get In Touch
              </span>
              <div className="w-8 h-[2px] bg-emerald-500/50"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
              Hubungi <span className="text-emerald-600">Tim Kami</span>
            </h2>
            <div className="mt-6 w-16 h-1 bg-emerald-600 rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center">

            {/* SISI KIRI: KARTU WHATSAPP */}
            <div className="flex flex-col gap-4 md:w-1/2 p-8 w-full">
              <a
                href="https://wa.me/6282277888936?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white p-10 rounded-3xl shadow-lg border border-emerald-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
              >
                {/* Dekorasi Background */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-50 rounded-full transition-transform group-hover:scale-150 duration-500"></div>

                {/* Icon WhatsApp */}
                <div className="relative z-10 bg-emerald-100 p-5 rounded-2xl mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-emerald-600 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-3.893-1.003L3 19.444l1.314-4.806a8.125 8.125 0 01-1.121-4.143c0-4.495 3.655-8.15 8.15-8.15a8.15 8.15 0 018.15 8.15c0 4.495-3.655 8.15-8.15 8.15m0-17.75C6.304 1.386 1.386 6.304 1.386 12.6c0 2.016.526 3.987 1.523 5.722L1 23l4.823-1.264a11.196 11.196 0 005.776 1.586h.005c6.215 0 11.272-5.057 11.272-11.272s-5.057-11.272-11.272-11.272" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Chat Kami di WhatsApp</h3>
                <p className="text-gray-500 mb-6">Respon cepat via pesan instan</p>

                <span className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold group-hover:bg-emerald-700 transition-colors">
                  Kirim Pesan Sekarang
                </span>
              </a>
            </div>
            <div className="flex flex-col md:w-1/2 p-8">
              <h2 className="text-xs md:text-sm lg:text-base font-bold mb-2 text-emerald-600 uppercase tracking-wider mt-5">Contact</h2>
              <div className="flex flex-col gap-2 items-start">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-emerald-600 uppercase">Get in Touch</h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Punya pertanyaan atau butuh bantuan lebih lanjut? Kami siap membantu Anda. Silakan hubungi kami melalui WhatsApp atau isi formulir yang tersedia. Tim kami akan segera merespons pesan Anda.
                </p>
              </div>
              <CardContact />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}