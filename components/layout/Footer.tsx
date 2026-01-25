import { Leaf, Mail, MapPin, Phone, MessageCircle, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import ScrollToTop from "../ui/ScrollToTop";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#064e3b] pt-16 pb-8 text-white border-t border-emerald-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* KOLOM 1: BRAND & SOSMED */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white p-1 rounded-full">
                {/* <Leaf size={20} className="text-white" /> */}
                <Image src="/icon.png" alt="Logo" width={25} height={25} className="text-emerald-500" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">
                Alpan <span className="text-emerald-400">Agro</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Bekerja sama langsung dengan asosiasi petani, nelayan, dan peternak dari Aceh hingga Papua untuk efisiensi pangan nasional.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: QUICK LINKS */}
          <div className="md:pl-12">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Our Store</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm uppercase tracking-widest">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="#tentang-kami" className="hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="#visi-misi" className="hover:text-emerald-400 transition-colors">Visi Misi</Link></li>
              <li><Link href="#layanan" className="hover:text-emerald-400 transition-colors">Service</Link></li>
              <li><Link href="#kontak" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: CONTACT INFO */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Get In Touch</h4>
            <ul className="flex flex-col gap-5 text-gray-300 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-emerald-400 shrink-0" size={20} />
                <span>GRAND ALEXANDRIA AF 8 NOMOR 10, Desa/Kelurahan Damarsi, Kec.Buduran, Kab. Sidoarjo, Provinsi Jawa Timur</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-emerald-400 shrink-0" size={20} />
                <span>+62 822-7788-8936</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-emerald-400 shrink-0" size={20} />
                <span>cvalpanagrojaya@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Instagram className="text-emerald-400 shrink-0" size={20} />
                <span>cv_alpanagrojaya</span>
              </li>
      
            </ul>
          </div>

        </div>

        {/* COPYRIGHT BORDER */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
            Copyright © 2026 <span className="text-gray-400 font-bold">CV. Alpan Agro Jaya</span> | Developed by Leoren
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;