import React from 'react'
import { motion } from "motion/react"

const ProgramCard = ({ title, description, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl 
        overflow-hidden flex flex-col justify-between transition-all
        mx-6 sm:mx-0                /* Added margin left/right for mobile */
      "
    >
      {/* Program Image */}
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      {/* Program Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300 flex-1">{description}</p>

        {/* CTA Buttons */}
        <div className="mt-4 flex gap-2">
          <a
            href="#"
            className="flex-1 text-center bg-primary text-white px-3 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
          >
            Apply
          </a>
          <a
            href="#"
            className="flex-1 text-center border border-primary text-primary px-3 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition-all"
          >
            Details
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProgramCard
