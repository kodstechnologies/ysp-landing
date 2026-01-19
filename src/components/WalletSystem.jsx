// Path: src/components/WalletSystem.jsx
/**
 * WalletSystem Component - Coin-Based Transaction System
 *
 * This component explains the innovative coin-based wallet system that powers
 * the Shramik platform. It highlights the transparent, secure payment and
 * application process that benefits both recruiters and job seekers.
 *
 * Key Features Explained:
 * - Secure Razorpay-powered payments
 * - Digital wallet for managing coins
 * - Encrypted document and Aadhaar storage
 * - Transparent transaction history
 * - Admin-managed platform for oversight
 *
 * Visual Design:
 * - Blue background to convey trust and security
 * - White text for contrast and readability
 * - Icons and checkmarks for key benefits
 * - Responsive layout with text and visual elements
 */

import React from 'react';
import { Wallet, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

/**
 * WalletSystem Component
 * Details the coin-based transparent job application system.
 */
export default function WalletSystem() {
    return (
        <section className="py-16 sm:py-24 bg-blue-600 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-bold">Transparent Coin-Based Hiring </h2>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Our platform uses a secure wallet system to manage transactions.
                            Recruiters use coins to shortlist, while seekers apply for jobs using coins.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Secure payments powered by Razorpay ",
                                "Wallet system to manage coins and history",
                                "Encrypted storage of Aadhaar and documents "
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl">
                                    <CheckCircle2 className="text-blue-200 shrink-0" size={20} />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl relative">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Database className="text-blue-600" />
                            Admin Managed Platform
                        </h3>
                        <ul className="space-y-4 text-slate-600 text-sm sm:text-base">
                            <li>• Real-time analytics dashboard </li>
                            <li>• Verification of all uploaded documents </li>
                            <li>• Configuration of coin pricing and rules </li>
                            <li>• 24/7 monitoring of job postings and users </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                            <ShieldCheck className="text-green-600" />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                99.9% Targeted Uptime on AWS
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}