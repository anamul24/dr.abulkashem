'use client';

import React from 'react';
import { MapPin, Users, BookOpen, Layers } from 'lucide-react';

/**
 * Statistics Bar Component for Dr. Abul Kashem Education Foundation.
 * Authoritative 4-column metric banner representing institutional reach,
 * members, libraries, and sub-organizations across Bangladesh.
 */
export const StatsBar: React.FC = () => {
  const stats = [
    {
      id: 'districts',
      value: '২৬+',
      label: 'জেলায় নেটওয়ার্ক',
      subtext: 'সদস্য, ট্রাস্টি ও পাঠাগার পরিচালনা',
      icon: MapPin,
    },
    {
      id: 'members',
      value: '৬০১+',
      label: 'আজীবন ও দাতা সদস্য',
      subtext: 'উচ্চশিক্ষিত ও বুদ্ধিজীবী গবেষক',
      icon: Users,
    },
    {
      id: 'libraries',
      value: '১৯টি',
      label: 'সক্রিয় গ্রামীণ পাঠাগার',
      subtext: 'তথ্য ও জ্ঞানচর্চার বাতিঘর',
      icon: BookOpen,
    },
    {
      id: 'institutions',
      value: '১৫+',
      label: 'অঙ্গপ্রতিষ্ঠান ও ফোরাম',
      subtext: 'জাদুঘর, আইসিটি ও যুবসংগঠন',
      icon: Layers,
    },
  ];

  return (
    <section 
      className="w-full bg-[#FDFBF7] dark:bg-[#0A130E] py-6 sm:py-8 border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-label="ফাউন্ডেশনের সামগ্রিক পরিসংখ্যান ও প্রভাব"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id}
                className="bg-[#F4F0E8]/70 dark:bg-[#121E17] hover:bg-[#F4F0E8] dark:hover:bg-[#15231A] p-5 sm:p-6 rounded-lg border border-[#E5DFD3] dark:border-[#22362A] transition-all hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 tracking-tight group-hover:scale-103 transition-transform">
                    {stat.value}
                  </span>
                  <div className="p-2 rounded-xs bg-[#E8F3ED] dark:bg-[#1A2C21] text-[#0D5C3A] dark:text-emerald-400 group-hover:bg-[#0D5C3A] dark:group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A2E40] dark:text-slate-100 mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#52606D] dark:text-slate-300 leading-snug">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
