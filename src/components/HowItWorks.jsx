import React from 'react';
import { UserPlus, Scan, Droplets, Gift, ArrowDown } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            title: "Customer Registration",
            desc: "Customers register on the platform and get a unique QR code for their vehicle.",
            icon: <UserPlus className="w-8 h-8 text-white" />,
            color: "bg-blue-600",
            role: "Customer Action"
        },
        {
            title: "Scan & Fuel",
            desc: "Staff scans the QR code and enters the fuel volume in liters during the transaction.",
            icon: <Scan className="w-8 h-8 text-white" />,
            color: "bg-[#007BC9]",
            role: "Staff Action"
        },
        {
            title: "Automatic Credit",
            desc: "Fuel points are automatically calculated and credited to the customer's wallet instantly.",
            icon: <Droplets className="w-8 h-8 text-white" />,
            color: "bg-emerald-600",
            role: "System Action"
        },
        {
            title: "Redeem Rewards",
            desc: "Customers can redeem their accumulated points for fuel or other exciting rewards at any YSP pump.",
            icon: <Gift className="w-8 h-8 text-white" />,
            color: "bg-orange-500",
            role: "Customer Action"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#007BC9] font-black text-xs uppercase tracking-widest mb-4">
                        Simple Process
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        How It <span className="text-[#007BC9]">Works</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                        Four simple steps to a smarter and more rewarding fueling experience for your customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-slate-100 -z-10"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className={`${step.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform duration-300 relative z-20`}>
                                {step.icon}
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-xs">
                                    {index + 1}
                                </div>
                            </div>
                            <span className="text-[10px] font-black text-[#007BC9] uppercase tracking-widest mb-2 block">{step.role}</span>
                            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#007BC9] transition-colors">{step.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[200px]">{step.desc}</p>
                            {index < steps.length - 1 && <div className="md:hidden my-6"><ArrowDown className="text-slate-300" /></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}