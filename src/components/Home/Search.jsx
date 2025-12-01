import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ecpPrograms } from "../../data/data";

const examplePlaceholders = [
  "Nursing in Canada",
  "AI & Machine Learning UK",
  "Digital Marketing France",
  "Teaching Program Australia",
  "Cybersecurity USA",
];

const Search = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Animate placeholder
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % examplePlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const suggestions = ecpPrograms
    .filter((program) =>
      program.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5);

  const handleSearch = () => {
    setLoading(true);
    setShowSuggestions(false);

    setTimeout(() => {
      navigate(
        `/search?query=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}`
      );
      setLoading(false);
    }, 300);
  };

  const handleSelectSuggestion = (name) => {
    setSearchQuery(name);
    setShowSuggestions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-r from-[#212EA0] via-[#5a66d1] to-[#b65a88] shadow-lg rounded-xl max-sm:rounded-[10px] max-sm:w-[80%] p-6 flex flex-col items-center gap-6 -mt-20 max-w-6xl mx-auto relative z-10"
      style={{ minHeight: "250px", backgroundSize: "200% 200%", animation: "gradientShift 6s ease infinite" }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl sm:text-3xl font-semibold text-white text-center"
      >
        Millions Searching Every Day
      </motion.h2>

      {/* Inputs & Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-4 relative">
        {/* Program Input */}
        <div className="flex-1 relative">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 max-sm:w-[calc(100%+20px)] focus-within:ring-4 focus-within:ring-blue-400/50 transition-all duration-300">
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={searchQuery ? "" : examplePlaceholders[placeholderIndex]}
              className="bg-transparent w-full outline-none text-gray-700 dark:text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            />
          </div>

          {/* Suggestions */}
          {showSuggestions && searchQuery && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-1 z-20 overflow-hidden"
            >
              {suggestions.map((program) => (
                <div
                  key={program.id}
                  onMouseDown={() => handleSelectSuggestion(program.name)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {program.name}
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Location Input */}
        <div className="flex items-center gap-2 flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 max-sm:w-[calc(100%+20px)] focus-within:ring-4 focus-within:ring-blue-400/50 transition-all duration-300">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent w-full outline-none text-gray-700 dark:text-white placeholder-gray-400"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #212EA0" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="bg-[#212EA0] text-white px-6 py-3 rounded-lg font-medium transition-transform max-sm:w-[calc(100%+20px)]"
        >
          {loading ? "Searching..." : "Search"}
        </motion.button>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
};

export default Search;
