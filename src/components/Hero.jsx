import React, { useState } from "react";
import { ArrowRight, Play, CheckCircle2, QrCode, Smartphone, X } from "lucide-react";
import adminPanel from "../assets/admin-panel.jpg";
import mobilePreview from "../assets/mobile-preview.png";
import managerdashboard from "../assets/manager-dashboard.jpeg";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
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

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#007BC9] font-bold text-sm animate-fade-in">
              <QrCode size={16} />
              <span>The Future of Fuel Loyalty</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Smart Fuel Loyalty & <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lochmara to-vibrant-orange">
                Internal Management
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              A comprehensive <strong>Internal Management System</strong> for your station staff, seamlessly integrated with a powerful <strong>Public Loyalty App</strong> for your customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setShowPopup(true)}
                className="w-full sm:w-auto bg-vibrant-orange text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-orange-200 hover:shadow-orange-300 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                Get Started
                <ArrowRight size={20} />
              </button>
              {/* <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-lg">
                <Play size={20} className="text-[#007BC9] fill-[#007BC9]" />
                Request Demo
              </button> */}
            </div>

            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                "Internal Control Suite",
                "Public Rewards App",
                "Global Insight Dashboard"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                  <CheckCircle2 size={18} className="text-golden-yellow" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative">
            {/* Dashboard Preview Wrapper */}
            <div className="relative z-20 transform lg:translate-x-2 lg:translate-y-6 lg:scale-115 shadow-2xl rounded-3xl overflow-hidden border-8 border-slate-100 bg-white transition-all duration-700 hover:scale-[1.18] hover:rotate-1">
              <img
                src={adminPanel}
                alt="YSP Fuel Plus Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Mobile Mockup Overlay */}
            <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 z-30 w-[40%] md:w-1/3 min-w-[140px] md:min-w-[200px] transform -rotate-6">
              <div className="relative shadow-[20px_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] border-[6px] border-slate-900 overflow-hidden bg-slate-900">
                <img
                  src={managerdashboard}
                  alt="Mobile App"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
