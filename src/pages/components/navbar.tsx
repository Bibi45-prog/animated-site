import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "react-feather"; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{
        padding: "20px 40px",
        height: "100px",
        top: "0px",
        borderRadius: "0px",
        boxShadow: "none",
        width: "100%",
        maxWidth: "1200px",
      }}
      animate={{
        padding: isScrolled ? "10px 20px" : "20px 40px",
        height: isScrolled ? "50px" : "100px",
        top: isScrolled ? "20px" : "0px",
        borderRadius: isScrolled ? "15px" : "0px",
        boxShadow: isScrolled ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
        width: isScrolled ? "80%" : "100%",
        maxWidth: isScrolled ? "900px" : "1200px",
      }}
      className="flex sticky bg-white transition-all duration-600 z-50 mx-auto"
    >
      <NavLink className="flex items-center w-max" to={"/"}>
        <motion.img
          src={isScrolled ? "/assets/img/logo.svg" : "/assets/img/logo.svg"}
          alt="logo"
          className="m-5"
          initial={{ width: "120px", height: "auto" }}
          animate={{
            width: isScrolled ? "100px" : "100px",
            height: isScrolled ? "auto" : "auto",
          }}
        />
      </NavLink>

      {/* {isScrolled && (
        <div className="flex items-center border-l h-[25px] border-gray-300 my-2"></div>
      )} */}

      <div className="hidden md:flex items-center font-[300] text-[#414242] w-max text-[14px] m-auto h-full">
        {["Features", "Pricing", "Blog", "Changelog", "Careers", "Support"].map(
          (item) => (
            <ul key={item}>
              <li>
                <NavLink
                  to="/"
                  className="m-[10px] hover:bg-[#FBFAF9] hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
                >
                  {item}
                </NavLink>
              </li>
            </ul>
          )
        )}
      </div>

      <div className="hidden md:flex items-center font-[300] justify-end m-[10px]">
        <NavLink
          to="/login"
          className="text-[14px] hover:bg-[#FBFAF9] hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
        >
          Log in
        </NavLink>
      </div>

      
      <div className="flex md:hidden items-center ml-auto">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>


      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-5">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="mb-8 focus:outline-none"
          >
            <X />
          </button>
          <ul>
            {["Features", "Pricing", "Blog", "Changelog", "Careers", "Support"].map(
              (item) => (
                <li key={item} className="mb-4">
                  <NavLink
                    to="/"
                    className="block text-[14px] hover:bg-[#FBFAF9] hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div>
            <NavLink
              to="/login"
              className="block text-[14px] hover:bg-[#FBFAF9] hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
            >
              Log in
            </NavLink>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
