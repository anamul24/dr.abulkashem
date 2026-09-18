'use client';

import React from 'react';
import { Check, CheckCircle2, ShieldCheck, Sparkles, CreditCard, ArrowRight } from 'lucide-react';

interface MembershipProps {
  onOpenMembershipModal: (tier: 'life' | 'general') => void;
}

/**
 * Membership Drive Section.
 * Highlights civic engagement criteria, transparent governance, and two tiers:
 * Life Membership (৳২,০০৮/-) and General Membership (৳৩০৮/-).
 */
export const Membership: React.FC<MembershipProps> = ({ onOpenMembershipModal }) => {
  return (
    <section 
      id="membership" 
      className="py-12 sm:py-16 lg:py-20 bg-[#F4F0E8]/40 dark:bg-[#0C1611] border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-labelledby="membership-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Vision & Trust Checklist (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#8C6A38] dark:text-[#E7BC83] uppercase">
                নাগরিক সম্পৃক্ততা ও সম্মাননা
              </span>
              <h2 
                id="membership-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 mt-1.5 leading-snug"
              >
                জ্ঞানভিত্তিক বাংলাদেশ বিনির্মাণে ফাউন্ডেশনের সঙ্গী হোন
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] dark:text-slate-300 leading-relaxed">
              দেশের ২২টি জেলা থেকে ইতিমধ্যে বিশ্ববিদ্যালয়ের অধ্যাপক, সরকারি কর্মকর্তা, গবেষক ও শিক্ষানুরাগীরা ফাউন্ডেশনের সদস্যপদ গ্রহণ করেছেন। গণতান্ত্রিক পদ্ধতিতে সাধারণ সভায় সদস্যদের প্রত্যক্ষ মতামতের ভিত্তিতে কেন্দ্রীয় পরিষদ নির্বাচিত হয়।
            </p>

            <div className="space-y-4 pt-2">
              {/* Point 1 */}
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#E8F3ED] dark:bg-[#14261C] text-[#0D5C3A] dark:text-emerald-400 shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A2E40] dark:text-slate-100">
                    নিবন্ধনকৃত শংসাপত্র
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52606D] dark:text-slate-300 mt-0.5">
                    কমিটির সদস্য পদ ন্যূনতম ১ বছর বজায় থাকলে আজীবন ও ডিরেক্টরি পরিচিতির জন্য অগ্রাধিকার।
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#E8F3ED] dark:bg-[#14261C] text-[#0D5C3A] dark:text-emerald-400 shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A2E40] dark:text-slate-100">
                    স্বচ্ছ লেনদেন ও সনদ
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52606D] dark:text-slate-300 mt-0.5">
                    ব্যাংক বা নির্ধারিত মোবাইল হিসাবের মাধ্যমে সরাসরি ফি জমা। সদস্য সনদপত্র ও পরিচয়পত্র সরাসরি কুরিয়ার বা ডাকযোগে প্রেরণ।
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing Tiers (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Card 1: Life Member (Featured) */}
            <div 
              className="bg-white dark:bg-[#121E17] rounded-lg border-2 border-[#0D5C3A] dark:border-emerald-600 p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative"
              role="region"
              aria-label="আজীবন সদস্যপদ প্যাকেজ"
            >
              {/* Popular Badge */}
              <div className="absolute -top-3 right-4">
                <span className="bg-[#004328] dark:bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  সর্বাধিক জনপ্রিয়
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#52606D] dark:text-slate-400 uppercase">
                  আজীবন সদস্যপদ
                </span>
                
                <div className="mt-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400">
                    ২,০০৮/-
                  </span>
                  <span className="text-xs text-[#52606D] dark:text-slate-400 ml-1.5 block sm:inline">
                    টাকা (এককালীন)
                  </span>
                </div>

                <p className="text-xs text-[#4A5568] dark:text-slate-300 leading-relaxed mb-5 pb-4 border-b border-[#F4F0E8] dark:border-[#1E2D24]">
                  প্রতিষ্ঠা সাল (২০০৮) স্মরণে নির্ধারিত এককালীন সম্মানজনক আজীবন সদস্যপদ।
                </p>

                {/* Features list */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#21272A] dark:text-slate-200 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>আজীবন ভোটাধিকার</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>প্রকাশনায় ফ্রি কপি</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>লাইব্রেরি কার্ড ও সুবিধা</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenMembershipModal('life')}
                className="w-full bg-[#004328] hover:bg-[#094229] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xs transition-colors shadow-xs text-center cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-1 focus:ring-[#004328]"
                aria-label="আজীবন সদস্যপদ আবেদন ফরম পূরণ করুন"
              >
                আবেদন ফরম পূরণ
              </button>
            </div>

            {/* Card 2: General Member */}
            <div 
              className="bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              role="region"
              aria-label="সাধারণ সদস্যপদ প্যাকেজ"
            >
              <div>
                <span className="text-xs font-semibold text-[#52606D] dark:text-slate-400 uppercase">
                  সাধারণ সদস্যপদ
                </span>
                
                <div className="mt-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100">
                    ৩০৮/-
                  </span>
                  <span className="text-xs text-[#52606D] dark:text-slate-400 ml-1.5 block sm:inline">
                    টাকা (বাৎসরিক)
                  </span>
                </div>

                <p className="text-xs text-[#4A5568] dark:text-slate-300 leading-relaxed mb-5 pb-4 border-b border-[#F4F0E8] dark:border-[#1E2D24]">
                  তৃণমূল পর্যায়ের শিক্ষক, তরুণ উদ্যোক্তা ও পাঠকদের সক্রিয় অংশগ্রহণের জন্য।
                </p>

                {/* Features list */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#21272A] dark:text-slate-200 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>বার্ষিক সাধারণ সভায় অংশ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>যুব ফোরাম কার্যক্রমে অন্তর্ভুক্ত</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>আঞ্চলিক কর্মসূচিতে প্রতিনিধিত্ব</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenMembershipModal('general')}
                className="w-full bg-white dark:bg-[#15231A] hover:bg-[#F4F0E8] dark:hover:bg-[#1E2E24] text-[#1A2E40] dark:text-slate-200 border border-[#CBD5E1] dark:border-[#283E30] hover:border-[#1A2E40] text-sm font-semibold py-2.5 px-4 rounded-xs transition-colors text-center cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-1 focus:ring-[#1A2E40]"
                aria-label="সাধারণ সদস্য ফরম পূরণ করুন"
              >
                সাধারণ ফরম
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
