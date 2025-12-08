import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutECP = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4FF] to-white dark:from-gray-800 dark:to-gray-700 opacity-70"></div>

      {/* Decorative blur blobs */}
      <div className="absolute -top-10 -right-20 w-72 h-72 bg-[#212EA0] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-[#EC4899] opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#212EA0] to-[#EC4899]"
        >
          Who We Are
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Excel Career Plus is an education and career development company
          dedicated to empowering learners and institutions through global
          admissions, advisory services, and experiential learning initiatives.
          We collaborate with partners and individuals to create pathways for
          growth, skills, and global relevance.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Link
            to="/about"
            className="inline-block px-10 py-4 bg-[#212EA0] text-white text-lg font-semibold rounded-full shadow-xl 
            hover:bg-[#EC4899] hover:shadow-2xl hover:scale-[1.06] transition-all duration-300"
          >
            Learn More About ECP
          </Link>
        </motion.div>

        {/* Bottom subtle line effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
    mx-auto mt-10 h-[4px] w-[150px] 
    rounded-full 
    bg-gradient-to-r from-[#212EA0] via-[#EC4899] to-[#212EA0]
    bg-[length:300%_100%]
    animate-[slidepink_8s_linear_infinite]
  "
        />
      </div>
    </section>
  );
};

export default AboutECP;
