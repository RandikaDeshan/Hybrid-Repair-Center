import React from 'react'
import {InfiniteSlider} from '../../components/motion-primitives/infinite-slider'
import Review_Card from '@/components/Review_Card'
import { reviewData } from '@/data/reviewdata'
import { FaStar } from 'react-icons/fa'

const Testimonials_Section = () => {
  return (
    <div className=' w-full h-full flex flex-col items-center mt-10 md:mt-20'>
        <p data-aos ="zoom-in-up" data-aos-duration="2000" className=' font-["Poppins"] font-bold text-3xl md:text-5xl mb-10 text-center px-5'>What Our Customers Say</p>
        <p data-aos ="zoom-in-up" data-aos-duration="2000" className=' text-center px-5 md:px-20 pb-20 text-green-600 font-semibold font-["Inter"]'>We take pride in delivering reliable automotive solutions and exceptional customer service. Here's what our valued customers have to say about their experience with Sancta Maria.</p>
        <div className=' w-full'>
            <InfiniteSlider speedOnHover={20} gap={24}>
                {reviewData.map((review)=>(
                    <div className=' mb-20'>
                        <Review_Card key={review.id} name={review.name} role={review.role} review={review.review} rating={review.rating}/>
                    </div>
                ))}
        </InfiniteSlider>
        </div>
        <div className=' flex w-full justify-center items-center py-20 space-x-5 px-5'>
            <FaStar size={20} className=' text-yellow-300'/>
            <p className=' font-bold text-xl md:text-3xl'>4.9/5 Customer Satisfaction</p>
        </div>
    </div>
  )
}

export default Testimonials_Section