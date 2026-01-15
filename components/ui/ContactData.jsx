"use client";

import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';


const CardContact = ({ icon: Icon, label, value }) => (
  <div data-aos="fade-up" data-aos-delay="500" className="flex gap-4 items-start group p-2">
    <div className="bg-emerald-600 w-12 h-12 flex items-center justify-center rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-200 shrink-0">
      <Icon className="text-white w-6 h-6" />
    </div>
    <div className="flex flex-col min-w-0"> {/* min-w-0 mencegah teks panjang merusak grid */}
      <span className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-[0.15em] leading-none">
        {label}
      </span>
      <p className="text-sm font-semibold text-gray-800 mt-1">
        {value}
      </p>
    </div>
  </div>
);
export default function ContactList() {
  const contactList = [
    {
      icon: Phone,
      label: "Phone",
      value: "+62 822-7788-8936"
    },
    {
      icon: Mail,
      label: "Email",
      value: "cvalpanagrojaya@gmail.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "GRAND ALEXANDRIA AF 8 NOMOR 10, Desa/Kelurahan Damarsi, Kec.Buduran, Kab. Sidoarjo, Provinsi Jawa Timur"
    },
    {
      icon: Send,
      label: "Website",
      value: "https://alpanagrojaya.com"
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-8">
      {contactList.map((contact, index) => (
        <CardContact
          key={index}
          icon={contact.icon}
          label={contact.label}
          value={contact.value} />
      ))}
    </div>
  )
}