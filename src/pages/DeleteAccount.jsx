import React, { useState, useEffect } from "react";
import { Trash2, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DeleteAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeleteRequest = async (e) => {
    e.preventDefault();
    if (!isConfirmed) return;
    setIsLoading(true);

    setTimeout(() => {
      alert(`Verification code sent to ${phoneNumber}. Please check your SMS to complete deletion.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="pb-20 px-4 pt-10">
      <div className="max-w-xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-red-50 p-10 text-center border-b border-red-100">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-200/50 text-red-600">
            <Trash2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-red-800 tracking-tight">
            Delete Account
          </h2>
          <p className="text-red-500 font-bold mt-2">
            We're sorry to see you leave YSP Fuel Plus
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-[2rem] p-8">
            <div className="flex items-center gap-3 text-amber-700 mb-4 font-black uppercase text-sm tracking-widest">
              <AlertTriangle size={20} /> Critical Warning
            </div>
            <ul className="space-y-3 text-sm text-amber-900/80 font-bold leading-relaxed">
              <li className="flex gap-2"><span>•</span> This action is permanent and cannot be reversed.</li>
              <li className="flex gap-2"><span>•</span> All your reward points and transaction history will be lost.</li>
              <li className="flex gap-2"><span>•</span> You will lose access to all YSP Fuel Plus member benefits.</li>
            </ul>
          </div>

          {/* Verification Form */}
          <form onSubmit={handleDeleteRequest} className="space-y-8">
            <div>
              <label className="block text-sm font-black text-slate-800 uppercase tracking-widest mb-3">
                Registered Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 9876543210"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-100 focus:border-vibrant-orange outline-none transition-all font-bold text-lg"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className="text-xs text-slate-400 mt-3 font-medium italic">
                A secure verification code will be sent to this number.
              </p>
            </div>

            <div
              className="flex items-start gap-4 cursor-pointer select-none group p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              onClick={() => setIsConfirmed(!isConfirmed)}
            >
              <div
                className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                  isConfirmed
                    ? "bg-red-600 border-red-600 shadow-lg shadow-red-200"
                    : "border-slate-300 bg-white group-hover:border-red-400"
                }`}
              >
                {isConfirmed && (
                  <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                )}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-bold">
                I confirm that I want to permanently delete my YSP Fuel Plus account and all associated data.
              </p>
            </div>

            <button
              type="submit"
              disabled={!isConfirmed || isLoading}
              className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                isConfirmed && !isLoading
                  ? "bg-red-600 text-white shadow-2xl shadow-red-200 hover:bg-red-700 active:scale-95"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isLoading ? "Processing Request..." : "Permanently Delete Account"}
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-vibrant-orange font-bold text-sm transition-all hover:gap-4"
        >
          <ArrowRight size={16} className="rotate-180" /> Changed your mind? Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DeleteAccount;
