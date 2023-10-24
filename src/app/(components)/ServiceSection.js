import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Check from "../../../public/check.png";

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
    title: "Building Decks",
    description:
      "Extend your living space outdoors with our custom-built decks.",
    included: ["Design Consultation", "Material Selection", "Deck Maintenance"],
  },
  {
    title: "Fences",
    description:
      "Enhance your property’s privacy and aesthetic with our fence solutions.",
    included: ["New Installation", "Custom Design", "Fence Repair"],
  },
  {
    title: "Concrete",
    description:
      "Upgrade your outdoor space with our durable and stylish concrete solutions.",
    included: ["Stamped Concrete", "Concrete Repair", "Concrete Sealing"],
  },
];

const Landscaping = () => <ServicesComponent services={LandscapingServices} />;

const InteriorServices = [
  {
    title: "Kitchens",
    description: "Create beautiful and functional kitchen spaces that meet your needs.",
    included: ["Cabinet Installation", "Countertop Replacement", "Hardwood Installation"],
  },
  {
    title: "Basements",
    description: "Transform basements into comfortable living spaces.",
    included: ["Waterproofing", "Insulation", "Flooring Installation"],
  },
  {
    title: "Flooring",
    description: "Offering a range of flooring options including hardwood, laminate, and tile.",
    included: ["Hardwood Installation", "Tile Installation", "Carpet Fitting"],
  },
  {
    title: "Bathroom",
    description: "Design and renovate bathrooms for aesthetics and functionality.",
    included: ["Fixture Installation", "Tiling", "Plumbing"],
  },
  {
    title: "Framing",
    description: "Set the structural foundation for your rooms.",
    included: ["Wall Framing", "Roof Framing", "Doorway Framing"],
  },
  {
    title: "Drywall",
    description: "Install and finish drywall to create smooth walls and ceilings.",
    included: ["Drywall Hanging", "Mudding", "Sanding"],
  },
  {
    title: "Popcorn Ceiling Removal",
    description: "Remove outdated popcorn ceilings to modernize your living space.",
    included: ["Ceiling Scraping", "Resurfacing", "Painting"],
  },
  {
    title: "Painting",
    description: "Revitalize your home's appearance with professional painting services.",
    included: ["Wall Painting", "Ceiling Painting", "Trim Painting"],
  },
  {
    title: "Trim",
    description: "Add the final touches to rooms with quality trim work.",
    included: ["Baseboard Installation", "Crown Molding", "Door Casing"],
  }
];

const Interior = () => <ServicesComponent services={InteriorServices} />;

const ExteriorServices = [
  {
    title: "Siding",
    description: "Protect your home and enhance its curb appeal with our siding solutions.",
    included: ["Material Selection", "Installation", "Repair Services"],
  },
  {
    title: "Framing",
    description: "Creating a solid and durable frame as the backbone for your construction project.",
    included: ["Structural Planning", "Material Selection", "Quality Inspection"],
  },
  {
    title: "Painting",
    description: "Adding color and finish to make your project come to life.",
    included: ["Color Consultation", "Surface Preparation", "Finish Application"],
  },
  {
    title: "Sheds",
    description: "Constructing versatile sheds for storage or other functions.",
    included: ["Design Planning", "Material Selection", "Assembly"],
  },
  {
    title: "Pergola",
    description: "Creating outdoor pergolas for shade or aesthetic appeal.",
    included: ["Design Consultation", "Material Selection", "Installation"],
  }
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
            <ul>
              {service.included.map((item) => (
                <li className="flex items-center mb-4" key={item}>
                  <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                    <Image
                      alt="check"
                      src={Check}
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
