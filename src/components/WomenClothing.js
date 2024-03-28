import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWomen } from '../utils/appSlice'

const WomenClothing = () => {
    const WomenClothing = useSelector(store => store.app.women)
    const dispatch = useDispatch()
    const electronicSearch = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        const json = await data?.json()
        dispatch(addWomen(json))
    }
    useEffect(()=>{
        if(!WomenClothing){
        electronicSearch()
    }
    }, [])
  return (
    <div className="mt-[90px] md:ml-[300px] ml-[14%] flex flex-wrap gap-5 overflow-y-hidden">
        { 
            WomenClothing?.map((eachProduct)=>{
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

export default WomenClothing
