import React from "react";
import ContactBgImg from "../assets/contactbg.webp";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaClock, FaPhone } from "react-icons/fa";

const Contact_Section = () => {
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
            className=' text-2xl text-center md:text-4xl text-white font-bold font-["Poppins"]'
          >
            CONTACT US
          </p>
        </div>
        <img
          src={ContactBgImg}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=' text-3xl text-center md:text-5xl font-["Poppins"] font-bold pt-20 py-10'
      >
        Get in Touch With Our Team
      </p>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className=' font-semibold text-center text-green-600 font-["Inter"] mb-20'
      >
        We're here to assist you with vehicle servicing, repairs, hybrid
        diagnostics, and body painting. Contact us today.
      </p>
      <div className=" w-full h-300 md:h-150 flex flex-col md:flex-row justify-between mb-20">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center">
          <div className="space-y-12">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" flex space-x-10 items-center"
            >
              <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <MdLocationOn size={25} color="white" />
              </div>
              <div>
                <p className=" text-2xl font-bold pb-3">Address</p>
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
              className=" flex space-x-10 items-center"
            >
              <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <FaPhone size={20} color="white" />
              </div>
              <div>
                <p className=" text-2xl font-bold pb-3">Phone</p>
                <p>+94 777 123 123</p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" flex space-x-10 items-center"
            >
              <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <MdEmail size={20} color="white" />
              </div>
              <div>
                <p className=" text-2xl font-bold pb-3">Email</p>
                <p>info@servicecentre.lk</p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className=" flex space-x-10 items-center"
            >
              <div className=" w-10 h-10 bg-green-600 rounded-full flex justify-center items-center">
                <FaClock size={20} color="white" />
              </div>
              <div>
                <p className=" text-2xl font-bold pb-3">Working Hours</p>
                <p>Monday - Friday</p>
                <p>8:00 AM – 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="w-full md:w-1/2 h-1/2 md:h-full bg-green-200 rounded-2xl border border-green-500"
        >
          <form action="" className=" p-10 space-y-10">
            <div>
              <p className=" pb-5 text-lg font-semibold">Full Name</p>
              <input
                type="text"
                placeholder="John Wick"
                className=" bg-white w-full px-3 py-2 outline-none focus:border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <p className=" pb-5 text-lg font-semibold">Email</p>
              <input
                type="email"
                placeholder="johnwick@gmail.com"
                className=" bg-white w-full px-3 py-2 outline-none focus:border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <p className=" pb-5 text-lg font-semibold">Message</p>
              <textarea
                name=""
                id=""
                placeholder="your message..."
                rows={5}
                className=" bg-white w-full px-3 py-2 outline-none focus:border border-green-500 rounded-lg"
              ></textarea>
            </div>
            <div className=" w-full flex justify-end">
              <button className=" px-8 py-2 bg-white rounded-2xl border border-green-600 text-green-600 font-bold hover:border-none hover:bg-green-600 hover:text-white cursor-pointer">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" w-full h-100 overflow-hidden mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.57771449886843!2d79.83084585869302!3d7.396214274225366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c159b988c69d%3A0x52def2585eaa4e3e!2sSoisarama%20Rd%2C%20Marawila!5e0!3m2!1sen!2slk!4v1784274896126!5m2!1sen!2slk"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sancta Maria Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact_Section;
