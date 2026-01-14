// components/ui/AboutContent.tsx
import Stack from "./Stack";

export default function AboutContent() {
    return (

        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-8 md:mb-14">
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-[2px] bg-emerald-500/50"></div>
                    <span className="text-emerald-600 font-bold tracking-[0.3em] text-xs uppercase">
                        Who We Are
                    </span>
                    <div className="w-8 h-[2px] bg-emerald-500/50"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
                    Tentang <span className="text-emerald-600">Kami</span>
                </h2>
                <div className="mt-6 w-16 h-1 bg-emerald-600 rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
                {/* Sisi Kiri: Stack Component */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="w-full max-w-[380px] aspect-square relative">
                        {/* Frame tipis dekoratif agar Stack tidak terlalu polos */}
                        <div className="absolute inset-0 border-2 border-emerald-100 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                        <Stack
                            autoplay={true}
                            autoplayDelay={4000}
                            randomRotation={true}
                        />
                    </div>
                </div>

                {/* Sisi Kanan: Deskripsi Teks */}
                <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase">
                        Membangun Ekosistem <span className="text-emerald-600">Pertanian Terintegrasi</span>
                    </h3>
                    <div className="space-y-6 ">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            <span className="font-bold text-emerald-700">CV. Alpan Agro Jaya</span> adalah perusahaan yang bergerak di bidang agribisnis,
                            dengan fokus pada pengadaan, pengolahan, dan pemasaran hasil pertanian
                            kepada konsumen akhir.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Kami berkomitmen untuk meningkatkan efisiensi produk pertanian lokal dengan sistem terintegrasi, serta memberikan layanan terbaik bagi industri hilir melalui standarisasi kualitas yang ketat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {[
                            { title: "Pengadaan Tepat", desc: "Sumber pertanian pilihan." },
                            { title: "Pengolahan Modern", desc: "Standar kualitas tinggi." },
                            { title: "Pemasaran Luas", desc: "Jaringan distribusi efisien." },
                            { title: "Integrasi Hulu-Hilir", desc: "Sistem yang terpadu." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                                    <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-800">{item.title}</h5>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Aksen Statistik Sederhana */}
                    <div className="grid grid-cols-2 gap-6 mt-4 border-t border-gray-100">
                        <div>
                            <p className="text-3xl font-bold text-emerald-600">100%</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Produk Lokal</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-emerald-600">Aceh-Papua</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Jangkauan Luas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}