import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 p-12"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl mb-2 font-semibold">
        Customer testimonials
      </h1>
      <p className="mb-12 text-gray-500">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md border w-80 cursor-pointer m-auto hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-14 rounded-full"
                src={item.image}
                alt="Testimonial Image"
              />

              <h2 className="text-xl mt-3 font-semibold">{item.name}</h2>
              <p className="mb-4 text-gray-500">{item.role}</p>

              <div className="flex mb-4">
                {Array(item.stars)
                  .fill()
                  .map((i, index) => (
                    <img key={index} src={assets.rating_star} alt="Rating" />
                  ))}
              </div>

              <p className="text-gray-600 text-center text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
