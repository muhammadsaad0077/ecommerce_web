import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../utils/cartSlice';

const Header = () => {
  const cartItemsCount = useSelector(state => state.cart.items.length);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
    
  return (
    <>
          <h1 className="text-2xl m-4 text-white fixed">DevStore</h1>

    <div className={`grid grid-cols-3 items-center space-x-20 m-3`}>
      <input
className={`border border-blue-900 bg-gray-100 col-span-2 mx-[400px] w-96 rounded-lg p-2 focus:outline-none focus:border-black focus:ring focus:ring-green-900 transition duration-200 ease-in-out`}        placeholder='Search here...'></input>
      <div className="text-xl col-span-1 flex justify-end">
        <Link to={'/cart'}><h1 className="mr-10 text-4xl cart">🛒</h1></Link>
        <span className='relative right-11 text-white top-1 text-2xl font-bold'> {cartItemsCount > 0 && ` : ${cartItemsCount}`}</span>
        <button onClick={handleClearCart} className='relative right-7 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Clear Cart</button>
      </div>
    </div>
    </>
  );
};

export default Header;
