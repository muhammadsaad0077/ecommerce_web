import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
    const [category, setCategory] = useState([])

    const searchCategory = async()=>{
        const data = await fetch("https://fakestoreapi.com/products/categories")
        const json = await data?.json()
        setCategory(json)
    }
    useEffect(()=>{
        searchCategory()
    }, [])



  return (
    <div className="ml-0 mt-[90px] p-4 w-[15%]  bg-yellow-800 rounded-lg shadow-lg fixed">
    <ul className="divide-y divide-yellow-700">
       <Link to={"/"}><li className='ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300'>All</li></Link>
        {category.map((eachCategory) => (
            <Link to={"/"+eachCategory}>
            <li key={eachCategory}  className="ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300">
                {eachCategory.toUpperCase()}
            </li>
            </Link>
        ))}
    </ul>
    </div>
  )
}

export default SideBar
