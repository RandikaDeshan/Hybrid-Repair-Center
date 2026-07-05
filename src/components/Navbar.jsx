import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full text-white flex justify-between items-center px-10 py-3 bg-black/30 backdrop-blur-xs fixed top-0 left-0">
      <p className=" text-3xl font-serif font-bold text-green-500">
        Sancta Maria
      </p>
      <div className=" flex space-x-15">
        <button
          onClick={() => scrollToSection("home")}
          className=" font-semibold hover:text-green-500 cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className=" font-semibold hover:text-green-500 cursor-pointer"
        >
          About
        </button>
        <div className=" relative group">
          <button
            onClick={() => scrollToSection("services")}
            className=" font-semibold hover:text-green-500 cursor-pointer"
          >
            Services
          </button>
          <div className=" absolute top-full left-0 mt-4 w-64 bg-black/50 backdrop-blur-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link
              to="/services/vehicleservicing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-t-lg"
            >
              <button className="w-full cursor-pointer text-left rounded-t-lg px-5 py-3 text-white hover:bg-green-500 hover:text-white transition">
                Vehicle Servicing
              </button>
            </Link>
            <Link
              to="/services/mechanicalrepairs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-t-lg"
            >
              <button className="w-full cursor-pointer text-left px-5 py-3 text-white hover:bg-green-500 hover:text-white transition">
                Mechanical Repairs
              </button>
            </Link>
            <Link
              to="/services/repairandpaint"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-t-lg"
            >
              <button className="w-full cursor-pointer text-left px-5 py-3 rounded-b-lg text-white hover:bg-green-500 hover:text-white transition">
                Body Repair & Painting
              </button>
            </Link>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("gallery")}
          className=" font-semibold hover:text-green-500 cursor-pointer"
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className=" font-semibold hover:text-green-500 cursor-pointer"
        >
          Contact
        </button>
      </div>
      <p className=" font-bold text-red-600 text-lg">+94 777 123 123</p>
    </div>
  );
};

export default Navbar;
