export const ContactInfoSection = () => {
  return (
    <div className="bg-red-700 py-8 md:py-16">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-200 mb-8">
        Contact Information
      </h2>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="flex flex-col justify-between px-6 py-4 bg-gray-100 space-y-4 h-full">
            <h3 className="font-bold text-2xl mb-2">Working Hours</h3>
            <p className="text-gray-700 text-lg">
              8am–6pm, Monday through Saturday
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="flex flex-col justify-between px-6 py-4 bg-gray-100 space-y-4 h-full">
            <h3 className="font-bold text-2xl mb-2">Service Area</h3>
            <p className="text-gray-700 text-lg">
              Halton region & surrounding areas
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="flex flex-col justify-between px-6 py-4 bg-gray-100 space-y-4 h-full">
            <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
            <p className="text-gray-700 text-lg">
              Phone:{" "}
              <a href="tel:289-400-0338" className="text-blue-600 text-base">
                289-400-0338
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:smssearle@gmail.com"
                className="text-blue-600 text-base"
              >
                smssearle@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="flex flex-col justify-between px-6 py-4 bg-gray-100 space-y-4 h-full">
            <h3 className="font-bold text-2xl mb-2">Website</h3>
            <p className="text-gray-700 text-lg">
              Through our website
              <br />
              <a
                href="https://www.searlequalitycontracting.com/#contact-us"
                className="text-blue-600 text-base"
              >
                searlequalitycontracting.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
