import React, { useState, useEffect } from "react";
import images from "@/utils/images";
import Image from "next/image";
import { motion } from "framer-motion";

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("landscaping");
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(`/api/images?category=${selectedCategory}`);
      const data = await res.json();
      setCategoryImages((prevState) => ({
        ...prevState,
        [selectedCategory]: data,
      }));
    }

    fetchImages();
  }, [selectedCategory]);

  const imageKeys = categoryImages[selectedCategory]
    ? Object.keys(categoryImages[selectedCategory])
    : [];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
    setActiveIndex(0); // Reset active index when category changes
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageKeys.length) % imageKeys.length
    );
  };

  const currentImage =
    categoryImages[selectedCategory] &&
    categoryImages[selectedCategory][imageKeys[activeIndex]];

  return (
    <div className="bg-red-700 p-6 relative">
      {/* ... Rest of your code remains unchanged ... */}
      <div className="h-96 w-full relative bg-white rounded-xl overflow-hidden shadow-xl p-4">
        {currentImage && (
          <div className="h-full w-full bg-red-700 rounded overflow-hidden">
            <Image
              className="absolute inset-0 object-cover"
              src={currentImage.image}
              alt={currentImage.name}
              layout="fill"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
