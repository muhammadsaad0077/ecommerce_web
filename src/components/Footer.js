import React from 'react'
import fb from '../Images/facebook.png'
import yt from '../Images/Youtube_logo.png'
import insta from '../Images/Instagram_logo_2016.svg.webp'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 bg-blue-950 mt-4 h-[35%] text-white whitespace-nowrap'>
      <div className='col-span-1 mt-16 ml-2 md:ml-28 md:text-xl '>
        <h1>Store</h1>
        <h3 className='mt-2'>Buy Stunning garments</h3>
      </div>
      <div className='col-span-1 md:ml-28 md:mt-12 text-xl ml-24 mt-14'>
        <h1>Follow Us</h1>
        <div className='flex mt-4'>
            <img alt='img' src={fb} className='w-7 h-7 rounded-[50%]'></img>
            <img alt='img' src={yt} className='w-7 h-7 mx-4 rounded-[50%]'></img>
            <img alt='img' src={insta} className='w-7 h-7 rounded-[50%]'></img>
        </div>
        <div className='col-span-1 relative md:right-0 md:mt-0 mt-8 right-[218px] md:left-[150%] md:bottom-[60px]'>
            <h1>Call Us</h1>
            <h2>+92 3000000</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
