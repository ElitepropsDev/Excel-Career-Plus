// src/pages/SearchPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { ecpPrograms } from "../data/data"; // adjust path
import { motion } from "framer-motion";

const ProgramCard = ({ program }) => {
  const handleApply = () => {
    alert(`Applying for: ${program.name}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-2"
    >
      <img
        src={program.image}
        alt={program.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="font-semibold text-lg">{program.name}</h2>
      <p className="text-sm text-gray-500">
        {program.category} – {program.location}
      </p>
      <p className="text-gray-700 dark:text-gray-300">{program.description}</p>

      <button
        onClick={handleApply}
        className="mt-3 bg-[#212EA0] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a247f] transition-colors"
      >
        Apply Now
      </button>
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SearchPage = () => {
  const locationHook = useLocation();

  // Parse query params
  const searchParams = new URLSearchParams(locationHook.search);
  const query = searchParams.get("query")?.toLowerCase() || "";
  const loc = searchParams.get("location")?.toLowerCase() || "";

  // Filter programs (loose match: OR logic)
  const filteredPrograms = ecpPrograms.filter((program) => {
    const matchesQuery = query === "" || program.name.toLowerCase().includes(query);
    const matchesLocation = loc === "" || program.location.toLowerCase().includes(loc);

    return matchesQuery || matchesLocation; // loose match
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 py-10"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-semibold mb-6 text-blue-800"
      >
        Search Results
      </motion.h1>

      {filteredPrograms.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mt-20 gap-4"
        >
          <p className="text-gray-500 dark:text-gray-400 text-lg text-center">
            No programs found for "
            <span className="font-semibold">{query}</span>" in "
            <span className="font-semibold">{loc}</span>".
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-center">
            Try adjusting your search or check out our{" "}
            <a href="/" className="text-blue-600 dark:text-blue-400 underline">
              featured programs
            </a>
            .
          </p>
          <img
            src="/images/no-results.png"
            alt="No results"
            className="w-48 h-48 object-contain mt-4 opacity-70"
          />
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchPage;
