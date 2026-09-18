'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Briefcase, 
  CreditCard, 
  Sparkles, 
  Download, 
  LogIn, 
  BookOpen, 
  Send,
  AlertCircle
} from 'lucide-react';
import { WingItem } from './Wings';

// -------------------------------------------------------------
// 1. Membership Application Modal
// -------------------------------------------------------------
interface MembershipModalProps {
  isOpen: boolean;
  initialTier?: 'life' | 'general';
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  initialTier = 'life',
  onClose,
}) => {
  const [tier, setTier] = useState<'life' | 'general'>(initialTier);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    phone: '',
    nid: '',
    profession: '',
    district: 'যশোর',
    address: '',
    paymentMethod: 'bkash',
    transactionId: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `DAKSF-${Date.now().toString().slice(-6)}`;
    setTrackingId(generatedId);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="membership-modal-title"
    >
      <div className="bg-[#FDFBF7] dark:bg-[#0E1A13] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#1A2E40] dark:bg-[#060E09] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <User className="w-5 h-5 text-emerald-300" aria-hidden="true" />
            <h3 id="membership-modal-title" className="text-base sm:text-lg font-bold font-serif-bn">
              ফাউন্ডেশন সদস্যপদ আবেদন ফরম
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 rounded-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="আবেদন ফরম বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F3ED] dark:bg-[#152E21] text-[#0D5C3A] dark:text-emerald-400 flex items-center justify-center mx-auto border-2 border-[#0D5C3A] dark:border-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400">
                আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে!
              </h4>
              <p className="text-sm text-[#4A5568] dark:text-slate-300 max-w-md mx-auto">
                ধন্যবাদ, <strong>{formData.fullName}</strong>। কেন্দ্রীয় সচিবালয় কর্তৃক আপনার তথ্য যাচাইপূর্বক দ্রুত সদস্য আইডি ও সনদপত্র প্রেরণ করা হবে।
              </p>
              
              <div className="bg-[#F4F0E8] dark:bg-[#16251C] p-4 rounded-md border border-[#E5DFD3] dark:border-[#22362A] max-w-xs mx-auto text-xs space-y-1">
                <span className="text-[#8C6A38] dark:text-[#E7BC83] font-bold block">ট্র্যাকিং রেফারেন্স কোড</span>
                <span className="text-base font-mono font-bold text-[#1A2E40] dark:text-white tracking-wider block">
                  {trackingId}
                </span>
                <span className="text-slate-500 dark:text-slate-400 block">সদস্যপদ স্তর: {tier === 'life' ? 'আজীবন সদস্যপদ (৳২,০০৮/-)' : 'সাধারণ সদস্যপদ (৳৩০৮/-)'}</span>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="bg-[#004328] dark:bg-emerald-700 text-white px-6 py-2.5 rounded-xs text-sm font-semibold hover:bg-[#094229] dark:hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  সম্পন্ন করুন
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tier Selection Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#F4F0E8] dark:bg-[#16251C] rounded-md border border-[#E5DFD3] dark:border-[#22362A]">
                <button
                  type="button"
                  onClick={() => setTier('life')}
                  className={`py-2 px-3 rounded-xs text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    tier === 'life'
                      ? 'bg-[#004328] dark:bg-emerald-700 text-white shadow-xs'
                      : 'text-[#1A2E40] dark:text-slate-300 hover:bg-white/60 dark:hover:bg-[#1F3327]'
                  }`}
                  aria-pressed={tier === 'life'}
                >
                  আজীবন সদস্যপদ (৳২,০০৮/-)
                </button>
                <button
                  type="button"
                  onClick={() => setTier('general')}
                  className={`py-2 px-3 rounded-xs text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    tier === 'general'
                      ? 'bg-[#004328] dark:bg-emerald-700 text-white shadow-xs'
                      : 'text-[#1A2E40] dark:text-slate-300 hover:bg-white/60 dark:hover:bg-[#1F3327]'
                  }`}
                  aria-pressed={tier === 'general'}
                >
                  সাধারণ সদস্যপদ (৳৩০৮/-)
                </button>
              </div>

              {/* Personal Info Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="member-fullname" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                    আবেদনকারীর পুরো নাম *
                  </label>
                  <input
                    id="member-fullname"
                    type="text"
                    required
                    placeholder="যেমন: ড. মুহাম্মদ শফিকুর রহমান"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                  />
                </div>

                <div>
                  <label htmlFor="member-fathername" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                    পিতা / স্বামীর নাম *
                  </label>
                  <input
                    id="member-fathername"
                    type="text"
                    required
                    placeholder="পিতার নাম লিখুন"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                  />
                </div>

                <div>
                  <label htmlFor="member-phone" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                    মোবাইল নম্বর *
                  </label>
                  <input
                    id="member-phone"
                    type="tel"
                    required
                    placeholder="০১৭১১-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                  />
                </div>

                <div>
                  <label htmlFor="member-nid" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                    জাতীয় পরিচয়পত্র / জন্মনিবন্ধন
                  </label>
                  <input
                    id="member-nid"
                    type="text"
                    placeholder="১০/১৭ ডিজিটের এনআইডি নং"
                    value={formData.nid}
                    onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                  />
                </div>

                <div>
                  <label htmlFor="member-profession" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                    পেশা ও পদবি *
                  </label>
                  <input
                    id="member-profession"
                    type="text"
                    required
                    placeholder="অধ্যাপক / গবেষক / কর্মকর্তা"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                  />
                </div>

                <div>
                  <label htmlFor="member-district" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                    জেলা *
                  </label>
                  <select
                    id="member-district"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                  >
                    <option value="যশোর">যশোর</option>
                    <option value="মাগুরা">মাগুরা</option>
                    <option value="কুষ্টিয়া">কুষ্টিয়া</option>
                    <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="অন্যান্য">অন্যান্য জেলা</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="member-address" className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  ডাক যোগাযোগের পূর্ণাঙ্গ ঠিকানা *
                </label>
                <textarea
                  id="member-address"
                  rows={2}
                  required
                  placeholder="গ্রাম/রোড, ডাকঘর, উপজেলা, জেলা"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1.5 focus:ring-[#0D5C3A]"
                />
              </div>

              {/* Payment Section */}
              <div className="p-3.5 rounded-md bg-[#F4F0E8] dark:bg-[#16251C] border border-[#E5DFD3] dark:border-[#22362A] space-y-2.5">
                <span className="text-xs font-bold text-[#1A2E40] dark:text-slate-200 block">
                  ফি প্রদানের মাধ্যম ও ট্রানজেকশন তথ্য (ফি: {tier === 'life' ? '৳২,০০৮/-' : '৳৩০৮/-'})
                </span>
                
                <div className="flex flex-wrap gap-4 text-xs text-[#1A2E40] dark:text-slate-300">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bkash"
                      checked={formData.paymentMethod === 'bkash'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'bkash' })}
                      className="text-[#0D5C3A] focus:ring-[#0D5C3A]"
                    />
                    <span>বিকাশ (মার্চেন্ট: ০১৭১১-XXXXXX)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="nagad"
                      checked={formData.paymentMethod === 'nagad'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'nagad' })}
                      className="text-[#0D5C3A] focus:ring-[#0D5C3A]"
                    />
                    <span>নগদ (ব্যক্তিগত)</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                      className="text-[#0D5C3A] focus:ring-[#0D5C3A]"
                    />
                    <span>সোনালী ব্যাংক (অ্যাকাউন্ট নং: XXXX)</span>
                  </label>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="পেমেন্ট ট্রানজেকশন আইডি (TrxID) / ব্যাংক রসিদ নং"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                    className="w-full text-xs px-3 py-1.5 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:outline-hidden focus:ring-1 focus:ring-[#0D5C3A]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] text-xs font-semibold text-[#52606D] dark:text-slate-300 hover:bg-[#F4F0E8] dark:hover:bg-[#1B2D22] transition-colors cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="bg-[#004328] hover:bg-[#094229] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-6 py-2 rounded-xs text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  আবেদন জমা দিন
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};


