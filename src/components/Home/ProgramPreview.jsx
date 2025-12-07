import React from "react";
import ProgramCard from "../../components/Program/ProgramCard";
import assets from "../../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Client’s 5 flagship pathways
const flagshipPrograms = [
  {
    id: 1,
    name: "Healthcare — Nursing Pathway (Hungary)",
    category: "Healthcare",
    description:
      "One of Europe’s most affordable and reliable healthcare routes, with tuition from €3,000. Degrees are NMC-recognized, giving graduates multiple options across the EU and UK.",
    image: assets.program_nursing,
  },
  {
    id: 2,
    name: "Healthcare — UK Pre-Registration Nursing Pathway",
    category: "Healthcare",
    description:
      "Designed for graduates from other fields who want to become Registered Nurses through a two-year master’s program. Tuition starts from £15,000.",
    image: assets.program_nursing2,
  },
  {
    id: 3,
    name: "Business — Business Track (Ireland)",
    category: "Business",
    description:
      "A Bachelor’s degree program with tuition around €6,000 — one of the best-value accredited programs in Ireland. Students can work while studying, making this a sustainable, long-term option.",
    image: assets.program_businesstrack,
  },
  {
    id: 4,
    name: "Tuition-Free / Low-Tuition Pathways — Austria & Germany",
    category: "Affordable Education",
    description:
      "For students prioritizing affordability and long-term settlement opportunities. Ideal for applicants who want high-quality education with minimal financial pressure. (Some locations may have visa appointment delays.)",
    image: assets.blog6,
  },
  {
    id: 5,
    name: "Tourism & Hospitality Experience Program — Malta",
    category: "Vocational",
    description:
      "A vocational, industry-integrated program with mandatory internships (3 months to 1 year) and tuition starting from €4,000. Students can transition to work permits. Graduate employment rate: ~93%.",
    image: assets.program_hospital2,
  },
];

const ProgramPreview = () => {
  return (
    <div 
      id="program"    
    className="py-16 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Explore Global Pathways
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Our flagship pathways are intentionally curated — not crowded — so you
          can focus on what delivers the best cost-to-opportunity ratio,
          long-term mobility, and real career outcomes.
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
        <div className="flex-1 p-6 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl shadow-lg text-center">
          <h4 className="font-semibold text-lg mb-2">Certification</h4>
          <p className="text-sm opacity-90">
            Credentials recognized by top institutions worldwide.
          </p>
        </div>
      </div>

      {/* Program Cards Grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
  {flagshipPrograms.map((program) => (
    <motion.div
      key={program.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * program.id }}
      className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:brightness-110 mx-5 sm:mx-0"
    >
      {/* Make the whole card clickable */}
      <Link to={`/programs/${program.id}`} className="block">
        <ProgramCard
          image={program.image}
          name={program.name}
          category={program.category}
          description={program.description}
          ctaText="Enquire About This Program"
          onClick={(e) => {
            // Prevent card click when button inside is clicked
            if (e.target.tagName === "BUTTON") return;
            console.log("Card clicked:", program.name);
          }}
          buttonLink={`/programs/${program.id}`} 
        />
      </Link>
    </motion.div>
  ))}
</motion.div>




      {/* CTA Button */}
      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/programs"
          className="inline-block px-8 py-3 bg-[#212EA0] text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:bg-[#EC4899] hover:scale-105"
        >
          Explore All Programs
        </Link>
      </div>
    </div>
  );
};

export default ProgramPreview;
