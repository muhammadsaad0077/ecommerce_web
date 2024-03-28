import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addElectronics } from '../utils/appSlice'

const Electronics = () => {
    const electronics = useSelector(store => store.app.electronics)
    const dispatch = useDispatch()
    const electronicSearch = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        const json = await data?.json()
        dispatch(addElectronics(json))
    }
    useEffect(()=>{
        if(!electronics){
        electronicSearch()
    }
    }, [])
  return (
    <div className="mt-[90px] md:ml-[300px] ml-[14%] flex flex-wrap gap-5 overflow-y-hidden">
        { 
            electronics?.map((eachProduct)=>{
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
