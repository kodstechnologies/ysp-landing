import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  FileText,
  Scale
} from "lucide-react";

const TermsConditions = () => {
  const lastUpdated = "April 01, 2026";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the YSP Fuel Plus platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services."
    },
    {
      title: "2. Account Registration",
      content: "Users must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account and QR code."
    },
    {
      title: "3. QR Code & Transactions",
      content: "Fuel transactions are logged via QR code scanning. Users must ensure the accuracy of the fuel volume entered by staff at the time of transaction."
    },
    {
      title: "4. Reward Points",
      content: "Points are credited based on fuel volume and current pump policies. Points have no cash value and can only be redeemed for rewards specified within the app."
    },
    {
      title: "5. Prohibited Activities",
      content: "Any attempt to manipulate transaction data, forge QR codes, or misuse the points system will result in immediate account termination."
    },
    {
      title: "6. Limitation of Liability",
      content: "YSP Fuel Plus is a platform facilitator. We are not liable for disputes between pump owners and customers or issues arising from fuel quality."
    },
    {
      title: "7. Governing Law",
      content: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="flex-grow pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-slate-900 px-8 py-12 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white rounded-full text-xs font-black uppercase tracking-widest leading-none">
                <Scale size={14} /> Legal Agreement
              </div>

              <h1 className="text-4xl md:text-6xl font-black italic tracking-tight">
                Terms & <span className="text-[#007BC9]">Conditions</span>
              </h1>

              <p className="text-slate-400 text-sm font-medium">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <Lock className="absolute -bottom-16 -right-16 text-white/5 w-64 h-64 rotate-12" />
          </div>

          <div className="p-8 md:p-12 space-y-12">
            <p className="text-slate-600 leading-relaxed font-bold italic border-l-4 border-[#007BC9] pl-6 py-2">
              Please read these terms carefully before using the YSP Fuel Plus platform. These terms govern your access to and use of our mobile applications and web dashboard.
            </p>

            <div className="grid gap-8">
              {sections.map((section, idx) => (
                <div key={idx} className="group p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#007BC9] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <section className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-[#007BC9]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Questions?</h4>
                  <p className="text-slate-500 font-bold">yspfuelplus@gmail.com</p>
                </div>
              </div>
              <button className="bg-[#007BC9] text-white px-8 py-3 rounded-xl font-black shadow-lg hover:scale-105 transition-all">
                Contact Legal
              </button>
            </section>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#007BC9] font-bold text-sm transition-all hover:gap-4"
          >
            <ArrowRight size={16} className="rotate-180" /> Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
