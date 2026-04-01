import React from "react";
import { Gift, ShieldCheck, History, Zap } from "lucide-react";

export default function Benefits() {
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
               <button className="bg-vibrant-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100">
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
