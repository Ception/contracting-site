import Image from 'next/image';
import { useState } from 'react';

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('Landscaping');

  return (
    <div className='bg-second-gray'>
      <div className='container px-4 mx-auto'>
        <div className='mb-20 md:max-w-2xl text-center mx-auto'>
          <h2 className='mb-8 text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl'>Our Services</h2>
          <p className='mb-12 text-gray-300 max-w-sm mx-auto'>que es lo que es</p>
          <div>
            {['Landscaping', 'Interior', 'Exterior'].map(service => (
              <span
                key={service}
                onClick={() => setSelectedService(service)}
                className={`inline-block px-4 py-2 m-1 cursor-pointer hover:bg-gray-300 hover:rounded-full transition ${selectedService === service ? 'bg-new-gray text-white rounded-full' : 'text-black'}`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>


        {selectedService === 'Landscaping' && <Landscaping />}
        {selectedService === 'Interior' && <Interior />}
        {selectedService === 'Exterior' && <Exterior />}

      </div>
    </div>
  )
}

const Landscaping = () => {
  return (
    <div className='flex flex-wrap'>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Basic</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Complex</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Complete</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

    </div>
  )
}

const Interior = () => {
  return (
    <div className='flex flex-wrap'>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Interior</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Complex</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Complete</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

    </div>
  )
}

const Exterior = () => {
  return (
    <div className='flex flex-wrap'>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Exterior</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Complex</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

      <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
        <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
          <p className='mb-2 text-lg text-white font-light'>Complete</p>
          <p className='mb-6 text-gray-300'>During this phase the design is developed to meet the required technical standards to</p>
          <p className='mb-6 text-xs text-gray-300 font-light uppercase'>What is inlcuded</p>
          {/* List */}
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
          <li className='flex items-center mb-4'>
            <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
              <Image src='/check.png' width={15} height={15} className='rounded-full' />
            </div>
            <p className='text-white'>Core engagement survey</p>
          </li>
        </div>
      </div>

    </div>
  )
}