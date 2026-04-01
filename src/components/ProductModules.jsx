import React from 'react';
import { Layout, Smartphone, UserCog, UserCircle } from 'lucide-react';

export default function ProductModules() {
  const modules = [
    {
      title: "Admin Suite (Web & App)",
      desc: "A powerful dual-platform command center. Use the Web Panel for deep analytics and the Admin Mobile App for 24/7 on-the-go monitoring.",
      icon: <Layout className="w-10 h-10 text-[#007BC9]" />,
      features: ["Web Admin Dashboard", "Pro Admin Mobile App", "Real-time Business Alerts"]
    },
    {
      title: "Manager App",
      desc: "Empower your managers to oversee daily operations, approve staff shifts, and handle local customer issues.",
      icon: <UserCog className="w-10 h-10 text-emerald-500" />,
      features: ["Staff Management", "Local Pump Analytics", "Stock Alerts", "Reward History"]
    },
    {
      title: "Staff App",
      desc: "Fast and reliable tool for fuel attendants. Scan QRs, log transactions, and track their own incentives.",
      icon: <Smartphone className="w-10 h-10 text-orange-500" />,
      features: ["Fast QR Scanning", "Incentive Tracking", "Reward History"]
    },
    {
      title: "Customer App",
      desc: "A seamless experience for fuel buyers. Track reward points, view history, and redeem points at any YSP pump.",
      icon: <UserCircle className="w-10 h-10 text-purple-500" />,
      features: ["Points Wallet", "Transaction History", "Pump Locator"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Comprehensive <span className="text-[#007BC9]">Product Modules</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Our multi-app ecosystem ensures every stakeholder has the right tools to maximize efficiency and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              {/* Usage Badge */}
              <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase ${
                mod.title.includes("Customer") 
                  ? "bg-purple-100 text-purple-600" 
                  : "bg-blue-100 text-[#007BC9]"
              }`}>
                {mod.title.includes("Customer") ? "Public Use" : "Internal Use"}
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-5 bg-white rounded-3xl shadow-sm">
                  {mod.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{mod.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{mod.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {mod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#007BC9]"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
