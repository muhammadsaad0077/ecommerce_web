import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';

const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null);
    const fetchProductDetails = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await data?.json();
        setProduct(json);
    };
    useEffect(()=>{
     fetchProductDetails()
    }, [id])

    if (!product) {
        return <div>Loading...</div>;
    }
    const { image, title, price, category } = product;
  return (
    <div className="ml-[300px] mt-24">
    <Card image={image} title={title} price={price} category={category}/>
    </div>
  )
}

export default Product
