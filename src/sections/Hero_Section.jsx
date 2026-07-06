import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroImg1 from "../assets/heroimg1.webp";
import HeroImg2 from "../assets/heroimg2.webp";
import HeroImg3 from "../assets/heroimg3.webp";;

const Hero_Section = () => {

  return (
    <div className=" w-full h-screen relative">
      <div className=" w-full h-full flex flex-col justify-center items-center space-y-5 px-10 absolute z-10 bg-black/50">
        <p className=" text-white text-4xl md:text-7xl text-center font-bold font-['Poppins'] leading-15 md:leading-23 text-shadow-2xs text-shadow-black">
            Hybrid Vehicle Service, Repair & Paint Centre

        </p>
        <p className=" text-green-400 text-xl md:text-2xl font-['Inter'] text-center font-semibold text-shadow-2xs pb-10">
            From routine maintenance to advanced diagnostics, engine repairs, bodywork, and premium painting
        </p>
        <button className=" text-green-700 font-bold bg-white rounded-lg px-8 py-3 cursor-pointer hover:bg-green-700 hover:text-white">
            Call Now
        </button>
      </div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide>
          <div className=" w-full h-screen">
            <img
              src={HeroImg1}
              alt=""
              className=" w-full h-screen object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-screen">
            <img
              src={HeroImg2}
              alt=""
              className=" w-full h-screen object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-screen ">
            <img
              src={HeroImg3}
              alt=""
              className=" w-full h-screen object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero_Section;
