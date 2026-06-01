import React, { useState } from "react";
import { ArrowRight, Gift, Smartphone, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function CTA() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="py-24 bg-deep-blue relative overflow-hidden">
      {/* Launch Popup */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="bg-white text-deep-blue px-8 py-8 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center gap-4 animate-splash-fade-in relative max-w-sm w-full cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
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
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-4">Thank you</p>
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
