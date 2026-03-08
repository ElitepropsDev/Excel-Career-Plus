import React from "react";
import { Calendar, Clock, Monitor, CheckCircle2 } from "lucide-react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const curriculum = [
    "Build websites without code",
    "Client acquisition & sales strategy",
    "Portfolio & sellable digital products",
    "Intro to AI & digital tools for projects",
    "Domain, hosting & professional email",
    "Small eCommerce website demo",
  ];

  return (
    <div className="bg-[#4B2C85] text-white pt-5 pb-32 px-6 relative">
      {/* Top Left Logo */}
      <div className="max-w-6xl mx-auto mb-5">
        <Link to="/">
          <img
            src={assets.logo}
            alt="ECP Logo"
            className="h-6 md:h-8 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Course Title with updated formatting */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Start Your Web <br />
          <span className="text-[#ecb848] font-extrabold uppercase">
            Business in 8 Weeks
          </span>
        </h1>
        <p className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">
          Join 500+ successful graduates
        </p>

        {/* Schedule Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            <Calendar size={18} className="text-yellow-400" />
            <span className="font-bold">Starts March 30th</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            <Clock size={18} className="text-yellow-400" />
            <span className="font-bold">6PM - 8PM | Tue & Thurs</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            <Monitor size={18} className="text-yellow-400" />
            <span className="font-bold">Online</span>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white text-gray-800 rounded-2xl p-6 md:p-10 text-left shadow-2xl relative z-10">
          <div className="mb-6">
            <h2 className="text-lg font-black text-[#4B2C85] uppercase tracking-tighter mb-2 underline decoration-yellow-400 underline-offset-4">
              Program Overview:
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Take your first step to starting a profitable web business with
              no-code WordPress and practical digital tools. This program is
              designed for anyone looking to create{" "}
              <span className="font-bold text-black">income streams</span>
              —whether you're a professional, business owner, or aspiring
              entrepreneur.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-black text-[#4B2C85] uppercase tracking-tighter mb-4">
              What You’ll Learn:
            </h3>
            <div className="grid md:grid-cols-2 gap-y-3 gap-x-6">
              {curriculum.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-purple-100 p-1 rounded-full">
                    <CheckCircle2 size={16} className="text-[#4B2C85]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">
                Course Fee
              </p>
              <p className="text-2xl font-black text-gray-900">₦200,000</p>
            </div>
            <p className="text-[11px] text-[#4B2C85] font-bold bg-purple-50 px-3 py-1 rounded-full">
              Post-training support included
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
