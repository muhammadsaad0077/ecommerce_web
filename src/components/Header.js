import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart } from '../utils/cartSlice';
import { toggle } from '../utils/appSlice';

const Header = () => {
  const cartItemsCount = useSelector(state => state.cart.items.length);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleClick = ()=>{
    dispatch(toggle())
  }
    
  return (
    <>
          <Link to="/"><h1 className="text-[19px] md:ml-4 ml-9 md:text-2xl m-4 text-white md:fixed" onClick={handleClick}>DevStore</h1></Link>

      <div className="text-xl flex justify-end m-3 justify-self-end ml-auto">
        <Link to={'/cart'}><h1 className="mr-5 md:mr-10 text-3xl md:text-4xl cart">🛒</h1></Link>
        <span className='relative right-3 md:right-11 text-white top-1 text-xl md:text-2xl font-bold'> {cartItemsCount > 0 && ` : ${cartItemsCount}`}</span>
        <button onClick={handleClearCart} className='text-[18px] md:text-[20px] right-1 relative md:right-7 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Clear Cart</button>
      </div>
    </>
  );
};

export default Header;
