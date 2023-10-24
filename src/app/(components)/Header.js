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
        <div className="flex flex-row space-x-3">
          <div className="flex flex-row mt-3 space-x-1">
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <Link className="" href="https://www.instagram.com/searlequalitycontracting/">@Searlequalitycontracting</Link>
          </div>
          <Link href="#contact-us" passHref>
            <span className="cursor-pointer inline-block px-2 lg:px-4 py-1 lg:py-2 text-white text-sm lg:text-base md:text-lg font-medium bg-slate-900 border border-transparent hover:bg-slate-100 hover:text-red-700 focus:border-green-500 focus:border-opacity-40 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-lg transition duration-300 hidden lg:inline-block">
              Get in Touch
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
