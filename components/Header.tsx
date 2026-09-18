'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  BookOpen, 
  FileText, 
  UserPlus, 
  User, 
  Menu, 
  X, 
  Megaphone, 
  GraduationCap,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';

interface HeaderProps {
  onOpenMembershipModal: (type?: 'life' | 'general') => void;
  onOpenWebmailModal: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

/**
 * Header Component for Dr. Abul Kashem Education Foundation (DAKSF).
 * Includes top contact bar, primary navigation with logo, mobile responsive drawer,
 * institutional dark mode toggle, and live institutional announcement ticker.
 */
export const Header: React.FC<HeaderProps> = ({ 
  onOpenMembershipModal, 
  onOpenWebmailModal,
  isDarkMode = false,
  onToggleDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'হোম', href: '#home' },
    { id: 'about', label: 'ফাউন্ডেশন সম্পর্কে', href: '#leadership' },
    { id: 'publications', label: 'প্রকাশনা', href: '#resources' },
    { id: 'institutions', label: 'অঙ্গপ্রতিষ্ঠানসমূহ', href: '#wings' },
    { id: 'members', label: 'আজীবন সদস্য', href: '#membership' },
    { id: 'libraries', label: 'পাঠাগারসমূহ', href: '#timeline' },
    { id: 'contact', label: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <header className="w-full bg-[#FDFBF7] dark:bg-[#0A130E] text-[#21272A] dark:text-[#E2E8F0] border-b border-[#E5DFD3] dark:border-[#1E2D24] sticky top-0 z-40 shadow-xs transition-colors duration-200" role="banner">
      {/* 1. Top Utility Contact Bar */}
      <div 
        className="w-full bg-[#1A2E40] dark:bg-[#060D09] text-white text-xs md:text-sm py-1.5 px-4 sm:px-6 lg:px-8 transition-colors border-b border-slate-700/50 dark:border-emerald-950"
        aria-label="যোগাযোগ ও জরুরি তথ্য বার"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-slate-200">
            <a 
              href="tel:01798866557" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-hidden focus:ring-1 focus:ring-emerald-400 rounded-xs"
              aria-label="হটলাইনে কল করুন: ০১৭৯৮৮৬৬৫৫৭"
            >
              <Phone className="w-3.5 h-3.5 text-[#8ad2a7]" aria-hidden="true" />
              <span>হটলাইন: ০১৭৯৮৮৬৬৫৫৭, ০১৭৯৮৮৬৬৫৫৮</span>
            </a>
            <a 
              href="mailto:qualityeducation2008@gmail.com" 
              className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-hidden focus:ring-1 focus:ring-emerald-400 rounded-xs"
              aria-label="অফিসিয়াল ইমেইল: qualityeducation2008@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-[#8ad2a7]" aria-hidden="true" />
              <span>qualityeducation2008@gmail.com</span>
            </a>
          </div>

          {/* Right quick services */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-300 font-medium">
            <a 
              href="#home" 
              className="hover:text-white transition-colors flex items-center gap-1"
              aria-label="ওয়েবসাইট মূলপাতা"
            >
              <Globe className="w-3 h-3 text-[#8ad2a7]" aria-hidden="true" />
              <span>ওয়েবসাইট</span>
            </a>
            <span className="text-slate-500 select-none">|</span>
            <button 
              onClick={onOpenWebmailModal}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer focus:outline-hidden focus:underline"
              aria-label="ই-লাইব্রেরি পোর্টাল দেখুন"
            >
              <BookOpen className="w-3 h-3 text-[#8ad2a7]" aria-hidden="true" />
              <span>ই-লাইব্রেরি</span>
            </button>
            <span className="text-slate-500 select-none">|</span>
            <span className="text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded-xs border border-emerald-800/60 text-[11px]">
              রেজি. নং: ৬০৪/২০১০
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Foundation Crest & Branding */}
          <a 
            href="#home" 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#0D5C3A] rounded-sm p-0.5 sm:p-1 min-w-0"
            aria-label="ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন - হোমপেজে ফিরুন"
          >
            {/* Crest Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#0D5C3A] text-white flex items-center justify-center shadow-xs shrink-0 border-2 border-[#8C6A38] relative overflow-hidden group-hover:scale-102 transition-transform">
              <div className="absolute inset-0.5 rounded-full border border-emerald-300/40 flex flex-col items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-100" aria-hidden="true" />
                <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-[#E7BC83] uppercase -mt-0.5">DAKSF</span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] sm:text-base md:text-lg lg:text-base xl:text-xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400 leading-tight tracking-tight truncate group-hover:text-[#094229] dark:group-hover:text-emerald-300 transition-colors">
                ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন
              </span>
              <span className="text-[10px] sm:text-xs text-[#4A5568] dark:text-slate-400 font-medium tracking-wide truncate">
                শিক্ষা ফাউন্ডেশন বাংলাদেশ
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 font-medium text-sm text-[#21272A] dark:text-slate-200" aria-label="মূল মেনু">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveNav(item.id)}
                  className={`px-2.5 py-1.5 xl:px-3 xl:py-1.5 rounded-full transition-all text-xs lg:text-[13px] xl:text-[14px] 2xl:text-[15px] whitespace-nowrap ${
                    isActive 
                      ? 'bg-[#004328] dark:bg-[#0E5B37] text-white font-semibold shadow-xs' 
                      : 'text-[#21272A] dark:text-slate-200 hover:text-[#0D5C3A] dark:hover:text-emerald-300 hover:bg-[#F4F0E8] dark:hover:bg-[#15231A]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons (Visible only on desktop lg screens) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Dark Mode Toggle Button */}
            {onToggleDarkMode && (
              <button
                id="header-darkmode-desktop-btn"
                suppressHydrationWarning
                onClick={onToggleDarkMode}
                className="w-9 h-9 rounded-full bg-[#F4F0E8] dark:bg-[#15231A] hover:bg-[#E5DFD3] dark:hover:bg-[#1E3024] text-[#21272A] dark:text-[#E7BC83] border border-[#CBD5E1] dark:border-[#22362A] flex items-center justify-center transition-colors shadow-2xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#004328] shrink-0"
                title={isDarkMode ? "সাধারণ মোড (লাইট) চালু করুন" : "আর্কাইভ রিডিং মোড (ডার্ক) চালু করুন"}
                aria-label={isDarkMode ? "সাধারণ মোড (লাইট) চালু করুন" : "আর্কাইভ রিডিং মোড (ডার্ক) চালু করুন"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 scale-100" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 transition-transform rotate-0 scale-100" aria-hidden="true" />
                )}
              </button>
            )}

            {/* Membership Application CTA */}
            <button
              id="header-membership-btn"
              onClick={() => onOpenMembershipModal('life')}
              className="bg-[#004328] hover:bg-[#094229] dark:bg-[#0E5B37] dark:hover:bg-[#0b482b] text-white font-medium text-xs xl:text-sm px-3 xl:px-4 py-2 rounded-xs inline-flex items-center gap-1.5 shadow-xs transition-all hover:shadow-md cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#004328] whitespace-nowrap"
              aria-label="আজীবন সদস্যপদ আবেদন ফরম খুলুন"
            >
              <UserPlus className="w-4 h-4 text-emerald-200" aria-hidden="true" />
              <span>সদস্য আবেদন</span>
            </button>

            {/* Portal / Member Login */}
            <button
              onClick={onOpenWebmailModal}
              className="w-9 h-9 rounded-full bg-[#1A2E40] dark:bg-[#1E2E25] hover:bg-[#004328] dark:hover:bg-[#0E5B37] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-1 focus:ring-[#1A2E40] shrink-0"
              title="সদস্য ও গবেষক পোর্টাল"
              aria-label="সদস্য ও গবেষক পোর্টাল লগইন"
            >
              <User className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile & Tablet Menu Toggle & Actions */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Tablet Quick Membership CTA */}
            <button
              onClick={() => onOpenMembershipModal('life')}
              className="hidden sm:inline-flex items-center gap-1 bg-[#004328] hover:bg-[#094229] dark:bg-[#0E5B37] text-white text-xs px-2.5 py-1.5 rounded-xs font-medium transition-colors whitespace-nowrap"
              aria-label="সদস্য আবেদন"
            >
              <UserPlus className="w-3.5 h-3.5" aria-hidden="true" />
              <span>আবেদন</span>
            </button>

