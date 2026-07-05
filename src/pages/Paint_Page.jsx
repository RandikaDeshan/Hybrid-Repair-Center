import React, { useEffect } from "react";
import ServicesImg1 from "../assets/serviceimg3.webp";
import ServicesImg2 from "../assets/paint1.webp";
import ServicesImg3 from "../assets/paint2.webp";
import ServicesImg4 from "../assets/paint3.webp";
import ServicesImg5 from "../assets/paint4.webp";
import ServicesImg6 from "../assets/paint5.webp";
import ServicesImg7 from "../assets/paint6.webp";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { TiTick } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

const Paint_Page = () => {


useEffect(() => {
    Aos.init();
  }, []);

  const bodyRepairServices = [
  {
    title: "Accident Body Repairs",
    description:
      "Professional repair of damaged body panels, restoring your vehicle's structural integrity and appearance after accidents.",
  },
  {
    title: "Dent Removal",
    description:
      "Efficient removal of minor and major dents using professional repair techniques while preserving your vehicle's finish whenever possible.",
  },
  {
    title: "Scratch & Paint Repair",
    description:
      "Repair of scratches, chips, and paint damage with seamless colour matching for a flawless finish.",
  },
  {
    title: "Panel Replacement",
    description:
      "Replacement of damaged doors, bumpers, fenders, bonnets, and other body panels using quality replacement parts.",
  },
  {
    title: "Vehicle Painting",
    description:
      "Complete and partial vehicle painting using premium automotive paints for a durable, factory-quality finish.",
  },
  {
    title: "Colour Matching",
    description:
      "Advanced computerized colour matching to ensure repaired areas blend perfectly with the original paint.",
  },
  {
    title: "Bumper Repairs",
    description:
      "Repair and refinishing of cracked, scratched, or damaged bumpers to restore their original appearance.",
  },
  {
    title: "Rust Removal & Protection",
    description:
      "Treatment of rusted areas followed by protective coatings to prevent future corrosion and extend vehicle life.",
  },
  {
    title: "Paint Polishing & Buffing",
    description:
      "Professional polishing and buffing to restore shine, remove swirl marks, and enhance the overall appearance of your vehicle.",
  },
  {
    title: "Final Quality Inspection",
    description:
      "Every repaired and painted vehicle undergoes a thorough inspection to ensure exceptional quality before delivery.",
  },
];

  return (
    <div className=" w-full h-fullv flex flex-col items-center">
          <div className=" relative w-full h-screen">
            <div className=" absolute z-10 bg-black/50 w-full h-full flex flex-col justify-center items-center">
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className=" w-full flex px-10 space-x-10 justify-center items-center"
              >
                <IoIosColorPalette size={40} color="white" />
                <p className=' text-white font-["Poppins"] font-bold text-4xl'>
                  Body Repair & Painting
                </p>
              </div>
            </div>
            <img
              src={ServicesImg1}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=' w-full h-full px-10 flex flex-col items-center py-20 font-["Inter"]'>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" text-5xl font-bold"
            >
              Restore the Look of Your Vehicle
            </p>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" text-center text-green-600 font-semibold pt-20 px-10"
            >
              From minor scratches to complete accident repairs, our body repair and painting team delivers factory-quality workmanship with accurate colour matching and durable finishes.
            </p>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" text-3xl font-bold py-20"
            >
                Services
            </p>
            <div className=" w-full grid grid-cols-3 gap-8">
              {bodyRepairServices.map((service) => (
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
              className=" text-3xl font-bold pb-20 pt-30"
            >
              Why Choose Us
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" w-100 h-full rounded-2xl drop-shadow-xl bg-white drop-shadow-gray-400 border p-10 border-green-500 flex flex-col items-center"
            >
              <div className=" flex flex-col space-y-5">
                <div className=" flex space-x-3 items-center">
                  <TiTick size={30} className=" text-green-600" />
                  <p className=" font-semibold font-['Inter'] text-lg">
                    Professional Paint Booth
                  </p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <TiTick size={30} className=" text-green-600" />
                  <p className=" font-semibold font-['Inter'] text-lg">
                    Accurate Colour Matching
                  </p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <TiTick size={30} className=" text-green-600" />
                  <p className=" font-semibold font-['Inter'] text-lg">
                    Skilled Body Repair Team
                  </p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <TiTick size={30} className=" text-green-600" />
                  <p className=" font-semibold font-['Inter'] text-lg">
                    Premium Paint Materials
                  </p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <TiTick size={30} className=" text-green-600" />
                  <p className=" font-semibold font-['Inter'] text-lg">
                    Attention to Detail
                  </p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <TiTick size={30} className=" text-green-600" />
                  <p className=" font-semibold font-['Inter'] text-lg">
                    Satisfaction Guaranteed
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" w-full h-170 flex mt-20"
            >
              <div className=" flex flex-col w-1/3 h-full rounded-l-2xl overflow-hidden mr-1">
                <div className=" w-full h-1/2 overflow-hidden mb-1">
                  <img
                    src={ServicesImg2}
                    alt=""
                    className=" w-full h-full object-cover rounded-tl-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className=" w-full h-1/2 overflow-hidden mt-1">
                  <img
                    src={ServicesImg3}
                    alt=""
                    className=" w-full h-full object-cover rounded-bl-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className=" flex flex-col w-1/3 h-full overflow-hidden mx-1">
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
              <div className=" flex flex-col w-1/3 h-full rounded-r-2xl overflow-hidden ml-1">
                <div className=" w-full h-1/2 overflow-hidden mb-1">
                  <img
                    src={ServicesImg6}
                    alt=""
                    className=" w-full h-full object-cover rounded-tr-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className=" w-full h-1/2 overflow-hidden mt-1">
                  <img
                    src={ServicesImg7}
                    alt=""
                    className=" w-full h-full object-cover rounded-br-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className=" mt-20 flex w-full space-x-20 justify-center">
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
                  <p>info@sanctamaria.lk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Paint_Page