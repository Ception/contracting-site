import Image from 'next/image';

export const AboutUS = () => {
    return (
          <section className="text-gray-600 body-font bg-new-gray p-6">
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