// -------------------------------------------------------------
// 2. Founder / Leader Biography Modal
// -------------------------------------------------------------
interface PersonModalProps {
  personId: 'kashem' | 'wahiduzzaman' | null;
  onClose: () => void;
}

export const PersonModal: React.FC<PersonModalProps> = ({ personId, onClose }) => {
  if (!personId) return null;

  const person = personId === 'kashem' ? {
    name: 'মরহুম ডা. আবুল কাশেম বিশ্বাস',
    title: 'বিশিষ্ট শিক্ষাবিদ, চিকিৎসক ও প্রথিতযশা সমাজসেবক',
    badge: 'চিরন্তন অনুপ্রেরণা ও স্মারক ব্যক্তিত্ব',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    bio: [
      'মাগুরা জেলার আড়পাড়া গ্রামের এক সম্ভ্রান্ত শিক্ষানুরাগী পরিবারে জন্মগ্রহণ করেন মরহুম ডা. আবুল কাশেম বিশ্বাস। তৎকালীন সমাজে চিকিৎসা ও শিক্ষার অপ্রতুলতার দিনে তিনি প্রত্যন্ত গ্রামীণ জনগোষ্ঠীর পাশে দাঁড়িয়েছিলেন এক অকৃত্রিম সেবক হিসেবে।',
      'বিনামূল্যে দরিদ্র রোগীদের ঔষধ বিতরণ, অসচ্ছল শিক্ষার্থীদের পড়াশোনার ব্যয়ভার বহন এবং গ্রামীণ শিক্ষাপ্রতিষ্ঠান প্রতিষ্ঠায় তিনি জীবনের বড় অংশ উৎসর্গ করেন।',
      'তাঁর তিরোধানের পর তাঁর আদর্শ, নৈতিকতা ও সমাজচিন্তাকে প্রজন্ম পরম্পরায় বাঁচিয়ে রাখার লক্ষ্যেই প্রতিষ্ঠা করা হয় ‘ডা. আবুল কাশেম স্মৃতি পাঠাগার’ যা আজকের এই মহীরূহ শিক্ষা ফাউন্ডেশনে রূপ লাভ করেছে।'
    ],
    milestones: [
      'তৃণমূল গ্রামীণ চিকিৎসা কেন্দ্রের প্রতিষ্ঠাতা',
      'আড়পাড়া শিক্ষা বিস্তারে প্রাথমিক পাঠশালা সম্প্রসারণে অবদান',
      'ফাউন্ডেশনের মূল চেতনার অগ্রদূত'
    ]
  } : {
    name: 'বিশ্বাস মোহাম্মদ ওয়াহিদুজ্জামান',
    title: 'বিশিষ্ট গবেষক ও সাবেক জেলা শিক্ষা কর্মকর্তা পরিদর্শক',
    badge: 'প্রতিষ্ঠাতা ও প্রধান উদ্যোক্তা',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: [
      'বিশ্বাস মোহাম্মদ ওয়াহিদুজ্জামান বাংলাদেশ সরকারের প্রাথমিক ও মাধ্যমিক শিক্ষা বিভাগে দীর্ঘ তিন দশকের বেশি সময় সুনামের সাথে দায়িত্ব পালন করেন। মাঠপর্যায়ে জেলা সহকারী পরিদর্শক ও শিক্ষা কর্মকর্তা হিসেবে তিনি অবলোকন করেন গ্রামীণ জনপদে বইপড়ার তীব্র সংকট।',
      '২০০২ সালে মাগুরার আড়পাড়া প্রাথমিক বিদ্যালয় শহীদ মিনারের পাদদেশে শপথ গ্রহণের মাধ্যমে তিনি গ্রামীণ গণপাঠাগার আন্দোলন শুরু করেন। নিজের অবসরকালীন তহবিল এবং ব্যক্তিগত শ্রম দিয়ে গড়ে তোলেন এই গবেষণাধর্মী প্রতিষ্ঠান।',
      'তাঁর দূরদর্শী নেতৃত্বে ২০১০ সালে সমাজসেবা অধিদপ্তরের সরকারি নিবন্ধন (নং: ৬০৪/২০১০) অর্জিত হয় এবং পরবর্তীতে কুষ্টিয়া, যশোর, ঝিনাইদহসহ সমগ্র অঞ্চলে ১৯টি পাঠাগার এবং ৬টি বিশেষায়িত গবেষণা প্রতিষ্ঠান প্রতিষ্ঠা লাভ করে।'
    ],
    milestones: [
      'সাবেক জেলা শিক্ষা কর্মকর্তা ও শিক্ষানীতি গবেষক',
      '১৯টি গ্রামীণ গণপাঠাগারের প্রধান রূপকার',
      'শিক্ষা সংস্কার ও পাঠাভ্যাস আন্দোলনের জাতীয় পদক প্রত্যাশী'
    ]
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="person-modal-title"
    >
      <div className="bg-[#FDFBF7] dark:bg-[#0E1A13] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#1A2E40] dark:bg-[#060E09] text-white flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-300">
            {person.badge}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            {/* Archival Portrait Frame (Blank / Placeholder) */}
            <div 
              className="relative w-32 h-40 rounded-md bg-[#F8F6F0] dark:bg-[#15231A] border-2 border-dashed border-[#CBD5E1] dark:border-[#283E30] shrink-0 shadow-xs flex flex-col items-center justify-center p-3 text-center"
              role="img"
              aria-label={`${person.name} প্রতিকৃতি ফ্রেম`}
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1C2F23] border border-[#E5DFD3] dark:border-[#2B4233] flex items-center justify-center text-[#8C6A38] dark:text-[#E7BC83] mb-2 shadow-2xs">
                <User className="w-6 h-6 text-[#8C6A38] dark:text-[#E7BC83]" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold text-[#1A2E40] dark:text-slate-200 leading-tight">স্মারক প্রতিকৃতি</span>
              <span className="text-[10px] text-[#8C6A38] dark:text-[#E7BC83] bg-white dark:bg-[#1C2F23] px-2 py-0.5 rounded-full border border-[#E5DFD3] dark:border-[#2B4233] mt-2">
                সংযোজন প্রক্রিয়াধীন
              </span>
            </div>
            <div className="text-center sm:text-left">
              <h3 id="person-modal-title" className="text-xl sm:text-2xl font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400">
                {person.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#1A2E40] dark:text-slate-200 mt-1 mb-2">
                {person.title}
              </p>
              <div className="inline-block bg-[#E8F3ED] dark:bg-[#162B1F] text-[#0D5C3A] dark:text-emerald-300 border border-[#C5E1D1] dark:border-[#254834] text-xs px-2.5 py-0.5 rounded-full font-medium">
                শিক্ষা ফাউন্ডেশন বাংলাদেশ
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-3 text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed">
            {person.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Key Milestones */}
          <div className="p-4 rounded-md bg-[#F4F0E8] dark:bg-[#16251C] border border-[#E5DFD3] dark:border-[#22362A]">
            <h4 className="text-xs font-bold text-[#1A2E40] dark:text-slate-200 uppercase tracking-wider mb-2">
              ঐতিহাসিক অর্জন ও অবদান
            </h4>
            <ul className="space-y-1.5 text-xs text-[#333E48] dark:text-slate-300">
              {person.milestones.map((m, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A] dark:text-emerald-400 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F4F0E8] dark:bg-[#121E17] border-t border-[#E5DFD3] dark:border-[#22362A] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#004328] hover:bg-[#094229] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-5 py-1.5 rounded-xs text-xs font-semibold transition-colors cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};


// -------------------------------------------------------------
// 3. Wing / Sub-institution Detail Modal
// -------------------------------------------------------------
interface WingModalProps {
  wing: WingItem | null;
  onClose: () => void;
}

export const WingModal: React.FC<WingModalProps> = ({ wing, onClose }) => {
  if (!wing) return null;
  const Icon = wing.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wing-modal-title"
    >
      <div className="bg-[#FDFBF7] dark:bg-[#0E1A13] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0D5C3A] dark:bg-[#062415] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-xs bg-white/10">
              <Icon className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 id="wing-modal-title" className="text-base sm:text-lg font-bold font-serif-bn leading-tight">
                {wing.title}
              </h3>
              <span className="text-[11px] text-emerald-200 block">{wing.subtitle}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-[#4A5568] dark:text-slate-300 leading-relaxed">
            {wing.description}
          </p>

          {wing.stats && (
            <div className="p-3 bg-[#E8F3ED] dark:bg-[#162B1F] rounded-md border border-[#C5E1D1] dark:border-[#254834] text-xs font-semibold text-[#0D5C3A] dark:text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0D5C3A] dark:text-emerald-400" />
              <span>বর্তমান প্রভাব ও পরিসংখ্যান: {wing.stats}</span>
            </div>
          )}

          {wing.activities && (
            <div>
              <h4 className="text-xs font-bold text-[#1A2E40] dark:text-slate-200 uppercase tracking-wider mb-2">
                নিয়মিত কার্যক্রম ও সেবাসমূহ
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#333E48] dark:text-slate-300">
                {wing.activities.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#F4F0E8]/60 dark:bg-[#16251C] p-2 rounded-xs border border-[#E5DFD3] dark:border-[#22362A]">
                    <span className="text-[#0D5C3A] dark:text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F4F0E8] dark:bg-[#121E17] border-t border-[#E5DFD3] dark:border-[#22362A] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#004328] hover:bg-[#094229] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-5 py-1.5 rounded-xs text-xs font-semibold transition-colors cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};


// -------------------------------------------------------------
// 4. Send Message / Contact Modal
// -------------------------------------------------------------
interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="msg-modal-title"
    >
      <div className="bg-[#FDFBF7] dark:bg-[#0E1A13] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#1A2E40] dark:bg-[#060E09] text-white flex items-center justify-between">
          <h3 id="msg-modal-title" className="text-base sm:text-lg font-bold font-serif-bn">
            লিয়াজোঁ অফিসে বার্তা পাঠান
          </h3>
          <button
            onClick={reset}
            className="p-1 rounded-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {sent ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#0D5C3A] dark:text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold font-serif-bn text-[#0D5C3A] dark:text-emerald-400">
                বার্তাটি সফলভাবে পাঠানো হয়েছে!
              </h4>
              <p className="text-xs text-[#52606D] dark:text-slate-300">
                আমাদের যশোর লিয়াজোঁ সেন্টারের কর্মকর্তা শিগগিরই আপনার সাথে যোগাযোগ করবেন।
              </p>
              <button
                onClick={reset}
                className="mt-4 bg-[#004328] dark:bg-emerald-700 hover:bg-[#094229] dark:hover:bg-emerald-600 text-white px-5 py-2 rounded-xs text-xs font-semibold cursor-pointer"
              >
                ঠিক আছে
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  আপনার নাম *
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার নাম লিখুন"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:ring-1 focus:ring-[#0D5C3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  ফোন নম্বর *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="০১৭XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:ring-1 focus:ring-[#0D5C3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  বিষয়
                </label>
                <input
                  type="text"
                  placeholder="যেমন: পাঠাগার স্থাপন সহায়তা / অনুদান"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:ring-1 focus:ring-[#0D5C3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  বার্তা *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="আপনার বিস্তারিত অনুসন্ধান বা বার্তা লিখুন..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full text-xs px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:ring-1 focus:ring-[#0D5C3A]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={reset}
                  className="px-4 py-1.5 text-xs text-slate-600 dark:text-slate-300 border border-[#CBD5E1] dark:border-[#283E30] rounded-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-[#1B2D22]"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="bg-[#004328] hover:bg-[#094229] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-5 py-1.5 text-xs font-semibold rounded-xs shadow-xs cursor-pointer"
                >
                  পাঠিয়ে দিন
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};


// -------------------------------------------------------------
// 5. Official Webmail Login Modal
// -------------------------------------------------------------
interface WebmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebmailModal: React.FC<WebmailModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [authMsg, setAuthMsg] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthMsg(true);
    setTimeout(() => {
      setAuthMsg(false);
      onClose();
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="webmail-modal-title"
    >
      <div className="bg-[#FDFBF7] dark:bg-[#0E1A13] rounded-lg border border-[#E5DFD3] dark:border-[#22362A] shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-4 bg-[#1A2E40] dark:bg-[#060E09] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogIn className="w-4 h-4 text-emerald-300" />
            <h3 id="webmail-modal-title" className="text-sm sm:text-base font-bold font-serif-bn">
              অফিসিয়াল ওয়েবমেইল লগইন
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {authMsg ? (
            <div className="text-center py-4 space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#0D5C3A] dark:text-emerald-400 mx-auto animate-bounce" />
              <p className="text-xs font-semibold text-[#0D5C3A] dark:text-emerald-400">
                লগইন সফল! রিডাইরেক্ট করা হচ্ছে...
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  প্রাতিষ্ঠানিক ইমেইল
                </label>
                <input
                  type="email"
                  required
                  placeholder="officer@daksf.org.bd"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:ring-1 focus:ring-[#0D5C3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A2E40] dark:text-slate-200 mb-1">
                  পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xs border border-[#CBD5E1] dark:border-[#283E30] bg-white dark:bg-[#15231A] text-[#1A2E40] dark:text-slate-100 focus:ring-1 focus:ring-[#0D5C3A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#004328] hover:bg-[#094229] dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white py-2 text-xs font-semibold rounded-xs shadow-xs cursor-pointer"
                >
                  প্রবেশ করুন
                </button>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2">
                শুধু অনুমোদিত প্রশাসনিক কর্মকর্তা ও গবেষকদের ব্যবহারের জন্য।
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
