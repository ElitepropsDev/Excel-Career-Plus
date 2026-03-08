import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FAQ = () => {
  const faqs = [
    // --- ORIGINAL 10 ---
    {
      q: "How do I apply for ECP programs?",
      a: "Visit our application page, fill out the form, and submit your details. Our team will guide you through the next steps.",
    },
    {
      q: "Can I access programs from my country?",
      a: "Yes, ECP programs are accessible globally. Certain programs may have specific eligibility requirements.",
    },
    {
      q: "Are there scholarships or financial support options?",
      a: "We provide information on scholarships, loans, and funding opportunities to eligible students.",
    },
    {
      q: "Can institutions partner with ECP?",
      a: "Absolutely! Institutions can collaborate with us to offer curated programs and joint initiatives.",
    },
    {
      q: "Do I receive a certificate after completing a program?",
      a: "Yes, most programs provide verified certificates upon successful completion.",
    },
    {
      q: "Is there any cost to join ECP resources?",
      a: "Some materials are free, while premium programs and advanced workshops may have fees.",
    },
    {
      q: "How long does the application process take?",
      a: "Typically, applications are reviewed within 3–5 business days, depending on program type.",
    },
    {
      q: "Can I volunteer or contribute to ECP initiatives?",
      a: "Yes! We welcome contributions. Contact us to explore volunteering or content collaboration opportunities.",
    },
    {
      q: "Are ECP programs suitable for working professionals?",
      a: "Definitely. Many of our programs are designed to accommodate professionals and flexible schedules.",
    },
    {
      q: "Who can I contact for additional support?",
      a: "Reach out via our contact form or email. Our support team is ready to assist with any inquiries.",
    },

    // --- EXTRA 10 NEW ---
    {
      q: "Does ECP help with visa guidance?",
      a: "Yes. We provide essential pre-arrival information and link you to trusted advisors for visa documentation support.",
    },
    {
      q: "Can I transfer between programs?",
      a: "Program transfers may be possible depending on eligibility and availability. Contact support for more help.",
    },
    {
      q: "Do programs have age limits?",
      a: "Most programs are open to many age groups, but some specialized programs may have minimum requirements.",
    },
    {
      q: "How do partnerships benefit institutions?",
      a: "Partners gain access to global reach, curated student pathways, and collaborative educational initiatives.",
    },
    {
      q: "Is ECP open to African-based institutions?",
      a: "Absolutely. ECP actively collaborates with institutions across Africa and worldwide.",
    },
    {
      q: "How do I stay updated on new programs?",
      a: "Subscribe to our newsletter or follow us on social media for updates on new programs and events.",
    },
    {
      q: "Are there deadlines for applications?",
      a: "Some programs have rolling admissions, while others follow strict deadlines. Always check program details.",
    },
    {
      q: "Do you offer live chat support?",
      a: "Yes, during business hours we provide live support where you can get assistance in real time.",
    },
    {
      q: "Can I request customized career guidance?",
      a: "Yes. We offer personalized advisory sessions based on your goals.",
    },
    {
      q: "Does ECP work with international universities?",
      a: "Yes, we collaborate with trusted global institutions to provide premium pathways.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 text-center">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-4 text-[#5044E5]"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10 text-sm sm:text-base"
      >
        Get quick answers about ECP programs, partnerships, applications, and
        global opportunities. Your journey just got easier.
      </motion.p>

      {/* Illustration - replace with your asset */}
      <motion.img
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        src={assets.faq_hero}
        alt="FAQ Illustration"
        className="w-70 sm:w-full max-w-md mx-auto mb-12 rounded-lg shadow-lg"


      />

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <details
              className="group"
              onClick={(e) => {
                const all = document.querySelectorAll("details");
                all.forEach(
                  (el) => el !== e.currentTarget && el.removeAttribute("open")
                );
              }}
            >
              <summary className="cursor-pointer text-lg font-semibold text-[#5044E5] flex justify-between items-center">
                {faq.q}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{faq.a}</p>
            </details>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
