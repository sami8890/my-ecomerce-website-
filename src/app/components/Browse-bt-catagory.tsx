"use client";
import { useState } from "react";
import {
  FaMobileAlt,
  FaTabletAlt,
  FaLaptop,
  FaApple,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa"; // Updated icons
import Image from "next/image";
import { RedImageText } from "./red-image-text";

// Category data
const categories = [
  { id: 1, name: "Phone", icon: <FaMobileAlt /> },
  { id: 2, name: "Tablet", icon: <FaTabletAlt /> },
  { id: 3, name: "Computer", icon: <FaLaptop /> },
  { id: 4, name: "Apple-Smartwatch", icon: <FaApple /> },
  { id: 5, name: "Headphone", icon: <FaHeadphones /> },
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
];

const CategorySection: React.FC = () => {
  // Keep track of which category is selected
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Toggle the selection of a category
  const handleCategoryClick = (id: number) => {
    setSelectedCategory(id === selectedCategory ? null : id);
  };

  return (
    <section className="py-12 px-6 font-bold">
        {/* this is red image and text  */}
     <RedImageText categoryText="catagories " headingText="Browse by category"/>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative w-full p-4 border border-gray-300 rounded-lg shadow-lg cursor-pointer transition-all duration-300 text-center ${
              selectedCategory === category.id
                ? "bg-red-500 text-white"
                : "bg-white"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {/* Category Icon */}
            <div className="flex justify-center items-center text-4xl mb-2 h-24">
              {category.icon}
            </div>

            {/* Category Name */}
            <h3 className="font-semibold text-lg">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
