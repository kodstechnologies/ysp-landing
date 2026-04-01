import React from "react";
import { QrCode, TrendingUp, Gift, Users, Layers, Wallet } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <QrCode size={32} className="text-[#007BC9]" />,
      title: "Digital QR Tracking",
      desc: "Simplify fueling with instant QR scans. Log volume and price accurately without manual errors.",
      color: "bg-blue-50"
    },
    {
      icon: <TrendingUp size={32} className="text-emerald-600" />,
      title: "Real-time Monitoring",
      desc: "Track sales and trends via the Web Panel or our dedicated Admin Mobile App for 24/7 business oversight.",
      color: "bg-emerald-50"
    },
    {
      icon: <Gift size={32} className="text-amber-500" />,
      title: "Loyalty Rewards",
      desc: "Retain customers with automated reward points. Simple redemption process for recurring visitors.",
      color: "bg-amber-50"
    },
    {
      icon: <Users size={32} className="text-purple-600" />,
      title: "Staff Management",
      desc: "Assign shifts, track staff performance, and verify fuel meter uploads for complete accountability.",
      color: "bg-purple-50"
    },
    {
      icon: <Layers size={32} className="text-indigo-600" />,
      title: "Multi-Pump Control",
      desc: "Manage multiple petrol pump locations from a single administrative interface with ease.",
      color: "bg-indigo-50"
    },
    {
      icon: <Wallet size={32} className="text-rose-500" />,
      title: "Points Wallet",
      desc: "Customers maintain a secure digital wallet for their reward balance and transaction history.",
      color: "bg-rose-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">Powerful <span className="text-[#007BC9]">Core Features</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">Everything you need to modernize your fuel station operations and boost customer loyalty.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
              <div className={`${
                i === 0 ? "bg-lochmara/10" : 
                i === 1 ? "bg-vibrant-orange/10" : 
                i === 2 ? "bg-golden-yellow/10" : 
                i === 3 ? "bg-lochmara/10" : 
                i === 4 ? "bg-vibrant-orange/10" : "bg-golden-yellow/10"
              } w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(f.icon, { 
                  className: i % 3 === 0 ? "text-lochmara" : i % 3 === 1 ? "text-vibrant-orange" : "text-amber-500" 
                })}
              </div>
              <h3 className="text-2xl font-black text-deep-blue mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}