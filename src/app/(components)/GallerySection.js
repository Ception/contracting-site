import images from '@/utils/images';
import Image from 'next/image';
import { useState } from 'react';

export const GallerySection = () => {
  // Initialize state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('landscaping');

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Reference to the images related to the selected category
  const categoryImages = images[selectedCategory];

  return (
    <div className='bg-red-700 relative flex p-6'>

      {/* List on the left */}
      <div className='w-full lg:w-1/3 px-3 pt-10 lg:pt-20 pb-10'>
        <ul>
          {Object.keys(images).map((category, index) => (
            <li key={index} className='mr-4 md:mr-0 mb-4 md:mb-10 lg:mb-16' onClick={() => handleCategoryClick(category)}>
              <p className={`inline-block cursor-pointer pl-4 text-2xl font-semibold transition ${selectedCategory === category ? 'border-l-2 border-blue-400' : ''}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Images on the right */}
      <div className='w-full lg:w-2/3 flex flex-col px-3'>

        {/* Grid container */}
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6'>
          {Object.keys(categoryImages).map((key, index) => {
            const { name, image } = categoryImages[key];
            return (
              <div key={index} className='col-span-1'>
                <Image className='object-cover rounded-lg' src={image} alt={name} width={200} height={200} />
              </div>
            );
          })}
        </div>

      </div>

    </div>
  )
};

