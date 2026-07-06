import React from "react";
import AboutImg2 from "../assets/heroimg4.webp";
import ServicesImg1 from "../assets/serviceimg1.webp";
import ServicesImg2 from "../assets/serviceimg2.webp";
import ServicesImg3 from "../assets/serviceimg3.webp";
import { MdLocalCarWash } from "react-icons/md";
import { BiSolidCarMechanic } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { Link } from "react-router-dom";

const Services_Section = () => {

  return (
    <div className=" w-full h-full px-5 md:px-10 mt-10 md:mt-20 flex flex-col items-center">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=" w-full h-120 md:h-150 relative"
      >
        <div className=" absolute z-10 bg-black/50 w-full h-full flex flex-col items-center justify-center">
          <p
            data-aos="zoom-in"
            data-aos-duration="3000"
            className=' text-2xl md:text-4xl text-white font-bold font-["Poppins"]'
          >
            OUR SERVICES
          </p>
        </div>
        <img src={AboutImg2} alt="" className=" w-full h-full object-cover" />
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=' w-full h-170 md:h-100 mb-20 mt-30 flex flex-col md:flex-row justify-between font-["Inter"]'
      >
        <div className=" w-full md:w-1/2 h-3/5 md:h-full flex flex-col items-center md:items-baseline">
          <div className=" flex space-x-5 items-center md:pt-5 pb-5 md:pb-10">
            <MdLocalCarWash size={35} className=" text-green-600" />
            <p className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold text-green-600">
              Vehicle Servicing
            </p>
          </div>
          <p className=" pb-10 text-xl text-center font-semibold">
            Keep Your Vehicle Running at Its Best
          </p>
          <p className=" text-justify md:pr-5 lg:pr-20">
            Professional periodic servicing for hybrid and modern vehicles,
            including oil changes, brake inspections, fluid checks, battery
            testing, and preventive maintenance to ensure safety, performance,
            and reliability.
          </p>
          <Link
            to="/services/vehicleservicing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 lg:mt-10 px-5 lg:px-8 py-2 lg:py-3 bg-white border border-green-600 text-green-600 font-bold rounded-2xl hover:bg-green-400 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-2/5 md:h-full rounded-lg overflow-hidden">
          <img
            src={ServicesImg1}
            alt="Service Image 1"
            className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=' w-full h-170 md:h-100 my-10 md:my-20 flex flex-col-reverse md:flex-row justify-between font-["Inter"]'
      >
        <div className="w-full md:w-1/2 h-2/5 md:h-full rounded-lg overflow-hidden">
          <img
            src={ServicesImg2}
            alt="Service Image 1"
            className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 h-3/5 md:h-full md:pl-5 lg:pl-20 flex flex-col items-center md:items-baseline">
          <div className=" flex space-x-5 items-center md:pt-5 pb-5 md:pb-10">
            <BiSolidCarMechanic size={35} className=" text-green-600" />
            <p className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold text-green-600">
              Mechanical Repairs
            </p>
          </div>
          <p className=" pb-10 text-xl text-center font-semibold">
            Reliable Repairs for Every Journey
          </p>
          <p className=" text-justify ">
            From engine and transmission repairs to suspension, electrical, and
            hybrid system diagnostics, our skilled technicians provide accurate
            fault detection and quality repairs using modern equipment.
          </p>
          <Link
            to="/services/mechanicalrepairs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 lg:mt-10 px-5 lg:px-8 py-2 lg:py-3 bg-white border border-green-600 text-green-600 font-bold rounded-2xl hover:bg-green-400 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=' w-full h-170 md:h-100 my-20 flex flex-col md:flex-row justify-between font-["Inter"]'
      >
        <div className=" w-full md:w-1/2 h-3/5 md:h-full flex flex-col items-center md:items-baseline">
          <div className=" flex space-x-5 items-center md:pt-5 pb-5 md:pb-10">
            <IoIosColorPalette size={35} className=" text-green-600" />
            <p className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-green-600">
              Body Repair & Painting
            </p>
          </div>
          <p className=" pb-10 text-xl font-semibold">
            Restore the Look of Your Vehicle
          </p>
          <p className=" text-justify md:pr-5 lg:pr-20">
            We offer professional body repairs, dent removal, scratch repair,
            color matching, and high-quality vehicle painting to bring your
            vehicle back to its best condition.
          </p>
          <Link
            to="/services/repairandpaint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 lg:mt-10 px-5 lg:px-8 py-2 lg:py-3 bg-white border border-green-600 text-green-600 font-bold rounded-2xl hover:bg-green-400 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-2/5 md:h-full rounded-lg overflow-hidden">
          <img
            src={ServicesImg3}
            alt="Service Image 1"
            className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Services_Section;
