import React from "react";
import ProgramCard from "../../components/Program/ProgramCard";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Featured Programs (pick top 4 for preview)
const featuredPrograms = [
  {
    id: 1,
    name: "ECP Nursing Program – Hungary",
    category: "Healthcare",
    description:
      "Gain hands-on experience in healthcare with ECP’s curated Nursing Program in Hungary.",
    image: assets.program_nursing,
  },
  {
    id: 2,
    name: "ECP Business Track – Canada",
    category: "Business",
    description:
      "Develop global business skills and career-ready expertise with ECP’s Business Track in Canada.",
    image: assets.program_businesstrack,
  },
  {
    id: 3,
    name: "ECP Teaching Program – UK",
    category: "Education",
    description:
      "Empower yourself with teaching methodologies and practical experience through our ECP Teaching Program.",
    image: assets.program_techteach,
  },
  {
    id: 4,
    name: "ECP Cloud Computing Program – Germany",
    category: "Technology",
    description:
      "Master cloud technologies and business applications with ECP’s Cloud Computing Program in Germany.",
    image: assets.program_cloud,
  },
];

const ProgramPreview = () => {
  return (
    <div className="py-16 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      {/* Hero */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Explore ECP Programs
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Discover curated programs across Healthcare, Business, Technology, and
          Education designed to boost your career and global exposure.
        </p>
      </div>

      {/* Benefits Strip */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <div className="flex-1 p-6 bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white rounded-xl shadow-lg text-center">
          <h4 className="font-semibold text-lg mb-2">Global Exposure</h4>
          <p className="text-sm opacity-90">
            Programs aligned with international standards.
          </p>
        </div>
        <div className="flex-1 p-6 bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white rounded-xl shadow-lg text-center">
          <h4 className="font-semibold text-lg mb-2">Career Boost</h4>
          <p className="text-sm opacity-90">
            Skills that open doors to global opportunities.
          </p>
        </div>
        <div className="flex-1 p-6 bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white rounded-xl shadow-lg text-center">
          <h4 className="font-semibold text-lg mb-2">Certification</h4>
          <p className="text-sm opacity-90">
            Credentials recognized by top institutions worldwide.
          </p>
        </div>
      </div>

      {/* Featured Program Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {featuredPrograms.map((program) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * program.id }}
          >
            <ProgramCard
              image={program.image}
              name={program.name}
              category={program.category}
              description={program.description}
              // ctaText="Apply Now"
              onClick={() => console.log("Clicked:", program.name)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <a
          href="/programs"
          className="inline-block px-8 py-3 bg-[#212EA0] text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:bg-[#EC4899] hover:scale-105"
        >
          Explore All Programs
        </a>
      </div>
    </div>
  );
};

export default ProgramPreview;
