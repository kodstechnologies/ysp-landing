// Path: src/components/Features.jsx
/**
 * Features Component - Key Platform Capabilities
 *
 * This component showcases the main features and benefits of the Shramik platform.
 * It displays 6 key features in a responsive grid layout:
 *
 * Features Highlighted:
 * 1. Secure Verification - OTP and encrypted document storage
 * 2. Multilingual Support - Kannada, English, Hindi accessibility
 * 3. Coin-Based System - Transparent wallet-based job applications
 * 4. Smart Filtering - Advanced candidate search and filtering
 * 5. Instant Communication - Direct messaging between recruiters and candidates
 * 6. Fast Processing - Quick job posting and application process
 *
 * Each feature includes an icon, title, and description for clear communication.
 */

import React from 'react';
import { ShieldCheck, Globe, Coins, Zap, Search, MessageSquare } from 'lucide-react';

/**
 * Features Section
 * Based on Shramik platform capabilities: Multilingual, Coin-based, and Secure.
 */
export default function Features() {
    // Array of feature objects containing icon, title, and description
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
            title: "Secure Verification",
            desc: "OTP-based authentication and encrypted storage for Aadhaar and documents. "
        },
        {
            icon: <Globe className="w-8 h-8 text-green-600" />,
            title: "Multilingual Support",
            desc: "Accessibility for all with support for Kannada, English, and Hindi. "
        },
        {
            icon: <Coins className="w-8 h-8 text-yellow-500" />,
            title: "Coin-Based System",
            desc: "Transparent job applications and shortlisting using a secure wallet system. "
        },
        {
            icon: <Search className="w-8 h-8 text-purple-600" />,
            title: "Smart Filtering",
            desc: "Recruiters can filter candidates by skills, experience, and specialization. "
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
            title: "Secure Chat",
            desc: "Initiate direct communication after shortlisting to complete hiring faster."
        },
        {
            icon: <Zap className="w-8 h-8 text-cyan-500" />,
            title: "AWS Infrastructure",
            desc: "Cloud-hosted on AWS ensuring 99.9% uptime and scalability. "
        }
    ];

    return (
        <section id="features" className="py-12 sm:py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                        Designed for the Modern Workforce
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg">
                        Shramik jobing solutions bridges the gap between employers and skilled non-degree workers.
                    </p>
                </div>

                {/* Responsive Grid System */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}