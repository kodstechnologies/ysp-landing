import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Mail, Phone, MapPin, ShieldCheck, Fuel, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-deep-blue border-t border-white/5 pt-20 pb-10 sm:px-6 lg:px-8 text-slate-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <HashLink to="/#" className="flex items-center gap-2 mb-6 group">
              <div className="bg-vibrant-orange p-1.5 rounded-lg shadow-lg shadow-orange-900/20">
                <Fuel className="text-white" size={20} />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                YSP<span className="text-lochmara">FUEL</span>
              </span>
            </HashLink>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm">
              The next generation fuel loyalty and transaction management system. Empowering petrol pumps with QR-based digital solutions and real-time analytics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-vibrant-orange hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-vibrant-orange hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-vibrant-orange hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-l-4 border-[#007BC9] pl-3">
              Product
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <HashLink to="/#features" className="hover:text-[#007BC9] transition-colors">
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink to="/#products" className="hover:text-[#007BC9] transition-colors">
                  Modules
                </HashLink>
              </li>
              <li>
                <HashLink to="/#how-it-works" className="hover:text-[#007BC9] transition-colors">
                  How it Works
                </HashLink>
              </li>
              {/* <li>
                <HashLink to="/#pricing" className="hover:text-[#007BC9] transition-colors">
                  Pricing
                </HashLink>
              </li> */}
            </ul>
          </div>


          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-l-4 border-[#007BC9] pl-3">
              Support
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="text-[#007BC9] w-4 h-4" />{" "}
                <span>yspfuelplus@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#007BC9] w-4 h-4" /> 
                <span>+91-9731581462</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#007BC9] w-4 h-4 mt-0.5" />
                <span>Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-l-4 border-[#007BC9] pl-3">
              Legal
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link to="/terms" className="hover:text-[#007BC9] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-vibrant-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/delete" className="hover:text-red-400 transition-colors">
                  Request Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight text-slate-500">
            <ShieldCheck size={16} className="text-golden-yellow" />
            <span>© {new Date().getFullYear()} YSP FUEL PLUS. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span>Powered by Smart QR Tech</span>
            <span>Cloud Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
