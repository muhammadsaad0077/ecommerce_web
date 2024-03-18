import React from 'react';

const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center space-x-20 m-3">
      <h1 className="text-2xl col-span-1 text-white">DevStore</h1>
      <input
className="border col-span-1 mx-auto w-96 rounded-lg p-2 focus:outline-none focus:border-black focus:ring focus:ring-green-900 transition duration-200 ease-in-out"        placeholder='Search here...'></input>
      <div className="text-xl col-span-1 flex justify-end">
        <h1 className="mr-4">🛒</h1>
        <h1>👤</h1>
      </div>
    </div>
  );
};

export default Header;
