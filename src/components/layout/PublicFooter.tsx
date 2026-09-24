'use client';

import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react';

export default function PublicFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200">
      {/* 1. Main Footer Content - White Section */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
          
          {/* Column 1: Brand & Platform Tagline (Single Line) */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Shikkhayon"
                className="h-14 w-auto object-contain shrink-0"
              />
              <div className="leading-tight">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#093824] block">
                  Shikkhayon
                </span>
                <span className="block text-[10px] sm:text-[11px] font-bold tracking-wider text-emerald-700 uppercase whitespace-nowrap">
                  ROOTED IN VALUES - RISING WITH KNOWLEDGE
                </span>
              </div>
            </div>

            <div className="pt-1 space-y-1">
              <p className="text-sm font-medium text-slate-800 leading-snug whitespace-nowrap">
                A unified platform for Parents, Students and Schools
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 italic whitespace-nowrap">
                .. A Brighter Tomorrow starts here ..
              </p>
            </div>
          </div>

          {/* Column 2: Get In Touch */}
          <div className="md:col-span-6 lg:col-span-3 space-y-3.5 md:border-l md:border-slate-200 md:pl-6">
            <h4 className="text-xs font-black tracking-wider uppercase text-slate-900">
              GET IN TOUCH
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#d97706] shrink-0" />
                <span>+91 9874 895 894</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#d97706] shrink-0" />
                <a href="mailto:shikkhayon.info@gmail.com" className="hover:text-emerald-800 transition">
                  shikkhayon.info@gmail.com
                </a>
              </div>
              
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#d97706] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Panpur - Kankinara, North 24 Parganas, West Bengal, PIN - 743126, India
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="md:col-span-4 lg:col-span-2 space-y-3.5 md:border-l md:border-slate-200 md:pl-6">
            <h4 className="text-xs font-black tracking-wider uppercase text-slate-900">
              FOLLOW US
            </h4>
            
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-7 w-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs shadow-sm hover:scale-110 transition"
              >
                f
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="h-7 w-7 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold text-xs shadow-sm hover:scale-110 transition"
              >
                P
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-7 w-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center font-bold text-[10px] shadow-sm hover:scale-110 transition"
              >
                in
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="h-7 w-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-[10px] shadow-sm hover:scale-110 transition"
              >
                ▶
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-[11px] shadow-sm hover:scale-110 transition"
              >
                𝕏
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <div className="w-7 h-0.5 bg-[#d97706]" />
              <span className="text-xs font-bold text-slate-700">/ shikkhayon</span>
            </div>
          </div>

          {/* Column 4: Scan to Chat QR Code */}
          <div className="md:col-span-4 lg:col-span-1 flex flex-col items-center justify-center md:border-l md:border-slate-200 md:pl-4">
            <div className="p-2 border-2 border-slate-900 rounded-2xl bg-white shadow-sm">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/919874895894"
                alt="Scan to Chat"
                className="h-20 w-20 object-contain rounded-lg"
              />
            </div>
            <span className="mt-2 text-[10px] font-black uppercase tracking-wider text-slate-900 text-center whitespace-nowrap">
              SCAN TO CHAT
            </span>
          </div>

          {/* Column 5: Other Important Links + "Go on top" Button */}
          <div className="md:col-span-4 lg:col-span-2 space-y-3 md:border-l md:border-slate-200 md:pl-6">
            <h4 className="text-xs font-black tracking-wider uppercase text-slate-900">
              OTHER IMPORTANT LINKS
            </h4>
            <ul className="space-y-1.5 text-xs font-medium text-slate-600 truncate">
              {Array.from({ length: 7 }).map((_, index) => (
                <li key={index} className="truncate">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#093824] hover:underline transition truncate block"
                  >
                    https://example.com
                  </a>
                </li>
              ))}
            </ul>

            {/* "Go on top" Button relocated directly beneath the links on the white section */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="bg-[#facc15] hover:bg-[#eab308] text-red-700 border-2 border-[#dc2626] rounded-full px-4 py-1.5 shadow-md transition transform hover:scale-105 flex items-center gap-1.5 group cursor-pointer text-xs font-black tracking-tight whitespace-nowrap"
              >
                <ChevronUp className="w-4 h-4 text-[#dc2626] stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
                <span>Go on top</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Bottom Dark Green Bar */}
      <div className="bg-[#09281e] text-white py-6 border-t-2 border-[#d97706]">
        <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black tracking-wider uppercase text-white">
              SIVVYA VENTURES
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-0.5">
              <div className="w-5 h-0.5 bg-[#d97706]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
                IDEAS. PURPOSE. IMPACT.
              </span>
              <div className="w-5 h-0.5 bg-[#d97706]" />
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm italic font-serif text-slate-200">
              Together - For a brighter tomorrow.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              © 2026 Sivvya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}