'use client';

import React from 'react';
import { ArrowRight, Award, Bookmark, HeartHandshake, Sparkles, User, Image as ImageIcon } from 'lucide-react';

interface LeadershipProps {
  onSelectPerson: (personId: 'kashem' | 'wahiduzzaman') => void;
}

/**
 * Leadership & Founders Component.
 * Honors the spiritual inspiration Late Dr. Abul Kashem Biswas and
 * the Founder & Chief Initiator Biswas Mohammad Wahiduzzaman.
 */
export const Leadership: React.FC<LeadershipProps> = ({ onSelectPerson }) => {
  return (
    <section 
      id="leadership" 
      className="py-12 sm:py-16 lg:py-20 bg-[#FDFBF7] dark:bg-[#0A130E] border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#8C6A38] dark:text-[#E7BC83] uppercase">
            অনুপ্রেরণা ও নেতৃত্ব
          </span>
          <h2 
            id="leadership-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 mt-1.5 mb-3"
          >
            ফাউন্ডেশনের উৎস ও কর্ণধার
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] dark:text-slate-300">
            যাঁদের আজীবন সাধনা, মেধা ও কর্মনিষ্ঠার ওপর প্রতিষ্ঠিত হয়েছে এই জাতীয় গবেষণা উদ্যোগ
          </p>
        </div>

        {/* Two Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Late Dr. Abul Kashem Biswas */}
          <div 
            className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 relative group"
            role="region"
            aria-label="মরহুম ডা. আবুল কাশেম বিশ্বাস জীবনকথা"
          >
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#8C6A38] rounded-t-lg" aria-hidden="true" />

            {/* Archival Portrait Frame (Blank / Placeholder) */}
            <div className="sm:w-44 shrink-0 flex flex-col items-center sm:items-start">
              <div 
                className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-md bg-[#F8F6F0] dark:bg-[#0E1712] border-2 border-dashed border-[#CBD5E1] dark:border-[#283E30] shadow-2xs flex flex-col items-center justify-center p-3 text-center group-hover:border-[#8C6A38] transition-colors"
                role="img"
                aria-label="মরহুম ডা. আবুল কাশেম বিশ্বাস - স্মারক প্রতিকৃতি ফ্রেম"
              >
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#15231A] border border-[#E5DFD3] dark:border-[#283E30] flex items-center justify-center text-[#8C6A38] dark:text-[#E7BC83] mb-2 shadow-2xs">
                  <User className="w-6 h-6 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
                </div>
                <span className="text-[12px] font-bold text-[#1A2E40] dark:text-slate-100 font-serif-bn leading-tight">
                  ডা. আবুল কাশেম
                </span>
                <span className="text-[10px] text-[#52606D] dark:text-slate-400 mt-0.5">
                  স্মারক প্রতিকৃতি
                </span>
                <span className="mt-2 text-[10px] text-[#8C6A38] dark:text-[#E7BC83] bg-white dark:bg-[#15231A] px-2 py-0.5 rounded-full border border-[#E5DFD3] dark:border-[#283E30]">
                  ছবি সংযোজন প্রক্রিয়াধীন
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="inline-block text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F4F0E8] dark:bg-[#1A2C21] text-[#8C6A38] dark:text-[#E7BC83] border border-[#E5DFD3] dark:border-[#283E30] mb-2">
                  চিরন্তন অনুপ্রেরণা ও স্মারক ব্যক্তিত্ব
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 leading-tight mb-1">
                  মরহুম ডা. আবুল কাশেম বিশ্বাস
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1A2E40] dark:text-slate-200 mb-3">
                  বিশিষ্ট শিক্ষাবিদ, চিকিৎসক ও প্রথিতযশা সমাজসেবক
                </p>
                <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed">
                  মাগুড়ার আড়পাড়া গ্রামের প্রত্যন্ত অঞ্চলে নিজের চিকিৎসাসেবা ও বিনামূল্যে মানবসেবা দিয়ে প্রতিষ্ঠা করেছিলেন অনন্য নজির। তাঁর মানব কল্যাণের দৃষ্টান্তকে চিরঞ্জীব রাখতে গড়ে উঠেছে ডা. আবুল কাশেম স্মৃতি পাঠাগার ও শিক্ষা ফাউন্ডেশন।
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4F0E8] dark:border-[#1E2D24]">
                <button
                  onClick={() => onSelectPerson('kashem')}
                  className="text-xs sm:text-sm font-semibold text-[#0D5C3A] dark:text-emerald-400 hover:text-[#094229] dark:hover:text-emerald-300 inline-flex items-center gap-1.5 group/btn cursor-pointer focus:outline-hidden focus:underline"
                  aria-label="ডা. আবুল কাশেম বিশ্বাসের স্মৃতিচারণ ও পরিচিতি পাঠ করুন"
                >
                  <span>স্মৃতিচারণ ও পরিচিতি পাঠ করুন</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Biswas Mohammad Wahiduzzaman */}
          <div 
            className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 relative group"
            role="region"
            aria-label="বিশ্বাস মোহাম্মদ ওয়াহিদুজ্জামান পরিচিতি"
          >
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#0D5C3A] rounded-t-lg" aria-hidden="true" />

            {/* Archival Portrait Frame (Blank / Placeholder) */}
            <div className="sm:w-44 shrink-0 flex flex-col items-center sm:items-start">
              <div 
                className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-md bg-[#F8F6F0] dark:bg-[#0E1712] border-2 border-dashed border-[#CBD5E1] dark:border-[#283E30] shadow-2xs flex flex-col items-center justify-center p-3 text-center group-hover:border-[#0D5C3A] transition-colors"
                role="img"
                aria-label="বিশ্বাস মোহাম্মদ ওয়াহিদুজ্জামান - প্রতিষ্ঠাতা প্রতিকৃতি ফ্রেম"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8F3ED] dark:bg-[#14261C] border border-[#C5E1D1] dark:border-emerald-800/60 flex items-center justify-center text-[#0D5C3A] dark:text-emerald-400 mb-2 shadow-2xs">
                  <User className="w-6 h-6 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
                </div>
                <span className="text-[12px] font-bold text-[#1A2E40] dark:text-slate-100 font-serif-bn leading-tight">
                  বি. এম. ওয়াহিদুজ্জামান
                </span>
                <span className="text-[10px] text-[#52606D] dark:text-slate-400 mt-0.5">
                  প্রতিষ্ঠাতার প্রতিকৃতি
                </span>
                <span className="mt-2 text-[10px] text-[#0D5C3A] dark:text-emerald-300 bg-[#E8F3ED] dark:bg-[#14261C] px-2 py-0.5 rounded-full border border-[#C5E1D1] dark:border-emerald-800/60">
                  ছবি সংযোজন প্রক্রিয়াধীন
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="inline-block text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E8F3ED] dark:bg-[#14261C] text-[#0D5C3A] dark:text-emerald-300 border border-[#C5E1D1] dark:border-emerald-800/60 mb-2">
                  প্রতিষ্ঠাতা ও প্রধান উদ্যোক্তা
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 leading-tight mb-1">
                  বিশ্বাস মোহাম্মদ ওয়াহিদুজ্জামান
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1A2E40] dark:text-slate-200 mb-3">
                  বিশিষ্ট গবেষক ও সাবেক জেলা শিক্ষা কর্মকর্তা পরিদর্শক
                </p>
                <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed">
                  সরকারি-বেসরকারি বহুমুখী চাকরির অভিজ্ঞতাকে পেছনে ফেলে তৃণমূল শিক্ষার মানোন্নয়নে ফাউন্ডেশনের জন্ম দেন। নিজস্ব মেধা ও সততা দিয়ে গড়ে তোলেন গ্রামীণ পাঠাগার আন্দোলনকে তিনি জাতীয় পর্যায়ের রূপ দেন।
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4F0E8] dark:border-[#1E2D24]">
                <button
                  onClick={() => onSelectPerson('wahiduzzaman')}
                  className="text-xs sm:text-sm font-semibold text-[#0D5C3A] dark:text-emerald-400 hover:text-[#094229] dark:hover:text-emerald-300 inline-flex items-center gap-1.5 group/btn cursor-pointer focus:outline-hidden focus:underline"
                  aria-label="প্রতিষ্ঠাতা বিশ্বাস মোহাম্মদ ওয়াহিদুজ্জামানের প্রেক্ষাপট ও আত্মকথা পড়ুন"
                >
                  <span>প্রতিষ্ঠাতার প্রেক্ষাপট ও আত্মকথা</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
