import Image from "next/image";

export const OurProcessSection = () => {
  return (
    <div className="mx-auto py-20 bg-black text-slate-200">
      <h1 className="text-slate-200 text-center text-5xl font-extrabold">
        Our Process
      </h1>
      <p className="text-slate-200 text-center text-xl mt-6 mx-32">
        Discover the step-by-step process we follow at Searle Quality
        Contracting to ensure your construction project is a success from start
        to finish.
      </p>
      <br />
      <br />
      <div className="mx-auto px-6 py-8 relative">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white"></div>
        <div className="flex flex-col space-y-12">
          <div
            className="relative w-full p-4 flex flex-wrap ml-12"
            id="consultation"
          >
            <div
              className="w-1/2 px-4 mt-36 text-2xl text-slate-200"
              style={{ paddingRight: "4rem" }}
            >
              <h2 className="font-semibold">Consultation</h2>
              <p>
                Your dream project starts with a thorough consultation. We'll
                discuss your vision, take measurements, and get an understanding
                of your desired functionality and aesthetic. We believe in
                involving our clients from the get-go to ensure that your
                requirements and budget are precisely met.
              </p>
            </div>
            <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
              <Image
                src="/SearleLogo.jpeg"
                alt="Consultation"
                width={600}
                height={300}
              />
            </div>
          </div>

          <div className="relative w-full p-4 flex flex-wrap" id="quote">
            <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
              <Image
                src="/SearleLogo.jpeg"
                alt="Quote"
                width={600}
                height={300}
              />
            </div>
            <div
              className="w-1/2 px-4 mt-36 text-2xl text-slate-200"
              style={{ paddingLeft: "4rem" }}
            >
              <h2 className="font-semibold">Quote</h2>
              <p>
                We believe in full transparency, so we provide an itemized quote
                outlining the cost of labor, materials, and other potential
                expenditures. This will give you a comprehensive understanding
                of what you're investing in, empowering you to make informed
                decisions.
              </p>
            </div>
          </div>

          <div
            className="relative w-full p-4 flex flex-wrap ml-12"
            id="design-review-plan"
          >
            <div
              className="w-1/2 px-4 mt-36 text-2xl text-slate-200"
              style={{ paddingRight: "4rem" }}
            >
              <h2 className="font-semibold">Design/Review/Plan</h2>
              <p>
                Our design team will create a tailored plan incorporating your
                preferences and needs. From securing permits to reviewing
                layouts, every step is meticulously planned. We'll review these
                plans with you to make any necessary adjustments before
                beginning construction, ensuring that your vision is fully
                realized.
              </p>
            </div>
            <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
              <Image
                src="/SearleLogo.jpeg"
                alt="Design/Review/Plan"
                width={600}
                height={300}
              />
            </div>
          </div>

          <div
            className="relative w-full p-4 flex flex-wrap"
            id="start-project"
          >
            <div className="w-1/2 px-4 transition-all duration-500 ease-in-out transform hover:scale-110">
              <Image
                src="/SearleLogo.jpeg"
                alt="Start Your Project"
                width={600}
                height={300}
              />
            </div>
            <div
              className="w-1/2 px-4 mt-36 text-2xl text-slate-200"
              style={{ paddingLeft: "4rem" }}
            >
              <h2 className="font-semibold">Start Your Project</h2>
              <p>
                Construction begins with your approval. Our dedicated team will
                manage the entire process, ensuring timely completion without
                compromising on quality. Periodic updates and milestones will
                keep you involved, and our flexible approach allows us to adapt
                to any mid-project changes you desire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
