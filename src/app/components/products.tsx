"use client";
import { useState } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 599,
    discountedPrice: 399,
    discount: 35,
    reviews: 120,
    sales: 500,
    imageUrl: "/products-image/gamepad.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 100,
    discountedPrice: 65,
    discount: 35,
    reviews: 220,
    sales: 350,
    imageUrl: "/products-image/light-mouse.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 150,
    discountedPrice: 100,
    discount: 35,
    reviews: 80,
    sales: 400,
    imageUrl: "/products-image/lcd.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair ",
    price: 1200,
    discountedPrice: 800,
    discount: 35,
    reviews: 300,
    sales: 250,
    imageUrl: "/products-image/chair.png",
  },
  {
    id: 5,
    name: "S-Series Comfort Chair  ",
    price: 300,
    discountedPrice: 195,
    discount: 35,
    reviews: 150,
    sales: 450,
    imageUrl: "/products-image/chair.png",
  },
];

const ProductSection: React.FC = () => {
  // Keep track of which product is selected
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  // Toggle selection when a product is clicked
  const handleProductClick = (id: number) => {
    setSelectedProduct(id === selectedProduct ? null : id);
  };

  return (
    <section className="py-12 px-6">
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full p-4 border rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            {/* Discount Badge */}
            <div className="bg-red-500 text-white  text-sm absolute top-1 left-4  flex items-center justify-center p-2 ">
              {product.discount}% OFF
            </div>

            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />

            {/* Product Name */}
            <h3 className="font-semibold text-lg">{product.name}</h3>

            {/* Prices */}
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold text-red-600">
                ${product.discountedPrice}
              </span>
              <span className="text-sm line-through">${product.price}</span>
            </div>

            {/* Reviews and Sales */}
            <div className="text-sm text-gray-600">
              {product.reviews} reviews, {product.sales} sold
            </div>

            {/* Show "Add to Cart" if product is selected */}
            {selectedProduct === product.id && (
              <button className="w-full mt-4 py-2 bg-black text-white">
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* "View All Products" Button */}
      <div className="flex justify-center">
        <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-sm hover:bg-red-500">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
