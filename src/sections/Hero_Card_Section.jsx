import React from 'react'
import { BiSolidCarMechanic } from 'react-icons/bi'
import { FaTools } from 'react-icons/fa'
import { GiAutoRepair, GiTowTruck } from 'react-icons/gi'

const Hero_Card_Section = () => {
  return (
    <div className=' w-full h-full grid md:grid-cols-4 grid-cols-1'>
        <div className=' w-full h-25 md:h-40 group overflow-hidden bg-black/50 flex flex-col px-5 items-center justify-center font-["Inter"] space-y-3'>
            <FaTools size={25} className=' text-[#05df72] group-hover:scale-110 transition-transform  duration-300'/>
            <p className=' text-base md:text-lg lg:text-xl text-white text-center group-hover:scale-105 transition-transform  duration-300'>Advanced Diagnostics</p>
        </div>
        <div className=' w-full h-25 md:h-40 group overflow-hidden bg-black/60 flex flex-col px-5 items-center justify-center font-["Inter"] space-y-3'>
            <GiAutoRepair size={25} className=' text-[#05df72] group-hover:scale-110 transition-transform  duration-300'/>
            <p className=' text-base md:text-lg lg:text-xl text-white text-center group-hover:scale-105 transition-transform  duration-300'>Complete Vehicle Servicing</p>
        </div>
        <div className=' w-full h-25 md:h-40 group overflow-hidden bg-black/70 flex flex-col px-5 items-center justify-center font-["Inter"] space-y-3'>
            <BiSolidCarMechanic size={25} className=' text-[#05df72] group-hover:scale-110 transition-transform  duration-300'/>
            <p className=' text-base md:text-lg lg:text-xl text-white text-center group-hover:scale-105 transition-transform  duration-300'>Body Repair & Painting</p>
        </div>
        <div className=' w-full h-25 md:h-40 group overflow-hidden bg-black/80 flex flex-col px-5 items-center justify-center font-["Inter"] space-y-3'>
            <GiTowTruck size={25} className=' text-[#05df72] group-hover:scale-110 transition-transform  duration-300'/>
            <p className=' text-base md:text-lg lg:text-xl text-white text-center group-hover:scale-105 transition-transform  duration-300'>24 Hour Towing</p>
        </div>
    </div>
  )
}

export default Hero_Card_Section