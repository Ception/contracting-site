import { useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "./PopUp";
import SearleLogo from "../../../public/SearleLogo.jpeg";

export const ContactUsSection = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <section className="bg-black overflow-hidden">
      <div className="flex flex-wrap -m-4 md:-m-8 lg:-m-14">
        <div className="w-full md:w-5/12 p-8 lg:p-14">
          <div className="h-full overflow-hidden">
            <Image
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              alt="Searle Quality Contracting"
              src={SearleLogo}
            />
          </div>
        </div>
        {/* separator */}
        <div className="w-full md:w-5/12 p-8 lg:p-14">
          <div className="flex flex-col justify-center h-full">
            <div className="md:max-w-xl pb-16 md:py-16 px-4">
              <span className="inline-block max-w-max mb-5 px-3 py-1.5 text-sm text-slate-200 uppercase tracking-tight font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                Get Started Now!
              </span>
              <h2 className="font-heading mb-5 text-6xl text-slate-200 tracking-tighter">
                Your Dream Project Awaits
              </h2>
              <p className="mb-20 text-xl text-gray-300 tracking-tight">
                Initiate your journey towards a beautiful, functional space by
                providing your email below. Let&apos;s discuss how we can bring
                your vision to life.
              </p>
              <div className="flex flex-wrap -m-1.5 mb-5">
                <div className="w-auto p-1.5">
                  <input
                    className="block w-full px-5 py-4 text-slate-200 bg-black outline-none placeholder-gray-500 border border-gray-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="w-auto p-1.5">
                  <div className="inline-block px-5 py-4 text-slate-200 font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">
                    <Modal email={email} />
                  </div>
                </div>
              </div>
              <p className="text-gray-500 tracking-tight">
                By providing your email, you agree to receive updates and
                promotional materials from Searle Quality Contracting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};
