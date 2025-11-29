import React from "react";
import { CheckCircle, FileText, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Choose a Program",
    description: "Pick an ECP-branded program that fits your goals.",
    icon: <CheckCircle className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 2,
    title: "Apply Online",
    description: "Fill out a simple application form quickly.",
    icon: <FileText className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 3,
    title: "Get Guidance",
    description: "Receive personalized support and next steps.",
    icon: <Users className="w-10 h-10 text-[#EC4899]" />,
  },
  {
    id: 4,
    title: "Start Your Journey",
    description: "Begin your program abroad and achieve your dreams.",
    icon: <Rocket className="w-10 h-10 text-[#EC4899]" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-[#E0F2FE]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <p className="text-gray-600 mb-12">
          Your journey with ECP is simple, guided, and effective.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center 
                 w-full max-w-[400px] sm:max-w-sm mx-auto sm:mx-0"
            >
              {step.icon}
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 px-6 py-3 bg-[#212EA0] text-white rounded-lg shadow hover:bg-[#0f1a75] transition inline-block"
        >
          Start Your Journey
        </motion.a>
      </div>
    </section>
  );
};

export default HowItWorks;
