import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full text-white flex justify-between items-center px-5 lg:px-10 py-3 bg-black/30 backdrop-blur-xs fixed top-0 left-0">
      <p className="text-lg md:text-xl lg:text-3xl font-serif font-bold text-green-500">
        Service Centre
      </p>
      <div className=" hidden md:flex md:space-x-8 lg:space-x-15">
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
      <p className=" hidden md:block font-bold text-red-600 lg:text-lg">
        +94 777 123 123
      </p>
      <div className=" md:hidden cursor-pointer" onClick={() => setOpen(true)}>
        <IoMdMenu color="white" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="absolute md:hidden z-50 left-0 top-0 bg-black/80 backdrop-blur-2xl w-full overflow-hidden"
          >
            <div
              className="flex justify-end p-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <MdClose color="white" size={20} />
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col items-center space-y-8 pb-10 text-white font-semibold text-xl"
            >
              <motion.button
                onClick={() => scrollToSection("home")}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                Home
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("about")}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                About
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("services")}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                All Services
              </motion.button>
               <Link
              to="/services/vehicleservicing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-t-lg"
            >
              <motion.button
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                Vehicle Servicing
              </motion.button>
            </Link>
            <Link
              to="/services/mechanicalrepairs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-t-lg"
            >
              <motion.button
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                Mechanical Repairs
              </motion.button>
            </Link>
            <Link
              to="/services/repairandpaint"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-t-lg"
            >
              <motion.button
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                Body Repair & Painting
              </motion.button>
            </Link>
              <motion.button
                onClick={() => scrollToSection("gallery")}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                Gallery
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="hover:text-green-500 cursor-pointer hover:underline"
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
