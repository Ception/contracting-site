import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("interior");
  const [activeIndex, setActiveIndex] = useState(0);
  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(`/api/images?category=${selectedCategory}`, {
        cache: "no-store", // Disable cache for development
        // add cache for production
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

  return (
    <div className="bg-red-700 pt-6 px-8 relative flex h-4/5">
      <div className="flex-none w-1/3 h-full relative bg-white p-6 rounded-xl overflow-hidden shadow-xl">
        {/* Category Buttons */}
        <div className="absolute top-0 left-0 right-0 flex justify-center p-4">
          <button
            className={`px-4 py-2 m-2 rounded-full text-lg font-bold ${
              selectedCategory === "interior"
                ? "bg-white text-red-700"
                : "bg-transparent text-slate-200 border border-white"
            }`}
            onClick={() => setSelectedCategory("interior")}
          >
            Interior
          </button>
          <button
            className={`px-4 py-2 m-2 rounded-full text-lg font-bold ${
              selectedCategory === "exterior"
                ? "bg-white text-red-700"
                : "bg-transparent text-slate-400 border border-white"
            }`}
            onClick={() => setSelectedCategory("exterior")}
          >
            Exterior
          </button>
        </div>

        {imageKeys.length > 0 ? (
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={imageKeys.length}
            orientation="vertical"
          >
            <div className="relative h-full border-8 border-white rounded overflow-hidden mt-16">
              {" "}
              {/* Adjusted margin-top */}
              <Slider>
                {imageKeys.map((key, index) => (
                  <Slide index={index} key={key}>
                    <Image
                      className="object-cover rounded absolute inset-0"
                      src={`/${selectedCategory}/${categoryImages[selectedCategory][key]}`}
                      alt={categoryImages[selectedCategory][key]}
                      fill={true}
                      sizes="(max-width: 768px) 100vw"
                      loading="lazy"
                    />
                  </Slide>
                ))}
              </Slider>
              <ButtonBack className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-sm shadow-lg z-10">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 14l5-5 5 5"
                    stroke="#b30000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <ButtonNext className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-sm shadow-lg z-10">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="#b30000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
              <DotGroup className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4" />
            </div>
          </CarouselProvider>
        ) : (
          <div className="text-red-500">No images found for this category</div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center items-left p-6">
        <h2 className="text-5xl font-bold text-white mb-4">Gallery</h2>
        <p className="text-white font-light text-left px-auto">
          At Searle Contracting, our gallery is a testament to our dedication
          and expertise, showcasing masterful projects that stand as a hallmark
          of excellence and meticulous attention to detail. Each image is a
          narrative, portraying our journey of transforming mere visions into
          remarkable, tangible realities. We invite you to explore this visual
          narrative and delve into the artistry and technical prowess embodied
          in every project we undertake.
        </p>
      </div>
    </div>
  );
};

export default GallerySection;
