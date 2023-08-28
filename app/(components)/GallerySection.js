import images from '@/utils/images';
import Image from 'next/image';
import { useState } from 'react';

export const GallerySection = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedImages = showAll ? images : images.slice(0, 6); // Displaying the first 6 images by default, we can increase this
  
      return (
      <div className="bg-new-gray py-16">
        <h2 className="text-center text-5xl font-extrabold text-gray-600 mb-8">Gallery</h2>
        <div className="container mx-auto flex justify-center mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {displayedImages.map((item, index) => (
              <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105" key={index}>
                <Image className="w-full h-64 object-cover" src={item.image} alt={item.name} width={500} height={300}/>
                <div className="px-6 py-4 bg-white">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              className="sticky top-10 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-110"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show All'}
            </button>
          </div>
        </div>
      </div>
      );
    }