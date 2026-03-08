import React from 'react';

const VideoSection = () => {
  return (
    <section 
      className="bg-gradient-to-b from-[#212EA0] via-[#5a66d1] to-[#b65a88] text-white pt-12 pb-24 px-4 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Your 8-week Web <br /> 
          <span className="text-[#ecb848] font-extrabold">Business Roadmap</span>
        </h1>
        
        <p className="text-sm md:text-lg opacity-90 mb-8 font-medium">
          No prior tech experience required.
        </p>

        {/* Replacement: 3-Step Success Grid */}
        <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl mb-10 text-left">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="space-y-3">
              <div className="text-4xl font-black text-yellow-400 opacity-50 italic">01</div>
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">The Foundation</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Master the tech stack and business setup in the first 14 days.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-3 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-6">
              <div className="text-4xl font-black text-yellow-400 opacity-50 italic">02</div>
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">Build & Scale</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Create real-world projects and learn how to price your services.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <div className="text-4xl font-black text-yellow-400 opacity-50 italic">03</div>
              <h4 className="text-white font-bold text-lg uppercase tracking-tight">Launch Day</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Go live with your business and start acquiring high-paying clients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="inline-block">
          <button className="bg-white text-black font-black py-4 px-10 rounded-full uppercase tracking-wider hover:scale-105 transition-transform shadow-lg">
            Join the Next Cohort – Enroll Now
          </button>
          <p className="mt-4 text-sm font-bold opacity-90">
            (30th March, 2026)
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;