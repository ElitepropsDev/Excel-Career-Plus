import React from "react";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import assets from "../assets/assets"; // adjust path if needed
import { Link } from "react-router-dom"; // optional - remove if not using react-router

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Country for Your Study Abroad Journey",
    excerpt:
      "Break down costs, jobs, visas and the lifestyle vibes to pick the best country for your goals.",
    date: "2025-09-12",
    author: "ECP Team",
    tags: ["Study Abroad", "Guides"],
    image: assets.blog1,
    alt: "students walking on campus",
    slug: "/blog/choose-country",
  },
  {
    id: 2,
    title: "Top Scholarships Nigerian Students Can Apply for in 2025",
    excerpt:
      "Find legit scholarships and how to make your application stand out — scholarships demystified.",
    date: "2025-08-18",
    author: "ECP Team",
    tags: ["Scholarships", "Funding"],
    image: assets.blog2,
    alt: "happy student receiving scholarship",
    slug: "/blog/top-scholarships-2025",
  },
  {
    id: 3,
    title: "Mistakes Students Make When Applying to Schools Abroad",
    excerpt:
      "Avoid these common errors — from missing documents to weak SOPs (we explain how to fix them).",
    date: "2025-07-05",
    author: "ECP Advisor",
    tags: ["Applications", "Tips"],
    image: assets.blog3,
    alt: "student with laptop working on application",
    slug: "/blog/apply-mistakes",
  },
  {
    id: 4,
    title:
      "Canada vs UK vs Europe: Which One Is Better for International Students?",
    excerpt:
      "A clear comparison so you can choose based on jobs, cost of living and post-study visa options.",
    date: "2025-06-20",
    author: "ECP Research",
    tags: ["Compare", "Destinations"],
    image: assets.blog4,
    alt: "flags and campus images collage",
    slug: "/blog/canada-uk-europe",
  },
  {
    id: 5,
    title: "How to Write a Strong Statement of Purpose (SOP)",
    excerpt:
      "Step-by-step SOP tips that actually sound like you — and get noticed by admissions teams.",
    date: "2025-05-01",
    author: "ECP Writing Desk",
    tags: ["SOP", "Applications"],
    image: assets.blog5,
    alt: "writing on notepad with laptop",
    slug: "/blog/how-to-sop",
  },
  {
    id: 6,
    title: "Courses That Guarantee High-Paying Jobs Abroad in 2025",
    excerpt:
      "Career-driven course picks that match the market demand for 2025 and beyond — a quick guide.",
    date: "2025-04-12",
    author: "ECP Careers",
    tags: ["Careers", "Trends"],
    image: assets.blog6,
    alt: "students in tech classroom",
    slug: "/blog/high-paying-courses-2025",
  },
  {
    id: 7,
    title: "Why Studying Abroad Isn’t Only for the Rich",
    excerpt:
      "Practical budgeting, part-time work rules, and funding strategies that make study abroad achievable.",
    date: "2025-03-08",
    author: "ECP Insight",
    tags: ["Funding", "Advice"],
    image: assets.blog7,
    alt: "student budgeting at table",
    slug: "/blog/study-not-just-rich",
  },
  {
    id: 8,
    title: "How to Avoid Visa Rejection (Simple Tips That Work)",
    excerpt:
      "Practical checklist & examples so your visa application has the best chance of success.",
    date: "2025-02-14",
    author: "ECP Visa Team",
    tags: ["Visa", "Checklist"],
    image: assets.blog8,
    alt: "visa documents and passport",
    slug: "/blog/avoid-visa-rejection",
  },
  {
    id: 9,
    title: "10 Things to Know Before Moving to a New Country",
    excerpt:
      "Housing, weather, social tips and the little things students always forget — condensed and actionable.",
    date: "2025-01-09",
    author: "ECP Prep",
    tags: ["Pre-departure", "Checklist"],
    image: assets.blog9,
    alt: "packed suitcase by door",
    slug: "/blog/moving-abroad-checklist",
  },
  {
    id: 10,
    title: "The Rise of AI Jobs and How Students Can Prepare",
    excerpt:
      "The skills, courses, and projects that help students ride the AI wave into rewarding careers.",
    date: "2024-12-02",
    author: "ECP Tech",
    tags: ["AI", "Skills"],
    image: assets.blog10,
    alt: "people coding with AI visuals",
    slug: "/blog/prepare-ai-jobs",
  },
];

// Framer motion variants
const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const BlogList = () => {
  return (
    <section className="py-12 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            From the ECP Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Practical guides, real student stories, and career-focused advice to
            help you study smarter and move confidently into a global future.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-transparent hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-44 sm:h-48 md:h-56 object-cover"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-white/80 dark:bg-black/60 px-3 py-1 rounded-full text-xs font-semibold text-[#212EA0]">
                  <Calendar size={14} />{" "}
                  {new Date(post.date).toLocaleDateString()}
                </div>
                {/* Tag pills (top-right) */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {post.tags.slice(0, 2).map((t, i) => (
                    <span
                      key={i}
                      className="bg-[#EC4899]/10 text-[#EC4899] text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EC4899]/10 flex items-center justify-center text-[#EC4899] font-semibold">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="text-xs">
                      <div className="text-gray-900 dark:text-white font-medium">
                        {post.author}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Read more / CTA */}
                  <div>
                    <button className="inline-flex items-center gap-2 px-3 py-2 bg-[#212EA0] hover:bg-[#1c278d] text-white rounded-full text-sm font-medium transition-transform transform group-hover:translate-x-1">
                      Read
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* optional: simple pagination / show more */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mt-8"
        >
          <button className="px-6 py-2 bg-[#EC4899] hover:bg-[#e33a8a] text-white rounded-full font-medium shadow">
            Load more
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogList;
