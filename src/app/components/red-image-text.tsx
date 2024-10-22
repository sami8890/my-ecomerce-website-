import React from 'react';
import Image from 'next/image';

interface RedImageTextProps {
  categoryText: string; // Text for the first line (e.g., "Category")
  headingText: string;  // Text for the heading (e.g., "Browse by Categories")
}

export const RedImageText: React.FC<RedImageTextProps> = ({ categoryText, headingText }) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-3">
        <Image src="/red-colour.png" width={20} height={10} alt="Red colour" />

        {/* Text for Category */}
        <div className="text-red-700 text-lg">{categoryText}</div>
      </div>

      {/* Heading Text */}
      <h2 className="text-3xl font-bold mb-6">
        {headingText}
      </h2>
    </section>
  );
};
