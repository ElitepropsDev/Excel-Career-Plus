import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'
import { Link } from 'react-router-dom'

const Footer = ({theme}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
      {/* footer top */}
      <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-10'>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'
        >
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-14 sm:w-16' alt="EduHub Logo" />
            <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

            <ul className='flex flex-wrap gap-4 sm:gap-8'>
                <li><Link className='hover:text-primary' to="/">Home</Link></li>
                <li><Link className='hover:text-primary' to="/programs">Program</Link></li>
                <li><Link className='hover:text-primary' to="/projects">Project</Link></li>
                <li><Link className='hover:text-primary' to="/capacity">Capacity</Link></li>
                <li><Link className='hover:text-primary' to="/resources">Resources</Link></li>
                <li><Link className='hover:text-primary' to="/contact">Contact Us</Link></li>
            </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400'
        >
            <h3 className='font-semibold'>Join our learning community</h3>
            <p className='text-sm mt-2 mb-6'>Get updates on new programs and real-world learning opportunities weekly.</p>
            <div className='flex flex-col sm:flex-row gap-2 text-sm'>
                <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
                <button className='bg-primary text-white rounded px-6 py-3 sm:py-0'>Subscribe</button>
            </div>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6'/>

      {/* footer bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>Copyright 2025 © Excel Career Plus - EduHub - All Rights Reserved.</p>
        <div className='flex items-center justify-center sm:justify-between gap-4'>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={assets.instagram_icon} alt="Instagram" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
