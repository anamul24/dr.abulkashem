'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  /** Optional offset in pixels past which the button appears. Default is past hero section */
  heroSectionId?: string;
}

/**
 * Floating Scroll-To-Top Button Component.
 * Appears dynamically when the user scrolls down past the Hero section,
 * providing a high-contrast, accessible way to smoothly return to the top.
 */
export const ScrollToTop: React.FC<ScrollToTopProps> = ({ 
  heroSectionId = 'home' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById(heroSectionId);
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Button appears when the bottom of the hero section scrolls above the top of viewport
        setIsVisible(rect.bottom <= 60);
      } else {
        // Fallback if hero id is not present
        setIsVisible(window.scrollY > 420);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroSectionId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      id="floating-scroll-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#004328] hover:bg-[#094229] dark:bg-[#107C4A] dark:hover:bg-[#0D653C] text-white shadow-xl border-2 border-[#8C6A38] dark:border-[#E7BC83] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-[#004328] group"
      aria-label="পৃষ্ঠার শীর্ষে ফিরে যান"
      title="পৃষ্ঠার শীর্ষে ফিরে যান (Scroll to Top)"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#E7BC83] group-hover:text-white group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
      <span className="sr-only">পৃষ্ঠার শীর্ষে ফিরে যান</span>
    </button>
  );
};
