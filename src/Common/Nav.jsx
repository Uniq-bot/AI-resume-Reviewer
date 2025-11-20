import React from 'react'
import logo from '../assets/logo.png';
import '../CSS/Nav.css'
const Nav = () => {
  return (
    <div className='flex px-40 bg-[#0F172A] text-white py-3 items-center justify-between'>
      <img src={logo} />
      <div className='flex items-center gap-4'>
        <ul className='flex items-center gap-5'>
            <li className='cursor-pointer'>
                Features
            </li>
            <li className='cursor-pointer'>
                How it Works?
            </li>
        </ul>
        <button className='bg-blue-800 px-4 py-2 rounded-2xl cursor-pointer'>
            Get Started
        </button>
      </div>
    </div>
  )
}

export default Nav
