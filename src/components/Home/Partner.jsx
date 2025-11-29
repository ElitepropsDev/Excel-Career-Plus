import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Building2, Landmark, University } from "lucide-react";
import assets from "../../assets/assets";

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

const Partner = () => {
  const [activeRegion, setActiveRegion] = useState("europe");

  return (
    <section className="w-full py-20 bg-white">
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 text-center"
        >
          Our Global Network of Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-md mx-auto mb-12 text-base sm:text-lg text-center"
        >
          Trusted collaborations with institutions around the world.
        </motion.p>

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

        {/* Cards Grid */}
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col mx-15 sm:mx-0" // Added mobile margin
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
        {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <a
          href="/partners"
          className="inline-block px-8 py-3 bg-[#212EA0] text-white rounded-full shadow-lg font-semibold transition-all duration-300 hover:bg-[#EC4899] hover:scale-105"
        >
          Our Partners
        </a>
      </div>
    </section>
  );
};

export default Partner;
