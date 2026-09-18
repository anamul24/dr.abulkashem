'use client';

import React from 'react';
import { 
  BookOpen, 
  Users2, 
  TrendingUp, 
  Landmark, 
  Laptop, 
  HeartHandshake, 
  ArrowRight 
} from 'lucide-react';

export interface WingItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  stats?: string;
  activities?: string[];
}

interface WingsProps {
  onSelectWing: (wing: WingItem) => void;
}

export const WINGS_DATA: WingItem[] = [
  {
    id: 'library-kashem',
    title: 'ডা. আবুল কাশেম স্মৃতি পাঠাগার',
    subtitle: 'আড়পাড়া, মাগুরা',
    description: 'ফাউন্ডেশনের সুবর্ণযাত্রা। গ্রামীণ শিশু-কিশোর ও সাধারণ মানুষের মধ্যে বইপড়ার সংস্কৃতি ছড়িয়ে দিতে সমৃদ্ধ বই ভান্ডার ও নিয়মিত পাঠকসেবা।',
    icon: BookOpen,
    stats: '৮,৫০০+ বই ও দৈনিক ১০০+ পাঠক',
    activities: [
      'সাপ্তাহিক ও মাসিক বইপড়া প্রতিযোগিতা',
      'গ্রামের শিশুদের জন্য মুক্ত কিশোর কর্নার',
      'দৈনিক ও সাপ্তাহিক জাতীয় সংবাদপত্রের উন্মুক্ত সংগ্রহশালা',
      'গবেষক ও বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য বিশেষ রেফারেন্স ডেস্ক'
    ]
  },
  {
    id: 'vikash-kendra',
    title: 'গুণীমাতা আছিয়া কাশেম বিকাশকেন্দ্র',
    subtitle: 'নারী ও শিশু পাঠাগার',
    description: 'নারী শিক্ষা বিস্তার, মা ও শিশুর শারীরিক-মানসিক বিকাশ এবং পারিবারিক সচেতনতা বৃদ্ধির লক্ষ্যে বিশেষায়িত পাঠাগার ও প্রশিক্ষণ কেন্দ্র।',
    icon: Users2,
    stats: '১,২০০+ মা ও কিশোরী উপকৃত',
    activities: [
      'গর্ভবতী মা ও নবজাতকের পুষ্টি ও স্বাস্থ্য বিষয়ক সাপ্তাহিক কর্মশালা',
      'গ্রামীণ নারীদের জন্য হস্তশিল্প ও দর্জি বিজ্ঞান প্রশিক্ষণ',
      'কিশোরীদের প্রজনন স্বাস্থ্য ও মানসিক বিকাশ বিষয়ক কাউন্সিলিং',
      'পারিবারিক সান্ধ্য পাঠাগার ও মা-সন্তান যৌথ গল্প পাঠের আসর'
    ]
  },
  {
    id: 'research-center',
    title: 'ডা. আবুল কাশেম শিক্ষা গবেষণাকেন্দ্র',
    subtitle: 'কুষ্টিয়া লিয়াজোঁ শাখা',
    description: 'প্রাথমিক ও মাধ্যমিক স্তর পাঠদান পদ্ধতি, শিক্ষাক্রম সংস্কার এবং জাতীয় শিক্ষানীতি পর্যালোচনায় কুষ্টিয়া ও যশোরভিত্তিক গবেষণাকেন্দ্র।',
    icon: TrendingUp,
    stats: '১৪টি প্রকাশিত গবেষণা মনোগ্রাফ',
    activities: [
      'তৃণমূল শিক্ষকদের শ্রেণি পাঠদানের আধুনিক কৌশল জরিপ',
      'জাতীয় শিক্ষাক্রম পর্যালোচনা ও সুপারিশপত্র প্রণয়ন',
      'গণিত ও বিজ্ঞান শিক্ষার ভীতি দূরীকরণ গবেষণা প্রকল্প',
      'শিক্ষানীতি বিষয়ক দ্বি-মাসিক গোলটেবিল আলোচনা সভা'
    ]
  },
  {
    id: 'museum-club',
    title: 'বাংলাদেশ শিক্ষা জাদুঘর ও টিচার্স ক্লাব',
    subtitle: 'শিক্ষক পেশাগত ফোরাম',
    description: 'শিক্ষাতত্ত্বের দুর্লভ বৃত্তি, পেশাগত লোকবল এবং বাংলাদেশের ঐতিহাসিক শিক্ষাপদ্ধতি ও স্মারক সংরক্ষণের একটি অনন্য সংগ্রহশালা।',
    icon: Landmark,
    stats: '৪৫০+ প্রাচীন শিক্ষা স্মারক ও পাণ্ডুলিপি',
    activities: [
      'ব্রিটিশ ও পাকিস্তান আমলের বিরল পাঠ্যবই সংরক্ষণ',
      'ঐতিহাসিক তক্তি, দোয়াত-কলম ও পাঠশালার সরঞ্জাম গ্যালারি',
      'অবসরপ্রাপ্ত শিক্ষকদের আড্ডা ও বুদ্ধিবৃত্তিক সান্ধ্য ক্লাব',
      'আন্তর্জাতিক শিক্ষা দিবস ও শিক্ষক সংবর্ধনা উদযাপন'
    ]
  },
  {
    id: 'ict-center',
    title: 'ডিএকেএসএফ আইসিটি সেন্টার',
    subtitle: 'ডিজিটাল স্কিল ল্যাব',
    description: 'গ্রামীণ তরুণদের কম্পিউটার শিক্ষা, ডিজিটাল লিটারেসি, ফ্রিল্যান্সিং বুনিয়াদি প্রশিক্ষণ এবং শিক্ষার্থীদের জন্য বিনামূল্যে ইন্টারনেট এক্সেস।',
    icon: Laptop,
    stats: '৮৫০+ প্রশিক্ষণপ্রাপ্ত তরুণ-তরুণী',
    activities: [
      'কম্পিউটার অফিস অ্যাপ্লিকেশন ও টাইপিং কোর্স',
      'ওয়েব ডেভেলপমেন্ট ও ফ্রিল্যান্সিং ক্যারিয়ার ওরিয়েন্টেশন',
      'শিক্ষার্থীদের জন্য হাই-স্পিড ব্রডব্যান্ড ইন্টারনেট কর্নার',
      'অনলাইন সরকারি সেবাপ্রাপ্তি ও চাকরি আবেদনের বিশেষ সহায়তা কেন্দ্র'
    ]
  },
  {
    id: 'youth-forum',
    title: 'শিক্ষানুরাগী বিশ্বাস যুবসংঘ ও ফোরাম',
    subtitle: 'যুব সমাজ কল্যাণ উইং',
    description: 'তরুণদের নৈতিক চেতনা, মানবতাবাদী চেতনা, ক্রীড়া প্রতিযোগিতা এবং ডিজিটাল ই-বুক ম্যানুয়াল রিসোর্সে সমন্বয় পরিচালিত যুব আন্দোলন।',
    icon: HeartHandshake,
    stats: '২২টি জেলা যুব নেটওয়ার্ক ও স্বেচ্ছাসেবী দল',
    activities: [
      'মাদক ও সামাজিক অবক্ষয় বিরোধী গ্রামীণ যুব প্রচারাভিযান',
      'বার্ষিক ক্রিকেট, ফুটবল ও আন্তঃস্কুল বিতর্ক প্রতিযোগিতা',
      'রক্তদান কর্মসূচি ও প্রাকৃতিক দুর্যোগে জরুরি ত্রাণ তৎপরতা',
      'ক্যাম্পাস অ্যাম্বাসেডর নেটওয়ার্ক ও নেতৃত্ব উন্নয়ন বুটক্যাম্প'
    ]
  },
];

