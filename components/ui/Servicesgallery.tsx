"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Gunakan motion/react sesuai error sebelumnya

const services = [
  {
    id: 1,
    title: "Pengadaan Hasil Tani",
    desc: "Menjamin ketersediaan stok komoditas unggulan.",
    longDesc:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Pengolahan Modern",
    desc: "Proses seleksi dan packing standar tinggi.",
    longDesc:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image:
      "https://thumbs.dreamstime.com/b/image-depicts-modern-fruit-processing-facility-showcasing-automated-conveyor-belts-sorting-machines-workers-hygienic-373475566.jpg?w=992",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Distribusi Logistik",
    desc: "Pengiriman cepat menjaga kesegaran.",
    longDesc:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Kemitraan Petani",
    desc: "Memberdayakan komunitas lokal.",
    longDesc:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
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
              relative group overflow-hidden rounded-3xl shadow-lg shadow-emerald-400/20 cursor-pointer
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
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
        className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl z-10"
      >
        {/* 1. Tombol Close (Sticky/Absolute agar tidak hilang saat scroll) */}
        <button 
          onClick={() => setSelectedId(null)}
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          &times;
        </button>

        {/* 2. Area Gambar: shrink-0 penting agar gambar tidak tertekan teks */}
        <div className="w-full md:w-1/2 h-64 md:h-auto shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
          <img 
            src={selectedItem.image} 
            alt={selectedItem.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* 3. Area Konten: overflow-y-auto untuk teks yang panjang */}
        <div className="w-full md:w-1/2 flex flex-col overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4 leading-tight">
              {selectedItem.title}
            </h3>
            
            {/* Wrapper teks agar jarak antar paragraf rapi */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p className="font-semibold text-emerald-600/80">{selectedItem.desc}</p>
              
              {/* Simulasi deskripsi panjang */}
              <p>{selectedItem.longDesc}</p>
              
              {/* Tambahan informasi agar terlihat lebih detail */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Mengapa Memilih Layanan Ini?</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Standar operasional bersertifikat.</li>
                  <li>Monitoring real-time untuk setiap proses.</li>
                  <li>Dukungan tim ahli agribisnis berpengalaman.</li>
                </ul>
              </div>
            </div>

            {/* Footer Modal (Tetap di dalam scroll area agar tidak menutupi teks) */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <button className="w-full bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all hover:shadow-lg active:scale-95">
                Hubungi Kami
              </button>
            </div>
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
