import React, { useEffect } from 'react'
import Hero_Section from '../sections/Hero_Section'
import Hero_Card_Section from '../sections/Hero_Card_Section'
import Trust_Section from '../sections/Trust_Section'
import About_Section from '@/sections/About_Section'
import AboutImg2 from '../assets/heroimg5.webp'
import Aos from 'aos'
import "aos/dist/aos.css";
import Services_Section from '@/sections/Services_Section'
import Gallery_Section from '@/sections/Gallery_Section'
import Testimonials_Section from '@/sections/Testimonials_Section'
import Contact_Section from '@/sections/Contact_Section'
import Footer from '@/components/Footer'

const Home_Page = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div className=' w-full h-full'>
        <div id='home'>
            <Hero_Section/>
        </div>
        <Hero_Card_Section/>\
        <Trust_Section/>
        <div id='about'>
            <About_Section/>
        </div>
        <div id='services'>
            <Services_Section/>
        </div>
        <div className=' w-full h-screen relative mt-20'>
            <div className=' absolute z-10 bg-black/50 w-full h-full flex flex-col justify-center items-center'>
                <p data-aos ="zoom-in" data-aos-duration="2000" className=' text-white text-4xl px-10 text-center font-bold font-["Poppins"] leading-20'>"Committed to quality workmanship and complete customer satisfaction."</p>
            </div>
            <img src={AboutImg2} alt="" className=' w-full h-full object-cover'/>
        </div>
        <div id='gallery'>
            <Gallery_Section/>
        </div>
        <div id='testimonials'>
            <Testimonials_Section/>
        </div>
        <div id='contact'>
            <Contact_Section/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home_Page