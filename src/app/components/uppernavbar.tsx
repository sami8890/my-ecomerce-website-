"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { FaChevronDown } from "react-icons/fa"; // Importing an icon from react-icons

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// upper navbar
const Uppernavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const languages = ["English", "Urdu", "Balochi", "Arabic"];

  return (
    <section className="hidden lg:flex justify-center items-center w-[100%] bg-black h-[73px] relative ">
      <div className="text-center absolute left-1/2 transform -translate-x-1/2 text-[#FAFAFA] flex items-center">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <button
          className={`${inter.className} ml-4 px-4 py-2  text-white font-poppins font-semibold  hover:underline`}
        >
          Shop now
        </button>
      </div>

      <div className="absolute right-5 flex items-center">
        <div className="relative">
          <button
            className={`${inter.className} flex items-center hover:underline font-poppins font-semibold text-white`}
            onClick={toggleDropdown}
          >
            English <FaChevronDown className="ml-2" />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <ul className="absolute right-4 mt-2 bg-[#333] rounded-md shadow-lg">
              {languages.map((language, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-white hover:bg-[#555] cursor-pointer"
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Uppernavbar;
