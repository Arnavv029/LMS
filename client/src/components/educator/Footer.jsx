import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse md:flex-row items-center justify-between w-full px-8 border-t py-4'>
      
      <div className='flex items-center gap-4'>  
        <img className='hidden md:block w-20' src={assets.logo} alt="" />
        
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        
        <p className='text-xs md:text-sm text-gray-500 text-center'>
          Copyright 2xxx @ GreetStack. All Right Reserved
        </p>
      </div>

      <div className='flex items-center gap-3 mb-4 md:mb-0'> 
        <a href="#"><img src={assets.facebook_icon} alt="" /></a>
        <a href="#"><img src={assets.twitter_icon} alt="" /></a>
        <a href="#"><img src={assets.instagram_icon} alt="" /></a>
      </div>

    </footer>
  )
}

export default Footer