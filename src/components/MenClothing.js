import React, { useEffect, useState } from 'react'
import Card from './Card'

const MenClothing = () => {
    const [data, setData] = useState([])
    const electronicSearch = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
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
                    <Card key={eachProduct.id} image={image} title={title} price={price} category={category} rating={rating}/>
                )
            })
        }

    </div>
  )
}

export default MenClothing
