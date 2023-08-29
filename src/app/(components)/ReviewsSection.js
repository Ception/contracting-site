import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion'

// export const ReviewsSection = () => {
//     const [reviews, setReviews] = useState(null);
  
//     useEffect(() => {
//       fetch('/api/reviews')
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error(`Status Code: ${response.status}`);
//           }
//         })
//         .then(data => {
//           const sortedReviews = data.reviews.sort((a, b) => b.rating - a.rating).slice(0, 15);
//           setReviews(sortedReviews);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     }, []);
  
//     if (!reviews) return <div>Loading...</div>;
  
//     const reviewGroups = [];
//     for (let i = 0; i < reviews.length; i += 3) {
//       reviewGroups.push(reviews.slice(i, i + 3));
//     }
  
//     return (
//       <section className="bg-new-gray py-20">
//         <h1 className="text-center text-5xl font-extrabold mb-10">Reviews</h1>
//         <Carousel
//           showArrows={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           autoPlay={true}
//           interval={6000}
//           className="flex justify-center"
//         >
//           {reviewGroups.map((group, index) => (
//             <div key={index} className="flex justify-around">
//               {group.map((review, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-4 w-80 bg-white shadow-xl rounded-xl flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <h2 className="text-xl font-bold text-gray-800">{review.customer_name}</h2>
//                   <div className="flex items-center mt-1">
//                     {Array(review.rating).fill().map((_, i) => (
//                       <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                         <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="mt-2 text-gray-600">{review.review}</p>
//                 </motion.div>
//               ))}
//             </div>
//           ))}
//         </Carousel>
//       </section>
//     );
//   };

export const ReviewsSection = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch('/api/reviews')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.error('Failed to fetch reviews:', response);
      return Promise.reject(`Status Code: ${response.status}`);
    }
  })
  .then(data => {
    if (data && data.reviews) {
      setReviews(data.reviews.slice(0, 5));
    } else {
      console.error('No reviews data:', data);
    }
  })
  .catch(error => console.error('Error:', error));
  }, []);

  if (!reviews) return <div>Loading...</div>;

  return (
    <div className="bg-new-gray">
      <div className='mb-20 md:max-w-3xl text-center mx-auto'>
        <h2 className='text-7xl lg:text-8xl text-white tracking-tighter-xl'>Reviews</h2>
      </div>
      <div className='flex flex-wrap'>
        {reviews.map((review, index) => (
          <div key={index} className='w-full md:w-1/2 lg:w-1/3 p-5'>
            <div className="px-9 py-10 h-auto bg-second-gray border border-gray-900 border-opacity-30 rounded-3xl w-full">
              <h3 className='font-heading mb-6 text-2xl text-white tracking-tighter leading-tight'>{review.customer_name}</h3>
              <p className='mb-6 text-white text-opacity-60'>{review.review}</p>
              <div className="flex items-center mt-1">
                {Array(review.rating).fill().map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className='w-full md:w-1/2 lg:w-1/3 p-5 cursor-pointer' onClick={() => window.location.href = 'https://www.google.com/maps/'}>
          <div className="px-9 py-10 h-auto bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-3xl w-full flex items-center justify-center  hover:bg-second-gray transition">
            <span className="text-4xl text-white">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};
