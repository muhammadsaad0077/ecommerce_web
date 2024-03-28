import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'



const HomePage = () => {
    const [product, setProduct] = useState([])
    const searchProducts = async()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setProduct(json)
    }
    useEffect(()=>{
        searchProducts()
    }, [])
    
  return (
    
    <div className="mt-[90px] ml-[300px] flex flex-wrap gap-5 overflow-y-hidden">
        {
            product.map((eachProduct)=>{
                
                const image = eachProduct?.image;
                const title = eachProduct?.title;
                const price = eachProduct?.price;
                const category = eachProduct?.category;
                const rating = eachProduct?.rating?.rate;

                return(
                     
                    <Card id={eachProduct.id} image={image} title={title} price={price} category={category} rating={rating}/>
                )
                  })
        }

    </div>
  )
}

export default HomePage
