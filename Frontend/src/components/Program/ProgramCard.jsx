import React from "react";
import { motion } from "motion/react";

const ProgramCard = ({ image, name, description, category, ctaText, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      {/* Program Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-36 sm:h-48 object-cover" // smaller height on mobile
      />

      {/* Program Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 flex-1">
        {category && (
          <p className="text-xs sm:text-xs font-medium text-[#212EA0] dark:text-purple-400">
            {category}
          </p>
        )}

        <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1">
          {description.length > 80 ? description.slice(0, 80) + "..." : description}
        </p>

        {ctaText && (
          <button
            onClick={onClick}
            className="mt-1 sm:mt-2 w-full bg-[#212EA0] text-white py-2 rounded-lg font-medium hover:scale-105 transition-transform text-xs sm:text-sm"
          >
            {ctaText}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProgramCard;
