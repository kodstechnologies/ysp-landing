// Path: src/components/Hero.jsx
/**
 * Hero Component - Main Landing Section
 *
 * This is the primary hero section that appears at the top of the homepage.
 * It serves as the main value proposition and call-to-action area.
 *
 * Features:
 * - Eye-catching headline about finding jobs and hiring talent
 * - Description of the platform's target audience (ITI, diploma, skilled workers)
 * - Prominent Google Play Store download button
 * - Responsive design that works on mobile and desktop
 * - Smooth animations and hover effects
 */

import React from "react";
import { Play } from "lucide-react";

// Import the app preview mockup image
import previewImage from "../assets/preview.jpeg";

export default function Hero() {
    return (
        <section className="pt-12 pb-14 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Text Content Section - Contains headline, description, and CTA */}
            <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                    Findd Genuine Jobs <br />
                    <span className="text-blue-600">Hire Verified Talent</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 mb-7 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Designed for ITI, diploma, and skilled non-degree workers. Secure,
                    simple, and transparent hiring through our mobile app.
                </p>

                {/* Google Play Store Download Button */}
                <div className="flex justify-center lg:justify-start">
                    <button
                        onClick={() =>
                            window.open("https://play.google.com/store", "_blank")
                        }
                        className="
                                    flex items-center gap-3
                                    px-4 py-2.5
    rounded-xl 
    bg-black text-white
    shadow-md
    hover:shadow-lg
    hover:-translate-y-0.5
    active:translate-y-0
    transition-all duration-200
  "
                    >
                        {/* Google Play Icon */}
                        <div className="flex items-center justify-center w-9 h-9">
                            <Play className="w-6 h-6 text-white" fill="white" />
                        </div>

                        {/* Text */}
                        <div className="text-left leading-tight">
                            <p className="text-[10px] uppercase tracking-wider text-gray-300">
                                Get it on
                            </p>
                            <p className="text-base font-semibold tracking-tight">
                                Google Play
                            </p>
                        </div>
                    </button>
                </div>
            </div>

            {/* App Mockup */}
            <div className="flex-1 flex justify-center">
                <div
                    className="w-48 h-[400px] bg-slate-900 rounded-[2rem]
                                border-[6px] border-slate-900 shadow-2xl
                                overflow-hidden relative"
                >
                    {/* Notch */}
                    <div
                        className="absolute top-2 left-1/2 -translate-x-1/2
                                    w-16 h-2.5 bg-slate-900 rounded-full z-10"
                    />

                    {/* Screen with App Preview Image */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800
                                    flex items-center justify-center overflow-hidden"
                    >
                        <img
                            src={previewImage}
                            alt="Shramik App Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
