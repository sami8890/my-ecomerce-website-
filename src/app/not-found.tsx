// import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center bg-gray-100">
      <img src="/notfound.png" alt="404 Error" className="max-w-md mb-6 mt-5 " />
      <p className="mt-4 text-2xl text-gray-900">
        Oops! It looks like the page you're looking for doesn't exist.
      </p>
      {/* Link styled as blue text to navigate back to the home page */}
      <Link href="/">
        <span className="mt-6 text-blue-500 cursor-pointer hover:underline">
          Go back to Home
        </span>
      </Link>
    </div>
  );
};

export default Custom404;
