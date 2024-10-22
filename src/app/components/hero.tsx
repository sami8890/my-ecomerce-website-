"use client";
import Image from "next/image";
import FlashSale from "./Flash-sale";

const HeroSection: React.FC = () => {
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  // Set the flash sale end date
  const saleEndDate = "2024-10-31T23:59:59"; // Replace with your desired end date

  return (
    <section className="px-4 py-6 md:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-black space-y-4 lg:space-y-0 lg:space-x-8">
        {/* Left Section - Categories */}
        <div className="w-full lg:w-[200px] flex lg:flex-col flex-wrap lg:flex-nowrap">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-sm md:text-lg font-semibold w-1/2 lg:w-full text-center lg:text-left mb-2 lg:mb-4"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Right Section - Image */}
        <div className="w-full  lg:w-[65%] h-[250px] md:space-x-7 md:h-[350px] space-x-8 lg:h-[400px] ">
          <Image
            layout="responsive"
            objectFit="cover"
            quality={100}
            src="/hero.png"
            height={500}
            width={800}
            alt="Hero section image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Flash Sale Section */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Flash Sales Title */}
          <div className="text-lg md:text-2xl lg:text-3xl font-bold">
            Flash Sales
          </div>

          {/* Timer */}
          <div className="flex-grow mt-4 md:mt-0">
            <FlashSale saleEndDate={saleEndDate} />
          </div>

          {/* Arrow Navigation */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <ArrowIcon direction="left" />
            <ArrowIcon direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowIcon: React.FC<{ direction: "left" | "right" }> = ({ direction }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={direction === "left" ? "M11 5L4 12L11 19M4 12H20" : "M3.5 12H20M20 12L13 5M20 12L13 19"}
      stroke="black"
      strokeWidth={direction === "left" ? "2" : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSection;
