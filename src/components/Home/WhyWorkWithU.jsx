import React from "react";
import { ShieldCheck, Users, Star, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blocks = [
  {
    id: 1,
    title: "Why Shouldn’t You?",
    description:
      "We don’t sell courses like others. We solve problems. Your goals, constraints, and long-term plans guide everything we recommend — not trends, hype, or random school lists.",
    icon: <ShieldCheck className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 2,
    title: "Tailored to Your Reality",
    description:
      "We don’t push destinations; we match you to the pathway that actually fits your budget, timelines, visa chances, and career direction.",
    icon: <Users className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 3,
    title: "Opportunity-Driven, Not Marketing-Driven",
    description:
      "Every program we promote has a purpose — affordability, visa viability, employability, or long-term settlement outcomes. Nothing is “just to fill a brochure.”",
    icon: <Star className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 4,
    title: "Honest Guidance You Can Trust",
    description:
      "If something won’t work, we tell you. If there’s a smarter alternative, we show you. Our role is to protect your investment and increase your chances — not to sell dreams.",
    icon: <ClipboardCheck className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 5,
    title: "Structured Support, Zero Fluff",
    description:
      "Once the pathway is clear, we help you prepare, organize, and present your application properly. Simple. No gimmicks. No recycled templates.",
    icon: <ShieldCheck className="w-10 h-10 text-[#EC4899]" />,
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 bg-[#E0F2FE]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Work With Us
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Helping students and partners achieve measurable success every step of
          the way
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center max-w-sm mx-auto sm:mx-0 transform transition-all hover:scale-105"
            >
              {block.icon}
              <h3 className="mt-4 text-xl font-semibold">{block.title}</h3>
              <p className="mt-2 text-gray-500">{block.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#212EA0] text-white rounded-lg shadow hover:bg-[#0f1a75] transition inline-block"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
