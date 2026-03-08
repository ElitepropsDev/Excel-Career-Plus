import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Building2, Landmark, University } from "lucide-react";
import assets from "../assets/assets";
import WhyChooseUs from "../components/Home/WhyChooseUs"; // Make sure the path is correct

const regions = [
  { id: "europe", label: "Europe", icon: <Building2 size={18} /> },
  {
    id: "north-america",
    label: "North America",
    icon: <University size={18} />,
  },
  { id: "asia", label: "Asia", icon: <Globe size={18} /> },
  { id: "africa", label: "Africa", icon: <Landmark size={18} /> },
];

const regionCards = {
  europe: [
    {
      title: "Global Partners",
      description:
        "Connecting students with top European institutions for seamless international opportunities. Our curated network ensures access to quality education across multiple countries.",
      image: assets.partner_global,
    },
    {
      title: "Trusted Institutions",
      description:
        "Our European partners are carefully vetted for credibility and excellence. Every program is designed to guarantee student success.",
      image: assets.partner_trust,
    },
    {
      title: "Agency Collaboration",
      description:
        "Collaborate with ECP to expand your outreach across Europe. Agencies benefit from structured support and resources.",
      image: assets.partner_collaboration,
    },
  ],
  "north-america": [
    {
      title: "Leading Universities",
      description:
        "We connect students to top-tier universities across North America. Each program is carefully vetted to ensure quality outcomes.",
      image: assets.partner_university,
    },
    {
      title: "Certified Programs",
      description:
        "Our programs meet international standards and industry requirements. Students are guided step-by-step throughout the process.",
      image: assets.partner_certified,
    },
    {
      title: "Strategic Partnerships",
      description:
        "ECP collaborates with agencies and institutions to broaden opportunities. Partners gain insights, resources, and reliable support.",
      image: assets.Partner_strategic,
    },
  ],
  asia: [
    {
      title: "Premier Institutions",
      description:
        "ECP connects students with leading Asian universities and colleges. Every program is evaluated for quality and impact.",
      image: assets.partner_premier,
    },
    {
      title: "Verified Programs",
      description:
        "All programs undergo strict vetting for credibility and results. Students are supported through every stage.",
      image: assets.program_digitalmarketing,
    },
    {
      title: "Collaborative Networks",
      description:
        "We work with agencies to expand opportunities across Asia. Our partners receive resources and ongoing support.",
      image: assets.partner_collabo,
    },
  ],
  africa: [
    {
      title: "Top Institutions",
      description:
        "ECP strengthens connections to leading African institutions. Programs focus on quality, accessibility, and practical outcomes.",
      image: assets.partner_top,
    },
    {
      title: "Accredited Programs",
      description:
        "All programs are certified and adhere to global standards. Students are guided through transparent processes.",
      image: assets.partner_accredited,
    },
    {
      title: "Collaborative Initiatives",
      description:
        "We partner with agencies to broaden African student opportunities. Partners get support and resources for seamless collaboration.",
      image: assets.faculty,
    },
  ],
};

const Partners = () => {
  const [activeRegion, setActiveRegion] = useState("europe");

  return (
    <>
      <div className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-gray-900">
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Global Institutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            ECP collaborates with top universities, tech giants, and
            international organizations to give you the ultimate learning
            experience.
          </p>
        </div>

        {/* Credibility Strip */}
        <div className="flex flex-col sm:flex-row justify-around items-center bg-[#212EA0] text-white py-6 px-4 sm:py-12 sm:px-6 rounded-xl -mt-10 sm:mt-12 mb-1 sm:mb-16 gap-4 text-center">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">
              100+ Global Partners
            </h4>
            <p className="text-xs sm:text-sm opacity-90">
              Universities & companies
            </p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">5000+ Students</h4>
            <p className="text-xs sm:text-sm opacity-90">Empowered worldwide</p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold">20+ Countries</h4>
            <p className="text-xs sm:text-sm opacity-90">Reach & exposure</p>
          </div>
        </div>

        {/* Global Partners Tabs & Cards */}
        <section className="w-full py-10 bg-white rounded-xl mb-16 px-0">
          <div className="px-4 sm:px-6 lg:px-12">
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`
                    flex items-center gap-2 px-7 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 mr-3.5
                    ${
                      activeRegion === region.id
                        ? "bg-blue-600 text-white shadow-md scale-105"
                        : "bg-white text-gray-700 border border-gray-300"
                    }
                    hover:bg-[#EC4899] hover:text-white hover:shadow-lg hover:scale-110
                  `}
                >
                  {region.icon}
                  {region.label}
                </button>
              ))}
            </div>

            {/* Cards */}
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regionCards[activeRegion].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-36 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 flex-1">
                    <h3 className="text-sm sm:text-lg font-semibold text-[#EC4899]">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1">
                      {card.description.length > 100
                        ? card.description.slice(0, 100) + "..."
                        : card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <div className="-mt-[50px] -mb-[80px] sm:mt-0 sm:mb-0 text-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#212EA0] to-[#5a66d1] text-white rounded-full shadow-lg font-semibold inline-block"
          >
            Partner with Us
          </motion.a>
        </div>
      </div>

      {/* WhyChooseUs section OUTSIDE parent div for proper alignment */}
      <WhyChooseUs />
    </>
  );
};

export default Partners;
