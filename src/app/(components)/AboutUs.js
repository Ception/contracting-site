import Image from "next/image";

export const AboutUS = () => {
  return (
    <section className="text-slate-200 body-font bg-red-700">
      <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 shadow-lg rounded-lg overflow-hidden">
          <Image
            className="object-cover object-center w-full h-full transform hover:scale-105 transition-transform duration-500"
            alt="Searle Logo"
            src="/SearleLogo.jpeg"
            width={500}
            height={300}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center mt-10 md:mt-0">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-slate-200">
            About Us
          </h1>
          <p className="mb-8 leading-relaxed">
            SQC has proudly been serving Halton region and surrounding areas for
            over 5 yrs, providing quality craftsmanship and a high attention to
            detail. From inital quote, to planning, and then execution of the
            project; SQC ensures transparent communication and professionalism.
            Thus making your renovation process as easy as possible for you.
          </p>
          <li className="flex items-center justify-between mb-8 pb-2 border-b-2 border-black">
            <span className="font-bold">Fully Insured</span>
          </li>
        </div>
      </div>
    </section>
  );
};
