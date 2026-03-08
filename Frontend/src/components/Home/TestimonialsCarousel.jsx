import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import assets from "../../assets/assets";

const testimonials = [
  {
    name: "Student — Kenya (Hungary Masters)",
    program: "Hungary Masters Pathway",
    message:
      "ECP helped me understand the right pathway and guided me through every step of the process. I got my admission smoothly, and later secured a scholarship. I’m grateful because they never charged me a single fee — they genuinely wanted me to succeed.",
    image: assets.chinedu_photo, 
  },
  {
    name: "Partner Agency",
    program: "Agency Partnership",
    message:
      "Working with Excel Career Plus has transformed the way we guide our students. They help us choose the right programs, avoid common mistakes, and stay updated with reliable information. Our results improved almost immediately.",
    image: assets.institution_logo,
  },
  {
    name: "Student — Nigeria",
    program: "Nigeria Undergraduate Pathway",
    message:
      "Before ECP, I was confused about which country and program to choose. Their guidance made everything clear, and I finally secured the admission I wanted. The support was honest, detailed, and genuinely helpful.",
    image: assets.ada_photo, 
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="w-full py-20 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-black">
          What Students Are Saying
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Real stories from students who trusted the ECP pathway
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-3xl mx-auto px-6"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]
                         border border-gray-200 text-center
                         transform transition-all duration-300 hover:scale-105 
                         hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                         w-72 sm:w-full mx-auto"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover mx-auto mb-4"
              />

              {/* Text - Updated for best readability */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mx-auto max-w-[90%]">
                “{item.message}”
              </p>

              {/* Name */}
              <div className="mt-6">
                <h3 className="font-semibold text-[#212EA0]">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.program}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