/**
 * Wings & Affiliated Sub-institutions Component.
 * Visualizes 6 core operating branches with bespoke category badges,
 * descriptions, and interactive deep-dive triggers.
 */
export const Wings: React.FC<WingsProps> = ({ onSelectWing }) => {
  return (
    <section 
      id="wings" 
      className="py-12 sm:py-16 lg:py-20 bg-[#FDFBF7] dark:bg-[#0A130E] border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-labelledby="wings-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#8C6A38] dark:text-[#E7BC83] uppercase">
            শিক্ষা ও সমাজসেবামূলক অঙ্গসংগঠন
          </span>
          <h2 
            id="wings-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 mt-1.5 mb-3"
          >
            ফাউন্ডেশনের অঙ্গপ্রতিষ্ঠানসমূহ
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] dark:text-slate-300">
            জ্ঞানচর্চা, নারী উন্নয়ন, আইসিটি প্রশিক্ষণ ও শিক্ষক পেশাগত উন্নয়নে পরিচালিত বিশেষায়িত শাখা
          </p>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WINGS_DATA.map((wing) => {
            const Icon = wing.icon;
            return (
              <div
                key={wing.id}
                className="bg-[#F4F0E8]/70 dark:bg-[#121E17] hover:bg-white dark:hover:bg-[#15231A] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 flex flex-col justify-between transition-all hover:shadow-md hover:border-[#CBD5E1] dark:hover:border-emerald-700/60 group"
              >
                <div>
                  {/* Top Icon & Subtitle Tag */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-md bg-white dark:bg-[#1A2C21] text-[#0D5C3A] dark:text-emerald-400 flex items-center justify-center border border-[#E5DFD3] dark:border-[#283E30] group-hover:bg-[#0D5C3A] dark:group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100 mb-1 group-hover:text-[#0D5C3A] dark:group-hover:text-emerald-300 transition-colors">
                    {wing.title}
                  </h3>

                  {/* Subtitle Badge */}
                  <span className="inline-block text-[11px] sm:text-xs text-[#8C6A38] dark:text-[#E7BC83] font-semibold mb-3">
                    {wing.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed mb-6">
                    {wing.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-[#E5DFD3]/80 dark:border-[#1E2D24] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#52606D] dark:text-slate-400 group-hover:text-[#0D5C3A] dark:group-hover:text-emerald-300 transition-colors">
                    {wing.subtitle}
                  </span>
                  <button
                    onClick={() => onSelectWing(wing)}
                    className="w-7 h-7 rounded-full bg-white dark:bg-[#1A2C21] group-hover:bg-[#0D5C3A] dark:group-hover:bg-emerald-500 group-hover:text-white text-[#1A2E40] dark:text-slate-200 flex items-center justify-center transition-all border border-[#E5DFD3] dark:border-[#283E30] cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0D5C3A]"
                    aria-label={`${wing.title}-এর বিস্তারিত তথ্য দেখুন`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
