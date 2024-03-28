import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../utils/appSlice';

const Product = () => {
  const product = useSelector(store => store.app.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await data.json();
      dispatch(addProduct(json));
    };

    
    fetchProductDetails(); // Fetch product details whenever the component mounts or ID changes
  }, [id, dispatch]);

  if (!product) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  const { image, title, price, category } = product;
  
  return (
    <div className="md:ml-[300px] mt-24 ml-[14%]">
      <Card image={image} title={title} price={price} category={category} />
    </div>
  );
};

export default Product;
