import React, { useEffect } from "react";
import ServicesImg1 from "../assets/serviceimg2.webp";
import ServicesImg2 from "../assets/repair1.webp";
import ServicesImg3 from "../assets/repair2.webp";
import ServicesImg4 from "../assets/repair3.webp";
import ServicesImg5 from "../assets/repair4.webp";
import ServicesImg6 from "../assets/repair5.webp";
import ServicesImg7 from "../assets/repair6.webp";
import {
  MdEmail,
  MdKeyboardDoubleArrowRight,
  MdLocationOn,
} from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { TiTick } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Repair_Page = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  const repairServices = [
    {
      title: "Engine Repairs",
      description:
        "Comprehensive engine diagnostics, repairs, and maintenance to restore performance, efficiency, and reliability.",
    },
    {
      title: "Transmission Repairs",
      description:
        "Expert repair and servicing of manual and automatic transmission systems for smooth and reliable operation.",
    },
    {
      title: "Brake System Repairs",
      description:
        "Inspection, repair, and replacement of brake pads, discs, calipers, and other braking components for maximum safety.",
    },
    {
      title: "Suspension & Steering",
      description:
        "Repair and maintenance of suspension and steering systems to improve vehicle stability, comfort, and handling.",
    },
    {
      title: "Electrical System Repairs",
      description:
        "Professional diagnosis and repair of vehicle electrical faults, including wiring, sensors, lighting, and electronic components.",
    },
    {
      title: "Starter Motor & Alternator",
      description:
        "Testing, repair, and replacement of starter motors and alternators to ensure reliable engine starting and battery charging.",
    },
    {
      title: "Cooling System Service",
      description:
        "Radiator, water pump, thermostat, and coolant system repairs to prevent overheating and maintain engine health.",
    },
    {
      title: "Exhaust System Repairs",
      description:
        "Inspection and repair of exhaust systems to improve engine performance, reduce emissions, and eliminate excessive noise.",
    },
    {
      title: "Hybrid System Diagnostics",
      description:
        "Advanced diagnostic services for hybrid vehicles, including battery health checks and electronic system troubleshooting.",
    },
    {
      title: "Computerized Fault Diagnosis",
      description:
        "Modern diagnostic equipment used to quickly identify and resolve engine, transmission, ABS, and electronic system faults.",
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
              <BiSolidCarMechanic size={40} color="white" />
              <p className=' text-white font-["Poppins"] font-bold text-center text-2xl md:text-4xl'>
                Mechanical Repairs
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
              <p className=" text-white">Repair</p>
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
          Reliable Repairs for Every Journey
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className=" text-center text-green-600 font-semibold pt-10 md:pt-20 md:px-10"
        >
          Whether your vehicle requires engine repairs, suspension work,
          electrical troubleshooting, or transmission repairs, our experienced
          technicians provide accurate diagnostics and dependable repair
          solutions.
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="text-xl md:text-3xl font-bold py-20"
        >
          Repair Services
        </p>
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {repairServices.map((service) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" w-full h-70 rounded-2xl space-y-5 bg-green-300 drop-shadow-xl drop-shadow-black/50 flex flex-col p-5 justify-center items-center"
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
          className=" text-xl md:text-3xl font-bold pb-20 pt-20 md:pt-30"
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
                Skilled Repair Specialists
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Accurate Fault Diagnosis
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Quality Replacement Parts
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Fast Turnaround time
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Warranty on Repairs
              </p>
            </div>
            <div className=" flex space-x-3 items-center">
              <TiTick size={30} className=" text-green-600" />
              <p className=" font-semibold font-['Inter'] md:text-lg">
                Honest & Transparent Service
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

export default Repair_Page;
