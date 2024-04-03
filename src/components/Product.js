import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../utils/appSlice';
import Shimmer from './Shimmer';
import SingleProduct from './SingleProduct';

const Product = () => {
  const product = useSelector(store => store.app.product);
  const dispatch = useDispatch();
  const { newId } = useParams();
  console.log(newId);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${newId}`);
      const json = await data.json();
      dispatch(addProduct(json));
    };

    
    fetchProductDetails(); // Fetch product details whenever the component mounts or ID changes
  }, [newId, dispatch]);

  if (!product) {
    return <Shimmer /> 
  }

  const { image, title, price, category, id, description } = product;
  const rating = product?.rating?.rate
  
  return (
    <div className="md:ml-[300px] mt-24 ml-[14%]">
      <SingleProduct image={image} title={title} price={price} category={category} rating={rating} id={id} desc={description}/>
    </div>
  );
};

export default Product;
