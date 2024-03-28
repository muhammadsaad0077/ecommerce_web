import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Electronics = () => {
    const [data, setData] = useState([])
    const electronicSearch = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        const json = await data?.json()
        setData(json)
    }
    useEffect(()=>{
        electronicSearch()
    }, [])
  return (
    <div className="mt-[90px] ml-[300px] flex flex-wrap gap-5 overflow-y-hidden">
        { 
            data.map((eachProduct)=>{
                const image = eachProduct?.image;
                const title = eachProduct?.title;
                const price = eachProduct?.price;
                const category = eachProduct?.category;
                const rating = eachProduct?.rating?.rate;

                return(
                    <Link key={eachProduct.id} to={`/product/${eachProduct.id}`}><Card key={eachProduct.id} image={image} title={title} price={price} category={category} rating={rating}/></Link>
                )
            })
        }

    </div>
  )
}

export default Electronics
