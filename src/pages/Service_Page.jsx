import React, { useEffect } from "react";
import ServicesImg1 from "../assets/serviceimg1.webp";
import ServicesImg2 from "../assets/service1.webp";
import ServicesImg3 from "../assets/service2.webp";
import ServicesImg4 from "../assets/service3.webp";
import ServicesImg5 from "../assets/service4.webp";
import ServicesImg6 from "../assets/service5.webp";
import ServicesImg7 from "../assets/service6.webp";
import {
  MdEmail,
  MdKeyboardDoubleArrowRight,
  MdLocalCarWash,
  MdLocationOn,
} from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { TiTick } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Service_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  const services = [
    {
      title: "Engine Oil & Filter Change",
      description: "Regular oil changes to improve engine performance.",
    },
    {
      title: "Brake Inspection & Service",
      description: "Complete brake system inspection and maintenance.",
    },
    {
      title: "Battery Testing",
      description: "Check battery health and charging system.",
    },
    {
      title: "Air Conditioning Service",
      description: "Inspection, cleaning and gas refilling.",
    },
    {
      title: "Suspension Inspection",
      description: "Improve ride comfort and handling.",
    },
    {
      title: "Computer Diagnostics",
      description: "Accurate fault detection using modern scanners.",
    },
  ];

  return (
    <div className=" w-full h-full flex flex-col items-center overflow-hidden">
      <div className=" relative w-full h-screen">
        <div className=" absolute z-10 bg-black/50 w-full h-full flex flex-col justify-center items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className=" w-full flex flex-col items-center space-y-5"
          >
            <div className=" w-full flex px-5 md:px-10 space-x-5 md:space-x-10 justify-center items-center">
              <MdLocalCarWash size={40} color="white" />
              <p className=' text-white font-["Poppins"] font-bold text-center text-2xl md:text-4xl'>
                Vehicle Servicing
              </p>
            </div>
            <div className=" flex items-center">
              <button
                onClick={() => navigate("/")}
                className=" text-white underline cursor-pointer"
              >
                Home
              </button>
              <MdKeyboardDoubleArrowRight color="white" />
              <p className=" text-white">Service</p>
            </div>
          </div>
        </div>
        <img
          src={ServicesImg1}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=' w-full h-full px-5 md:px-10 flex flex-col items-center py-20 font-["Inter"]'>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" text-2xl md:text-5xl text-center font-bold"
        >
          Keep Your Vehicle Running at Its Best
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" text-center text-green-600 font-semibold pt-10 md:pt-20 md:px-10"
        >
          Regular vehicle servicing is essential for maintaining performance,
          improving fuel efficiency, and extending the lifespan of your vehicle.
          At Service Centre, our experienced technicians perform comprehensive
          inspections and maintenance using quality parts and modern equipment.
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" text-xl md:text-3xl font-bold py-20"
        >
          Our Services
        </p>
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" w-full h-50 rounded-2xl space-y-5 bg-green-300 drop-shadow-xl drop-shadow-black/50 flex flex-col p-5 justify-center items-center"
            >
              <p className='  font-semibold font-["Inter"] text-center text-lg'>
                {service.title}
              </p>
              <p className=" text-center text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" text-xl md:text-3xl font-bold pb-20 pt-20 mdpt-30"
        >
          Why Choose Us
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" w-full md:w-100 h-full rounded-2xl drop-shadow-xl bg-white drop-shadow-gray-400 border p-10 border-green-500 flex flex-col items-center"
        >
          <div className=" flex flex-col space-y-5">
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Qualified Technicians
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Genuine Quality Parts
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Modern Diagnostic Equipment
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Fast Turnaround
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Affordable Pricing
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" w-full h-200 md:h-170 flex flex-col md:flex-row mt-20"
        >
          <div className=" flex flex-col w-full md:w-1/3 h-full md:rounded-l-2xl rounded-t-2xl md:rounded-t-none overflow-hidden md:mr-1 mb-1 md:mb-0">
            <div className=" w-full h-1/2 overflow-hidden mb-1">
              <img
                src={ServicesImg2}
                alt=""
                className=" w-full h-full object-cover  hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className=" w-full h-1/2 overflow-hidden mt-1">
              <img
                src={ServicesImg3}
                alt=""
                className=" w-full h-full object-cover  hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full md:w-1/3 h-full overflow-hidden md:mx-1 my-1 md:my-0">
            <div className=" w-full h-1/2 overflow-hidden mb-1">
              <img
                src={ServicesImg4}
                alt=""
                className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className=" w-full h-1/2 overflow-hidden mt-1">
              <img
                src={ServicesImg5}
                alt=""
                className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full md:w-1/3 h-full md:rounded-tr-2xl md:rounded-br-2xl rounded-b-2xl md:rounded-b-none overflow-hidden mt-1 md:mt-0 md:ml-1">
            <div className=" w-full h-1/2 overflow-hidden mb-1">
              <img
                src={ServicesImg6}
                alt=""
                className=" w-full h-full object-cover  hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className=" w-full h-1/2 overflow-hidden mt-1">
              <img
                src={ServicesImg7}
                alt=""
                className=" w-full h-full object-cover  hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className=" mt-20 flex flex-col md:flex-row w-full md:space-x-5 lg:space-x-20 space-x-0 justify-center space-y-10 md:space-y-0">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex space-x-5"
          >
            <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
              <MdLocationOn size={20} color="white" />
            </div>
            <div className=" space-y-5">
              <p className=" font-bold font-['Inter'] text-2xl">Address</p>
              <p>
                No. 123, High Level Road,
                <br />
                Maharagama,
                <br />
                Sri Lanka
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex space-x-5"
          >
            <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
              <FaPhone size={20} color="white" />
            </div>
            <div className=" space-y-5">
              <p className=" font-bold font-['Inter'] text-2xl">Phone</p>
              <p>+94 777 123 123</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex space-x-5"
          >
            <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
              <MdEmail size={20} color="white" />
            </div>
            <div className=" space-y-5">
              <p className=" font-bold font-['Inter'] text-2xl">Email</p>
              <p>info@servicecentre.lk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_Page;
