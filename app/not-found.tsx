import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7] dark:bg-[#07130C] text-[#21272A] dark:text-slate-100 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[#0D5C3A]/10 dark:bg-[#0D5C3A]/30 flex items-center justify-center text-[#0D5C3A] dark:text-emerald-400 mb-4 font-bold text-2xl">
        ৪০৪
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold font-serif-bn mb-2 text-[#0D5C3A] dark:text-emerald-300">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </h1>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mb-6">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা স্থানান্তরিত হয়েছে অথবা মুছে ফেলা হয়েছে।
      </p>
      <Link 
        href="/"
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-[#0D5C3A] hover:bg-[#094229] text-white font-medium text-sm transition-colors shadow-xs"
      >
        হোমপেজে ফিরে যান
      </Link>
    </div>
  );
}
