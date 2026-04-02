import React from "react";
import adminPanel from "../assets/admin-panel.jpg";
import mobilePreview from "../assets/mobile-preview.png";
import managerdashboard from "../assets/manager-dashboard.jpeg";
import userdashboard from "../assets/user-dashboard.png";

export default function Preview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-deep-blue mb-6 tracking-tight">
            User Interface <span className="text-lochmara">Preview</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Take a look at our clean and intuitive interfaces designed for maximum efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-[2.5rem] border border-slate-100 shadow-2xl">
              <img 
                src={adminPanel} 
                alt="Admin Dashboard Preview" 
                className="w-full h-auto rounded-3xl shadow-sm border border-slate-200"
              />
            </div>
            <div className="px-6">
              <h3 className="text-2xl font-black text-deep-blue mb-2">Powerful Admin Panel</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                A comprehensive view of all your pump's metrics, transactions, and user management in one powerful dashboard.
              </p>
            </div>
          </div>

          {/* Mobile Previews */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="relative w-64 md:w-72 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[3rem] border-[8px] border-slate-900 overflow-hidden bg-slate-900 translate-y-4">
                <img 
                  src={userdashboard} 
                  alt="Customer App Preview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="px-6 text-center lg:text-left">
              <h3 className="text-2xl font-black text-deep-blue mb-2">Intuitive Mobile Experience</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Whether you're a manager, staff member, or customer, our mobile apps provide a fast and seamless QR-based transaction experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
