import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Fuel } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-[#007BC9] to-[#006BB0] p-2 rounded-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
              <Fuel className="text-white" size={24} />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-deep-blue">
              YSP<span className="text-lochmara">FUEL</span>
              <span className="text-vibrant-orange">PLUS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-[#007BC9] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-[#007BC9] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-vibrant-orange transition-colors"
            >
              Products
            </button>
            {/* <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-[#007BC9] transition-colors"
            >
              Pricing
            </button> */}

            <button className="bg-vibrant-orange text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 active:scale-95 shadow-lg shadow-orange-100 flex items-center gap-2">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="px-4 space-y-2">
          {[
            { id: "features", label: "Features" },
            { id: "how-it-works", label: "How It Works" },
            { id: "products", label: "Products" },
            { id: "pricing", label: "Pricing" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-6 py-4 font-bold text-slate-700 hover:bg-blue-50 hover:text-[#007BC9] rounded-2xl transition-all"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-100 mt-4 px-2">
            <button className="w-full bg-vibrant-orange text-white py-5 rounded-2xl font-black shadow-xl shadow-orange-100 active:scale-95 transition-transform">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
