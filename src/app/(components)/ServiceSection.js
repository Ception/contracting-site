import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState("Landscaping");

  return (
    <div className="bg-black p-6">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-2xl text-center mx-auto">
          <h2 className="mb-8 text-5xl md:text-7xl lg:text-8xl text-slate-200 tracking-7xl lg:tracking-8xl">
            Our Services
          </h2>
          <p className="mb-12 text-gray-300 mx-auto">
            At Searle Quality Contracting, we understand that the journey of
            creating a perfect space—be it residential, commercial, or
            industrial—is a comprehensive process. Our range of services is
            designed to meet the unique needs of each phase, ensuring not just
            utility but also an aesthetic you will love.
          </p>
          <div>
            {["Landscaping", "Interior", "Exterior"].map((service) => (
              <motion.span
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 0.95 }}
                key={service}
                onClick={() => setSelectedService(service)}
                className={`inline-block px-2 md:px-4 py-1 md:py-2 m-1 cursor-pointer hover:bg-gray-300 hover:text-slate-800 hover:rounded transition ${
                  selectedService === service
                    ? "bg-new-gray text-black rounded"
                    : "text-slate-200"
                }`}
              >
                {service}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          {selectedService === "Landscaping" && <Landscaping />}
          {selectedService === "Interior" && <Interior />}
          {selectedService === "Exterior" && <Exterior />}
        </motion.div>
      </div>
    </div>
  );
};

const LandscapingServices = [
  {
    title: "Landscaping",
    description:
      "Transform your outdoor space with our innovative landscaping solutions.",
    included: ["Grass Cutting", "Basic Planting"],
  },
  {
    title: "Building Decks",
    description:
      "Extend your living space outdoors with our custom-built decks.",
    included: ["Design Consultation", "Material Selection"],
  },
  {
    title: "Fences",
    description:
      "Enhance your property’s privacy and aesthetic with our fence solutions.",
    included: ["Repair Services", "New Installation"],
  },
];

const Landscaping = () => <ServicesComponent services={LandscapingServices} />;

const InteriorServices = [
  {
    title: "Kitchens",
    description:
      "Our kitchen services focus on creating both beautiful and functional spaces that meet your needs.",
    included: [
      "Cabinet Installation",
      "Countertop Replacement",
      "Flooring and Tiling",
    ],
  },
  {
    title: "Basements",
    description:
      "We specialize in transforming basements into functional and comfortable living spaces.",
    included: ["Waterproofing", "Insulation", "Flooring Installation"],
  },
  {
    title: "Flooring",
    description:
      "Our flooring services offer a range of options including hardwood, laminate, and tile.",
    included: ["Hardwood Installation", "Tile Installation", "Carpet Fitting"],
  },
];

const Interior = () => <ServicesComponent services={InteriorServices} />;

const ExteriorServices = [
  {
    title: "Framing",
    description:
      "Creating a solid and durable frame as the backbone for your construction project.",
    included: [
      "Structural planning",
      "Material selection",
      "Quality inspection",
    ],
  },
  {
    title: "Painting",
    description: "Adding color and finish to make your project come to life.",
    included: [
      "Color consultation",
      "Surface preparation",
      "Finish application",
    ],
  },
  {
    title: "Sheds",
    description:
      "Designing and building sheds that serve multiple functionalities.",
    included: ["Custom design", "Material sourcing", "Installation"],
  },
];

const Exterior = () => <ServicesComponent services={ExteriorServices} />;

const ServicesComponent = ({ services }) => {
  return (
    <div className="flex flex-wrap items-stretch">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="w-full md:w-1/3 p-4 flex-grow"
        >
          <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
            <p className="mb-2 text-lg text-slate-200 font-bold">
              {service.title}
            </p>
            <p className="mb-6 text-gray-300">{service.description}</p>
            <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
              What is included
            </p>
            <ul>
              {service.included.map((item) => (
                <li className="flex items-center mb-4" key={item}>
                  <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                    <Image
                      alt="check"
                      src="/check.png"
                      width={15}
                      height={15}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-slate-200">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
