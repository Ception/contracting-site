import images from '@/utils/images';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion'

export default function Home() {

  return (
    <div>
        <Image className="rounded-lg shadow-2xl w-full h-80 object-cover border-4 border-gray-200" src='/SearleLogo.jpeg' alt="Searle Logo" width={500} height={400}/>
        <AboutUS />
        <ServicesSection />
        <GallerySection />
        <ContactInfoSection />
        <ContactUsSection />
        <OurProcessSection />
        <ReviewsSection />
    </div>
  );
}

const AboutUS = () => {
  return (
        <section className="text-gray-600 body-font bg-gray-200 p-6">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 shadow-lg rounded-lg overflow-hidden">
              <Image  className="object-cover object-center w-full h-full transform hover:scale-105 transition-transform duration-500" alt="Searle Logo" src="/SearleLogo.jpeg" width={500} height={300}/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
              <p className="mb-8 leading-relaxed">
                SQC has proudly been serving Halton region and surrounding areas for over 5 yrs, providing quality craftsmanship and a high attention to 
                detail. From inital quote, to planning, and then execution of the project; SQC ensures transparent communication and professionalism. Thus
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
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch('/api/reviews')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Status Code: ${response.status}`);
        }
      })
      .then(data => {
        const sortedReviews = data.reviews.sort((a, b) => b.rating - a.rating).slice(0, 15);
        setReviews(sortedReviews);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (!reviews) return <div>Loading...</div>;

  const reviewGroups = [];
  for (let i = 0; i < reviews.length; i += 3) {
    reviewGroups.push(reviews.slice(i, i + 3));
  }

  return (
    <section className="bg-gray-100 py-20">
      <h1 className="text-center text-5xl font-extrabold mb-10">Reviews</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
        className="flex justify-center"
      >
        {reviewGroups.map((group, index) => (
          <div key={index} className="flex justify-around">
            {group.map((review, index) => (
              <motion.div
                key={index}
                className="p-4 w-80 bg-white shadow-xl rounded-xl flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-gray-800">{review.customer_name}</h2>
                <div className="flex items-center mt-1">
                  {Array(review.rating).fill().map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{review.review}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

const ContactUsSection = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    workType: '',
    startDate: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We can add the logic here
    console.log(formValues);
  };

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">Request a Quote</h2>
      <form className="container mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-lg font-bold mb-2">Phone Number (Optional):</label>
          <input type="text" id="phoneNumber" name="phoneNumber" onChange={handleChange} className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="workType" className="block text-lg font-bold mb-2">Type of Work:</label>
          <select id="workType" name="workType" onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select a Service</option>
            <option value="Kitchens">Kitchens</option>
            <option value="Bathrooms">Bathrooms</option>
            {/* Add more services here */}
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-lg font-bold mb-2">Preferred Start Date:</label>
          <input type="date" id="startDate" name="startDate" onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-bold mb-2">Optional Message:</label>
          <textarea id="message" name="message" onChange={handleChange} className="w-full p-2 border rounded" rows="4"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition-colors duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
}

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? images : images.slice(0, 6); // Displaying the first 6 images by default, we can increase this

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
    return  (
      <div className="bg-white py-16">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-8">Contact Information</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="px-6 py-4 bg-red-100">
              <h3 className="font-bold text-2xl mb-2">Working Hours</h3>
              <p className="text-gray-700 text-lg">8am–6pm, Monday through Saturday</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="px-6 py-4 bg-red-100">
              <h3 className="font-bold text-2xl mb-2">Service Area</h3>
              <p className="text-gray-700 text-lg">Halton region & surrounding areas</p>
            </div>
          </div>
  
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="px-6 py-4 bg-red-100">
              <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
              <p className="text-gray-700 text-lg">
                Phone: <a href="tel:289-400-0338" className="text-blue-600">289-400-0338</a><br />
                Email: <a href="mailto:smssearle@gmail.com" className="text-blue-600">smssearle@gmail.com</a>
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="px-6 py-4 bg-red-100">
              <h3 className="font-bold text-2xl mb-2">Website</h3>
              <p className="text-gray-700 text-lg">
                Click Below:<br /> {/* Keer br for fitting in the container */}
                <a href="https://www.ThisIsTheWebsite.com" className="text-blue-600">
                  www.ThisIsTheWebsite.com
                </a>
              </p>
            </div>
          </div>
  
        </div>
        <div className="text-center mt-8 font-semibold text-lg">
          <p>Fully insured.</p>
        </div>
      </div>
    );
}

const OurProcessSection = () => {
    return(
      <div className="mx-auto py-20 bg-gradient-to-r from-gray-50 to-gray-200">
        <h1 className="text-black text-center text-5xl font-extrabold">Our Process</h1>
        <p className="text-black text-center text-xl mt-6 mx-32">
          Discover the step-by-step process we follow to ensure a successful project.
        </p>
        <div className="mx-auto px-6 py-8 relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-black"></div> {/* Here is the Vertical Line */}
          <div className="flex flex-col space-y-12">

            {/* Consultation */}
            <div className="relative w-full p-4 flex flex-wrap ml-12" id="consultation">
              <div className="w-1/2 px-4">
                <h2 className="text-lg font-semibold">Consultation</h2>
                <p>Details about the consultation stage...</p>
              </div>
              <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
                <Image src="/SearleLogo.jpeg" alt="Consultation" width={600} height={300} />
              </div>
            </div>

            {/* Quote */}
            <div className="relative w-full p-4 flex flex-wrap" id="quote">
              <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
                <Image src="/SearleLogo.jpeg" alt="Quote" width={600} height={300} />
              </div>
              <div className="w-1/2 px-4">
                <h2 className="text-lg font-semibold">Quote</h2>
                <p>Details about the quote stage...</p>
              </div>
            </div>

            {/* Design/Review/Plan */}
            <div className="relative w-full p-4 flex flex-wrap ml-12" id="design-review-plan">
              <div className="w-1/2 px-4">
                <h2 className="text-lg font-semibold">Design/Review/Plan</h2>
                <p>Details about the design/review/plan stage...</p>
              </div>
              <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
                <Image src="/SearleLogo.jpeg" alt="Design/Review/Plan" width={600} height={300}/>
              </div>
            </div>

            {/* Start Your Project */}
            <div className="relative w-full p-4 flex flex-wrap" id="start-project">
              <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
                <Image src="/SearleLogo.jpeg" alt="Start Your Project" width={600} height={300} />
              </div>
              <div className="w-1/2 px-4">
                <h2 className="text-lg font-semibold">Start Your Project</h2>
                <p>Details about the start your project stage...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}