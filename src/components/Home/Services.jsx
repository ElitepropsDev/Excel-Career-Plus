import React from "react";
import { Globe, UserCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: <Globe className="w-10 h-10 text-white" />,
    title: "Study Abroad & Global Admissions",
    description:
      "Many international students who want to study abroad face visa rejections or end up in courses and destinations that don’t meet their expectations — leaving them frustrated and uncertain. Did you know that proper guidance and accurate information can reduce rejection rates by up to 20%? At Excel Career Plus, we carefully select university programs and study abroad destinations using clear standards that benefit both students and partner agencies, providing reliable guidance that helps international students access study abroad opportunities and career pathways that truly match their goals.",
    gradient: "from-[#5044E5] to-[#4d8cea]",
  },
  {
    id: 2,
    icon: <UserCheck className="w-10 h-10 text-white" />,
    title: "Empowering Students and Agencies",
    description:
      "Students and agencies struggle to identify the skills, programs, pathways, or destinations that are the right fit — especially with the rapidly changing dynamics of the study abroad space. Low-quality or short-sighted guidance is often the root cause of visa rejections and misaligned study abroad choices. At Excel Career Plus, we support our students to make the right decisions, and our partner agencies to stay relevant and align their offerings with current needs and requirements.",
    gradient: "from-[#EC4899] to-[#F472B6]",
  },
  {
    id: 3,
    icon: <Briefcase className="w-10 h-10 text-white" />,
    title: "CareerXP – Learning by Experience",
    description:
      "Many confuse employability with certificates. Students and job seekers have completed countless training programs, yet still struggle to land a job or monetize what they’ve learned. CareerXP, through our project-based training, puts you in real work scenarios, providing verifiable work experience and practical skills that give you up to 50% more visibility.",
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="py-16 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-100"
    >
      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Discover how Excel Career Plus empowers students and partner agencies.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            className={`p-8 rounded-2xl shadow-xl text-white bg-gradient-to-r ${service.gradient} flex flex-col gap-4 transform transition-all duration-300 hover:-translate-y-2 hover:brightness-110`}
          >
            {/* Icon */}
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold">{service.title}</h3>

            {/* Description */}
<div className={`w-full ${service.id === 3 ? "text-left" : "text-justify"}`}>
  <p className="text-white/90 text-sm">{service.description}</p>
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
