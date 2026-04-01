import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      features: ["Single Pump Station", "Staff Management", "Basic Analytics", "Unlimited QR Transactions"],
      highlight: false
    },
    {
      name: "Professional",
      price: "₹5,999",
      period: "/month",
      features: ["Up to 3 Pump Stations", "Multi-Manager Control", "Advanced Reporting", "Email & SMS Support"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited Stations", "Full System Access", "Dedicated Account Manager", "Custom Integration"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-deep-blue mb-6 tracking-tight">Flexible <span className="text-lochmara">Pricing Plans</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">Simple, transparent pricing that grows with your business needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border ${tier.highlight ? "border-lochmara bg-blue-50/50 ring-4 ring-blue-50" : "border-slate-200 bg-white"} flex flex-col items-center relative overflow-hidden group`}>
              {tier.highlight && <span className="absolute -top-4 bg-lochmara text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">Most Popular</span>}
              <h3 className="text-2xl font-black text-deep-blue mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-deep-blue tracking-tight">{tier.price}</span>
                <span className="text-slate-500 font-bold">{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-10 w-full">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                    <Check size={18} className="text-vibrant-orange" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black transition-all ${tier.highlight ? "bg-vibrant-orange text-white shadow-xl shadow-orange-200 hover:scale-[1.02]" : "bg-deep-blue text-white hover:bg-slate-800"}`}>
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
