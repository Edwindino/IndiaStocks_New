import React from 'react'
import streak from '../Assests/streak.png'
import logo from '../Assests/Zerodha-Logo.png'

export default function Header() {
  return (
    <div className=' flex justify-around items-center w-full border shadow-sm'>
      <div className="flex space-x-2 ">

        <img src={logo} alt="Logo" className="w-30  h-20" />

        <img src={streak} alt="streak" className="w-30 h-10 mt-5" />
      </div>
      <div className=' right-40 m-4 space-x-2'>

        <button className="hover:bg-gray-100 text-xs  py-2 px-5 rounded">
          Home
        </button>
        <button className="bg-blue-500  text-xs text-white  py-2 px-5  rounded">
          Sign Up
        </button>


      </div>
    </div>
  )
}
