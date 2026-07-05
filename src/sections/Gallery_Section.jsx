import React from 'react'
import GalleryImg1 from '../assets/gimg1.webp'
import GalleryImg2 from '../assets/gimg2.webp'
import GalleryImg3 from '../assets/gimg3.webp'
import GalleryImg4 from '../assets/gimg4.webp'
import GalleryImg5 from '../assets/gimg5.webp'
import GalleryImg6 from '../assets/gimg6.webp'
import GalleryImg7 from '../assets/gimg7.webp'
import GalleryImg8 from '../assets/gimg8.webp'
import GalleryImg9 from '../assets/gimg9.webp'
import GalleryImg10 from '../assets/gimg10.webp'
import GalleryImg11 from '../assets/gimg11.webp'
import GalleryImg12 from '../assets/gimg12.webp'

const Gallery_Section = () => {
  return (
    <div className=' w-full h-full px-10 pt-20 flex flex-col items-center'>
        <p data-aos ="zoom-in-up" data-aos-duration="2000" className=' font-["Poppins"] font-bold text-5xl pb-20'>IMAGE GALLERY</p>
        <div className=' w-full h-100 flex'>
            <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden rounded-tl-2xl mr-2'> 
                <img src={GalleryImg3} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover rounded-tl-2xl hover:scale-105 transition-transform duration-300'/>
            </div>
             <div className=' w-1/2 h-full flex flex-col overflow-hidden rounded-tr-2xl ml-2'>
                <div data-aos ="zoom-in-up" data-aos-duration="2000" className='w-full h-3/5 overflow-hidden mb-1'>
                    <img src={GalleryImg5} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover rounded-tr-2xl hover:scale-105 transition-transform duration-300'/>
                </div>
                <div className=' w-full h-2/5 flex'>
                    <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden mt-1 mr-1'>
                        <img src={GalleryImg2} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                    </div>
                    <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden mt-1 ml-1'>
                        <img src={GalleryImg1} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                    </div>
                </div>
            </div>
        </div>

        <div className=' w-full h-100 flex mt-2'>
             <div className=' w-1/2 h-full flex flex-col overflow-hidden mr-2'>
                <div data-aos ="zoom-in-up" data-aos-duration="2000" className='w-full h-3/5 overflow-hidden mb-1'>
                    <img src={GalleryImg6} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                </div>
                <div className=' w-full h-2/5 flex'>
                    <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden mt-1 mr-1'>
                        <img src={GalleryImg11} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                    </div>
                    <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden mt-1 ml-1'>
                        <img src={GalleryImg12} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                    </div>
                </div>
            </div>
            <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden ml-2'> 
                <img src={GalleryImg4} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
            </div>
        </div>

        <div className=' w-full h-100 flex mt-2'>
            <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden rounded-bl-2xl mr-2'> 
                <img src={GalleryImg10} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover rounded-bl-2xl hover:scale-105 transition-transform duration-300'/>
            </div>
             <div className=' w-1/2 h-full flex flex-col overflow-hidden ml-2'>
                <div data-aos ="zoom-in-up" data-aos-duration="2000" className='w-full h-3/5 overflow-hidden mb-1'>
                    <img src={GalleryImg8} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover  hover:scale-105 transition-transform duration-300'/>
                </div>
                <div className=' w-full h-2/5 flex'>
                    <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden mt-1 mr-1'>
                        <img src={GalleryImg7} alt=""  loading="lazy" decoding="async" className=' w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>
                    </div>
                    <div data-aos ="zoom-in-up" data-aos-duration="2000" className=' w-1/2 h-full flex overflow-hidden rounded-br-2xl mt-1 ml-1'>
                        <img src={GalleryImg9} alt=""  loading="lazy" decoding="async" className=' w-full h-full rounded-br-2xl object-cover hover:scale-105 transition-transform duration-300'/>
                    </div>
                </div>
            </div>
        </div>
        <div className=' pt-20'></div>
    </div>
  )
}

export default Gallery_Section