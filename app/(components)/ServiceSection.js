import Image from 'next/image';

export const ServicesSection = () => {
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
        <div className="bg-second-gray py-16">
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