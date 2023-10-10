"use client";

import Link from "next/link";
import { useState } from "react";
import { animateScroll } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen); // toggle the state
  }

  function handleLinkClick() {
    toggleMenu(); // Close the menu after a link is clicked
  }

  function navigateToHome() {
    animateScroll.scrollToTop({
      duration: 100,
      smooth: "easeInOutQuint",
    });
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-red-700 text-slate-200 z-50 transition-all duration-300 ease-in-out shadow-2xl bg-opacity-95">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center flex-no-shrink text-slate-200 cursor-pointer lg:block hidden">
          <span
            className="text-4xl font-extrabold tracking-tight italic cursor-pointer line-height-1.2 block border border-transparent"
            onClick={navigateToHome}
            style={{ verticalAlign: "middle", boxSizing: "border-box" }}
          >
            SQC
          </span>
        </div>
        <button onClick={toggleMenu} className="text-3xl lg:hidden">
          ☰
        </button>
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-11/12 bg-red-700 transition-transform duration-300 overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          } lg:static lg:translate-x-0 lg:max-h-full lg:flex flex-grow items-start lg:items-center flex-col lg:flex-row justify-start lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4 lg:w-auto w-full lg:order-none order-1`}
        >
          {["#about-us", "#services", "#gallery", "#our-process"].map(
            (href) => (
              <Link key={href} href={href} passHref>
                <span
                  onClick={handleLinkClick} // Close the menu after link click
                  className="cursor-pointer text-slate-200 hover:bg-slate-100 hover:text-red-700 transition-colors duration-300 p-2 rounded-lg text-base block w-full text-left lg:text-center"
                >
                  {href.slice(1).replace("-", " ")}
                </span>
              </Link>
            )
          )}
        </div>
        <Link href="#contact-us" passHref>
          <span className="cursor-pointer inline-block px-2 lg:px-4 py-1 lg:py-2 text-white text-sm lg:text-base md:text-lg font-medium bg-slate-900 border border-transparent hover:bg-slate-100 hover:text-red-700 focus:border-green-500 focus:border-opacity-40 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-lg transition duration-300 hidden lg:inline-block">
            Get in Touch
          </span>
        </Link>
      </nav>
    </header>
  );
}
