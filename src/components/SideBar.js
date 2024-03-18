import React, { useEffect, useState } from 'react'

const SideBar = () => {
    const [category, setCategory] = useState([])
    const searchCategory = async()=>{
        const data = await fetch("https://fakestoreapi.com/products/categories")
        const json = await data?.json()
        setCategory(json)
        console.log(json);
    }
    useEffect(()=>{
        searchCategory()
    }, [])
  return (
    <div className="ml-0 mt-7 p-5 w-[15%] h-[87%] bg-yellow-800 rounded-lg shadow-lg">
    <ul className="divide-y divide-yellow-700">
        {category.map((eachCategory) => (
            <li key={eachCategory} className="ml-3 mt-10 p-6 text-white cursor-pointer hover:text-yellow-200 transition duration-300">
                {eachCategory.toUpperCase()}
            </li>
        ))}
    </ul>
</div>
  )
}

export default SideBar
