import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItemFromCart, updateItemQuantity } from '../utils/cartSlice';

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch()

    // Calculate total price and subtotal for each item
    const totalPrice = cartItems.reduce((total, item) => total + (item?.price * item?.quantity), 0);
   // const [items, setItems] = useState(cartItems[0].quantity)
   const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
};

    

    const truncateTitle = (title, maxLength) => {
        if (title?.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    };

    //  const handleAdd = ()=>{
    //       setItems(items + 1)
    //  }
    //  const handlePrevious = ()=>{
    // if(items > 1 ){
    //    setItems(items - 1)
    //     }
    // }

    const handleRemove = ()=>{
        dispatch(removeItemFromCart())
    }

    return (
        <div className=" mx-auto px-4 rounded-lg shadow-lg py-8 mt-[90px] md:ml-[300px] w-[100%] md:w-[70vw] bg-white">
            <div className="grid grid-cols-1 gap-4 ">
                <div className="bg-gray-100 p-4 rounded-md border-b-4 border-black">
                    <div className={`flex justify-between items-center border-b border-black ${totalPrice > 0? "inline-block": "hidden"}`}>
                        <h3 className="text-lg font-semibold">Item</h3>
                        <h3 className="text-lg font-semibold">Price</h3>
                        <h3 className="text-lg font-semibold">Quantity</h3>
                        <h3 className="text-lg font-semibold hidden md:inline-block">Subtotal</h3>
                        <h3 className="text-lg font-semibold">Remove</h3>
                    </div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center mt-16">
                            <p className="text-base hidden md:inline-block">{truncateTitle(item.title, 10)}</p>
                            <p className="text-base inline-block md:hidden">{truncateTitle(item.title, 2)}</p>
                            
                            <p className="text-base relative right-0 md:right-[40px]">${item.price?.toFixed(2)}</p>
                            <div className='flex relative right-0 md:right-11'>
                            <button className='mr-2' onClick={() => handleQuantityChange(item.id, item?.quantity - 1)}>➖</button>
                            <p className="text-base">{item.quantity}</p>
                            <button className='ml-2' onClick={() => handleQuantityChange(item.id, item?.quantity + 1)}>➕</button>
                            </div>
                            
                            <p className="text-base relative right-6 hidden md:inline-block">${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={handleRemove} className="text-red-500 hover:text-red-700 focus:outline-none" /* Add onClick handler to remove item from cart */>Remove</button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div>
                    <button className="text-[15px] md:text-[18px] mt-4 md:py-4 py-3 px-2 md:px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        <Link to="/">Continue Shopping</Link>
                    </button>
                    </div>
                    <div className={`md:text-xl bg-gray-50 text-[#1D1D1D] font-serif ${totalPrice > 0? "inline-block": "hidden"}`}>
                        <p>Subtotal: ${totalPrice.toFixed(2)}</p>
                        <p className='mt-2'>Shipping Fee: $0.00</p>
                        <p className='mt-3'>Order Total: ${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
