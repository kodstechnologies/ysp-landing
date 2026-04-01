import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  Mail,
  Database,
  ShieldAlert,
  Fingerprint
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "April 01, 2026";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 px-4 pt-10">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Banner */}
        <div className="bg-lochmara px-8 py-12 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-black uppercase tracking-widest leading-none">
              <ShieldCheck size={14} className="text-golden-yellow" /> Trust & Safety
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-sm font-medium opacity-90">
              Last Updated: {lastUpdated}
            </p>
          </div>
          <Lock className="absolute -bottom-16 -right-16 text-white/10 w-64 h-64 rotate-12" />
        </div>

        <div className="p-8 md:p-12 space-y-16">
          {/* 1. Introduction */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#007BC9]">
                <Fingerprint size={20} />
              </div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-[#007BC9]">
                1. Introduction
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              YSP Fuel Plus (“we”, “our”, “us”) operates a digital loyalty and transaction management platform for petrol pumps, including Admin Web Panel and Mobile Applications for Managers, Staff, and Customers. This Privacy Policy explains how we collect, use, store, and protect user data when using our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-vibrant-orange">
                <Database size={20} />
              </div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-deep-blue border-l-4 border-vibrant-orange pl-3">
                2. Information We Collect
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest">Personal & Transactional</h3>
                <ul className="space-y-3 text-slate-500 font-medium text-sm">
                  <li className="flex gap-2"><span>•</span> Full Name, Mobile Number, Email</li>
                  <li className="flex gap-2"><span>•</span> Vehicle Number & Address Details</li>
                  <li className="flex gap-2"><span>•</span> Fuel Quantity & Reward Points</li>
                  <li className="flex gap-2"><span>•</span> Transaction Timestamps</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest">Technical & Media</h3>
                <ul className="space-y-3 text-slate-500 font-medium text-sm">
                  <li className="flex gap-2"><span>•</span> Device Type, OS & IP Address</li>
                  <li className="flex gap-2"><span>•</span> App Usage Logs & Camera Access</li>
                  <li className="flex gap-2"><span>•</span> Fuel Meter Images (Staff Uploads)</li>
                  <li className="flex gap-2"><span>•</span> QR Code Scans & Generated IDs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#007BC9]">
                <Eye size={20} />
              </div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-[#007BC9]">
                3. How We Use Information
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-slate-600 font-medium text-sm">
              <li className="flex gap-2"><span>•</span> Manage accounts and loyalty profiles</li>
              <li className="flex gap-2"><span>•</span> Calculate and credit reward points</li>
              <li className="flex gap-2"><span>•</span> Verify fuel transactions via meter images</li>
              <li className="flex gap-2"><span>•</span> Provide real-time analytics to owners</li>
              <li className="flex gap-2"><span>•</span> Prevent fraud and unauthorized access</li>
              <li className="flex gap-2"><span>•</span> Improve app performance and features</li>
            </ul>
          </section>

          {/* 4. Data Protection & Sharing */}
          <section className="space-y-6">
             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#007BC9]">
                <ShieldAlert size={20} />
              </div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-[#007BC9]">
                4. Data Security & Sharing
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed font-medium">
              We implement industry-standard encryption and security measures. We only share data with Pump Owners for transaction verification and with third-party providers required for SMS/Email notifications. We never sell your personal data to advertisers.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 space-y-6">
            <div className="flex items-center gap-3 text-[#007BC9]">
              <Mail size={24} />
              <h2 className="text-xl font-black italic uppercase tracking-tight">
                Contact Us
              </h2>
            </div>
            <p className="text-slate-600 font-medium">
              For any privacy-related concerns or data inquiries, please contact our support team at:
            </p>
            <span className="block text-[#007BC9] font-black text-2xl sm:text-3xl tracking-tighter break-all underline decoration-2 underline-offset-8">
              yspfuelplus@gmail.com
            </span>
          </section>
        </div>
      </div>

      {/* BACK LINK */}
      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-vibrant-orange font-bold text-sm transition-all hover:gap-4"
        >
          <FileText size={16} /> Return to Home Platform
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
