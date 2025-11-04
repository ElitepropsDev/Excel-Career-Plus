import React, { useState, useEffect, useRef } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './Home/ThemeToggleBtn'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Navbar = ({theme, setTheme}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const sidebarRef = useRef(null) // Added for detecting outside clicks

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false)
            }
        }

        if (sidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [sidebarOpen])

  return (
    <motion.div
      initial={{opacity: 0, y: -50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
      
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-14 sm:w-16' alt=''/>

        <div ref={sidebarRef} className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)}/>

            {/* Updated Links for multi-page routing */}
            <Link onClick={()=>setSidebarOpen(false)} to="/" className='sm:hover:border-b'>Home</Link>
            <Link onClick={()=>setSidebarOpen(false)} to="/programs" className='sm:hover:border-b'>Programs</Link>
            <Link onClick={()=>setSidebarOpen(false)} to="/projects" className='sm:hover:border-b'>Projects</Link>
            <Link onClick={()=>setSidebarOpen(false)} to="/capacity" className='sm:hover:border-b'>Capacity</Link>
            <Link onClick={()=>setSidebarOpen(false)} to="/resources" className='sm:hover:border-b'>Resources</Link>
            <Link onClick={()=>setSidebarOpen(false)} to="/contact" className='sm:hover:border-b'>Contact Us</Link>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden'/>

            <Link to="/contact" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Get Started<img src={assets.arrow_icon} width={14} alt="" />
            </Link>
        </div>

    </motion.div>
  )
}

export default Navbar
