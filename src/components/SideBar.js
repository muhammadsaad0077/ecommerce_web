import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCategory } from '../utils/appSlice'
const SideBar = () => {
    const dispatch = useDispatch()
    const category = useSelector(store => store.app.category)

    const searchCategory = async()=>{
        const data = await fetch("https://fakestoreapi.com/products/categories")
        const json = await data?.json()
        dispatch(addCategory(json))

    }
    useEffect(()=>{
        if(!category){
        searchCategory()
}}, [])



  return (
    <div className="ml-0 mt-[90px] p-4 w-[15%] h-[100%]  bg-yellow-800 rounded-lg shadow-lg fixed">
    <ul className="divide-y divide-yellow-700">
       <Link to={"/"}><li className='ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300'>All</li></Link>
        {category?.map((eachCategory) => (
            <Link to={"/"+eachCategory}>
            <li key={eachCategory.id}  className="ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300">
                {eachCategory.toUpperCase()}
            </li>
            </Link>
        ))}
    </ul>
    </div>
  )
}

export default SideBar
