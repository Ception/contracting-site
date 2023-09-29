import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState("Landscaping");

  return (
    <div className="bg-black p-6">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-2xl text-center mx-auto">
          <h2 className="mb-8 text-7xl lg:text-8xl text-slate-200 tracking-7xl lg:tracking-8xl">
            Our Services
          </h2>
          <p className="mb-12 text-gray-300 mx-auto">
            At Searle Quality Contracting, we understand that the journey of
            creating a perfect space—be it residential, commercial, or
            industrial—is a comprehensive process. Our range of exterior
            services is designed to meet the unique needs of each phase,
            ensuring not just utility but also an aesthetic you'll love.
          </p>
          <div>
            {["Landscaping", "Interior", "Exterior"].map((service) => (
              <span
                key={service}
                onClick={() => setSelectedService(service)}
                className={`inline-block px-4 py-2 m-1 cursor-pointer hover:bg-gray-300 hover:text-slate-800 hover:rounded transition ${
                  selectedService === service
                    ? "bg-new-gray text-black rounded"
                    : "text-slate-200"
                }`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {selectedService === "Landscaping" && <Landscaping />}
        {selectedService === "Interior" && <Interior />}
        {selectedService === "Exterior" && <Exterior />}
      </div>
    </div>
  );
};

const Landscaping = () => {
  return (
    <div className="flex flex-wrap">
      {/* Landscaping */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Landscaping</p>
          <p className="mb-6 text-gray-300">
            Transform your outdoor space with our innovative landscaping
            solutions.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Grass Cutting</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Basic Planting</p>
          </li>
        </div>
      </div>

      {/* Building Decks */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">
            Building Decks
          </p>
          <p className="mb-6 text-gray-300">
            Extend your living space outdoors with our custom-built decks.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Design Consultation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Material Selection</p>
          </li>
        </div>
      </div>

      {/* Repairing/Building Fences */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Fences</p>
          <p className="mb-6 text-gray-300">
            Enhance your property’s privacy and aesthetic with our fence
            solutions.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Repair Services</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">New Installation</p>
          </li>
        </div>
      </div>
    </div>
  );
};

const Interior = () => {
  return (
    <div className="flex flex-wrap">
      {/* Kitchens */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Kitchens</p>
          <p className="mb-6 text-gray-300">
            Our kitchen services focus on creating both beautiful and functional
            spaces that meet your needs.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Cabinet Installation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Countertop Replacement</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Flooring and Tiling</p>
          </li>
        </div>
      </div>

      {/* Basements */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Basements</p>
          <p className="mb-6 text-gray-300">
            We specialize in transforming basements into functional and
            comfortable living spaces.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Waterproofing</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Insulation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Flooring Installation</p>
          </li>
        </div>
      </div>

      {/* Flooring */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Flooring</p>
          <p className="mb-6 text-gray-300">
            Our flooring services offer a range of options including hardwood,
            laminate, and tile.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Hardwood Installation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Tile Installation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Carpet Fitting</p>
          </li>
        </div>
      </div>
    </div>
  );
};

const Exterior = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Framing</p>
          <p className="mb-6 text-gray-300">
            Creating a solid and durable frame as the backbone for your
            construction project.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Structural planning</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Material selection</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Quality inspection</p>
          </li>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Painting</p>
          <p className="mb-6 text-gray-300">
            Adding color and finish to make your project come to life.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Color consultation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Surface preparation</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Finish application</p>
          </li>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-white border-opacity-30 overflow-hidden rounded-5xl">
          <p className="mb-2 text-lg text-slate-200 font-bold">Sheds</p>
          <p className="mb-6 text-gray-300">
            Designing and building sheds that serve multiple functionalities.
          </p>
          <p className="mb-6 text-xs text-gray-300 font-bold uppercase">
            What is included
          </p>
          {/* List */}
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Custom design</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Material sourcing</p>
          </li>
          <li className="flex items-center mb-4">
            <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
              <Image
                src="/check.png"
                width={15}
                height={15}
                className="rounded-full"
              />
            </div>
            <p className="text-slate-200">Installation</p>
          </li>
        </div>
      </div>
    </div>
  );
};