            {/* Mobile Dark Mode Toggle */}
            {onToggleDarkMode && (
              <button
                id="header-darkmode-mobile-btn"
                suppressHydrationWarning
                onClick={onToggleDarkMode}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F4F0E8] dark:bg-[#15231A] text-[#21272A] dark:text-[#E7BC83] border border-[#CBD5E1] dark:border-[#22362A] flex items-center justify-center transition-colors focus:outline-hidden shrink-0"
                aria-label={isDarkMode ? "লাইট মোডে ফিরুন" : "ডার্ক মোড চালু করুন"}
                title={isDarkMode ? "লাইট মোডে ফিরুন" : "ডার্ক মোড চালু করুন"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
                )}
              </button>
            )}

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              id="header-mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#21272A] dark:text-slate-100 bg-[#F4F0E8] dark:bg-[#15231A] hover:bg-[#E5DFD3] dark:hover:bg-[#1E3024] rounded-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#0D5C3A] border border-[#CBD5E1] dark:border-[#22362A] shrink-0 cursor-pointer"
              aria-label={isMobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1A2E40] dark:text-slate-100" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-[#1A2E40] dark:text-slate-100" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden mt-3 pt-3 border-t border-[#E5DFD3] dark:border-[#1E2D24] bg-[#FDFBF7] dark:bg-[#0F1913] rounded-b-md px-2 py-3 space-y-1.5 shadow-lg"
            role="navigation"
            aria-label="মোবাইল নেভিগেশন মেনু"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-xs text-base font-medium transition-colors ${
                  activeNav === item.id 
                    ? 'bg-[#004328] dark:bg-[#0E5B37] text-white font-semibold' 
                    : 'text-[#21272A] dark:text-slate-200 hover:bg-[#F4F0E8] dark:hover:bg-[#15231A]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E5DFD3] dark:border-[#1E2D24] flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMembershipModal('life');
                }}
                className="w-full bg-[#004328] text-white py-2 px-4 rounded-xs text-center font-medium flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" aria-hidden="true" />
                <span>সদস্যপদ আবেদন</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWebmailModal();
                }}
                className="w-full bg-[#1A2E40] text-white py-2 px-4 rounded-xs text-center font-medium flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" aria-hidden="true" />
                <span>গবেষক ও সদস্য পোর্টাল</span>
              </button>

              {onToggleDarkMode && (
                <button
                  onClick={() => {
                    onToggleDarkMode();
                  }}
                  className="w-full bg-[#F4F0E8] dark:bg-[#15231A] text-[#21272A] dark:text-slate-200 py-2 px-4 rounded-xs text-center font-medium flex items-center justify-center gap-2 border border-[#CBD5E1] dark:border-[#22362A]"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                      <span>সাধারণ লাইট মোড চালু করুন</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-slate-700 dark:text-emerald-300" aria-hidden="true" />
                      <span>আর্কাইভ ডার্ক মোড চালু করুন</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. Official Notice Ticker Bar */}
      <div 
        className="w-full bg-[#F4F0E8] dark:bg-[#0D1711] border-t border-[#E5DFD3] dark:border-[#1E2D24] py-1.5 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm overflow-hidden transition-colors"
        role="region"
        aria-label="জরুরি নোটিশ বুলেটিন"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Notice Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 bg-[#0D5C3A] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-2xs">
              <Megaphone className="w-3.5 h-3.5 animate-pulse text-yellow-300" aria-hidden="true" />
              <span>কেন্দ্রীয় নোটিশ</span>
            </span>
          </div>

          {/* Marquee Ticker Headline (Duplicated for seamless infinite loop) */}
          <div className="overflow-hidden relative flex-1">
            <div className="animate-marquee font-medium text-[#21272A] dark:text-slate-200 hover:cursor-pointer flex items-center gap-12">
              <span className="hover:text-[#0D5C3A] dark:hover:text-emerald-300 transition-colors">
                • ২০২৪-২৫ সেশনের আজীবন সদস্য নিবন্ধনের আবেদন উন্মুক্ত: দেশের ২২টি জেলায় রাষ্ট্রীয় পাঠাগার ও শিক্ষা গবেষণা প্রকল্পে অংশ নিন।
              </span>
              <span className="text-[#8C6A38] dark:text-[#E7BC83] font-semibold">
                • আগামী মাসে যশোর লিয়াজোঁ সেন্টারে কেন্দ্রীয় সাধারণ সভা ও গুণীজন সংবর্ধনা অনুষ্ঠিত হবে।
              </span>
              <span>
                • সুবিধাবঞ্চিত মেধাবী শিক্ষার্থীদের বৃত্তি ও ফ্রি পাঠ্যপুস্তক বিতরণ কর্মসূচি চলমান।
              </span>
              <span className="hover:text-[#0D5C3A] dark:hover:text-emerald-300 transition-colors">
                • ২০২৪-২৫ সেশনের আজীবন সদস্য নিবন্ধনের আবেদন উন্মুক্ত: দেশের ২২টি জেলায় রাষ্ট্রীয় পাঠাগার ও শিক্ষা গবেষণা প্রকল্পে অংশ নিন।
              </span>
              <span className="text-[#8C6A38] dark:text-[#E7BC83] font-semibold">
                • আগামী মাসে যশোর লিয়াজোঁ সেন্টারে কেন্দ্রীয় সাধারণ সভা ও গুণীজন সংবর্ধনা অনুষ্ঠিত হবে।
              </span>
              <span>
                • সুবিধাবঞ্চিত মেধাবী শিক্ষার্থীদের বৃত্তি ও ফ্রি পাঠ্যপুস্তক বিতরণ কর্মসূচি চলমান।
              </span>
            </div>
          </div>

          {/* Registration Tag on the right */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-[#52606D] dark:text-slate-400 font-medium shrink-0 border-l border-[#CBD5E1] dark:border-emerald-900/60 pl-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true"></span>
            <span>নিবন্ধন নং: ৬০৪/২০১০ (সমাজসেবা)</span>
          </div>
        </div>
      </div>
    </header>
  );
};
