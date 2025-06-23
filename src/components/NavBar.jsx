import React from 'react'
import logo_jaguar from "../assets/bg-yellow-jaguar-no-text.jpeg"
export default function NavBar() {
  return (
    <div className='w-full flex justify-between px-8 py-2 items-center shadow-lg absolute top-0'>
        <p className='font-bold font-fm-family-Kumbh-Sans text-xl'>Zurdobarómetro</p>
         <img src={logo_jaguar} className=' top-5 right-5 w-11 h-10.5  rounded-full shadow-lg ' alt="" />
    </div>
  )
}
