import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 
             text-center w-full overflow-hidden text-white animate-bg-zoom"
      style={{
        background: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${assets.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Hero Text */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] font-semibold xl:leading-[70px] max-w-full sm:max-w-3xl text-center relative z-10 break-words"
      >
        Your Pathway to Global Study
        <span className="sm:hidden">
          <br />
        </span>
        <span className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
          & Career Opportunities
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="px-[20px] text-sm sm:text-lg font-medium max-w-3xl mt-4"
      >
        ECP gives you structured pathways, personalized support, and access to
        international study opportunities.
      </motion.p>

      <a href="/programs">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-[#212EA0] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform"
        >
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="#212EA0"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l10 10-10 10-1.414-1.414L19.172 13H2v-2h17.172l-8.586-8.586z" />
          </svg>
        </motion.button>
      </a>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative mt-10 w-full max-w-6xl"
      ></motion.div>
    </div>
  );
};

export default Hero;
