import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import assets from "../assets/assets";

const Footer = () => {
  // Smooth scroll handler
  const scrollToPartner = (e) => {
    e.preventDefault();
    const partnerSection = document.getElementById("partner");
    partnerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-[#212EA0] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">

        {/* Branding */}
        <div className="flex flex-col gap-4">
          <img src={assets.logo} alt="Logo" className="w-36" />
          <p className="text-gray-200/90">
            Empowering learners and institutions worldwide through curated
            programs, career development, and strategic partnerships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200/90">
            <li>
              <a href="/programs" className="hover:text-[#EC4899] transition">
                Programs
              </a>
            </li>
            <li>
              {/* Smooth scroll link */}
              <a
                href="#partner"
                onClick={scrollToPartner}
                className="hover:text-[#EC4899] transition"
              >
                Partner With Us
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#EC4899] transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#EC4899] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-lg mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-200/90">
            <li>
              <a href="/knowledgeHub" className="hover:text-[#EC4899] transition">
                Knowledge Hub
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-[#EC4899] transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#EC4899] transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[#EC4899] transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg mb-4">Join our mailing list</h4>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg text-white w-full sm:w-auto flex-1 border border-white placeholder-white"
            />
            <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-[#EC4899] transition self-center sm:self-auto">
              Subscribe
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#EC4899] transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-[#EC4899] transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#EC4899] transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-[#EC4899] transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 py-6 text-center text-gray-200/80 text-sm">
        &copy; {new Date().getFullYear()} Excel Career Plus. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
