import React from "react";
import { motion } from "framer-motion";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
const countries = [
  { id: "nigeria", name: "Nigeria", icon: assets.flag_nigeria },
  { id: "ghana", name: "Ghana", icon: assets.flag_ghana },
  { id: "cameroon", name: "Cameroon", icon: assets.flag_cameroon },
  { id: "zimbabwe", name: "Zimbabwe", icon: assets.flag_zimbabwe },
];

const Partner = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[#E0F2FE] to-white overflow-hidden">
      {/* Background Globe */}
      <motion.div
        className="absolute top-0 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <img
          src={assets.globe_network}
          alt="Global network"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative px-4 sm:px-12 lg:px-24 xl:px-40 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
        >
          Our Global Network
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto mb-12 text-base sm:text-lg"
        >
          We collaborate with partner agencies across Africa to deliver curated
          study abroad and career pathways. Our active network helps students
          access reliable programs while supporting agencies to scale and
          provide value to their students.
        </motion.p>

        {/* Country Icons */}
        <motion.div
          className="flex justify-center flex-wrap gap-12 mb-12 flex-col sm:flex-row sm:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {countries.map((country, i) => (
            <motion.div
              key={country.id}
              className="flex flex-col items-center w-full sm:w-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, type: "spring", stiffness: 100 },
                },
              }}
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <motion.img
                src={country.icon}
                alt={country.name}
                className="w-16 h-16 object-contain mb-2 rounded-full shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-gray-700 text-sm text-center">
                {country.name} — Active Partner Network
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <Link to="/partners">
    <motion.button
      className="inline-block px-8 py-3 bg-[#212EA0] text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:bg-[#EC4899] hover:scale-105"
    >
      Our Partners
    </motion.button>
  </Link>
</motion.div>
      </div>
    </section>
  );
};

export default Partner;
