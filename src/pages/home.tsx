import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-[#f9f7f3] mx-20 rounded-3xl p-5 ">
        <button className="my-5 shadow-md p-2 rounded-3xl">
          Index 1.0 Public Beta
        </button>
        <div className="text-4xl mb-5 sm:text-5xl md:text-6xl text-black">
          <span>Data to</span>
          <span className="text-[#E16540]"> insights </span>
          <p>in minutes</p>
        </div>
        <p>Explore your data, build your dashboard,</p>
        <p> bring your team together.</p>

        <button className="w-[130px] h-[30px] bg-[#333533] drop-shadow-2xl text-white mt-5 rounded-lg ">
          Sign Up
        </button>
      </div>

      <div className="bg-[#f9f7f3] mx-20 rounded-3xl p-5 my-10 overflow-hidden ">
        <div className="flex justify-center items-center ">
          <motion.div
            className="absolute text-l text-white bg-[#E16540] px-2 rounded-tl-xl rounded-br-xl"
            animate={{ x: [0, 350, 0], y: [0, -70, 0] }} 
            transition={{ duration: 20, repeat: Infinity }}
          >
            <span className="text-blue">Nick</span>
          </motion.div>

          <motion.div
            className="absolute text-l  text-black bg-[#95D1FF] px-2 rounded-tl-xl rounded-br-xl"
            animate={{ x: [0, -270, 0], y: [0, 70, 0] }} 
            transition={{ duration: 15, repeat: Infinity }}
          >
            <span className="text-white">Stuart</span>
          </motion.div>

          <motion.div
            className="absolute text-l text-white bg-[#9999FF] px-2 rounded-tl-xl rounded-br-xl"
            animate={{ x: [0, 200, 0], y: [0, -100, 0] }} 
            transition={{ duration: 12, repeat: Infinity }}
          >
            <span className="text-white-500">Oğuz</span>
          </motion.div>

          <motion.div
            className="absolute text-l text-white bg-[#FAC666] px-2 rounded-tl-xl rounded-br-xl"
            animate={{ x: [0, -350, 0], y: [0, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          >
            <span className="text-blue">Nick</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <img
              src="/assets/img/diagram1.png"
              alt="diagram1"
              className="rounded-2xl shadow-md h-[280px] w-[383px]"
            ></img>
          </div>
          <div>
            <img
              src="/assets/img/diagram2.png"
              alt="diagram2"
              className="rounded-2xl shadow-md h-[280px] w-[383px]"
            ></img>
          </div>
          <div>
            <img
              src="/assets/img/diagram3.png"
              alt="diagram3"
              className="rounded-2xl shadow-md h-[280px] w-[383px]"
            ></img>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div>
            <img
              src="/assets/img/diagram4.png"
              alt="diagram4"
              className="rounded-2xl shadow-md h-[336px] w-[600px]"
            ></img>
          </div>
          <div>
            <img
              src="/assets/img/diagram5.png"
              alt="diagram5"
              className="rounded-2xl shadow-md h-[336px] w-[686px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
