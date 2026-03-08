import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const privacyItems = [
  {
    id: 1,
    title: "Information We Collect",
    content:
      "We collect personal information such as name, email, phone number, preferences, and submitted documents when you interact with our platform.",
  },
  {
    id: 2,
    title: "How We Use Your Data",
    content:
      "Your data helps us provide tailored educational programs, support, communication updates, and platform improvement.",
  },
  {
    id: 3,
    title: "Legal Basis for Processing",
    content:
      "We process your data based on consent, contractual obligations, and legitimate interests necessary for service delivery.",
  },
  {
    id: 4,
    title: "Cookies and Tracking Technologies",
    content:
      "We may use cookies to enhance user experience, analyze activity, and improve website performance.",
  },
  {
    id: 5,
    title: "Third-Party Sharing",
    content:
      "We only share data with trusted educational partners or services required to process your application.",
  },
  {
    id: 6,
    title: "Data Retention",
    content:
      "Your information is retained only as long as necessary for service fulfillment or legal compliance.",
  },
  {
    id: 7,
    title: "Your Rights",
    content:
      "You have rights to access, correct, delete, restrict, or withdraw consent for your data at any time.",
  },
  {
    id: 8,
    title: "Security Measures",
    content:
      "We implement encryption, secure servers, and restricted data access to protect your information.",
  },
  {
    id: 9,
    title: "International Data Transfers",
    content:
      "Some partner institutions are located abroad. We ensure compliant data transfer procedures.",
  },
  {
    id: 10,
    title: "Children’s Privacy",
    content:
      "Our services are not intended for individuals under 16, and we do not knowingly collect data from minors.",
  },
  {
    id: 11,
    title: "Third-Party Websites",
    content:
      "We are not responsible for privacy practices on external websites linked from our platform.",
  },
  {
    id: 12,
    title: "Marketing Communications",
    content:
      "You may receive updates or newsletters, but you can unsubscribe at any time.",
  },
  {
    id: 13,
    title: "Use of Analytics",
    content:
      "We may use analytics tools to understand user behavior and improve site performance.",
  },
  {
    id: 14,
    title: "Data Accuracy",
    content:
      "We rely on accurate information from users and may request updates to keep records current.",
  },
  {
    id: 15,
    title: "Automated Decision Making",
    content:
      "Some processes may be automated, such as eligibility assessments, but human review is always available.",
  },
  {
    id: 16,
    title: "User Responsibilities",
    content:
      "Users are responsible for maintaining the confidentiality of their login credentials.",
  },
  {
    id: 17,
    title: "Breach Notification",
    content:
      "In the event of a data breach, affected users will be notified promptly according to legal requirements.",
  },
  {
    id: 18,
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy periodically. Continued use of our services indicates acceptance.",
  },
  {
    id: 19,
    title: "How to Request Data Deletion",
    content:
      "You may request removal of your data by contacting our support team via email.",
  },
  {
    id: 20,
    title: "Contact Information",
    content:
      "For all privacy-related inquiries, reach out to our support team through our official contact channels.",
  },
];

const PrivacyPolicy = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
      >
        Privacy Policy
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {privacyItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            >
              <h3 className="text-lg font-semibold text-[#5044E5]">
                {item.title}
              </h3>
              <ChevronDown
                className={`transition-transform ${
                  openItem === item.id ? "rotate-180" : ""
                }`}
                style={{ color: "#EC4899" }}
              />
            </div>

            {openItem === item.id && (
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {item.content}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
