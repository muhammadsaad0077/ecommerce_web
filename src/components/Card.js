import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
import './../../src/App.css';
import './animation.css';

const Card = ({ image, price, rating, title, category, id, animate }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const isItemInCart = cartItems.some(item => item.id === id);

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (isItemInCart) {
      dispatch(removeItemFromCart({ id }));
    } else {
      dispatch(addItemToCart({ id, image, price, rating, title, category }));
    }
  };

  

  return (
    <div className={`w-[280px] h-[320px] rounded overflow-hidden shadow-lg bg-white ${animate ? 'animate-slide-in' : ''}`}>
      <Link to={`/product/${id}`}>
        <div className='flex justify-center'>
          <img className="w-32 h-32" src={image} alt="Product" />
          {/* <div className='flex h-10 w-16 whitespace-nowrap mt-10'>
            <button className="ml-6 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleAddToCart}>{isItemInCart ? 'Remove Item' : 'Add to Cart'}</button>
          </div> */}
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <p className="text-gray-700 text-base mb-2">Category: {category}</p>
          <div className="flex items-center">
            <p className="text-gray-700 text-lg mr-2">$ {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
