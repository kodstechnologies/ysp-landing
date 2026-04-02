import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Stage 1: Animation duration (progress bar)
    const animationTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    // Stage 2: Exit fade duration
    const completionTimer = setTimeout(() => {
      onComplete();
    }, 3800);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-deep-blue transition-all duration-700 ${
        isExiting ? "opacity-0 invisible scale-110" : "opacity-100 visible scale-100"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-lochmara)_0%,_transparent_70%)] opacity-10" />

      <div className="relative flex flex-col items-center">
        {/* QR Scan Animation */}
        <div className="mb-12 relative group animate-splash-fade-in [animation-delay:200ms]">
          {/* QR Frame Corners */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 border-2 border-white/20 rounded-2xl p-4">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <path d="M10 10h25v10H20v15H10V10zM65 10h25v25H80V20H65V10zM10 65h10v15h15v10H10V65zM80 65v15H65v10h25V65H80z" />
              <path d="M30 30h10v10H30zM50 30h10v10H50zM70 30h10v10H70zM30 50h10v10H30zM50 50h10v10H50zM70 50h10v10H70zM30 70h10v10H30zM50 70h10v10H50zM70 70h10v10H70z" opacity="0.5" />
              <path d="M40 40h10v10H40zM60 40h10v10H60zM40 60h10v10H40zM60 60h10v10H60z" className="fill-lochmara" />
            </svg>

            {/* Scanning Line */}
            <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-vibrant-orange to-transparent animate-qr-scan shadow-[0_0_15px_rgba(255,107,0,0.8)]" />
            
            {/* Pulsing Scan Effect */}
            <div className="absolute inset-4 bg-vibrant-orange/5 animate-scan-line-pulse rounded-lg" />
          </div>
        </div>

        {/* Main Logo Text */}
        <h1 className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white animate-splash-fade-in translate-z-0">
          YSPFUELPLUS
        </h1>

        {/* Subtitle */}
        <div className="mt-4 flex items-center gap-4 w-full">
          <div className="h-[1px] flex-1 bg-white/20 animate-title-reveal" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-white/60 uppercase whitespace-nowrap animate-splash-fade-in [animation-delay:400ms]">
            Smart Fuel Loyalty & Management
          </span>
          <div className="h-[1px] flex-1 bg-white/20 animate-title-reveal" />
        </div>

        {/* Progress Bar Container */}
        <div className="mt-12 w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-lochmara via-vibrant-orange to-golden-yellow animate-progress-fill" />
        </div>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute bottom-10 text-[10px] font-black tracking-[0.5em] text-white/20 uppercase animate-pulse">
        Initializing System
      </div>
    </div>
  );
};

export default SplashScreen;
