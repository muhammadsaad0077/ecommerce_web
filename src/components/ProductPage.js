import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addItemToCart } from '../utils/cartSlice';

const ProductPage = ({ image, price, rating, title, category, id, desc }) => {
    const dispatch = useDispatch();
    const [items, setItems] = useState(1)


    const cartItems = useSelector(state => state.cart.items || []);

    const truncateTitle = (title, maxLength) => {
        if (title?.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    const handleAddToCart = () => {
        const existingItemIndex = cartItems.findIndex(item => item.id === id);
    
        console.log(existingItemIndex);
    
        if (existingItemIndex !== -1) {
            // If item already exists in cart, update its quantity
            const updatedItems = cartItems.map((item, index) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + parseInt(items) };
                }
                return item;
            });
            dispatch(addItemToCart(updatedItems));
        } else {
            // If item is not in cart, add it with the given quantity
            dispatch(addItemToCart({ id, image, price, rating, title, category, desc, quantity: parseInt(items) }));
        }
    };
      
       
    const renderStars = (rating) => {
        const numStars = Math.floor(rating); // Get the integer part of the rating
        const remainder = rating - numStars; // Get the decimal part of the rating
      
        let stars = '';
        // Add full stars
        for (let i = 0; i < numStars; i++) {
          stars += '⭐'; // Full star character
        }
      
        // Add half star if remainder is greater than 0.5
        if (remainder >= 0.5) {
          stars += '☆'; // Half star character
        }
      
        // Add empty stars to complete 5 stars
        const remainingStars = 5 - Math.ceil(rating); // Remaining empty stars
        for (let i = 0; i < remainingStars; i++) {
          stars += '☆'; // Empty star character
        }
      
        return stars;
      };
    const stars = renderStars(rating) 
    
    const handleAdd = ()=>{
        setItems(items + 1)
    }
    const handlePrevious = ()=>{
        if(items > 1 ){
        setItems(items - 1)
        }
    }
  return (
    <div className='bg-white flex justify-between h-[80vh] md:h-[90vh] w-[120%] md:w-[95%] relative md:right-0 right-14 md:flex'>
        <div className='flex justify-between items-center md:left-0 md:flex left-72 absolute top-[40%] w-48'>
          <img src={image} alt='img' className='w-48 h-48 md:inline-block md:right-0 absolute right-24 md:mr-0 md:ml-36 -mt-36'></img>
        </div>
        <div className='flex flex-col items-start mt-20 relative left-4 md:left-[30%]'>
            <h1 className='text-2xl inline-block md:hidden'>{truncateTitle(title, 20)}</h1>
            <h1 className='text-2xl hidden md:inline-block'>{title}</h1>
            <h2 className='text-2xl mt-8 md:mt-4 mr-[275px]'>{stars}</h2>
            <h2 className='text-2xl mt-8 md:mt-4 mr-[275px] text-[#1D1D1D]'> $ {price}</h2>
            <h2 className='text-2xl mt-8 md:mt-4 mr-[275px] whitespace-nowrap text-[#1D1D1D]'>{category}</h2>
            <p className='mt-4 mr-[475px] hidden md:inline-block'>{desc}</p>
            <p className='mt-8 mr-[475px] inline-block md:hidden'>{truncateTitle(desc, 50)}</p>
         <div className='pt-10 text-xl'>
            <button className='mr-5' onClick={handlePrevious}>➖</button>
            <span>{items}</span>
            <button className='ml-5' onClick={handleAdd}>➕</button>
         </div>
         <div>
            <Link to={'/checkout'}><button  className='text-[18px] mt-4 md:text-[20px] py-2 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600' onClick={handleAddToCart}>Add to Cart</button></Link>
         </div>
        </div>
        
      
    </div>
  )
}

export default ProductPage
