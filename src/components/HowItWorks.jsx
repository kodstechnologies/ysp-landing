// Path: src/components/HowItWorks.jsx
/**
 * HowItWorks Component - Step-by-Step User Journey
 *
 * This component explains the complete process of using the Shramik platform
 * in 6 clear, numbered steps. It shows both job seekers and recruiters how
 * the platform works from registration to successful hiring.
 *
 * Steps Covered:
 * 1. User registration with mobile OTP verification
 * 2. Profile completion and document upload
 * 3. Secure coin purchase via Razorpay
 * 4. Job application/shortlisting using coins
 * 5. Secure messaging after shortlisting
 * 6. Successful hiring completion
 *
 * Features:
 * - Responsive grid layout (1-3 columns based on screen size)
 * - Numbered steps with visual indicators
 * - Hover effects for better interactivity
 * - Clean, easy-to-follow design
 */

import React from 'react';

/**
 * HowItWorks Component
 * Uses a responsive grid to show the step-by-step user journey.
 */
export default function HowItWorks() {
    // Array defining the 6 steps of the Shramik platform process
    const steps = [
        { id: 1, text: "Register using mobile number and OTP " },
        { id: 2, text: "Complete profile and upload required documents " },
        { id: 3, text: "Purchase coins securely through Razorpay " },
        { id: 4, text: "Apply for jobs or shortlist candidates using coins " },
        { id: 5, text: "Chat securely after shortlisting " },
        { id: 6, text: "Complete hiring faster and with confidence " }
    ];

    return (
        <section id="how-it-works" className="py-16 sm:py-12 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How Shramik Works </h2>
                    <p className="mt-4 text-slate-600">A simple, secure path from registration to hiring.</p>
                </div>

                {/* Steps Grid - Responsive layout showing the process */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-md transition">
                            <span className="absolute top-4 right-6 text-5xl font-black text-blue-100/50 select-none">
                                0{step.id}
                            </span>
                            <div className="relative z-10 pt-4">
                                <p className="text-lg font-bold text-slate-800 leading-snug">
                                    {step.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}