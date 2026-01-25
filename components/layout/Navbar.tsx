"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf, Globe2 } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang-kami" },
    { name: "Visi Misi", href: "#visi-misi" },
    { name: "Layanan", href: "#layanan" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-white p-1 rounded-full group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
            {/* <Leaf size={22} className="text-white" /> */}
            <Image src="/icon.png" alt="Logo" width={25} height={25} className="text-emerald-500" />
          </div>
          <span
            className={`font-black text-xl lg:text-2xl tracking-tighter uppercase transition-colors duration-300 ${
              isScrolled ? "text-emerald-900" : "text-white"
            }`}
          >
            Alpan <span className="text-emerald-500">Agro</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-xs lg:text-sm font-bold uppercase tracking-[0.15em] transition-colors ${
                  isScrolled ? "text-gray-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-gray-300/30 pl-8">
            <Link href="#kontak" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-bold uppercase text-[10px] lg:text-xs tracking-widest transition-all shadow-md active:scale-95">
              Hubungi Kami
            </Link>
            <button 
              className={`p-2.5 rounded-lg border transition-all active:scale-90 ${
                isScrolled 
                ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50" 
                : "border-white/50 text-white hover:bg-white/10"
              }`}
            >
              <Globe2 size={18} />
            </button>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={isScrolled ? "text-emerald-900" : "text-white"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-emerald-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[400px] border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-emerald-900 font-bold uppercase text-sm tracking-[0.2em] border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link href="#kontak" className="text-center bg-emerald-600 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg">
              Hubungi Kami
            </Link>
            <button className="flex items-center justify-center gap-2 border border-emerald-100 text-emerald-600 py-3 rounded-xl font-bold text-xs uppercase tracking-widest">
              <Globe2 size={18} /> Indonesia
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;