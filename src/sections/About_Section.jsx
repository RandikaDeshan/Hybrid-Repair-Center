import React from "react";
import GarageImg from "../assets/garageimg.webp";
import AboutImg from "../assets/aboutimg2.webp";
import DeepthaImg from "../assets/deeptha.jpg";
import { TiTick } from "react-icons/ti";
import Counter_JS from "@/components/Counter_JS";

const About_Section = () => {
  return (
    <div className=" w-full h-full px-5 md:px-10 flex flex-col items-center">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=" w-full h-120 md:h-150 relative"
      >
        <div className=" absolute z-10 bg-black/50 w-full h-full flex flex-col items-center justify-center">
          <p
            data-aos="zoom-in"
            data-aos-duration="3000"
            className=' text-2xl md:text-4xl text-center px-3 text-white font-bold font-["Poppins"]'
          >
            ABOUT SERVICE CENTRE
          </p>
        </div>
        <img src={GarageImg} alt="" className=" w-full h-full object-cover" />
      </div>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=' text-3xl md:text-5xl text-center font-["Poppins"] font-bold py-10 w-full md:w-180 leading-15 md:leading-20'
      >
        Complete Automotive Care for Every Journey
      </p>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className=' font-["Inter"] text-justify font-semibold text-green-700 lg:px-20 pb-20'
      >
        At Service Centre, we provide reliable automotive solutions with a strong
        focus on quality, precision, and customer satisfaction. From routine
        vehicle servicing and advanced diagnostics to mechanical repairs, body
        repairs, and professional painting, our experienced technicians ensure
        every vehicle receives expert care.
      </p>
      <div className=" w-full h-170 md:h-100 flex flex-col-reverse md:flex-row justify-between">
        <div className=" w-full md:w-1/2 h-3/5 md:h-full flex flex-col items-center justify-center space-y-4">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            className=" flex flex-col justify-center h-full space-y-5 text-lg font-semibold"
          >
            <div className=" flex space-x-3 items-center">
              <TiTick size={25} className=" text-[#05df72]" />
              <p>Hybrid & Modern Vehicle Specialists</p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={25} className=" text-[#05df72]" />
              <p>Advanced Diagnostic Technology</p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={25} className=" text-[#05df72]" />
              <p>Complete Vehicle Servicing</p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={25} className=" text-[#05df72]" />
              <p>Mechanical Repairs</p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={25} className=" text-[#05df72]" />
              <p>Body Repair & Painting</p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={25} className=" text-[#05df72]" />
              <p>Quality Workmanship</p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="2000"
          className="w-full md:w-1/2 h-2/5 md:h-full overflow-hidden rounded-2xl drop-shadow-xl drop-shadow-black/50"
        >
          <img
            src={AboutImg}
            alt=""
            className=" w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className=" w-full h-px bg-green-600 mt-20"></div>
      <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center py-10 space-y-8 md:space-y-0">
        <div className=' w-full md:w-1/3 h-full flex flex-col items-center font-["Inter"]'>
          <p className=" text-xl md:text-3xl font-semibold text-green-600">
            <Counter_JS target={15} suffix="+" />
          </p>
          <p className=" text-xl md:text-3xl text-center font-bold pt-2 md:pt-5">
            Years Experience
          </p>
        </div>
        <div className=' w-full md:w-1/3 h-full flex flex-col items-center font-["Inter"]'>
          <p className=" text-xl md:text-3xl font-semibold text-green-600">
            <Counter_JS target={10000} suffix="+" />
          </p>
          <p className=" text-xl md:text-3xl text-center font-bold pt-2 md:pt-5">
            Vehicles Serviced
          </p>
        </div>
        <div className=' w-full md:w-1/3 h-full flex flex-col items-center font-["Inter"]'>
          <p className=" text-xl md:text-3xl font-semibold text-green-600">
            <Counter_JS target={100} suffix="%" />
          </p>
          <p className=" text-xl md:text-3xl text-center font-bold pt-2 md:pt-5">
            Customer Focus
          </p>
        </div>
      </div>
      <div className=" w-full h-px bg-green-600"></div>
    </div>
  );
};

export default About_Section;
