import React, { useState, useEffect, useRef } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Added for detecting outside clicks

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // ⭐ Navbar background color applied
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium"
      style={{ backgroundColor: "#212EA0" }}
    >
      <img src={assets.logo} className="w-18 sm:w-25" alt="" />

      <div
        ref={sidebarRef}
        className={`text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#212EA0] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Updated Links based on client note */}
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/"
          className="sm:hover:border-b"
        >
          Home
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/programs"
          className="sm:hover:border-b"
        >
          Programs
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/partners"
          className="sm:hover:border-b"
        >
          Partner With Us
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/about"
          className="sm:hover:border-b"
        >
          About
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/contact"
          className="sm:hover:border-b"
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src={assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />

        <Link
          to="/contact"
          className="text-sm max-sm:hidden flex items-center justify-center gap-2 bg-white text-[#212EA0] px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="#212EA0"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l10 10-10 10-1.414-1.414L19.172 13H2v-2h17.172l-8.586-8.586z" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
