import React from 'react'
import logo_jaguar from "../assets/bg-yellow-jaguar-no-text.jpeg"
export default function NavBar() {
  return (
    <div className='w-full flex justify-between px-6 md:px-10 lg:px-16 py-3 md:py-1 items-center shadow-lg absolute top-0 bg-black bg-opacity-30 backdrop-blur-sm z-50'>
      <div className='flex items-end  gap-2'>
                <p className='font-bold font-fm-family-Kumbh-Sans text-xl md:text-2xl lg:text-3xl text-white'>PolicyTracker Ecuador</p>
                <span className='text-neutral-500'> Calificando a tu verdugo de turno</span>

      </div>

    </div>
  )
}
