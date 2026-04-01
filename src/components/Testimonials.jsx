import React from "react";
import { Star, Quote, Smartphone, Fuel, Wallet, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      step: "Step 1: Scan QR",
      name: "Rahul Sharma",
      role: "Frequent Traveler",
      content: "I simply scanned the QR code on the pump using the YSP app. It instantly recognized my vehicle and I was ready to go. No more waiting!",
      stars: 5,
      icon: <Smartphone size={24} className="text-[#007BC9]" />
    },
    {
      step: "Step 2: Log Fuel",
      name: "Priya Patel",
      role: "Daily Commuter",
      content: "After the staff filled the tank, the transaction liters appeared on my phone in real-time. I just confirmed it and the receipt was saved digitally.",
      stars: 5,
      icon: <Fuel size={24} className="text-[#007BC9]" />
    },
    {
      step: "Step 3: Earn Points",
      name: "Aniket Gupta",
      role: "Vehicle Owner",
      content: "My rewards wallet was credited instantly after the purchase! I didn't have to do anything manually. The easiest way to save on every liter.",
      stars: 5,
      icon: <Wallet size={24} className="text-[#007BC9]" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#007BC9] font-black text-xs uppercase tracking-widest mb-4">
             Customer Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">How our <span className="text-[#007BC9]">Users Buy Fuel</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">Follow the simple 3-step process our customers use to experience a smarter, digital fuel purchase.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative mb-8 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, si) => <Star key={si} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-[10px] font-black text-[#007BC9] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{t.step}</span>
              </div>

              <div className="mb-8 p-4 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#007BC9]">
                 {t.icon}
              </div>

              <p className="text-slate-600 font-medium leading-relaxed italic mb-10 relative z-10 text-lg">"{t.content}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#007BC9] flex items-center justify-center text-white font-black text-lg">{t.name.charAt(0)}</div>
                <div>
                  <h4 className="text-slate-900 font-black tracking-tight">{t.name}</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">{t.role}</p>
                </div>
                <CheckCircle2 size={24} className="ml-auto text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
