import React, { useState } from "react";
import ProgramCard from "../components/Program/ProgramCard";
import assets from "../assets/assets";
import { motion } from "framer-motion";

// Programs Data (same as yours)
const programsData = [
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
    image: assets.program_business,
  },
  {
    id: 3,
    name: "ECP Teaching Program – UK",
    category: "Education",
    description:
      "Empower yourself with teaching methodologies and practical experience through our ECP Teaching Program.",
    image: assets.program_teaching,
  },
  {
    id: 4,
    name: "ECP Cloud Computing Program – Germany",
    category: "Technology",
    description:
      "Master cloud technologies and business applications with ECP’s Cloud Computing Program in Germany.",
    image: assets.program_cloud,
  },
  {
    id: 5,
    name: "ECP Cybersecurity Program – USA",
    category: "Technology",
    description:
      "Protect and secure digital assets with ECP’s hands-on Cybersecurity Program in the USA.",
    image: assets.program_cybersec,
  },
  {
    id: 6,
    name: "ECP UI/UX Design Program – France",
    category: "Technology",
    description:
      "Design intuitive interfaces and user experiences with ECP’s UI/UX Program in France.",
    image: assets.program_uiux,
  },
  {
    id: 7,
    name: "ECP AI & Machine Learning Program – Canada",
    category: "Science",
    description:
      "Develop AI solutions and gain insights from data with ECP’s AI & Machine Learning Program in Canada.",
    image: assets.program_ai,
  },
  {
    id: 8,
    name: "ECP Digital Marketing Program – UK",
    category: "Business",
    description:
      "Learn global digital marketing strategies and hands-on campaigns with ECP’s Digital Marketing Program.",
    image: assets.program_digitalmarketing,
  },
  {
    id: 9,
    name: "ECP Project Management Program – Australia",
    category: "Business",
    description:
      "Lead projects effectively and efficiently with ECP’s Project Management Program in Australia.",
    image: assets.program_pm,
  },
  {
    id: 10,
    name: "ECP Nursing Program – Canada",
    category: "Healthcare",
    description:
      "Advance your healthcare expertise with ECP’s Nursing Program in Canada.",
    image: assets.program_nursing,
  },
  {
    id: 11,
    name: "ECP Hospitality Management Program – Switzerland",
    category: "Hospitality",
    description:
      "Learn premium hospitality and hotel management skills through ECP’s curated program in Switzerland.",
    image: assets.program_hospital,
  },
  {
    id: 12,
    name: "ECP Culinary Arts Program – France",
    category: "Hospitality",
    description:
      "Master the culinary arts with hands-on experience and international guidance in France.",
    image: assets.program_culinary,
  },
  {
    id: 13,
    name: "ECP Biomedical Program – Germany",
    category: "Science",
    description:
      "Explore biomedical research and practical healthcare applications with ECP’s program in Germany.",
    image: assets.program_bomedical,
  },
  {
    id: 14,
    name: "ECP Environmental Science Program – Canada",
    category: "Science",
    description:
      "Gain insights into sustainability, ecology, and environmental technologies in Canada.",
    image: assets.program_environment,
  },
  {
    id: 15,
    name: "ECP Data Science Program – UK",
    category: "Technology",
    description:
      "Learn to analyze, interpret, and visualize data effectively with ECP’s Data Science Program.",
    image: assets.program_datascience,
  },
  {
    id: 16,
    name: "ECP Early Childhood Education Program – Australia",
    category: "Education",
    description:
      "Specialize in early education methodologies and practical teaching experiences in Australia.",
    image: assets.program_EarlyChildhood,
  },
  {
    id: 17,
    name: "ECP Healthcare Administration Program – USA",
    category: "Healthcare",
    description:
      "Manage healthcare systems and policies effectively with ECP’s Healthcare Administration Program in the USA.",
    image: assets.program_nursing,
  },
];

const categories = ["All", ...new Set(programsData.map((p) => p.category))];

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms =
    selectedCategory === "All"
      ? programsData
      : programsData.filter((program) => program.category === selectedCategory);

  return (
    <div className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40">
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

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-10 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? "bg-[#212EA0] text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
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

      {/* Program Cards Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredPrograms.map((program) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * program.id }}
          >
            <ProgramCard
              image={program.image}
              name={program.name}
              category={program.category}
              description={program.description}
              ctaText="Apply Now"
              onClick={() => console.log("Clicked:", program.name)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Promo Video Section */}
      <motion.div
        className="mb-12 text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          See Our Programs in Action
        </h3>
        <div className="relative pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="ECP Programs"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="mt-12 sm:mt-16 text-center bg-blue-50 py-12 sm:py-16 px-4 sm:px-12 rounded-xl">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
          Ready to start your journey?
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-[#212EA0] to-[#5a66d1] text-white rounded-full shadow-lg font-semibold"
        >
          Book a Meeting
        </motion.button>
      </div>
    </div>
  );
};

export default Programs;
