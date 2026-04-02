import React, { useState, useEffect } from "react";
import { ArrowRight, Gift, Smartphone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function CTA() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section className="py-24 bg-deep-blue relative overflow-hidden">
      {/* Launch Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 pointer-events-none">
          <div className="bg-white text-deep-blue px-8 py-6 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center gap-4 animate-splash-fade-in pointer-events-auto">
            <div className="w-12 h-12 bg-vibrant-orange rounded-full flex items-center justify-center">
              <Smartphone className="text-white" size={24} />
            </div>
            <div className="text-center">
              <p className="text-lg font-black tracking-tight">The app will launch soon on Google play store.</p>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mt-1">Thank you</p>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-lochmara"></div>
      <div className="absolute top-0 right-0 w-[50%] h-full bg-white/10 -skew-x-12 transform translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md mb-8 text-sm font-black uppercase tracking-widest">
          <Gift size={16} /> Empower Your Fueling
        </div>
        
        <h2 className="text-4xl sm:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
          Start Earning Rewards <br /> 
          <span className="text-golden-yellow">On Every Liter</span>
        </h2>
        
        <p className="text-blue-50 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium opacity-90 leading-relaxed">
          Join thousands of smart drivers using YSP Fuel Plus to track their spending and earn instant rewards at any station.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setShowPopup(true)}
            className="group w-full sm:w-auto bg-vibrant-orange text-white px-12 py-5 rounded-3xl font-black shadow-2xl hover:shadow-orange-900/40 hover:-translate-y-1 transition-all text-xl flex items-center justify-center gap-3"
          >
            <Smartphone size={24} />
            Download App <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <HashLink 
            to="/#how-it-works" 
            className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white px-12 py-5 rounded-3xl font-bold hover:bg-white/10 transition-all text-xl backdrop-blur-sm"
          >
            How it Works
          </HashLink>
        </div>
        
        <p className="mt-12 text-blue-200/60 font-bold text-sm tracking-widest uppercase">
          Available on iOS & Android
        </p>
      </div>
    </section>
  );
}
