'use client';

import React, { useState } from 'react';
import { 
  Landmark, 
  BookOpen, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  LogIn,
  AlertCircle
} from 'lucide-react';

interface ResourcesAndLinksProps {
  onOpenWebmailModal: () => void;
  onDownloadItem: (title: string, size: string) => void;
}

/**
 * National Portals Directory & E-Library Publications Component.
 * Displays authoritative links to 8 Bangladesh governmental ministries/portals
 * alongside downloadable research guides and webmail gateway.
 */
export const ResourcesAndLinks: React.FC<ResourcesAndLinksProps> = ({ 
  onOpenWebmailModal,
  onDownloadItem
}) => {
  const officialLinks = [
    { name: 'প্রধানমন্ত্রীর কার্যালয়', url: 'https://pmo.gov.bd' },
    { name: 'শিক্ষা মন্ত্রণালয়', url: 'https://moedu.gov.bd' },
    { name: 'ব্যানবেইস (BANBEIS)', url: 'https://banbeis.gov.bd' },
    { name: 'বোর্ড পরীক্ষার ফলাফল ও আর্কাইভ', url: 'http://www.educationboardresults.gov.bd' },
    { name: 'সমাজকল্যাণ মন্ত্রণালয়', url: 'https://msw.gov.bd' },
    { name: 'তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ', url: 'https://ictd.gov.bd' },
    { name: 'মহিলা ও শিশু বিষয়ক মন্ত্রণালয়', url: 'https://mowca.gov.bd' },
    { name: 'বাংলাদেশ জাতীয় তথ্য বাতায়ন', url: 'https://bangladesh.gov.bd' },
  ];

  const publications = [
    {
      id: 'doc-1',
      title: 'ইনোভেশন অ্যান্ড ডেভেলপমেন্ট ফান্ড ম্যানুয়াল',
      meta: 'PDF • ২.৪ মেগাবাইট',
      type: 'পিডিএফ',
    },
    {
      id: 'doc-2',
      title: 'মাধ্যমিক শিক্ষার উৎকর্ষ ও মূল্যায়ন সহায়িকা',
      meta: 'ই-বুক সংস্করণ • ৩.১ মেগাবাইট',
      type: 'ই-বুক',
    },
    {
      id: 'doc-3',
      title: 'ই-লার্নিং উপকরণ ও ডিজিটাল কনটেন্ট গাইড',
      meta: 'অনুশীলন নীতি / এলএমএস রেফারেন্স',
      type: 'গাইড',
    },
  ];

  return (
    <section 
      id="resources" 
      className="py-12 sm:py-16 bg-[#FDFBF7] dark:bg-[#0A130E] border-b border-[#E5DFD3] dark:border-[#1E2D24] transition-colors duration-200"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: National Government Portals (7 cols) */}
          <div 
            className="lg:col-span-7 bg-[#F4F0E8]/60 dark:bg-[#0F1C15] rounded-lg border border-[#E5DFD3] dark:border-[#1E2D24] p-6 sm:p-7 shadow-2xs"
            role="region"
            aria-label="জাতীয় বাতায়ন ও গুরুত্বপূর্ণ সরকারি লিংক"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E5DFD3] dark:border-[#1E2D24]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xs bg-[#0D5C3A] text-white">
                  <Landmark className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 
                  id="resources-heading"
                  className="text-lg sm:text-xl font-bold font-serif-bn text-[#1A2E40] dark:text-slate-100"
                >
                  জাতীয় বাতায়ন ও গুরুত্বপূর্ণ লিংক
                </h3>
              </div>
              <span className="text-xs text-[#52606D] dark:text-slate-300 font-medium bg-white dark:bg-[#1A2C21] px-2.5 py-1 rounded-xs border border-[#E5DFD3] dark:border-[#283E30]">
                নিয়মিত হালনাগাদকৃত
              </span>
            </div>

            {/* Links 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {officialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#132219] hover:bg-[#FDFBF7] dark:hover:bg-[#1A2E22] p-3 rounded-xs border border-[#E5DFD3] dark:border-[#203426] hover:border-[#CBD5E1] dark:hover:border-emerald-700/60 transition-all flex items-center justify-between gap-2 group text-xs sm:text-sm font-medium text-[#21272A] dark:text-slate-200 hover:text-[#0D5C3A] dark:hover:text-emerald-300 shadow-2xs"
                  aria-label={`${link.name} (নতুন ট্যাবে খুলবে)`}
                >
                  <span className="truncate">{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D5C3A] dark:group-hover:text-emerald-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Block: E-Library & Digital Publications (5 cols) */}
          <div 
            className="lg:col-span-5 bg-white dark:bg-[#121E17] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            role="region"
            aria-label="ই-লাইব্রেরি ও প্রকাশনা ডাউনলোড"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-xs bg-[#8C6A38] dark:bg-[#A37B40] text-white">
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400">
                  ই-লাইব্রেরি ও ডিজিটাল প্রকাশনা
                </h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 mb-5 leading-relaxed">
                গবেষক, শিক্ষক ও শিক্ষার্থীদের জন্য উন্মুক্ত ই-বুক, ইনোভেশন গাইড এবং শিক্ষক ম্যানুয়াল ডাউনলোড করুন।
              </p>

              {/* Publication Download Cards */}
              <div className="space-y-3 mb-6">
                {publications.map((pub) => (
                  <div
                    key={pub.id}
                    className="p-3.5 rounded-md bg-[#FDFBF7] dark:bg-[#18291F] border border-[#E5DFD3] dark:border-[#253C2D] hover:border-[#CBD5E1] dark:hover:border-emerald-700/60 flex items-center justify-between gap-3 transition-colors group"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2 rounded-xs bg-[#E8F3ED] dark:bg-[#1E3628] text-[#0D5C3A] dark:text-emerald-400 shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#1A2E40] dark:text-slate-100 group-hover:text-[#0D5C3A] dark:group-hover:text-emerald-300 transition-colors line-clamp-1">
                          {pub.title}
                        </h4>
                        <span className="text-[11px] text-[#8C6A38] dark:text-[#E7BC83] font-medium block">
                          {pub.meta}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onDownloadItem(pub.title, pub.meta)}
                      className="p-2 rounded-xs bg-white dark:bg-[#1E3628] hover:bg-[#0D5C3A] dark:hover:bg-emerald-600 text-[#1A2E40] dark:text-slate-200 hover:text-white border border-[#CBD5E1] dark:border-[#2B4634] hover:border-[#0D5C3A] transition-colors shrink-0 cursor-pointer shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-[#0D5C3A]"
                      title="ডাউনলোড করুন"
                      aria-label={`${pub.title} ডাউনলোড করুন`}
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Webmail Login CTA */}
            <div className="pt-4 border-t border-[#E5DFD3] dark:border-[#1E2D24] flex items-center justify-between text-xs text-[#52606D] dark:text-slate-400">
              <span className="font-medium">ওয়েবমেইল সার্ভিস সক্রিয়</span>
              <button
                onClick={onOpenWebmailModal}
                className="text-xs font-semibold text-[#0D5C3A] dark:text-emerald-400 hover:text-[#094229] dark:hover:text-emerald-300 inline-flex items-center gap-1.5 group cursor-pointer focus:outline-hidden focus:underline"
                aria-label="অফিসিয়াল ওয়েবমেইল লগইন পোর্টালে যান"
              >
                <span>ওয়েবমেইল লগইন</span>
                <LogIn className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
