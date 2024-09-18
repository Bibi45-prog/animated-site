import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        height: isScrolled ? "60px" : "100px",
        top: isScrolled ? "20px" : "0px", 
        borderRadius: isScrolled ? "15px" : "0px",
        boxShadow: isScrolled ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
        width: isScrolled ? "90%" : "100%", 
        maxWidth: isScrolled ? "900px" : "1200px", 
      }}
      className={`flex sticky bg-white transition-all duration-600 z-50 mx-auto`} 
    >
      <NavLink className="flex items-center w-max" to={"/"}>
        <motion.img
          src={isScrolled ? "/assets/img/logo_small.svg" : "/assets/img/logo.svg"}
          alt="logo"
          className="m-5"
          initial={{ width: "120px" }}
          animate={{ width: isScrolled ? "60px" : "120px", height: isScrolled ? "40px" : "auto" }}
        />
      </NavLink>

      <div className="flex items-center font-[300] text-[#414242] w-max text-[14px] m-auto h-full">
        {/* Menu Items */}
        {["Features", "Pricing", "Blog", "Changelog", "Careers", "Support"].map((item) => (
          <ul key={item}>
            <li>
              <NavLink
                to="/"
                className="m-[10px] hover:bg-[#f9f7f3] hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
              >
                {item}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>

      <div className="flex items-center font-[300] justify-end m-[10px]">
        <NavLink
          to="/login"
          className="text-[14px] hover:bg-[#f9f7f3] hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
        >
          Log in
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;
