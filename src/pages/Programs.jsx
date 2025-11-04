import React from 'react'
import { motion } from "motion/react"
import ProgramCard from '../components/Program/ProgramCard'
import TrustedBy from '../components/Home/TrustedBy'
import assets from '../assets/assets'   // ✅ make sure this import exists (for hero image, bgImage1, etc.)

const programData = [
  { id: "webdev", title: "Web Development Bootcamp", description: "Learn to build real-world web apps with React, Node.js, and more.", img: assets.program_webdev },
  { id: "datasci", title: "Data Science & ML", description: "Hands-on projects in Python, Pandas, and Machine Learning algorithms.", img: assets.program_datasci },
  { id: "nursing", title: "Nursing & Healthcare Skills", description: "Practical vocational training for healthcare assistants.", img: assets.program_nursing },
  { id: "teaching", title: "Digital Teaching Methods", description: "Empower lecturers with modern teaching tools and techniques.", img: assets.program_teaching },
  { id: "cloud", title: "Cloud Computing Essentials", description: "Learn AWS, Azure & cloud architecture basics.", img: assets.program_cloud },
  { id: "cybersec", title: "Cybersecurity Fundamentals", description: "Protect systems and data with hands-on security skills.", img: assets.program_cybersec },
  { id: "uiux", title: "UI/UX Design Bootcamp", description: "Design user-friendly interfaces and experiences.", img: assets.program_uiux },
  { id: "ai", title: "Artificial Intelligence Projects", description: "Explore AI concepts and build smart apps.", img: assets.program_ai },
  { id: "digitalmarketing", title: "Digital Marketing", description: "Learn SEO, social media marketing, and content strategy.", img: assets.program_digitalmarketing },
  { id: "projectmanagement", title: "Project Management", description: "Master Agile and Scrum for real-world projects.", img: assets.program_pm },
];


const Programs = () => {
  return (
    <div className="relative dark:bg-black min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div id='programs-hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        {/* small badge animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.6 }}
          viewport={{ once: true }}
          className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'
        >
          <img className='w-20' src={assets.group_profile} alt="" />
          <p className='text-xs font-medium'>Programs trusted by learners</p>
        </motion.div>

        {/* main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-medium xl:leading-[90px] max-w-5xl'
        >
          Empowering <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>careers</span> through learning.
        </motion.h1>

        {/* description / subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'
        >
          Explore real-world programs and bootcamps that bridge education with industry experience.
        </motion.p>

        {/* hero image (replace later if needed) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
          className='relative'
        >
          {/* ✅ replace this hero image later */}
          <img src={assets.program_hero} alt="" className='w-full max-w-5xl'/>
          <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
        </motion.div>
      </div>

      {/* ================= TRUSTED BY SECTION ================= */}
      {/* <TrustedBy /> */}

      {/* ================= PROGRAMS GRID ================= */}
      <motion.div
        id="programs-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-12 lg:px-24 pb-16 mt-10"
      >
        {programData.map((program, idx) => (
          <ProgramCard key={idx} {...program} />
        ))}
      </motion.div>
    </div>
  )
}

export default Programs
