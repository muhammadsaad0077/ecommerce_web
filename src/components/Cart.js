// CartPage.js
// CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);


  return (
    
    <div className='md:ml-[300px] ml-[14%] flex flex-wrap gap-5 mt-24'>
      {cartItems.map(item => (
        <div key={item.id}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default CartPage;




