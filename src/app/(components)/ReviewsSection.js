import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const nextReview = () => {
    if (startIndex + 3 >= reviews.length) {
      setStartIndex(0);
    } else {
      setStartIndex((previousStartIndex) => previousStartIndex + 3);
    }
  };

  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("Failed to fetch reviews:", response);
          return Promise.reject(`Status Code: ${response.status}`);
        }
      })
      .then((data) => {
        if (data && data.reviews) {
          setReviews(data.reviews.slice(0, 5));
        } else {
          console.error("No reviews data:", data);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!reviews) return <div>Loading...</div>;

  return (
    <div className="bg-red-700 p-6">
      <div className="mb-20 md:max-w-3xl text-center mx-auto">
        <h2 className="text-7xl lg:text-8xl text-slate-200 tracking-tighter-xl">
          Reviews
        </h2>
      </div>
      <div className="relative flex justify-start gap-x-5">
        {reviews.slice(startIndex, startIndex + 3).map((review, index) => (
          <motion.div
            key={`${index}-${startIndex}`}
            className="w-1/3 p-5"
            style={{ zIndex: 3 - index }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: index * 0.1 }}
          >
            <div className="h-72 px-6 py-8 bg-black border border-gray-900 border-opacity-30 rounded-3xl flex flex-col">
              <h3 className="font-heading mb-4 text-2xl text-slate-200 tracking-tighter leading-tight">
                {review.customer_name}
              </h3>
              <p className="mb-4 text-slate-200 text-opacity-60 overflow-ellipsis overflow-hidden line-clamp-4 flex-grow">
                {review.review}
              </p>
              <div className="flex items-center mt-1">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <motion.button
          onClick={() => nextReview()}
          className="px-8 py-2 bg-black text-slate-200 hover:bg-gray-800 transition rounded"
          whileHover={{ scale: 1.05 }}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};
