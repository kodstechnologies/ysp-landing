import React from "react";
import { ArrowRight, Play, CheckCircle2, QrCode } from "lucide-react";
import adminPanel from "../assets/admin-panel.jpg";
import mobilePreview from "../assets/mobile-preview.png";
import managerdashboard from "../assets/manager-dashboard.jpeg";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
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
              <button className="w-full sm:w-auto bg-vibrant-orange text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-orange-200 hover:shadow-orange-300 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg">
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
            <div className="absolute -bottom-10 -left-10 z-30 w-1/3 min-w-[200px] transform -rotate-6 hidden md:block">
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
