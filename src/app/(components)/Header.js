"use client";

import Link from "next/link";
import { animateScroll } from "react-scroll";

export default function Header() {
  function navigateToHome() {
    animateScroll.scrollToTop({
      duration: 100,
      smooth: "easeInOutQuint",
    });
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-red-700 text-slate-200 z-50 transition-all duration-300 ease-in-out shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center flex-no-shrink text-slate-200 cursor-pointer transform hover:scale-105 transition-transform duration-500">
          <span
            className="text-4xl font-extrabold tracking-tight italic"
            onClick={navigateToHome}
          >
            SQC
          </span>
        </div>
        <div className="hidden lg:flex flex-grow items-center justify-center space-x-4">
          {["#about-us", "#services", "#gallery", "#our-process"].map(
            (href) => (
              <Link key={href} href={href} passHref>
                <span className="cursor-pointer text-slate-200 hover:bg-white hover:text-red-700 transition-colors duration-300 p-2 rounded-lg text-lg">
                  {href.slice(1).replace("-", " ")}
                </span>
              </Link>
            )
          )}
        </div>
        <Link href="#contact-us" passHref>
          <span className="cursor-pointer inline-block px-8 py-2 text-slate-200 text-lg font-medium bg-green-500 border border-transparent hover:bg-slate-700 focus:border-green-500 focus:border-opacity-40 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-lg transition duration-300">
            Get in Touch
          </span>
        </Link>
      </nav>
    </header>
  );
}
