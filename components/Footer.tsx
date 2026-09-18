'use client';

import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck,
  Phone,
  Mail,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

/**
 * Institutional Footer Component for Dr. Abul Kashem Education Foundation (DAKSF).
 * Structured 4-column directory with registered legal identity,
 * regional branch offices across Bangladesh, official administrative links,
 * national government portals, and back-to-top navigation.
 */
export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2A1E] dark:bg-[#05140E] text-slate-200 dark:text-slate-300 border-t-2 border-[#8C6A38] dark:border-[#B38E4F] transition-colors duration-200" role="contentinfo">
      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: About & Registered Identity (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#004328] dark:bg-[#082D1C] text-white flex items-center justify-center border-2 border-[#8C6A38] dark:border-[#B38E4F] shadow-sm shrink-0">
                <GraduationCap className="w-6 h-6 text-emerald-100 dark:text-emerald-200" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-serif-bn text-white dark:text-slate-100 leading-tight">
                  ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন
                </span>
                <span className="text-xs text-[#E7BC83] dark:text-[#F3D5A5] font-medium tracking-wide">
                  The DAKSF • শিক্ষা ফাউন্ডেশন বাংলাদেশ
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 leading-relaxed">
              শিক্ষা, মানবকল্যাণ ও নৈতিক গবেষণার লক্ষ্যে প্রতিষ্ঠিত একটি অনন্য অরাজনৈতিক জাতীয় উদ্যোগ। তৃণমূল শিক্ষার্থীদের শিক্ষা বিস্তার, গ্রন্থাগার আন্দোলন ও গুণীজন অনুপ্রেরণায় আমরা নিবেদিত।
            </p>

            {/* Direct Contacts in Col 1 */}
            <div className="space-y-2 pt-1 text-xs text-slate-300 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8ad2a7] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <a href="tel:01798866557" className="hover:text-white dark:hover:text-emerald-200 transition-colors">
                  ০১৭৯৮৮৬৬৫৫৭, ০১৭৯৮৮৬৬৫৫৮
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8ad2a7] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <a href="mailto:qualityeducation2008@gmail.com" className="hover:text-white dark:hover:text-emerald-200 transition-colors">
                  qualityeducation2008@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8ad2a7] dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>লিয়াজোঁ: কারবালা রোড, যশোর সদর কোতোয়ালী, যশোর-৭৪০০</span>
              </div>
            </div>

            {/* Registration Callout */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 dark:text-emerald-300 font-semibold bg-emerald-950/80 dark:bg-emerald-950/90 px-3 py-1.5 rounded-xs border border-emerald-800/80 dark:border-emerald-700/80 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার নিবন্ধিত (নং: ৬০৪/২০১০)</span>
              </span>
            </div>
          </div>

          {/* Col 2: Regional Branch Offices (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-serif-bn text-white dark:text-slate-100 border-b border-emerald-800/60 dark:border-emerald-800/80 pb-2 flex items-center justify-between">
              <span>শাখা ও আঞ্চলিক কার্যালয়</span>
              <span className="text-[11px] font-sans text-emerald-400 font-normal">৫টি বিভাগ</span>
            </h4>
            <p className="text-xs text-slate-300 dark:text-slate-300">
              ফাউন্ডেশনের প্রশাসনিক জেলার সক্রিয় কেন্দ্র ও আঞ্চলিক দপ্তর:
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                <div>
                  <strong className="text-white dark:text-slate-100 block">ঢাকা কেন্দ্রীয় দপ্তর:</strong>
                  <span className="text-slate-400 dark:text-slate-400">নীলক্ষেত ও মতিঝিল বাণিজ্যিক এলাকা</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                <div>
                  <strong className="text-white dark:text-slate-100 block">চট্টগ্রাম আঞ্চলিক কেন্দ্র:</strong>
                  <span className="text-slate-400 dark:text-slate-400">আগ্রাবাদ ও ফিরিঙ্গীবাজার</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                <div>
                  <strong className="text-white dark:text-slate-100 block">সিলেট শিক্ষাকেন্দ্র:</strong>
                  <span className="text-slate-400 dark:text-slate-400">জিন্দাবাজার, কোর্ট রোড</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                <div>
                  <strong className="text-white dark:text-slate-100 block">রাজশাহী শাখা:</strong>
                  <span className="text-slate-400 dark:text-slate-400">সাগর পাড়ার মোড়, সদর</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 font-bold">•</span>
                <div>
                  <strong className="text-white dark:text-slate-100 block">ময়মনসিংহ শাখা:</strong>
                  <span className="text-slate-400 dark:text-slate-400">স্টেশন রোড ও শিক্ষাঙ্গন</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-serif-bn text-white dark:text-slate-100 border-b border-emerald-800/60 dark:border-emerald-800/80 pb-2">
              গুরুত্বপূর্ণ লিংক
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 dark:text-slate-300">
              <li>
                <a href="#leadership" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                  <span>কার্যনির্বাহী পরিষদ</span>
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                  <span>বৃত্তি কর্মসূচি ও অনুদান</span>
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                  <span>গঠনতন্ত্র ও বিধিমালা</span>
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                  <span>বার্ষিক নিরীক্ষা রিপোর্ট</span>
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                  <span>আজীবন সদস্য নিবন্ধন</span>
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                  <span>কেন্দ্রীয় নোটিশ বোর্ড</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: National Portals (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-serif-bn text-white dark:text-slate-100 border-b border-emerald-800/60 dark:border-emerald-800/80 pb-2">
              জাতীয় বাতায়ন ও পোর্টাল
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 dark:text-slate-300">
              <li>
                <a href="https://bangladesh.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                    <span>বাংলাদেশ জাতীয় তথ্য বাতায়ন</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://moedu.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                    <span>শিক্ষা মন্ত্রণালয় (moedu.gov.bd)</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://dss.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                    <span>সমাজসেবা অধিদপ্তর (dss.gov.bd)</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="http://www.ugc.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                    <span>বিশ্ববিদ্যালয় মঞ্জুরী কমিশন</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="http://www.nlb.gov.bd" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors flex items-center justify-between group py-0.5">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#E7BC83] dark:text-[#F3D5A5]" aria-hidden="true" />
                    <span>জাতীয় গ্রন্থকেন্দ্র (nlb.gov.bd)</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-300" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright, Legal & Back to Top */}
      <div className="bg-[#071F15] dark:bg-[#020A07] border-t border-emerald-950 dark:border-[#0e271a] py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © ২০২৪ ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন (DAKSF). সর্বস্বত্ব সংরক্ষিত।
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors">গোপনীয়তা নীতি</a>
            <span className="text-slate-600 dark:text-slate-600 select-none">|</span>
            <a href="#home" className="hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors">ব্যবহারের শর্তাবলী</a>
            <span className="text-slate-600 dark:text-slate-600 select-none">|</span>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#E7BC83] dark:text-[#F3D5A5] hover:text-white dark:hover:text-white transition-colors cursor-pointer focus:outline-hidden"
              aria-label="পৃষ্ঠার শীর্ষে ফিরে যান"
            >
              <span>শীর্ষে ফিরে যান</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
