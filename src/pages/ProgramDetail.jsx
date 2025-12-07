import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Briefcase, UserCheck } from "lucide-react";
import assets from "../assets/assets";

// Sample program data (replace with your actual data source)
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

const ProgramDetail = () => {
  const { id } = useParams();
  const program = flagshipPrograms.find((p) => p.id === parseInt(id));

  if (!program) return <p className="text-center py-16">Program not found.</p>;

  return (
    <div className="py-12 px-4 sm:px-12 lg:px-24 xl:px-40">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-2xl sm:text-4xl font-bold">{program.name}</h1>
          <p className="text-sm sm:text-lg">{program.category}</p>
        </div>
      </motion.div>

      {/* Benefits Strip */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <div className="flex-1 p-6 bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white rounded-xl shadow-lg text-center">
          <Globe className="w-6 h-6 mx-auto mb-2" />
          <h4 className="font-semibold text-lg mb-1">Global Exposure</h4>
          <p className="text-sm opacity-90">Programs aligned with international standards.</p>
        </div>
        <div className="flex-1 p-6 bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white rounded-xl shadow-lg text-center">
          <Briefcase className="w-6 h-6 mx-auto mb-2" />
          <h4 className="font-semibold text-lg mb-1">Career Boost</h4>
          <p className="text-sm opacity-90">Skills that open doors to global opportunities.</p>
        </div>
        <div className="flex-1 p-6 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl shadow-lg text-center">
          <UserCheck className="w-6 h-6 mx-auto mb-2" />
          <h4 className="font-semibold text-lg mb-1">Certification</h4>
          <p className="text-sm opacity-90">Credentials recognized by top institutions worldwide.</p>
        </div>
      </div>

      {/* Program Description */}
     {/* Program Description / Details */}
<motion.div
  className="space-y-6 mb-12 text-gray-700 dark:text-gray-300"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <p>{program.description}</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
    {/* Tuition */}
    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
      <span className="text-2xl text-[#5044E5]">
        💰
      </span>
      <div>
        <h4 className="font-semibold mb-1">Tuition</h4>
        <p className="text-sm opacity-90">
          {/* You can replace this dynamically per program */}
          From €3,000 – depending on the course and country.
        </p>
      </div>
    </div>

    {/* Duration */}
    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
      <span className="text-2xl text-[#EC4899]">
        ⏱️
      </span>
      <div>
        <h4 className="font-semibold mb-1">Duration</h4>
        <p className="text-sm opacity-90">
          Typically 1-4 years depending on the pathway.
        </p>
      </div>
    </div>

    {/* Highlights / Key Features */}
    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
      <span className="text-2xl text-[#10B981]">
        ⭐
      </span>
      <div>
        <h4 className="font-semibold mb-1">Highlights</h4>
        <p className="text-sm opacity-90">
          Accredited programs, global mobility, and real career outcomes.
        </p>
      </div>
    </div>

    {/* Work / Internship Opportunities */}
    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
      <span className="text-2xl text-[#F59E0B]">
        🏢
      </span>
      <div>
        <h4 className="font-semibold mb-1">Work & Internship</h4>
        <p className="text-sm opacity-90">
          Industry-integrated programs with internships from 3 months to 1 year.
        </p>
      </div>
    </div>
  </div>
</motion.div>


      {/* CTA Button */}
      <div className="flex justify-center mb-12">
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-[#EC4899] text-white rounded-full shadow-lg font-semibold transition hover:scale-105 hover:brightness-110"
        >
          Enquire About This Program
        </Link>
      </div>

      {/* Related Programs */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Other Flagship Programs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipPrograms
            .filter((p) => p.id !== program.id)
            .map((p) => (
              <motion.div
                key={p.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transform transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * p.id }}
              >
                <Link to={`/programs/${p.id}`} className="block">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h4 className="font-semibold mb-2">{p.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {p.category}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
