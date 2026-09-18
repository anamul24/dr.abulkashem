import type {Metadata} from 'next';
import { Hind_Siliguri, Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

const notoSerifBengali = Noto_Serif_Bengali({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-noto-serif-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন | DAKSF - শিক্ষা ফাউন্ডেশন বাংলাদেশ',
  description:
    'মেধা, নৈতিকতা ও তৃণমূল শিক্ষার মানোন্নয়নে নিবেদিত একটি অগ্রণী সামাজিক গবেষণা উদ্যোগ। দেশের ৫টি জেলায় ১৯টি গণপাঠাগার, ৪টি যুব সংগঠন ও শিক্ষা জাদুঘরের এক মহতী নেটওয়ার্ক।',
  openGraph: {
    title: 'ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন | DAKSF',
    description:
      'মেধা, নৈতিকতা ও তৃণমূল শিক্ষার মানোন্নয়নে নিবেদিত জাতীয় শিক্ষা ও গবেষণা ফাউন্ডেশন।',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ডা. আবুল কাশেম শিক্ষা ফাউন্ডেশন | DAKSF',
    description:
      'মেধা, নৈতিকতা ও তৃণমূল শিক্ষার মানোন্নয়নে নিবেদিত জাতীয় শিক্ষা ও গবেষণা ফাউন্ডেশন।',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html 
      lang="bn" 
      suppressHydrationWarning 
      className={`scroll-smooth ${hindSiliguri.variable} ${notoSerifBengali.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('dakfs_theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#FDFBF7] text-[#21272A] antialiased selection:bg-[#0D5C3A] selection:text-white"
        style={{fontFamily: "var(--font-hind-siliguri), 'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif"}}
      >
        {children}
      </body>
    </html>
  );
}


