import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#212EA0] via-[#5a66d1] via-60% to-[#b65a88]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-white text-center"
      >
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Join the ECP Advantage
        </h2>

        <p className="mt-4 text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
          Access curated programs, expert guidance, and skill-focused learning
          that helps you grow faster and stand out globally.
        </p>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <div className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl w-full max-w-[350px] mx-auto sm:max-w-none">
            <h4 className="font-semibold text-black text-xl mb-2">
              📘 Curated Programs
            </h4>
            <p className="text-sm opacity-90 text-gray-600">
              Industry-aligned courses designed for real-world impact.
            </p>
          </div>

          <div className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl w-full max-w-[350px] mx-auto sm:max-w-none">
            <h4 className="font-semibold text-xl text-black mb-2">
              🧠 Expert Guidance
            </h4>
            <p className="text-sm opacity-90 text-gray-600">
              Learn from professionals with hands-on field experience.
            </p>
          </div>

          <div className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl w-full max-w-[350px] mx-auto sm:max-w-none">
            <h4 className="font-semibold text-xl text-black mb-2">
              🕘 Flexible Learning
            </h4>
            <p className="text-sm opacity-90 text-gray-600">
              Study at your pace — beginner-friendly and structured.
            </p>
          </div>

          <div className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl w-full max-w-[350px] mx-auto sm:max-w-none">
            <h4 className="font-semibold text-xl text-black mb-2">
              📈 Career Boost
            </h4>
            <p className="text-sm opacity-90 text-gray-600">
              Gain skills that unlock new opportunities and roles.
            </p>
          </div>

          <div className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl w-full max-w-[350px] mx-auto sm:max-w-none">
            <h4 className="font-semibold text-xl text-black mb-2">
              🌍 Global Exposure
            </h4>
            <p className="text-sm opacity-90 text-gray-600">
              Programs focused on international-standard competencies.
            </p>
          </div>

          <div className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl w-full max-w-[350px] mx-auto sm:max-w-none">
            <h4 className="font-semibold text-xl text-black mb-2">
              🎓 Certification
            </h4>
            <p className="text-sm opacity-90 text-gray-600">
              Earn credentials that strengthen your professional profile.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <a
    href="/Partner"
    className="px-10 py-4 bg-white text-[#212EA0] font-semibold rounded-xl shadow-lg 
     transition-all duration-300 hover:bg-[#EC4899] hover:text-white"
  >
    Become a Partner
  </a>

  <a
    href="/meeting"
    className="px-10 py-4 border border-white text-white font-semibold rounded-xl 
     transition-all duration-300 hover:bg-[#EC4899] hover:border-[#EC4899]"
  >
    Book a Meeting
  </a>
</motion.div>

      </motion.div>
    </section>
  );
};

export default CTA;
