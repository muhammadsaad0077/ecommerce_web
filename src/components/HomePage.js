import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { addItems } from '../utils/appSlice'



const HomePage = () => {
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
    
  return (
    
    <div className="mt-[90px] ml-[14%] md:ml-[300px] flex flex-wrap gap-5 overflow-y-hidden">
        {
            products?.map((eachProduct)=>{
                
                const image = eachProduct?.image;
                const title = eachProduct?.title;
                const price = eachProduct?.price;
                const category = eachProduct?.category;
                const rating = eachProduct?.rating?.rate;

                return(
                     
                    <Card key={eachProduct.id} id={eachProduct.id} image={image} title={title} price={price} category={category} rating={rating}/>
                )
                  })
        }

    </div>
  )
}

export default HomePage
