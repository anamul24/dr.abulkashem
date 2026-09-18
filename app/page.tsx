'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { Leadership } from '@/components/Leadership';
import { Timeline } from '@/components/Timeline';
import { Wings, WingItem } from '@/components/Wings';
import { Membership } from '@/components/Membership';
import { ResourcesAndLinks } from '@/components/ResourcesAndLinks';
import { ContactAndMap } from '@/components/ContactAndMap';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { 
  MembershipModal, 
  PersonModal, 
  WingModal, 
  MessageModal, 
  WebmailModal 
} from '@/components/Modals';
import { Download, X } from 'lucide-react';

// Theme subscription helper for safe SSR hydration without mismatch
const themeListeners = new Set<() => void>();

function subscribeTheme(callback: () => void) {
  themeListeners.add(callback);
  const handleStorage = () => callback();
  window.addEventListener('storage', handleStorage);
  return () => {
    themeListeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
  };
}

function getThemeSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const saved = localStorage.getItem('dakfs_theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

function getThemeServerSnapshot(): boolean {
  return false;
}

export default function HomePage() {
  // Theme dark mode state (SSR snapshot is false; client re-evaluates cleanly post-hydration)
  const isDarkMode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  // Sync DOM with theme state
  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // In case document access fails
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const next = !getThemeSnapshot();
    try {
      localStorage.setItem('dakfs_theme', next ? 'dark' : 'light');
    } catch {
      // Handle storage exceptions
    }
    try {
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // Handle DOM exceptions
    }
    themeListeners.forEach((listener) => listener());
  };

  // Modal visibility states
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [membershipTier, setMembershipTier] = useState<'life' | 'general'>('life');
  const [selectedPerson, setSelectedPerson] = useState<'kashem' | 'wahiduzzaman' | null>(null);
  const [selectedWing, setSelectedWing] = useState<WingItem | null>(null);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isWebmailOpen, setIsWebmailOpen] = useState(false);

  // Toast notification for downloads
  const [downloadToast, setDownloadToast] = useState<{ title: string; meta: string } | null>(null);

  const handleOpenMembership = (tier: 'life' | 'general' = 'life') => {
    setMembershipTier(tier);
    setIsMembershipOpen(true);
  };

  const handleDownload = (title: string, meta: string) => {
    setDownloadToast({ title, meta });
    setTimeout(() => {
      setDownloadToast(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#0A130E] text-[#21272A] dark:text-[#E2E8F0] selection:bg-[#0D5C3A] selection:text-white font-sans-bn transition-colors duration-200">
      {/* 1. Header with Topbar, Branding, Navigation, Dark Mode Toggle & Announcement Marquee */}
      <Header 
        onOpenMembershipModal={() => handleOpenMembership('life')} 
        onOpenWebmailModal={() => setIsWebmailOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1" role="main">
        {/* 2. Hero Section */}
        <Hero onOpenMembershipModal={() => handleOpenMembership('life')} />

        {/* 3. 4-Column Statistics Impact Bar */}
        <StatsBar />

        {/* 4. Leadership & Inspiration */}
        <Leadership onSelectPerson={(personId) => setSelectedPerson(personId)} />

        {/* 5. Historical Timeline & Milestones */}
        <Timeline />

        {/* 6. Affiliated Wings & Sub-institutions */}
        <Wings onSelectWing={(wing) => setSelectedWing(wing)} />

        {/* 7. Membership Call-to-Action & Tier Cards */}
        <Membership onOpenMembershipModal={(tier) => handleOpenMembership(tier)} />

        {/* 8. National Portals Directory & E-Library Downloads */}
        <ResourcesAndLinks 
          onOpenWebmailModal={() => setIsWebmailOpen(true)}
          onDownloadItem={handleDownload}
        />

        {/* 9. Direct Contact & Cartographic Map */}
        <ContactAndMap onOpenMessageModal={() => setIsMessageOpen(true)} />
      </main>

      {/* 10. Institutional 4-Column Footer */}
      <Footer />

      {/* Floating Scroll to Top Button (appears past Hero section) */}
      <ScrollToTop heroSectionId="home" />

      {/* Interactive Modals */}
      <MembershipModal 
        isOpen={isMembershipOpen}
        initialTier={membershipTier}
        onClose={() => setIsMembershipOpen(false)}
      />

      <PersonModal 
        personId={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

      <WingModal 
        wing={selectedWing}
        onClose={() => setSelectedWing(null)}
      />

      <MessageModal 
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
      />

      <WebmailModal 
        isOpen={isWebmailOpen}
        onClose={() => setIsWebmailOpen(false)}
      />

      {/* Download Feedback Toast (positioned cleanly to avoid overlapping scroll-to-top) */}
      {downloadToast && (
        <div 
          className="fixed bottom-20 right-6 sm:bottom-6 sm:right-20 z-50 bg-[#1A2E40] dark:bg-[#121E17] text-white p-4 rounded-lg shadow-xl border border-slate-700 dark:border-emerald-800/50 flex items-start gap-3 max-w-sm animate-in slide-in-from-bottom-5 duration-300"
          role="status"
          aria-live="polite"
        >
          <div className="p-1 rounded-full bg-[#0D5C3A] text-white shrink-0 mt-0.5">
            <Download className="w-4 h-4 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-emerald-300 block">
              ডাউনলোড শুরু হয়েছে...
            </span>
            <p className="text-xs text-slate-200 truncate">
              {downloadToast.title}
            </p>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              {downloadToast.meta}
            </span>
          </div>
          <button
            onClick={() => setDownloadToast(null)}
            className="text-slate-400 hover:text-white p-1"
            aria-label="বিজ্ঞপ্তি বন্ধ করুন"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
