"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { animateScroll } from "react-scroll";

export default function Header() {
  const router = useRouter();

  function navigateToHome() {
    // router.push("/");
    animateScroll.scrollToTop();
  }

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-red-700 text-slate-200 drop-shadow-xl z-50">
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-no-shrink text-slate-200 mr-6 cursor-pointer transform hover:scale-105 transition-transform duration-500">
          <span
            className="text-3xl font-bold tracking-wider italic"
            onClick={navigateToHome}
          >
            SQC
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow flex justify-end space-x-4 items-center">
            <Link
              href="#about-us"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded"
            >
              Gallery
            </Link>
            <Link
              href="#our-process"
              className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-200 transition-colors duration-300 hover:shadow-md p-2 rounded"
            >
              Our Process
            </Link>
            <Link
              className="inline-block px-8 py-4 text-slate-200 hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
              href="#contact-us"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
