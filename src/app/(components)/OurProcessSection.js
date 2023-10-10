import Image from "next/image";

export const OurProcessSection = () => {
  return (
    <div className="mx-auto py-20 bg-black text-slate-200">
      <h1 className="text-slate-200 text-center text-5xl md:text-6xl font-extrabold mb-6">
        Our Process
      </h1>
      <p className="text-slate-200 text-center text-xl mx-8 md:mx-32 mb-8">
        Discover the step-by-step process we follow at Searle Quality
        Contracting to ensure your construction project is a success from start
        to finish.
      </p>

      <div className="mx-auto px-6 py-8 relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white"></div>
        <div className="flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-2 gap-4">
          {/* Consultation */}
          <div
            className="text-2xl text-slate-200 px-4 md:w-1/2 md:pr-16"
            id="consultation"
          >
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              Consultation
            </h2>
            <p>
              Your dream project starts with a thorough consultation. We&apos;ll
              discuss your vision, take measurements, and get an understanding
              of your desired functionality and aesthetic. We believe in
              involving our clients from the get-go to ensure that your
              requirements and budget are precisely met.
            </p>
          </div>
          <div className="hidden md:block px-4 md:w-1/2">
            <Image
              src="/SearleLogo.jpeg"
              alt="Consultation"
              width={600}
              height={300}
            />
          </div>

          {/* Quote */}
          <div className="hidden md:block px-4 md:w-1/2" id="quote">
            <Image
              src="/SearleLogo.jpeg"
              alt="Consultation"
              width={600}
              height={300}
            />
          </div>
          <div className="text-2xl text-slate-200 px-4 md:w-1/2 md:pl-16">
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">Quote</h2>
            <p>
              We believe in full transparency, so we provide an itemized quote
              outlining the cost of labor, materials, and other potential
              expenditures. This will give you a comprehensive understanding of
              what you&apos;re investing in, empowering you to make informed
              decisions.
            </p>
          </div>

          {/* Design/Review/Plan */}
          <div
            className="text-2xl text-slate-200 px-4 md:w-1/2 md:pr-16"
            id="design-review-plan"
          >
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              Design/Review/Plan
            </h2>
            <p>
              Our design team will create a tailored plan incorporating your
              preferences and needs. From securing permits to reviewing layouts,
              every step is meticulously planned. We&apos;ll review these plans
              with you to make any necessary adjustments before beginning
              construction, ensuring that your vision is fully realized.
            </p>
          </div>
          <div className="hidden md:block px-4 md:w-1/2">
            <Image
              src="/SearleLogo.jpeg"
              alt="Design/Review/Plan"
              width={600}
              height={300}
            />
          </div>

          {/* Start Your Project */}
          <div
            className="text-2xl text-slate-200 px-4 md:w-1/2 md:pl-16"
            id="start-project"
          >
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              Start Your Project
            </h2>
            <p>
              Construction begins with your approval. Our dedicated team will
              manage the entire process, ensuring timely completion without
              compromising on quality. Periodic updates and milestones will keep
              you involved, and our flexible approach allows us to adapt to any
              mid-project changes you desire.
            </p>
          </div>
          <div className="hidden md:block px-4 md:w-1/2">
            <Image
              src="/SearleLogo.jpeg"
              alt="Start Your Project"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
