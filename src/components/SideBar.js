import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCategory, toggle } from '../utils/appSlice'
import bars from '../Images/bars.png'
import close from '../Images/close.png'
import Shimmer from './Shimmer'

const SideBar = () => {
    const dispatch = useDispatch()
    const category = useSelector(store => store.app.category)
    const isSideBarOpen = useSelector(store => store.app.toggleButton)

    const searchCategory = async()=>{
        const data = await fetch("https://fakestoreapi.com/products/categories")
        const json = await data?.json()
        dispatch(addCategory(json))

    }

    const handleClick = ()=>{
        dispatch(toggle())
    }
    if(!category){
        <Shimmer />
    }
    useEffect(()=>{
        if(!category){
        searchCategory()
}}, [])



  return (
    <>
    
   <img onClick={handleClick} className={`w-5 h-6 ml-2 -mt-[41px] md:hidden cursor-pointer transition-transform transform ${isSideBarOpen ? 'rotate-180' : ''}`} alt='icon' src={isSideBarOpen ? close : bars}></img>
    <div className="ml-0 mt-[90px] p-4 w-[15%] h-[590px] bg-yellow-800 rounded-lg shadow-lg fixed hidden md:inline-block">
    <ul className="divide-y divide-yellow-700">
       <Link to={"/"}><li className='ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300' onClick={handleClick}>All</li></Link>
        {category?.map((eachCategory, index) => (
            <Link key={index} to={"/"+eachCategory}>
            <li key={index}  className="ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300">
                {eachCategory.toUpperCase()}
            </li>
            </Link>
        ))}
    </ul>
    </div>
    
    {isSideBarOpen && (
                <div className="ml-0 mt-[90px] p-4 w-[90%] h-[85%] bg-yellow-800 rounded-lg shadow-lg fixed md:hidden" onClick={handleClick}>
                    <ul className="divide-y divide-yellow-700">
                        <Link to={"/"}><li className='ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300'>All</li></Link>
                        {category?.map((eachCategory, index) => (
                            <Link key={index} to={"/" + eachCategory}>
                                <li key={index} className="ml-3 mt-10 p-4 text-white cursor-pointer hover:text-yellow-200 transition duration-300">
                                    {eachCategory.toUpperCase()}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default SideBar

