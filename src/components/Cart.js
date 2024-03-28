// CartPage.js
// CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);


  return (
    <div className='ml-[300px] flex flex-wrap gap-5 mt-24'>
      {cartItems.map(item => (
        <div key={item.id}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default CartPage;




