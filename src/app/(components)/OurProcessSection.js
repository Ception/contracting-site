import Image from 'next/image';

export const OurProcessSection = () => {
    return(
      <div className="mx-auto py-20 bg-second-gray">
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