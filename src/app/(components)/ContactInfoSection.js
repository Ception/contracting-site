export const ContactInfoSection = () => {
  return (
    <div className="bg-red-700 py-8 md:py-16">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-200 mb-8">
        Contact Information
      </h2>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="px-6 py-4 bg-red-100">
            <h3 className="font-bold text-2xl mb-2">Working Hours</h3>
            <p className="text-gray-700 text-lg">
              8am–6pm, Monday through Saturday
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="px-6 py-4 bg-red-100">
            <h3 className="font-bold text-2xl mb-2">Service Area</h3>
            <p className="text-gray-700 text-lg">
              Halton region & surrounding areas
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="px-6 py-4 bg-red-100">
            <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
            <p className="text-gray-700 text-lg">
              Phone:{" "}
              <a href="tel:289-400-0338" className="text-blue-600">
                289-400-0338
              </a>
              <br />
              Email:{" "}
              <a href="mailto:smssearle@gmail.com" className="text-blue-600">
                smssearle@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="px-6 py-4 bg-red-100">
            <h3 className="font-bold text-2xl mb-2">Website</h3>
            <p className="text-gray-700 text-lg">
              Through our website below
              <br /> {/* Keer br for fitting in the container */}
              <a
                href="https://www.searlequalitycontracting.com/#contact-us"
                className="text-blue-600"
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
