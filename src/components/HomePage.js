import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { addItems } from '../utils/appSlice'
import Shimmer from './Shimmer'
import './animation.css'



const HomePage = () => {
  const [animate, setAnimate] = useState(false)
  const [quantity, setQuantity] = useState(1)
    const products = useSelector(store => store.app.items)
    const dispatch = useDispatch()
    const searchProducts = async()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        dispatch(addItems(json))
    }
    
    useEffect(()=>{
        if(!products){
        searchProducts()
}}, [])

 const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Condition to trigger animation when the user scrolls to a certain position
    if (scrollPosition + windowHeight >= documentHeight * 0.8) {
      setAnimate(true);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

if(!products){
  return <Shimmer />
}

const handleQuantityChange = (newQuantity) => {
  setQuantity(newQuantity);
};




    
  return (
    
    <div className="mt-[90px] ml-[14%] md:ml-[300px] flex flex-wrap gap-5">
        {
            products?.map((eachProduct, index)=>{
                
                const image = eachProduct?.image;
                const title = eachProduct?.title;
                const price = eachProduct?.price;
                const category = eachProduct?.category;
                const rating = eachProduct?.rating?.rate;
                const id = eachProduct?.id

                return(
                     
                    <Card quantity={quantity} onQuantityChange={handleQuantityChange} animate={animate && index % 2 === 0} key={eachProduct.id} id={id} image={image} title={title} price={price} category={category} rating={rating}/>
                )
                  })
        }

    </div>
  )
}

export default HomePage
