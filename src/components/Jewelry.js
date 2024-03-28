import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addJewelry } from '../utils/appSlice'

const Jewelry = () => {
    const jewelery = useSelector(store => store.app.jewelry)
    const dispatch = useDispatch()
    const electronicSearch = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
        const json = await data?.json()
        dispatch(addJewelry(json))
    }
    useEffect(()=>{
        if(!jewelery){
        electronicSearch()
     }
    }, [])
  return (
    <div className="mt-[90px] md:ml-[300px] ml-[14%] flex flex-wrap gap-5 overflow-y-hidden">
        { 
            jewelery?.map((eachProduct)=>{
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

export default Jewelry
