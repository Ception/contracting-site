import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("landscaping");
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    async function fetchImages() {
      // console.log("INSIDE fetchImages");
      const res = await fetch(`/api/images?category=${selectedCategory}`, {
        cache: "no-store", // Disable cache for development
      });
      if (!res.ok) {
        console.log("Error fetching images");
        return;
      }
      const data = await res.json();
      setCategoryImages((prevState) => ({
        ...prevState,
        [selectedCategory]: data.files,
      }));
    }

    fetchImages();
  }, [selectedCategory]);

  const imageKeys = categoryImages[selectedCategory]
    ? Object.keys(categoryImages[selectedCategory])
    : [];

  // console.log("imageKeys", imageKeys);

  return (
    <div className="bg-red-700 p-6 relative">
      <div className="h-96 w-full relative bg-white rounded-xl overflow-hidden shadow-xl p-4">
        {imageKeys.length > 0 ? (
          <div className="h-full w-full bg-red-700 rounded overflow-hidden">
            {imageKeys.map((key, index) => (
              <Image
                key={key}
                className={`absolute inset-0 object-cover ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                src={`/${selectedCategory}/${categoryImages[selectedCategory][key]}`}
                alt={categoryImages[selectedCategory][key]}
                width={400}
                height={400}
              />
            ))}
          </div>
        ) : (
          <div>No images found for this category</div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
