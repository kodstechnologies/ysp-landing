import React, { useState } from "react";
import { Gift, ShieldCheck, History, Zap, Smartphone, X } from "lucide-react";

export default function Benefits() {
  const [showPopup, setShowPopup] = useState(false);
  const benefits = [
    {
      title: "Rewards on Every Liter",
      desc: "Earn loyalty points instantly for every liter of fuel you purchase. The more you fuel, the more you save.",
      icon: <Gift className="w-10 h-10 text-white" />,
      color: "bg-vibrant-orange"
    },
    {
      title: "Digital Purchase History",
      desc: "Instant digital receipts for every transaction. Track your fuel spending and point balance in real-time.",
      icon: <History className="w-10 h-10 text-white" />,
      color: "bg-lochmara"
    },
    {
      title: "Seamless QR Check-in",
      desc: "No physical cards needed. Just scan the pump's QR code to link your vehicle and log your transaction in seconds.",
      icon: <Zap className="w-10 h-10 text-white" />,
      color: "bg-golden-yellow"
    },
    {
      title: "Secure & Transparent",
      desc: "Encrypted transaction logging ensures your data is safe and every liter is accounted for with complete transparency.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      color: "bg-deep-blue"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Launch Popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="bg-deep-blue text-white px-8 py-8 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center gap-4 animate-splash-fade-in relative max-w-sm w-full cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white/70 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center">
              <Smartphone className="text-white" size={24} />
            </div>
            <div className="text-center flex flex-col items-center w-full">
              <p className="text-lg font-black tracking-tight leading-snug">The app is now live on Google Play Store!</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.kods.yspfuelplususer"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-vibrant-orange hover:bg-vibrant-orange/90 text-white px-6 py-3 rounded-2xl font-black shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all text-base w-full justify-center"
              >
                Download App
              </a>
              <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] mt-4">Thank you</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-vibrant-orange font-black text-xs uppercase tracking-widest">
              User Benefits
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-deep-blue leading-tight tracking-tight">
              Fuel Smarter with <span className="text-lochmara">YSP Fuel Plus</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Experience the future of fueling. Earn rewards, track your spending, and enjoy a seamless digital experience at every station.
            </p>
            <div className="pt-4">
               <button 
                 onClick={() => setShowPopup(true)}
                 className="bg-vibrant-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100"
               >
                Start Earning Rewards
               </button>
            </div>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
                <div className={`${benefit.color} p-4 rounded-2xl shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900">{benefit.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
