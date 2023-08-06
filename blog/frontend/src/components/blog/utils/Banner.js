import React from 'react';

const Banner = () => {
  return (
    <div className="banner opacity-100 bg-indigo-300 text-white h-16 flex items-center justify-center sticky top-0 z-50 rounded-full">
      <a
        href="/article/30-products-in-30-days"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-bold"
      >
        I'm making 30 products in 30 days
      </a>
    </div>
  );
};

export default Banner;
