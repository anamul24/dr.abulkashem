'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  Navigation, 
  ExternalLink,
  Plus,
  Minus,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface ContactAndMapProps {
  onOpenMessageModal: () => void;
}

/**
 * Direct Contact & Research Liaison Center Component.
 * Features institutional address at Jessore Sadar Kotwali zone, telephone,
 * email, interactive map preview, and message trigger.
 */
export const ContactAndMap: React.FC<ContactAndMapProps> = ({ onOpenMessageModal }) => {
  const [mapZoom, setMapZoom] = useState(1);

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 lg:py-20 bg-[#FDFBF7] dark:bg-[#0A130E] border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Liaison Info (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#8C6A38] dark:text-[#E7BC83] uppercase">
                সরাসরি যোগাযোগ ও লিয়াজোঁ
              </span>
              <h2 
                id="contact-heading"
                className="text-2xl sm:text-3xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 mt-1.5 mb-3"
              >
                প্রধান লিয়াজোঁ অফিস ও গবেষণা অনুষদ
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed mb-6">
                ফাউন্ডেশনের কেন্দ্রীয় গবেষণা সেল ও প্রশাসনিক কার্যক্রম পরিচালনার জন্য প্রধান লিয়াজোঁ অফিসে সরাসরি যোগাযোগ করতে পারেন:
              </p>

              {/* 3 Contact Info Blocks */}
              <div className="space-y-4">
                {/* 1. Address */}
                <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#F4F0E8]/50 dark:bg-[#121E17] border border-[#E5DFD3] dark:border-[#22362A]">
                  <div className="p-2 rounded-xs bg-[#0D5C3A] text-white shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1A2E40] dark:text-slate-100">
                      প্রধান কার্যালয় ঠিকানা
                    </h3>
                    <p className="text-xs text-[#52606D] dark:text-slate-300 mt-0.5 leading-relaxed">
                      যশোর সদর কোতোয়ালি থানার ৪০০ মিটার দক্ষিণে, শিক্ষা ফাউন্ডেশন ক্যাম্পাস, যশোর।
                    </p>
                  </div>
                </div>

                {/* 2. Hotline & WhatsApp */}
                <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#F4F0E8]/50 dark:bg-[#121E17] border border-[#E5DFD3] dark:border-[#22362A]">
                  <div className="p-2 rounded-xs bg-[#0D5C3A] text-white shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1A2E40] dark:text-slate-100">
                      হটলাইন ও হোয়াটসঅ্যাপ
                    </h3>
                    <p className="text-xs text-[#52606D] dark:text-slate-300 mt-0.5 font-medium">
                      ০১৭৯৮-৮৬৬৫৫৭, ০১৯১৮-১৮৬২৫৭
                    </p>
                  </div>
                </div>

                {/* 3. Official Email */}
                <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#F4F0E8]/50 dark:bg-[#121E17] border border-[#E5DFD3] dark:border-[#22362A]">
                  <div className="p-2 rounded-xs bg-[#0D5C3A] text-white shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1A2E40] dark:text-slate-100">
                      অফিসিয়াল ইমেইল
                    </h3>
                    <p className="text-xs text-[#52606D] dark:text-slate-300 mt-0.5 font-medium">
                      qualityeducation2008@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:01798866557"
                className="bg-[#004328] dark:bg-emerald-700 hover:bg-[#094229] dark:hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xs inline-flex items-center gap-2 shadow-xs transition-all hover:shadow-md cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-1 focus:ring-[#004328]"
                aria-label="সরাসরি কল করুন"
              >
                <Phone className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                <span>কল করুন</span>
              </a>

              <button
                onClick={onOpenMessageModal}
                className="bg-white dark:bg-[#15231A] hover:bg-[#F4F0E8] dark:hover:bg-[#1E2E24] text-[#1A2E40] dark:text-slate-200 border border-[#CBD5E1] dark:border-[#283E30] hover:border-[#1A2E40] text-sm font-semibold px-5 py-2.5 rounded-xs inline-flex items-center gap-2 transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-1 focus:ring-[#1A2E40]"
                aria-label="বার্তা পাঠানোর ফরম খুলুন"
              >
                <MessageSquare className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
                <span>বার্তা পাঠান</span>
              </button>
            </div>
          </div>

          {/* Right Column: Custom Cartographic Map (7 cols on lg) */}
          <div className="lg:col-span-7 h-80 sm:h-96 lg:h-auto min-h-[360px] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] bg-[#EAF2EC] dark:bg-[#0E1A13] overflow-hidden relative shadow-sm flex flex-col justify-between">
            {/* Map Visual / Stylized Vector Cartography of Jessore */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-90 dark:opacity-75">
              <svg 
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transform: `scale(${mapZoom})`, transformOrigin: 'center center' }}
                viewBox="0 0 800 500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="যশোর সদর মানচিত্র"
              >
                {/* Background Land */}
                <rect width="800" height="500" fill="#E8EFE9" className="dark:fill-[#121F17]" />
                
                {/* Rivers & Waterways (Bhairab River) */}
                <path d="M 0,220 C 150,210 260,260 420,240 C 580,220 700,280 800,270" stroke="#B8D7E8" strokeWidth="22" strokeLinecap="round" className="dark:stroke-[#1C3B47]" />
                <path d="M 0,220 C 150,210 260,260 420,240 C 580,220 700,280 800,270" stroke="#A2CCE0" strokeWidth="12" strokeLinecap="round" className="dark:stroke-[#255060]" />
                
                {/* Major Highways (N7, R750, Jessore Road) */}
                <path d="M 120,0 L 260,180 L 420,270 L 620,380 L 800,470" stroke="#FDE68A" strokeWidth="14" strokeLinecap="round" className="dark:stroke-[#5A4A1C]" />
                <path d="M 120,0 L 260,180 L 420,270 L 620,380 L 800,470" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" className="dark:stroke-[#B47816]" />
                
                <path d="M 400,0 L 420,270 L 430,500" stroke="#FDE68A" strokeWidth="12" strokeLinecap="round" className="dark:stroke-[#5A4A1C]" />
                <path d="M 400,0 L 420,270 L 430,500" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />

                <path d="M 0,380 L 300,340 L 420,270 L 750,140" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" className="dark:stroke-[#2D3E33]" />
                <path d="M 0,380 L 300,340 L 420,270 L 750,140" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" className="dark:stroke-[#455A4C]" />

                {/* Secondary Grid Lines */}
                <line x1="200" y1="100" x2="600" y2="120" stroke="#FFFFFF" strokeWidth="4" className="dark:stroke-[#1E2E23]" />
                <line x1="180" y1="320" x2="520" y2="440" stroke="#FFFFFF" strokeWidth="4" className="dark:stroke-[#1E2E23]" />
                <line x1="320" y1="180" x2="350" y2="350" stroke="#FFFFFF" strokeWidth="5" className="dark:stroke-[#1E2E23]" />

                {/* Regional Sector Polygons / Parks */}
                <rect x="230" y="130" width="90" height="60" rx="10" fill="#D1E7DD" opacity="0.8" className="dark:fill-[#1B3626]" />
                <text x="240" y="165" fill="#0D5C3A" fontSize="11" fontWeight="bold" fontFamily="system-ui" className="dark:fill-emerald-300">যশোর বিমানবন্দর</text>

                <rect x="470" y="70" width="120" height="50" rx="8" fill="#D1E7DD" opacity="0.7" className="dark:fill-[#1B3626]" />
                <text x="480" y="100" fill="#1A2E40" fontSize="10" fontWeight="bold" fontFamily="system-ui" className="dark:fill-slate-200">Jessore IT Park</text>

                <rect x="520" y="320" width="130" height="70" rx="8" fill="#D1E7DD" opacity="0.7" className="dark:fill-[#1B3626]" />
                <text x="530" y="360" fill="#1A2E40" fontSize="10" fontWeight="bold" fontFamily="system-ui" className="dark:fill-slate-200">রাজারহাট বাজার</text>

                {/* Town Area Labels */}
                <circle cx="270" cy="190" r="4" fill="#3B82F6" />
                <text x="280" y="195" fill="#334155" fontSize="12" fontWeight="600" fontFamily="system-ui" className="dark:fill-slate-300">আরবপুর</text>

                <circle cx="435" cy="225" r="4" fill="#3B82F6" />
                <text x="445" y="230" fill="#1E293B" fontSize="13" fontWeight="bold" fontFamily="system-ui" className="dark:fill-slate-100">যশোর সদর</text>

                <circle cx="560" cy="270" r="4" fill="#3B82F6" />
                <text x="570" y="275" fill="#334155" fontSize="11" fontWeight="600" fontFamily="system-ui" className="dark:fill-slate-300">বালিয়াডাঙ্গা</text>

                <circle cx="360" cy="380" r="4" fill="#3B82F6" />
                <text x="370" y="385" fill="#334155" fontSize="11" fontWeight="600" fontFamily="system-ui" className="dark:fill-slate-300">মাহিশিয়া</text>

                <circle cx="670" cy="370" r="4" fill="#3B82F6" />
                <text x="680" y="375" fill="#334155" fontSize="11" fontWeight="600" fontFamily="system-ui" className="dark:fill-slate-300">চৌলিয়া</text>

                {/* Center Foundation Campus Pin Marker */}
                <g transform="translate(415, 275)">
                  {/* Outer pulse */}
                  <circle cx="0" cy="0" r="18" fill="#0D5C3A" opacity="0.25" />
                  <circle cx="0" cy="0" r="12" fill="#0D5C3A" opacity="0.4" />
                  {/* Pin */}
                  <path d="M 0,-24 C -10,-24 -16,-16 -16,-6 C -16,8 0,24 0,24 C 0,24 16,8 16,-6 C 16,-16 10,-24 0,-24 Z" fill="#004328" stroke="#FFFFFF" strokeWidth="2.5" />
                  <circle cx="0" cy="-7" r="5.5" fill="#E7BC83" />
                </g>
              </svg>
            </div>

            {/* Top Bar on Map: Location Name & External Map Link */}
            <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
              <div className="bg-white/95 dark:bg-[#121E17]/95 backdrop-blur-xs px-3 py-1.5 rounded-md border border-[#CBD5E1] dark:border-[#283E30] shadow-xs text-xs">
                <span className="font-bold text-[#0D5C3A] dark:text-emerald-400 block">যশোর সদর কোতোয়ালি লিয়াজোঁ জোন</span>
                <span className="text-[11px] text-[#52606D] dark:text-slate-300">শিক্ষা ফাউন্ডেশন ও গবেষণা ক্যাম্পাস</span>
              </div>

              {/* Map Zoom Controls */}
              <div className="flex flex-col gap-1 bg-white/95 dark:bg-[#121E17]/95 backdrop-blur-xs p-1 rounded-md border border-[#CBD5E1] dark:border-[#283E30] shadow-xs">
                <button
                  onClick={() => setMapZoom((prev) => Math.min(prev + 0.2, 1.8))}
                  className="w-7 h-7 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#F4F0E8] dark:hover:bg-[#1A2C21] rounded-xs transition-colors cursor-pointer"
                  title="জুম ইন"
                  aria-label="মানচিত্র জুম ইন করুন"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setMapZoom((prev) => Math.max(prev - 0.2, 0.8))}
                  className="w-7 h-7 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#F4F0E8] dark:hover:bg-[#1A2C21] rounded-xs transition-colors cursor-pointer"
                  title="জুম আউট"
                  aria-label="মানচিত্র জুম আউট করুন"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Bar on Map: Location Pin Summary */}
            <div className="relative z-10 p-3 sm:p-4 bg-white/95 dark:bg-[#121E17]/95 backdrop-blur-xs border-t border-[#CBD5E1] dark:border-[#283E30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0D5C3A] dark:bg-emerald-400 animate-ping shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#1A2E40] dark:text-slate-100">
                  যশোর কোতোয়ালি প্রশাসনিক জোন | শিক্ষা ফাউন্ডেশন লিয়াজোঁ ক্যাম্পাস
                </span>
              </div>

              <a
                href="https://maps.google.com/?q=Jessore+Kotwali,Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0D5C3A] dark:text-emerald-400 hover:text-[#094229] dark:hover:text-emerald-300 inline-flex items-center gap-1.5 self-end sm:self-center bg-[#E8F3ED] dark:bg-[#1A2E22] hover:bg-[#C5E1D1] dark:hover:bg-[#233F2E] px-2.5 py-1 rounded-xs transition-colors"
                aria-label="গুগল ম্যাপে লোকেশনটি দেখুন (নতুন উইন্ডো)"
              >
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>ম্যাপে দেখুন</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
