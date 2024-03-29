import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { addItems } from '../utils/appSlice'
import Shimmer from './Shimmer'



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
if(!products){
  return <Shimmer />
}
    
  return (
    
    <div className="mt-[90px] ml-[14%] md:ml-[300px] flex flex-wrap gap-5 overflow-y-hidden">
        {
            products?.map((eachProduct)=>{
                
                const image = eachProduct?.image;
                const title = eachProduct?.title;
                const price = eachProduct?.price;
                const category = eachProduct?.category;
                const rating = eachProduct?.rating?.rate;
                const id = eachProduct?.id

                return(
                     
                    <Card key={eachProduct.id} id={id} image={image} title={title} price={price} category={category} rating={rating}/>
                )
                  })
        }

    </div>
  )
}

export default HomePage
