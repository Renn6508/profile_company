"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf, Globe2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Layanan", href: "#layanan" },
    { name: "Visi Misi", href: "#visi-misi" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#10b981] p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Leaf size={20} className="text-white" />
          </div>
          <span className={`font-extrabold text-xl tracking-tighter uppercase ${
            isScrolled ? "text-[#064e3b]" : "text-white"
          }`}>
            Alpan <span className="text-[#10b981]">Agro</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-3 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest hover:text-[#10b981] transition-colors ${
                isScrolled ? "text-[#4b5563]" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#10b981] hover:bg-[#059669] text-xs md:text-sm text-white px-4 py-2 rounded font-bold uppercase tracking-widest transition-all">
            Hubungi Kami
          </button>

          {/* language */}
          <button className="bg-[#10b981] hover:bg-[#059669] text-xs md:text-sm text-white px-4 py-2 rounded font-bold uppercase tracking-widest transition-all">
            <Globe2 size={20} className="text-white" />
          </button>
        </div>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={isScrolled ? "text-[#064e3b]" : "text-white"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-[#064e3b]" : "text-white"} />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden md:hidden ${
          isOpen ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#064e3b] font-bold uppercase text-sm tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#10b981] text-white py-3 rounded font-bold text-sm uppercase">
            Hubungi Kami
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;