import React, { useState } from "react";
import images from "@/utils/images";
import Image from "next/image";
import { motion } from "framer-motion";

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("landscaping");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
    setActiveIndex(0); // Reset active index when category changes
  };

  const categoryImages = images[selectedCategory];
  const imageKeys = Object.keys(categoryImages);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageKeys.length) % imageKeys.length
    );
  };

  return (
    <div className="bg-red-700 p-6 relative">
      {/* Title and Categories */}
      <div className="flex justify-between items-center mb-10 px-20">
        {" "}
        {/* Adjusted to `justify-between` and added `px-20` for more spacing */}
        <div className="text-red-700 bg-slate-200 rounded-xl transition-colors duration-300 p-2 text-2xl">
          Gallery
        </div>
        <div className="text-right space-x-8">
          {["Landscaping", "Interior", "Exterior"].map((category) => (
            <motion.span
              whileTap={{ scale: 0.95 }}
              whileFocus={{ scale: 0.95 }}
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer text-slate-200 hover:bg-slate-100 hover:text-red-700 transition-colors duration-300 p-2 rounded-lg text-base ${
                selectedCategory === category.toLowerCase()
                  ? "text-gray-800"
                  : "text-gray-500 hover:scale-105"
              }`}
            >
              {category}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-gray-200 p-2 rounded-full shadow-lg"
          >
            &larr;
          </button>
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-gray-200 p-2 rounded-full shadow-lg"
          >
            &rarr;
          </button>
        </div>
        <div className="h-96 w-full relative bg-white rounded-xl overflow-hidden shadow-xl p-4">
          {" "}
          {/* Added `p-4` for an inner background */}
          <div className="h-full w-full bg-red-700 rounded overflow-hidden">
            {" "}
            {/* Added this div as the inner background */}
            <Image
              className="absolute inset-0 object-cover"
              src={categoryImages[imageKeys[activeIndex]].image}
              alt={categoryImages[imageKeys[activeIndex]].name}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
