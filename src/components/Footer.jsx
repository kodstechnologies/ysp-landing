// Path: src/components/Footer.jsx
/**
 * Footer Component - Site Footer with Links and Information
 *
 * This component provides the website footer with comprehensive information
 * and navigation links. It serves as both an information hub and secondary
 * navigation for the Shramik platform.
 *
 * Sections Included:
 * 1. Brand Section: Logo, company description, and trust indicators
 * 2. Contact Us: Email, phone, and address information
 * 3. Legal & Platform: Links to terms, privacy policy, and disclaimers
 * 4. Copyright: Legal notices and technical information
 *
 * Features:
 * - Responsive 4-column grid layout
 * - Proper semantic HTML with footer element
 * - Links to legal pages (/legal) and contact page (/contact)
 * - Contact information with icons for better UX
 * - Copyright notice with dynamic year
 * - Technical details (Razorpay, AWS hosting)
 */

import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

// Importing your specific logo asset
import sharmickLogo from "../assets/sharmik.jpeg";

/**
 * Responsive Footer for Shramik
 * Includes logo, contact details, and links to privacy/legal sections.
 */
export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section - Logo and company description */}
          <div className="lg:col-span-2">
            <HashLink to="/#" className="inline-block mb-6">
              <img
                src={sharmickLogo}
                alt="Shramik Logo"
                className="h-12 w-auto object-contain rounded-md"
              />
            </HashLink>
            <p className="text-slate-600 max-w-sm mb-6 leading-relaxed text-sm sm:text-base">
              Shramik jobing solutions is a digital job marketplace built to simplify hiring for
              recruiters and job discovery for skilled workers. We focus on
              trust, transparency, and accessibility.
            </p>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
              <ShieldCheck size={18} />
              <span>Verified Talent. Genuine Jobs.</span>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Mail className="text-blue-600 w-4 h-4" />{" "}
                shramikan2025@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-600 w-4 h-4" /> +91-9731581462
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-600 w-4 h-4 mt-0.5" />
                <span>Bangalore, Karnataka </span>
              </li>
            </ul>
          </div>

          {/* Quick & Legal Links */}
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
              Legal & Platform
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/delete" className="hover:text-red-500 transition">
                  Delete My Account
                </Link>
              </li>
              <li className="mt-3 pt-3 border-t border-slate-200">
                <p className="text-[11px] text-slate-400 tracking-wide uppercase">
                  GST Number
                </p>
                <p className="text-sm text-slate-600 font-medium">
                  29ABCDE1234F2Z5
                </p>
              </li>

              <li className="mt-3 pt-3 border-t border-slate-200">
                <span className="text-slate-400 cursor-default">
                  Available: English, Hindi, Kannada{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-5 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">
            © {new Date().getFullYear()} SHRAMIK JOBING SOLUTIONS PLATFORM. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span>Secure Payments via Razorpay </span>
            <span>Hosted on AWS </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
