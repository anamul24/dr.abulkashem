'use client';

import React from 'react';
import { 
  History, 
  MapPin, 
  FileCheck, 
  Building2, 
  TrendingUp, 
  CheckCircle,
  Flag,
  CalendarDays
} from 'lucide-react';

/**
 * Timeline Component for Dr. Abul Kashem Education Foundation.
 * Depicts the four major historical phases from grassroots inception in 2002
 * to government recognition in 2010, building construction in 2011-2014,
 * and present-day multi-district expansion.
 */
export const Timeline: React.FC = () => {
  return (
    <section 
      id="timeline" 
      className="py-12 sm:py-16 lg:py-20 bg-[#F4F0E8]/50 dark:bg-[#0C1611] border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 border-b border-[#E5DFD3] dark:border-[#1E2D24]">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#8C6A38] dark:text-[#E7BC83] uppercase">
              ঐতিহাসিক পরিক্রমা
            </span>
            <h2 
              id="timeline-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 mt-1.5"
            >
              ফাউন্ডেশন প্রতিষ্ঠার ইতিহাস ও বিবর্তন
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#52606D] dark:text-slate-300 max-w-md mt-2 md:mt-0 font-normal">
            সরকারি দপ্তরের অভিজ্ঞতা থেকে শুরু করে গণমানুষের পাঠাগার ও গবেষণা প্রতিষ্ঠানে রূপান্তরের গৌরবোজ্জ্বল পথচলা।
          </p>
        </div>

        {/* 2x2 Historical Milestone Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Milestone 1: 2002 */}
          <div 
            className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            role="region"
            aria-label="২০০২: শিক্ষা অফিসারের অভিজ্ঞতা ও শহীদ মিনারের পাদদেশে শপথ"
          >
            <div>
              {/* Header with year and location */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="bg-[#0D5C3A] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-xs tracking-wider">
                  ২০০২
                </span>
                <span className="text-xs text-[#52606D] dark:text-slate-400 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
                  <span>আমড়াখোয়া, মাগুরা</span>
                </span>
              </div>

              {/* Milestone Title */}
              <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100 mb-3 leading-snug">
                শিক্ষা অফিসারের অভিজ্ঞতা ও শহীদ মিনারের পাদদেশে শপথ
              </h3>

              {/* Milestone Description */}
              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed mb-6">
                প্রাথমিক শিক্ষায় বিশ্বস্ত ওয়াহিদুজ্জামান অবসরপ্রাপ্ত সরকারি চাকরি ছেড়ে জেলা শিক্ষা অফিসে সহকারী পরিদর্শক হিসেবে যোগদান করেন। মাঠপর্যায়ে শিক্ষার মানোন্নয়নের নানা উদ্যোগ প্রশাসনিক বাধার কারণে তিনি দীর্ঘ পারিবারিক ও সামাজিক সম্পর্ক নিয়ে একটি স্থায়ী প্রতিষ্ঠান গড়ার সিদ্ধান্ত নেন। আড়পাড়া প্রাথমিক বিদ্যালয় শহীদ মিনারে গ্রামবাসীদের নিয়ে সভার মাধ্যমে ডা. আবুল কাশেমের নামে পাঠাগার শুরুর সিদ্ধান্ত গৃহীত হয়।
              </p>
            </div>

            {/* Card Footer Badge */}
            <div className="pt-3 border-t border-[#F4F0E8] dark:border-[#1E2D24] flex items-center gap-2 text-xs text-[#52606D] dark:text-slate-400 font-medium">
              <Flag className="w-3.5 h-3.5 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
              <span>যুগান্তকারী পাঠাগার পরিকল্পনা চীনের সাইনবোর্ড বোকার ভক্ত</span>
            </div>
          </div>

          {/* Milestone 2: 2010 */}
          <div 
            className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            role="region"
            aria-label="২০১০: জেলা প্রশাসন ও সমাজসেবা অধিদপ্তর হতে স্বীকৃতি"
          >
            <div>
              {/* Header with year and registration */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="bg-[#8C6A38] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-xs tracking-wider">
                  ২০১০
                </span>
                <span className="text-xs text-[#52606D] dark:text-slate-400 font-medium flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
                  <span>রেজিস্ট্রেশন নং: ৬০৪/২০১০</span>
                </span>
              </div>

              {/* Milestone Title */}
              <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100 mb-3 leading-snug">
                জেলা প্রশাসন ও সমাজসেবা অধিদপ্তর হতে স্বীকৃতি
              </h3>

              {/* Milestone Description */}
              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed mb-6">
                প্রাথমিক শিক্ষার উন্নয়ন ছাড়াও বৃহত্তর গ্রামীণ জনপদে তৎকালীন জেলা প্রশাসক সুশান্ত কুমার সাহার পরামর্শক্রমে পাঠাগারকে জাতীয় রূপরেখা সংস্থায় রূপান্তরের প্রক্রিয়া শুরু হয়। সাধারণ সভার সর্বসম্মতিক্রমে ‘ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন’ নাম গৃহীত হয় এবং মাগুরা জেলা সমাজসেবা অফিস হতে মাত্র কয়েক মাসের ব্যবধানে ঐতিহাসিক নিবন্ধন সম্পন্ন হয়। যার মাধ্যমে ৪৩ জন বিশিষ্ট ব্যক্তি ও গ্রামের ৬২ জন সদস্য নিয়ে কেন্দ্রীয় পরিষদ গঠিত হয়।
              </p>
            </div>

            {/* Card Footer Badge */}
            <div className="pt-3 border-t border-[#F4F0E8] dark:border-[#1E2D24] flex items-center gap-2 text-xs text-[#0D5C3A] dark:text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
              <span>সমাজসেবা বিভাগের প্রাতিষ্ঠানিক সনদপ্রাপ্তি</span>
            </div>
          </div>

          {/* Milestone 3: 2011 - 2014 */}
          <div 
            className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            role="region"
            aria-label="২০১১ নিজস্ব ভবন নির্মাণ ও কুষ্টিয়ায় গবেষণা লিয়াজোঁ অফিস"
          >
            <div>
              {/* Header with year and place */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="bg-[#1A2E40] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-xs tracking-wider">
                  ২০১১
                </span>
                <span className="text-xs text-[#52606D] dark:text-slate-400 font-medium flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
                  <span>কুষ্টিয়া ও আড়পাড়া বাজার</span>
                </span>
              </div>

              {/* Milestone Title */}
              <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100 mb-3 leading-snug">
                নিজস্ব ভবন নির্মাণ ও কুষ্টিয়ায় গবেষণা লিয়াজোঁ অফিস
              </h3>

              {/* Milestone Description */}
              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed mb-6">
                ২০১১ সালে আড়পাড়া বাজারে জমি ক্রয় করে ২০১৪ সালে ফাউন্ডেশনের নিজস্ব দোতলা স্থায়ী ভবন নির্মাণ করা হয়। একই সাথে ২০১৬ সালে কুষ্টিয়ার চৌড়হাস প্রধান লিয়াজোঁ অফিস ও গবেষণাগার স্থাপন করা হয়। পরবর্তীতে জাতীয় গণগ্রন্থাগার অধিদপ্তর হতে পাঠাগার অনুদান ও প্রাতিষ্ঠানিক অন্তর্ভুক্তি নিশ্চিত করতে ডা. আবুল কাশেম স্মৃতি পাঠাগারের পৃথক রেজিস্ট্রি গ্রহণ করা হয়।
              </p>
            </div>

            {/* Card Footer Badges */}
            <div className="pt-3 border-t border-[#F4F0E8] dark:border-[#1E2D24] flex flex-wrap items-center justify-between gap-2 text-xs text-[#52606D] dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
                <span>আড়পাড়া বাজার নিজস্ব ভবন</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0D5C3A] dark:text-emerald-400" aria-hidden="true" />
                <span>কুষ্টিয়া গবেষণাকেন্দ্র</span>
              </span>
            </div>
          </div>

          {/* Milestone 4: Present (Highlighted in Forest Emerald) */}
          <div 
            className="bg-[#004328] dark:bg-[#0B3320] text-white rounded-lg p-6 sm:p-7 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden border border-emerald-900/40"
            role="region"
            aria-label="বর্তমান: ৫ জেলায় বহুমুখী সামাজিক ও পাঠাগার বিপ্লব"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-emerald-700/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header with badge and location */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="bg-[#8ad2a7] text-[#002111] text-xs sm:text-sm font-bold px-3 py-1 rounded-xs tracking-wider">
                  বর্তমান
                </span>
                <span className="text-xs text-emerald-200 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#e7bc83]" aria-hidden="true" />
                  <span>যশোর প্রধান কার্যালয়</span>
                </span>
              </div>

              {/* Milestone Title */}
              <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-white mb-3 leading-snug">
                ৫ জেলায় বহুমুখী সামাজিক ও পাঠাগার বিপ্লব
              </h3>

              {/* Milestone Description */}
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6">
                যশোর, মাগুরা, ঝিনাইদহ, কুষ্টিয়ায় ৫টি জেলায় বর্তমানে ১৯টি পাঠাগার, ৪টি যুব সংগঠন, ৬টি নারী ও শিশু কেন্দ্র, ৪টি বিজ্ঞানসেবা সংস্থা, ৫টি বিদ্যালয় ও ৩টি সামাজিক প্রতিষ্ঠান সক্রিয় রয়েছে।
                <br /><br />
                যশোর সদর কোতোয়ালি থানার ৪০০ মিটার দক্ষিণে ফাউন্ডেশনের প্রধান লিয়াজোঁ অফিস ও গবেষণা অনুসম পরিষদ পরিচালনা কেন্দ্র।
              </p>
            </div>

            {/* Card Footer Badge */}
            <div className="pt-3 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-200 font-medium relative z-10">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                <span>দেশব্যাপী উপজেলা কমিটি গঠন প্রক্রিয়াধীন</span>
              </span>
              <span className="text-emerald-400 text-sm">↗</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
