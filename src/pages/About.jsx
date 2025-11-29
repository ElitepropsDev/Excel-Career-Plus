import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Users } from "lucide-react";
import assets from "../assets/assets";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const About = () => {
  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-12 px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-6"
      >
        <motion.div
          variants={fadeUp}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#EC4899]">
            Empowering Students, Connecting Institutions
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            ECP bridges students with top global institutions, helping them make
            informed choices for their educational and career goals. Our
            partnerships create opportunities for success, growth, and global
            impact.
          </p>
          <motion.a
            variants={fadeUp}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#212EA0] to-[#5a66d1] text-white rounded-full shadow font-semibold text-sm sm:text-base"
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
        >
          <img
            src={assets.about_hero}
            alt="ECP Hero"
            className="rounded-xl shadow-lg w-full h-auto mb-[-50px] sm:mb-0 sm:max-w-sm lg:max-w-xl xl:max-w-2xl object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-10 px-4 sm:px-6 lg:px-12 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-bold mb-8 text-[#EC4899]"
        >
          Our Mission & Vision
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center gap-3 p-4 border rounded-xl shadow-md"
          >
            <BookOpen size={32} className="text-[#EC4899]" />
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              To connect students with world-class educational opportunities and
              provide guidance through every step of their learning journey.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center gap-3 p-4 border rounded-xl shadow-md"
          >
            <Globe size={32} className="text-[#EC4899]" />
            <h3 className="text-lg font-semibold">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              To empower learners worldwide by creating seamless pathways to
              global education and fostering impactful institutional
              collaborations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Numbers Strip */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-8 px-4 sm:px-6 lg:px-12"
      >
        <div className="flex flex-col sm:flex-row justify-around items-center bg-[#212EA0] text-white py-6 px-4 rounded-xl gap-4">
          <div className="text-center">
            <h4 className="text-lg font-semibold">100+ Global Partners</h4>
            <p className="text-xs opacity-90">Universities & companies</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">5000+ Students</h4>
            <p className="text-xs opacity-90">Empowered worldwide</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">20+ Countries</h4>
            <p className="text-xs opacity-90">Reach & exposure</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      <motion.div
        className="mb-12 text-center mt-[-10px] sm:mt-20 px-4 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#EC4899]">
          See Our Programs in Action
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base max-w-[90%] sm:max-w-xl mx-auto">
          Watch how ECP connects students globally, empowering them through
          curated programs and meaningful partnerships.
        </p>
        <div className="flex justify-center">
          <div className="relative w-full lg:w-3/5 pt-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="ECP Programs"
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-12 px-4 sm:px-6 lg:px-12 text-center bg-blue-100 rounded-xl"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-bold mb-4 text-[#EC4899]"
        >
          Join the ECP Network
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base"
        >
          Connect with us and start your journey toward global educational
          opportunities today.
        </motion.p>
        <motion.a
          variants={fadeUp}
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-[#EC4899] text-white rounded-full shadow font-semibold text-sm sm:text-base"
        >
          Contact Us
        </motion.a>
      </motion.section>
    </div>
  );
};

export default About;
