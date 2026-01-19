// ===== COMMIT: Added responsive Navbar with desktop and mobile support =====
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import sharmickLogo from "../assets/sharmik.jpeg";

// ===== COMMIT: Navbar component handles global navigation and smooth section scrolling =====
export default function Navbar() {
  // ===== COMMIT: Mobile menu open/close state =====
  const [isOpen, setIsOpen] = useState(false);

  // ===== COMMIT: Hooks used to detect current route and handle navigation =====
  const location = useLocation();
  const navigate = useNavigate();

  // ===== COMMIT: Toggle mobile navigation menu =====
  const toggleMenu = () => setIsOpen(!isOpen);

  // ===== COMMIT: Scroll helper to navigate to sections without exposing hash in URL =====
  const scrollToSection = (id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    // ===== COMMIT: Navigate to home before scrolling if user is on another page =====
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 120);
    } else {
      scroll();
    }

    // ===== COMMIT: Auto-close mobile menu after navigation =====
    setIsOpen(false);
  };

  return (
    // ===== COMMIT: Fixed top navigation with blur and border styling =====
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* ===== COMMIT: Logo section linking to home ===== */}
          <Link to="/" className="flex items-center group">
            <img
              src={sharmickLogo}
              alt="Shramik Logo"
              className="h-10 sm:h-12 w-auto rounded-md transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ===== COMMIT: Desktop navigation links ===== */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-blue-600 transition-colors"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>

            <Link to="/legal" className="hover:text-blue-600 transition-colors">
              Privacy
            </Link>

            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              User Agreement
            </Link>

            {/* ===== COMMIT: Primary call-to-action button ===== */}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Download App
            </button>
          </div>

          {/* ===== COMMIT: Mobile menu toggle button ===== */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ===== COMMIT: Mobile navigation dropdown menu ===== */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {/* ===== COMMIT: Mobile section navigation buttons ===== */}
          <button
            onClick={() => scrollToSection("features")}
            className="block w-full text-left px-4 py-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("how-it-works")}
            className="block w-full text-left px-4 py-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
          >
            How It Works
          </button>

          {/* ===== COMMIT: Mobile legal navigation links ===== */}
          <Link
            to="/legal"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
          >
            User Agreement
          </Link>

          {/* ===== COMMIT: Mobile full-width CTA button ===== */}
          <div className="pt-4 px-4">
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg">
              Download App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
