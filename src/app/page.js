'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AboutUS } from './(components)/AboutUs';
import { ServicesSection } from './(components)/ServiceSection';
import { GallerySection } from './(components)/GallerySection';
import { ContactInfoSection } from './(components)/ContactInfoSection';
import { ContactUsSection } from './(components)/ContactUsSection';
import { OurProcessSection } from './(components)/OurProcessSection';
import { ReviewsSection } from './(components)/ReviewsSection';
import Header from './(components)/Header';
import Footer from './(components)/Footer';

export default function Page() {

  return (
    <div>
      <Header />
          <div className="w-full transition-all duration-500 ease-in-out transform" id="index-div">
            <div className="image-container-index items-center px-6 py-4 h-[39rem] bg-gray-800 shadow-md bg-no-repeat bg-cover overflow-auto">
              <div className="" style={{ backgroundImage: `url('/SearleLogo.jpeg')` }}></div>
              <div className="text-white mt-28 ml-12 w-full md:w-1/2 p-8">
                <h2 className="mb-6 text-7xl text-white tracking-8xl md:max-w-sm">Searle Construction</h2>
                <p className="mb-6 text-white text-opacity-60 md:max-w-xs">Full description of the Latin Cuisine service...</p>
              </div>
            </div>
          </div>

        <section id='about-us'>
          <AboutUS />
        </section>

        <div className="png-container">
          <Image className='full-width-png' src='/first-separator.png' width={500} height={300}/>
        </div>

        <section id='services'>
          <ServicesSection />
        </section>

        <div className="png-container">
          <Image className='full-width-png' src='/second-separator.png' width={500} height={300}/>
        </div>

        <section id='gallery'>
          <GallerySection />
        </section>

        <div className="png-container">
          <Image className='full-width-png' src='/first-separator.png' width={500} height={300}/>
        </div>

        <section id='contact-info'>
          <ContactInfoSection />
        </section>
        

        <div className="png-container">
          <Image className='full-width-png' src='/another-separator.png' width={500} height={300}/>
        </div>
        
        <section id='contact-us'>
          <ContactUsSection />
        </section>
        

        <div className="png-container">
          <Image className='full-width-png' src='/last-separator.png' width={500} height={300}/>
        </div>

        <section id='our-process'>
          <OurProcessSection />
        </section>

        <div className="png-container">
          <Image className='full-width-png' src='/second-separator.png' width={500} height={300}/>
        </div>

        <section id='reviews'>
          <ReviewsSection />
        </section>

        <ScrollTopButton />
        
      <Footer />
    </div>
  );
}

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showButton = () => {
    const yOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (yOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showButton);

    return () => {
      window.removeEventListener('scroll', showButton);
    };
  }, []);


  return (
    <div>
      {isVisible && (
        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className='scroll-btn'>
          <Image src='/arrow.png' width={100} height={100} className='scroll-arrow' alt='Scroll to Top' />
        </button>
      )}
    </div>
  )
};
