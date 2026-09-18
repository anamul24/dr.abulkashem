'use client';

import React from 'react';
import { 
  CheckCircle2, 
  ArrowDown, 
  UserPlus, 
  ShieldCheck, 
  Award, 
  Network, 
  Quote, 
  Calendar,
  Landmark,
  Image as ImageIcon
} from 'lucide-react';

interface HeroProps {
  onOpenMembershipModal: () => void;
}

/**
 * Hero Section Component for Dr. Abul Kashem Education Foundation.
 * Displays national credential badge, mission statement, primary CTAs,
 * foundational values, and the iconic archival memory card with historical quote.
 */
export const Hero: React.FC<HeroProps> = ({ onOpenMembershipModal }) => {
  return (
    <section 
      id="home" 
      className="relative bg-[#FDFBF7] dark:bg-[#0A130E] py-8 sm:py-12 lg:py-16 border-b border-[#E5DFD3] dark:border-[#1E2D24] overflow-hidden transition-colors duration-200"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background watermarks */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E8F3ED]/60 dark:bg-[#0E2E1F]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#F4F0E8] dark:bg-[#15231A]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Mission Narrative & Action CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* National Credential Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-[#E8F3ED] dark:bg-[#12241A] text-[#0D5C3A] dark:text-emerald-300 px-3.5 py-1.5 rounded-full border border-[#C5E1D1] dark:border-emerald-800/60 text-xs sm:text-sm font-semibold shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
              <span>বাঙালির একটি জাতীয় শিক্ষা ও গবেষণা প্রতিষ্ঠান</span>
            </div>

            {/* Main Title Heading */}
            <div className="space-y-1">
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 leading-[1.25] tracking-tight"
              >
                ডা. আবুল কাশেম
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif-bn text-[#1A2E40] dark:text-slate-100 tracking-tight">
                শিক্ষা ফাউন্ডেশন
              </p>
            </div>

            {/* Mission Statement Paragraph */}
            <p className="text-base sm:text-lg text-[#333E48] dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              মেধা, নৈতিকতা ও তৃণমূল শিক্ষার মানোন্নয়নে নিবেদিত একটি অগ্রণী সামাজিক গবেষণা উদ্যোগ। গ্রামীণ শহীদ মিনারের পাদদেশ থেকে শুরু হওয়া এই যাত্রা আজ দেশের ৫টি জেলায় ১৯টি গণপাঠাগার, ৪টি যুব সংগঠন ও শিক্ষা জাদুঘরের এক মহতী নেটওয়ার্ক।
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* History & Timeline CTA */}
              <a
                href="#timeline"
                className="bg-[#004328] dark:bg-[#0E5B37] hover:bg-[#094229] dark:hover:bg-[#0b482b] text-white px-5 py-3 rounded-xs font-medium text-sm sm:text-base inline-flex items-center gap-2 shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#004328]"
                aria-label="ফাউন্ডেশনের ইতিহাস ও কর্মকাণ্ড বিভাগে যান"
              >
                <span>ইতিহাস ও কর্মকাণ্ড</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Membership Application CTA */}
              <button
                onClick={onOpenMembershipModal}
                className="bg-transparent hover:bg-[#F4F0E8] dark:hover:bg-[#15231A] text-[#1A2E40] dark:text-slate-200 border border-[#CBD5E1] dark:border-[#22362A] hover:border-[#1A2E40] dark:hover:border-emerald-700 px-5 py-3 rounded-xs font-medium text-sm sm:text-base inline-flex items-center gap-2 transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#1A2E40]"
                aria-label="আজীবন সদস্যপদ আবেদন ফরম খুলুন"
              >
                <UserPlus className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
                <span>আজীবন সদস্যপদ আবেদন</span>
              </button>
            </div>

            {/* Bottom 3 Quick Key Trust Badges */}
            <div className="pt-4 border-t border-[#E5DFD3] dark:border-[#1E2D24] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#4A5568] dark:text-slate-400">
              {/* Trust Badge 1 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-xs bg-[#E8F3ED] dark:bg-[#14231B] text-[#0D5C3A] dark:text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-semibold text-[#1A2E40] dark:text-slate-200 block">গণপ্রজাতন্ত্রী বাংলাদেশ</span>
                  <span className="text-[12px] text-slate-500 dark:text-slate-400">রেজিস্টার্ড সংস্থা (৬০৪/১০)</span>
                </div>
              </div>

              {/* Trust Badge 2 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-xs bg-[#E8F3ED] dark:bg-[#14231B] text-[#0D5C3A] dark:text-emerald-400 shrink-0 mt-0.5">
                  <Award className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-semibold text-[#1A2E40] dark:text-slate-200 block">গুণগতমানের অনিন্দ্য</span>
                  <span className="text-[12px] text-slate-500 dark:text-slate-400">নান্দনিকতা ও পাঠাগার</span>
                </div>
              </div>

              {/* Trust Badge 3 */}
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-xs bg-[#E8F3ED] dark:bg-[#14231B] text-[#0D5C3A] dark:text-emerald-400 shrink-0 mt-0.5">
                  <Network className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-semibold text-[#1A2E40] dark:text-slate-200 block">২২টি জেলার বিস্তার</span>
                  <span className="text-[12px] text-slate-500 dark:text-slate-400">সদস্য ও স্থায়ী সমাজ</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Historical Heritage Root Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div 
              className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] shadow-md p-4 sm:p-5 relative transition-all hover:shadow-lg"
              role="region"
              aria-label="ঐতিহাসিক ভিত্তি ও স্মৃতি শিকড়"
            >
              {/* Card Header with Title & Date Badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4F0E8] dark:border-[#1A2C21]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0D5C3A] dark:bg-emerald-400" aria-hidden="true" />
                  <h2 className="text-base sm:text-lg font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100">
                    স্মৃতি ও শিকড়
                  </h2>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4F0E8] dark:bg-[#1A2C21] text-[#8C6A38] dark:text-[#E7BC83] text-xs font-semibold border border-[#E5DFD3] dark:border-[#283E30]">
                  <Calendar className="w-3 h-3 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
                  <span>২০০২-২০২৪</span>
                </div>
              </div>

              {/* Historical Archival Photo Container (Blank / Placeholder) */}
              <div 
                className="relative w-full h-56 sm:h-64 rounded-md overflow-hidden bg-[#F8F6F0] dark:bg-[#0E1712] border-2 border-dashed border-[#CBD5E1] dark:border-[#283E30] p-4 flex flex-col items-center justify-center text-center group"
                role="img"
                aria-label="ঐতিহাসিক আলোকচিত্র সংরক্ষিত - আড়পাড়া প্রাথমিক বিদ্যালয় শহীদ মিনার"
              >
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#15231A] border border-[#E5DFD3] dark:border-[#283E30] flex items-center justify-center text-[#8C6A38] dark:text-[#E7BC83] mb-3 shadow-2xs group-hover:scale-105 transition-transform">
                  <Landmark className="w-7 h-7 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
                </div>
                <p className="text-sm font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100 mb-1">
                  ঐতিহাসিক আলোকচিত্র সংরক্ষিত
                </p>
                <p className="text-xs text-[#52606D] dark:text-slate-300 max-w-xs leading-relaxed">
                  আড়পাড়া প্রাথমিক বিদ্যালয়ের শহীদ মিনারের পাদদেশে প্রথম ঐতিহাসিক আলোচনা সভা ও শপথ গ্রহণ (মাগুরা, ২০০২)
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#15231A] border border-[#E5DFD3] dark:border-[#283E30] text-[11px] font-medium text-[#8C6A38] dark:text-[#E7BC83] shadow-2xs">
                  <ImageIcon className="w-3.5 h-3.5 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
                  <span>আলোকচিত্র সংযোজন প্রক্রিয়াধীন</span>
                </div>
              </div>

              {/* Historical Quote Box */}
              <div className="mt-4 p-3.5 rounded-md bg-[#FDFBF7] dark:bg-[#0E1712] border border-[#E5DFD3] dark:border-[#22362A] relative">
                <Quote className="w-5 h-5 text-[#8C6A38]/40 dark:text-[#E7BC83]/40 absolute top-2.5 right-3" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#21272A] dark:text-slate-200 italic leading-relaxed font-serif-bn pr-6">
                  “একটি প্রতিষ্ঠান তৈরি করো, এর ব্যানারে তুমি তোমার এমন মহতী ও জাতি গঠনমূলক কাজ করো।”
                </p>
                <p className="text-[11px] sm:text-xs text-[#8C6A38] dark:text-[#E7BC83] font-semibold mt-2 text-right">
                  — প্রতিষ্ঠাতা ও প্রধান উদ্যোক্তার ঐতিহাসিক নির্দেশনা
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
