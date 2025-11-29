import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah A.",
    program: "Hungary Nursing Track",
    message:
      "ECP guided me from choosing my program to securing admission in Europe. Their support felt personal and professional.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Daniel O.",
    program: "Canada Business Pathway",
    message:
      "I had no idea where to start, but ECP made everything simple. The counselling and step-by-step process reduced all my stress.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mariam K.",
    program: "UK Foundation Route",
    message:
      "What impressed me most was how transparent and honest they are. ECP helped me choose the right country for my goals.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Precious E.",
    program: "Germany Engineering Track",
    message:
      "ECP didn’t just help me apply — they helped me understand my future. Their guidance changed everything.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Collins T.",
    program: "Ireland Healthcare Program",
    message:
      "From counselling to visa prep, the support was top-tier. I recommend ECP to anyone serious about studying abroad.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
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

      {/* Swiper Carousel */}
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
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-center border border-gray-200
           transform transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_80px_rgba(0,0,0,0.4)]
           w-72 sm:w-full mx-auto"


            >
              {/* Headshot */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover mx-auto mb-4"
              />

              {/* Testimonial text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                “{item.message}”
              </p>

              {/* Name & Program */}
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
