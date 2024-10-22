"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/contact", name: "Contact" },
  { path: "/about", name: "About" },
  { path: "/sign-in", name: "Sign In" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu with the 'Escape' key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="p-4 text-black lg:mx-12 mt-6 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Section - Logo */}
        <Link href="/" className="text-[24px] font-sans font-bold">
          <span className="text-black text-3xl lg:text-4xl">Exclusive</span>
        </Link>

        {/* Menu Wrapper for large screens */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-grow">
          {/* Menu Links for large screens */}
          <div className="flex space-x-8 font-semibold">
            {navLinks.map(({ path, name }) => (
              <Link key={name} href={path} className="text-lg">
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section - Search, Cart & Favorites for large screens */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-b border-gray-400 outline-none text-gray-600 text-[16px] font-sans font-semibold"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-[24px] h-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[32px] h-[32px] text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 0.88h12.72a1 1 0 0 0 1-.88L23 6H6" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[32px] h-[32px] text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Right Section - Search, Cart & Favorites for small screens */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          {/* Cart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 0.88h12.72a1 1 0 0 0 1-.88L23 6H6" />
          </svg>

          {/* Favorites Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex flex-col justify-center items-center transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white"
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Links in Column for Mobile */}
        <div className="flex flex-col items-center space-y-8 text-white text-2xl font-semibold">
          {navLinks.map(({ path, name }) => (
            <Link key={name} href={path} onClick={() => setIsOpen(false)}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

