import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookF, FaPhone, FaTiktok } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full h-200 md:h-120 bg-green-900 flex flex-col justify-between p-5 md:p-10">
      <div className=" w-full flex flex-col md:flex-row justify-between items-center md:items-end pb-5">
        <div className=" h-full flex flex-col justify-center">
          <p className="text-xl lg:text-3xl font-serif font-bold text-green-500 pb-10 md:pb-0">
            Sancta Maria
          </p>
        </div>
        <div className=" flex flex-col justify-end items-start space-y-5 pb-10 md:pb-0">
          <div className=" flex space-x-2">
            <MdLocationOn color="white" />
            <p className="text-sm lg:text-base text-gray-200">
              No. 123, High Level Road,
              <br />
              Maharagama,
              <br />
              Sri Lanka
            </p>
          </div>
          <div className=" flex space-x-2 items-center">
            <FaPhone color="white" />
            <p className="text-sm lg:text-base text-gray-200">+94 777 123 123</p>
          </div>
          <div className=" flex space-x-2 items-center">
            <MdEmail color="white" />
            <p className="text-sm lg:text-base text-gray-200">info@sanctamaria.lk</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-end space-y-5 items-start">
          <p className=" text-gray-200">Links</p>
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            All Services
          </button>

          <Link
            to="/services/vehicleservicing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer">
              Vehicle Servicing
            </button>
          </Link>
          <Link
            to="/services/mechanicalrepairs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer">
              Mechanical Repairs
            </button>
          </Link>
        </div>
        <div className="hidden md:flex flex-col justify-end space-y-5 items-start">
          <Link
            to="/services/repairandpaint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer">
              Body Repair & Painting
            </button>
          </Link>

          <button
            onClick={() => scrollToSection("gallery")}
            className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm lg:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Contact
          </button>
        </div>
        <div className=" md:hidden w-full h-px bg-white mb-10"></div> 
        <div className=" flex md:hidden justify-between w-full">
          <div className="flex flex-col justify-end space-y-5 items-start">
          <p className=" text-gray-200">Links</p>
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            All Services
          </button>

          <Link
            to="/services/vehicleservicing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer">
              Vehicle Servicing
            </button>
          </Link>
          <Link
            to="/services/mechanicalrepairs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer">
              Mechanical Repairs
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-end space-y-5 items-start">
          <Link
            to="/services/repairandpaint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer">
              Body Repair & Painting
            </button>
          </Link>

          <button
            onClick={() => scrollToSection("gallery")}
            className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm md:text-base text-white hover:text-green-500 font-bold cursor-pointer"
          >
            Contact
          </button>
        </div>
        </div>
      </div>
      <div className=" w-full h-px bg-white"></div>
      <div className=" w-full flex justify-center space-x-20 py-5">
        <FaTiktok
          size={20}
          className=" text-white hover:text-green-500 cursor-pointer"
        />
        <FaFacebookF
          size={20}
          className=" text-white hover:text-green-500 cursor-pointer"
        />
        <BiLogoInstagramAlt
          size={20}
          className=" text-white hover:text-green-500 cursor-pointer"
        />
      </div>
      <div className=" w-full h-px bg-white"></div>
      <p className=" text-center text-gray-200 pt-5">
        © 2026 Sancta Maria. All Rights Reserved. Designed & Developed by
        NeonSynth
      </p>
    </div>
  );
};

export default Footer;
