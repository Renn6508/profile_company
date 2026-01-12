"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Gunakan motion/react sesuai error sebelumnya

const services = [
  {
    id: 1,
    title: "Pengadaan Hasil Tani",
    desc: "Menjamin ketersediaan stok komoditas unggulan.",
    longDesc:
      "Kami bekerja sama dengan lebih dari 500 petani lokal untuk memastikan pasokan jagung, padi, dan kedelai tetap terjaga sepanjang tahun dengan kualitas grade A.",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Pengolahan Modern",
    desc: "Proses seleksi dan packing standar tinggi.",
    longDesc:
      "Fasilitas pengolahan kami menggunakan mesin sortir otomatis untuk memastikan hanya hasil tani terbaik yang sampai ke tangan konsumen, lengkap dengan pengemasan vakum.",
    image:
      "https://thumbs.dreamstime.com/b/image-depicts-modern-fruit-processing-facility-showcasing-automated-conveyor-belts-sorting-machines-workers-hygienic-373475566.jpg?w=992",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Distribusi Logistik",
    desc: "Pengiriman cepat menjaga kesegaran.",
    longDesc:
      "Dengan armada berpendingin, kami menjamin rantai dingin (cold chain) tetap terjaga dari gudang hingga ke lokasi industri Anda dalam waktu kurang dari 24 jam.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Kemitraan Petani",
    desc: "Memberdayakan komunitas lokal.",
    longDesc:
      "Program pemberdayaan kami meliputi pemberian modal bibit, edukasi teknologi tani tepat guna, hingga jaminan pembelian hasil panen (off-taker).",
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1000",
    size: "md:col-span-1 md:row-span-1",
  },
];

const ServicesGallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Mengambil data item yang sedang dipilih
  const selectedItem = services.find((item) => item.id === selectedId);

  return (
    <div className="container mx-auto px-6">
      {/* Grid Kolase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
        {services.map((item) => (
          <motion.div
            layoutId={`card-${item.id}`} // Animasi transisi smooth
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`
              relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer
              h-[250px] md:h-full
              ${item.size} 
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Klik untuk detail
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl z-10"
            >
              <div className="flex flex-col md:flex-row">
                {/* Foto di Modal */}
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Konten di Modal */}
                <div className="md:w-1/2 p-8 relative">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-2xl font-bold"
                  >
                    &times;
                  </button>

                  <h3 className="text-2xl font-bold text-emerald-700 mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedItem.longDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesGallery;
