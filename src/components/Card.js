import React from 'react';

const Card = ({ image, price, rating, title, category }) => {
  return (
    <div className="w-[280px] h-[320px] rounded overflow-hidden shadow-lg bg-white">
      <img className="w-32 h-32" src={image} alt="Product" />
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 text-base mb-2">Category: {category}</p>
        <div className="flex items-center">
          <p className="text-gray-700 text-lg mr-2">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;