import React from "react";
import { ArrowRight, Gift, Smartphone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function CTA() {
  return (
    <section className="py-24 bg-[#007BC9] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007BC9] to-[#006BB0]"></div>
      <div className="absolute top-0 right-0 w-[50%] h-full bg-white/10 -skew-x-12 transform translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md mb-8 text-sm font-black uppercase tracking-widest">
          <Gift size={16} /> Empower Your Fueling
        </div>
        
        <h2 className="text-4xl sm:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
          Start Earning Rewards <br /> 
          <span className="text-blue-200">On Every Liter</span>
        </h2>
        
        <p className="text-blue-50 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium opacity-90 leading-relaxed">
          Join thousands of smart drivers using YSP Fuel Plus to track their spending and earn instant rewards at any station.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group w-full sm:w-auto bg-white text-[#007BC9] px-12 py-5 rounded-3xl font-black shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all text-xl flex items-center justify-center gap-3">
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
