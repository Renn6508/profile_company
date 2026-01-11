"use client";

import { useState } from "react";
import { Sprout, Factory, Shovel, ShoppingBag, Globe2 } from "lucide-react";

const services = [
  { icon: Shovel, title: "Hulu", desc: "Sarana" },
  { icon: Sprout, title: "Budidaya", desc: "Teknologi" },
  { icon: Factory, title: "Hilir", desc: "Hasil" },
  { icon: ShoppingBag, title: "Pasar", desc: "Niaga" },
  { icon: Globe2, title: "Jaringan", desc: "Nasional" },
];

export default function ServiceRibbon() {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  return (
    <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-30 px-2 md:px-4">
      <div className="container mx-auto max-w-5xl">
        <div 
          className="grid grid-cols-5 bg-white shadow-xl rounded-md md:rounded-lg overflow-hidden"
          onMouseLeave={() => setActiveIndex(2)}
        >
          {services.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center justify-center py-3 md:py-6 px-1 md:px-4 text-center transition-all duration-300 cursor-pointer group border-r last:border-0 border-gray-100
                  ${isActive 
                    ? "bg-[#064e3b] text-white scale-y-105 md:scale-y-110 shadow-lg z-10" 
                    : "bg-white text-[#064e3b] hover:bg-gray-50"
                  }`}
              >
                <item.icon 
                  size={16} 
                  className={`md:size-7 mb-1 md:mb-2 transition-transform duration-300 group-hover:-translate-y-0.5 
                    ${isActive ? "text-[#10b981]" : "text-[#10b981]"}`} 
                />
                
                <h3 className="font-extrabold uppercase text-[10px] md:text-[14px] tracking-tighter md:tracking-wider leading-none mb-0.5">
                  {item.title}
                </h3> 
                <p className={`hidden sm:block md:text-[10px] uppercase font-semibold leading-tight
                  ${isActive ? "text-gray-300" : "text-gray-500"}`}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}