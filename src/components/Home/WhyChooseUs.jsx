import React from "react";
import { BookOpen, Cpu, LifeBuoy, Users } from "lucide-react";
import { motion } from "framer-motion";
import assets from "../../assets/assets";

const WhyChooseUs = () => {
  const points = [
    {
      text: "Explore Curated ECP Programs — discover programs handpicked to suit your career goals.",
      icon: (
        <BookOpen size={26} className="mt-1" style={{ color: "#EC4899" }} />
      ),
    },
    {
      text: "Leverage AI & Expert Guidance — make informed choices with our support and smart tools.",
      icon: <Cpu size={26} className="mt-1" style={{ color: "#EC4899" }} />,
    },
    {
      text: "Benefit from Complete Student Services — including tests, loans, and personalized support.",
      icon: (
        <LifeBuoy size={26} className="mt-1" style={{ color: "#EC4899" }} />
      ),
    },
    {
      text: "Join the ECP Network — connect with our global community of students and partners.",
      icon: <Users size={26} className="mt-1" style={{ color: "#EC4899" }} />,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="w-full py-16 px-4 sm:px-12 lg:px-24 xl:px-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
      >
        {/* MOBILE BIG IMAGE */}
        <motion.div
          variants={fadeUp}
          className="lg:hidden mb-6 flex justify-center"
        >
          <motion.img
            src={assets.why_ai3}
            alt="Cloud Program"
            className="w-[100%] max-w-[450px] h-[500px] object-cover rounded-xl shadow-lg mx-4"
          />
        </motion.div>

        {/* LEFT SIDE */}
        <motion.div variants={fadeUp} className="space-y-6 lg:pr-10">
          <p
            className="font-semibold tracking-wide text-[30px] sm:text-xl lg:text-2xl -mt-[20px]"
            style={{ color: "#EC4899" }}
          >
            PARTNER WITH ECP
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-snug mt-[-20px] lg:mt-0">
            Empowering Partners with Curated ECP Programs
          </h2>

          <motion.div
            variants={stagger}
            className="space-y-3 sm:space-y-4 mt-1 sm:mt-2 lg:mt-5"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-3 sm:gap-4"
              >
                {point.icon}
                <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center sm:justify-start">
            <a href="/partners">
              <motion.button
                variants={fadeUp}
                className="sm:mt-5 lg:mt-8 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
                style={{ backgroundColor: "#EC4899" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Join Our Network
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGES - DESKTOP ONLY */}
        <motion.div
          variants={fadeUp}
          className="hidden lg:flex justify-center lg:justify-end flex-shrink-0"
        >
          <div className="flex gap-2 sm:gap-4">
            {/* LEFT STACK */}
            <motion.div
              className="flex flex-col gap-4 sm:gap-6"
              variants={stagger}
            >
              <motion.img
                variants={fadeUp}
                src={assets.why_ai}
                alt="UI/UX"
                className="w-[280px] h-[280px] object-cover rounded-xl shadow-md"
              />

              <motion.img
                variants={fadeUp}
                src={assets.why_ai2}
                alt="AI"
                className="w-[280px] h-[280px] object-cover rounded-xl shadow-md"
              />
            </motion.div>

            {/* BIG IMAGE */}
            <motion.img
              variants={fadeUp}
              src={assets.why_ai3}
              alt="Cloud Program"
              className="w-[400px] h-[580px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
