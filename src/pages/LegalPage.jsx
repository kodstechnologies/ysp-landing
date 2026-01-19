import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  ShieldCheck,
  FileText,
  Lock,
  Eye,
  Mail,
  UserRoundX,
  ShieldAlert,
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "December 22, 2025";

  // Auto scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100">
      {/* NAVBAR */}
      <Navbar />

      <main className="flex-grow pt-16 sm:pt-20lg:pt-18 pb-10 sm:pb-15 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-slate-900 px-6 py-8 sm:p-10 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">
                <ShieldCheck size={14} /> Trust & Safety
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black italic tracking-tight">
                Privacy Policy
              </h1>

              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <Lock className="absolute -bottom-16 -right-16 text-white/5 w-48 h-48 sm:w-64 sm:h-64 rotate-12" />
          </div>

          <div className="p-5 sm:p-8 md:p-12 space-y-12 sm:space-y-14">
            {/* Introduction */}
            <section>
              <p className="text-slate-600 leading-relaxed italic text-sm sm:text-base">
                Shramik ("we", "our", "us") respects your privacy and is
                committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, share, and safeguard your
                data when you access or use the Shramik website, web platform,
                and related services.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 sm:pb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700">
                  <FileText size={18} />
                </div>
                <h2 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter text-blue-700">
                  1. Information We Collect
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-800">
                    a. Personal Information
                  </h3>
                  <ul className="text-sm text-slate-500 space-y-2 font-medium">
                    <li>• Full name</li>
                    <li>• Mobile number</li>
                    <li>• Email address</li>
                    <li>• Profile image</li>
                    <li>• Address and location (if provided)</li>
                    <li>• Job profile, resume, and skills (Job Seekers)</li>
                    <li>• Company details and job postings (Recruiters)</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-slate-800">
                    b. Usage & Technical Information
                  </h3>
                  <ul className="text-sm text-slate-500 space-y-2 font-medium">
                    <li>• Login timestamps</li>
                    <li>• IP address</li>
                    <li>• Device and browser information</li>
                    <li>• Application usage data</li>
                    <li>• Interaction with jobs and profiles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3 sm:pb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700">
                  <Eye size={18} />
                </div>
                <h2 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter text-blue-700">
                  2. How We Use Your Information
                </h2>
              </div>

              <ul className="text-sm sm:text-base text-slate-600 space-y-2 font-medium">
                <li>• Create and manage user accounts</li>
                <li>• Enable job posting and job applications</li>
                <li>• Share profiles between Job Seekers and Recruiters</li>
                <li>• Facilitate recruitment communication</li>
                <li>• Improve platform performance and security</li>
                <li>• Send important service-related notifications</li>
              </ul>
            </section>

            {/* 3–7 sections unchanged but responsive by inherited styles */}

            {/* Contact */}
            <section className="bg-blue-50 p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] border border-blue-100 space-y-4">
              <div className="flex items-center gap-3 text-blue-900">
                <Mail size={20} />
                <h2 className="text-lg sm:text-xl font-bold italic">
                  Contact Us
                </h2>
              </div>

              <p className="text-blue-800/80 text-sm font-medium">
                For any privacy-related concerns, contact us at:
              </p>

              <span className="block text-blue-700 font-black text-lg sm:text-2xl tracking-tight break-all underline">
                shramikan2025@gmail.com
              </span>
            </section>
          </div>
        </div>

        {/* BACK LINK */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/"
            className="text-slate-400 hover:text-blue-600 font-bold text-sm transition-colors"
          >
            ← Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
