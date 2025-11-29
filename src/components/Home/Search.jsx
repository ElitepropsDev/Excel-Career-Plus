import React from "react";
import { motion } from "motion/react";
import { Search as SearchIcon, MapPin } from "lucide-react";

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#212EA0] via-[#5a66d1] via-60% to-[#b65a88] shadow-lg rounded-xl max-sm:rounded-[10px] max-sm:w-[80%] p-6 flex flex-col items-center gap-6 -mt-20 max-w-6xl mx-auto relative z-10"
      style={{ minHeight: "250px" }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold text-white dark:text-white text-center"
      >
        Millions Searching Every Day
      </motion.h2>

      {/* Inputs & Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4">
        {/* Program / Course Input */}

        <div className="flex items-center gap-2 flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 max-sm:w-[calc(100%+20px)]">
          <SearchIcon className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for ECP Programs, Courses..."
            className="bg-transparent w-full outline-none text-gray-700 dark:text-white placeholder-gray-400"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center gap-2 flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 max-sm:w-[calc(100%+20px)]">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent w-full outline-none text-gray-700 dark:text-white placeholder-gray-400"
          />
        </div>

        {/* Search Button */}
        {/* Search Button */}
        <button className="bg-[#212EA0] text-white px-6 py-3 rounded-lg font-medium transition-transform max-sm:w-[calc(100%+20px)] active:scale-95">
          Search
        </button>
      </div>
    </motion.div>
  );
};

export default Search;
