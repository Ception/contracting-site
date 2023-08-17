import images from '@/utils/images';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

  return (
    <div>
        <Image className="rounded-lg shadow-2xl w-full h-80 object-cover border-4 border-white" src='/SearleLogo.jpeg' alt="Searle Logo" width={500} height={400}/>
        <AboutUS />
        <ServicesSection />
        <GallerySection />
    </div>
  );
}

const AboutUS = () => {
  return (
        <section className="text-gray-600 body-font bg-white p-6">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 shadow-lg rounded-lg overflow-hidden">
              <Image  className="object-cover object-center w-full h-full transform hover:scale-105 transition-transform duration-500" alt="Searle Logo" src="/SearleLogo.jpeg" width={500} height={300}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
              <p className="mb-8 leading-relaxed">
                SQC has proudly been serving Halton region and surrounding areas for over 5 yrs, providing quality craftsmanship and a high attention to 
                detail. From inital quote , to planning , and then execution of the project; SQC ensures transparent communication and professionalism . Thus
                making your renovation process as easy as possible for you.
              </p>
            </div>
          </div>
        </section>
    )
}


const ServicesSection = () => {
  const services = [
    { name: 'Kitchens', image: '/kitchens.jpeg' },
    { name: 'Bathrooms', image: '/bathrooms.jpeg' },
    { name: 'Basements', image: '/basements.jpeg' },
    { name: 'Flooring', image: '/flooring.jpeg' },
    { name: 'Framing', image: '/framing.jpeg' },
    { name: 'Drywall', image: '/drywall.jpeg' },
    { name: 'Tiling', image: '/tiling.jpeg' },
    { name: 'Painting', image: '/painting.jpeg' },
    { name: 'Decks', image: '/decks.jpeg' },
    { name: 'Fences', image: '/fences.jpeg' },
    { name: 'Pergolas', image: '/pergolas.jpeg' },
    { name: 'Sheds', image: '/sheds.jpeg' },
    { name: 'Landscaping', image: '/landscaping.jpeg' }
  ];

  return (
      <div className="bg-yellow-color py-16">
      <h2 className="text-center text-5xl font-extrabold text-red-600 mb-8">Our Services</h2>
      <div className="container mx-auto flex justify-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105" key={index}>
              <Image className="w-full h-64 object-cover" src={service.image} alt={service.name} width={500} height={300}/>
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-2xl mb-2">{service.name}</div>
                <p className="text-gray-700 text-lg"> {/* We can either use this as a description by adding it to the object list or we can delete it */}
                  Description for {service.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const ReviewsSection = () => {
  return;
}


const ContactUsSection = () => {
  return;
}

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? images : images.slice(0, 6); // Displaying the first 6 images by default

    return (
<div className="bg-gray-200 py-16">
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

const ContactInfoSection = () => {
    return;
}

const OurProcessSection = () => {
    return;
}