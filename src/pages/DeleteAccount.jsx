import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2, AlertTriangle } from "lucide-react";

const DeleteAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DEMO API FUNCTION
  const handleDeleteRequest = async (e) => {
    e.preventDefault();
    if (!isConfirmed) return;

    setIsLoading(true);

    // --- FUTURE API COMMIT BLOCK ---
    // This is where you connect to your backend in the future.
    // const response = await fetch('https://api.jstcliq.com/v1/delete', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ phone: phoneNumber })
    // });
    // --- END API BLOCK ---

    setTimeout(() => {
      alert(`Demo: Verification code sent to ${phoneNumber}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      <main className="flex-grow pt-20 md:pt-16 pb-20 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-red-50/50 p-6 md:p-10 text-center border-b border-red-100/50">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-red-600">
              <Trash2 size={32} />
            </div>
            <h2 className="text-2xl font-black text-red-700 tracking-tight">
              Account Deletion
            </h2>
            <p className="text-red-500 font-medium mt-1">
              We're sorry to see you go
            </p>
          </div>

          <div className="p-6 md:p-10 space-y-6 md:space-y-8">
            {/* Warning Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-6">
              <div className="flex items-center gap-2 text-amber-700 mb-3 font-bold">
                <AlertTriangle size={18} /> Before you proceed
              </div>
              <ul className="space-y-2 text-sm text-amber-800/80 leading-relaxed font-medium">
                <li>• Account deletion is permanent and cannot be undone.</li>
                <li>
                  • All your data, including service and product records, will
                  be wiped.
                </li>
                <li>
                  • Please ensure you have backed up any necessary information.
                </li>
              </ul>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleDeleteRequest} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number Verification
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your registered phone number"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-3 md:py-4 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <p className="text-[11px] text-slate-400 mt-2">
                  We'll send a verification code to this number.{" "}
                </p>
              </div>

              <div
                className="flex items-start gap-3 cursor-pointer select-none group"
                onClick={() => setIsConfirmed(!isConfirmed)}
              >
                <div
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    isConfirmed
                      ? "bg-red-500 border-red-500 shadow-md shadow-red-100"
                      : "border-slate-300 bg-white group-hover:border-red-400"
                  }`}
                >
                  {isConfirmed && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  I understand that this action is irreversible and I confirm I
                  want to permanently delete my account.
                </p>
              </div>

              {/* Red Action Button (Enabled only when confirmed) */}
              <button
                type="submit"
                disabled={!isConfirmed || isLoading}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  isConfirmed && !isLoading
                    ? "bg-red-600 text-white shadow-lg shadow-red-200 hover:bg-red-700 active:scale-95"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                {isLoading ? "Processing..." : "Delete My Account"}
              </button>
            </form>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-slate-400 font-medium">
          Changed your mind?{" "}
          <a href="/" className="text-blue-600 font-bold hover:underline">
            Back to Home
          </a>
        </p>
      </main>
    </div>
  );
};

export default DeleteAccount;
