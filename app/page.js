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

export default function Home() {

  return (
    <div>

        <Image className="rounded-lg shadow-2xl w-full h-80 object-cover border-4 border-gray-200" src='/SearleLogo.jpeg' alt="Searle Logo" width={500} height={400}/>

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
          <Image className='full-width-png' src='/second-separator.png' width={500} height={300}/>
        </div>
        
        <section id='contact-us'>
          <ContactUsSection />
        </section>
        

        <div className="png-container">
          <Image className='full-width-png' src='/first-separator.png' width={500} height={300}/>
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
        
    </div>
  );
}

const ScrollTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  const showButton = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', showButton);

    return () => window.removeEventListener('scroll', showButton);
  }, [])

  return (
    <div>
      {isVisible && (
        <button onClick={scrollTop} className='scroll-btn'>
            <Image src='/arrow.png' width={100} height={100} className='scroll-arrow' alt='Scroll to Top' />
        </button>
      )}
    </div>
  )

}