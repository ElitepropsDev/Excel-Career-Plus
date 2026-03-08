import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const termsData = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content:
      "By accessing ECP’s platform, you confirm that you accept these terms and agree to comply with them."
  },
  {
    id: 2,
    title: "Eligibility",
    content:
      "You must be at least 16 years old or have parental consent to use our services."
  },
  {
    id: 3,
    title: "Service Description",
    content:
      "ECP provides global study guidance, program insights, and educational advisory services."
  },
  {
    id: 4,
    title: "Account Responsibility",
    content:
      "Users are responsible for maintaining the confidentiality of their account information."
  },
  {
    id: 5,
    title: "Program Information",
    content:
      "All program details are subject to change by partner institutions without prior notice."
  },
  {
    id: 6,
    title: "User Obligations",
    content:
      "You agree not to misuse our platform or submit false information during applications."
  },
  {
    id: 7,
    title: "Intellectual Property",
    content:
      "All content, branding, and materials on this site belong to ECP and may not be used without permission."
  },
  {
    id: 8,
    title: "Third-Party Links",
    content:
      "Our platform may contain links to external websites. ECP is not responsible for their content."
  },
  {
    id: 9,
    title: "Payments & Fees",
    content:
      "Some services may require payment. All fees are non-refundable unless otherwise stated."
  },
  {
    id: 10,
    title: "Service Modifications",
    content:
      "We may revise or discontinue parts of our services at any time without prior notice."
  },
  {
    id: 11,
    title: "Limitation of Liability",
    content:
      "ECP is not liable for admission outcomes, visa decisions, or actions taken by partner institutions."
  },
  {
    id: 12,
    title: "Accuracy of Information",
    content:
      "We strive to provide accurate data but cannot guarantee that every detail is always up-to-date."
  },
  {
    id: 13,
    title: "Termination of Access",
    content:
      "ECP may suspend your account if we detect misuse, fraud, or violation of our policies."
  },
  {
    id: 14,
    title: "Privacy & Data Usage",
    content:
      "Your data is processed according to our Privacy Policy and used strictly for service delivery."
  },
  {
    id: 15,
    title: "User Content",
    content:
      "Any content submitted by users must not infringe on copyrights or contain harmful material."
  },
  {
    id: 16,
    title: "Communications",
    content:
      "By using our service, you consent to receive emails, alerts, and updates from ECP."
  },
  {
    id: 17,
    title: "No Guarantee of Admission",
    content:
      "ECP does not guarantee admission into any partner institution or program."
  },
  {
    id: 18,
    title: "Governing Law",
    content:
      "These terms are governed by local and international education service regulations."
  },
  {
    id: 19,
    title: "Changes to Terms",
    content:
      "We may update these Terms & Conditions periodically. Continued use means you accept the changes."
  },
  {
    id: 20,
    title: "Contact Information",
    content:
      "For inquiries regarding these terms, you may contact our official support channels."
  }
];

const TermsAndConditions = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="px-5 sm:px-10 py-16 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#5044E5" }}
      >
        Terms & Conditions
      </motion.h2>

      <div className="space-y-4">
        {termsData.map((item) => (
          <motion.div
            key={item.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-900 shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: item.id * 0.03 }}
          >
            <button
              onClick={() =>
                setOpenItem(openItem === item.id ? null : item.id)
              }
              className="flex justify-between items-center w-full text-left"
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: "#5044E5" }}
              >
                {item.title}
              </h3>
              <ChevronDown
                className={`transition-transform ${
                  openItem === item.id ? "rotate-180" : ""
                }`}
                style={{ color: "#EC4899" }}
              />
            </button>

            {openItem === item.id && (
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.content}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
