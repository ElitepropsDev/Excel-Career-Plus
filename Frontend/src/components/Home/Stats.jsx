import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BookOpen, Building2, Globe } from "lucide-react";

const StatsCard = ({ icon, target, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const step = 20;
      const increment = target / (duration / step);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, step);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl py-10 px-6 flex flex-col items-center gap-4 shadow-lg border border-white/20 transition-all duration-300 h-auto w-full max-w-[280px] mx-auto"
    >
      <div className="bg-white/20 p-3 rounded-full text-[#4d8cea]">{icon}</div>
      <h3 className="text-5xl font-bold text-[#4d8cea]">{count}+</h3>
      <p className="text-lg opacity-90 text-center">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center bg-gradient-to-t from-[#eef3ff]/80 to-transparent dark:from-[#111827]/70"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
        Our Impact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <StatsCard
          icon={<BookOpen size={28} />}
          target={25}
          label="Learners supported annually"
          inView={statsInView}
        />
        <StatsCard
          icon={<Building2 size={28} />}
          target={10}
          label="Partner institutions"
          inView={statsInView}
        />
        <StatsCard
          icon={<Globe size={28} />}
          target={5}
          label="Global collaborations"
          inView={statsInView}
        />
        <StatsCard
          icon={<Users size={28} />}
          target={100}
          label="Commitment to partner growth"
          inView={statsInView}
        />
      </div>
    </motion.div>
  );
};

export default Stats;
