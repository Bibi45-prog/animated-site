import React, { useState } from "react";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronRight,
  FiPlusSquare,
  FiMenu,
  FiMoreHorizontal,
} from "react-icons/fi";
import { BsCircleHalf } from "react-icons/bs";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

 
  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Toronto",
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: "#E16540",
      },
      {
        label: "Vancouver",
        data: [2, 3, 20, 5, 1, 4, 15],
        backgroundColor: "#95D1FF",
      },
      {
        label: "Montreal",
        data: [3, 10, 13, 15, 22, 30, 25],
        backgroundColor: "#9999FF",
      },
      {
        label: "Ottawa",
        data: [5, 15, 10, 7, 18, 22, 17],
        backgroundColor: "#FAC666",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
     
      <div className="bg-[#F7F3F0] rounded-3xl mx-20 py-4 px-4 sm:px-6 lg:px-20">
        <div className="flex justify-center">
          <motion.button
            className="flex justify-center items-center gap-2 my-3 shadow-md p-2 rounded-2xl bg-[#FBFAF9]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FiPlusSquare className="text-sm" />
            <label className="text-xs">Index 1.0 Public Beta</label>
            {isHovered ? (
              <FiChevronRight className="text-sm" />
            ) : (
              <FiArrowRight className="text-sm" />
            )}
          </motion.button>
        </div>

        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 text-black text-center">
          <span>Data to</span>
          <span className="text-[#E16540]"> insights </span>
          <p>in minutes</p>
        </div>
        <p className="text-center">Explore your data, build your dashboard,</p>
        <p className="text-center">bring your team together.</p>

        <div className="flex justify-center">
          <button className="w-[120px] h-[30px] bg-[#333533] drop-shadow-2xl text-white mt-5 rounded-lg text-xs sm:w-[130px] sm:h-[35px] sm:text-sm">
            Sign Up
          </button>
        </div>

        <div className="rounded-3xl p-3 overflow-hidden bg-[#FBFAF9] shadow-md mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center">
              <FiMenu className="my-2 text-xl sm:text-2xl" />
              <label className="text-sm mx-2">Supercart</label>
            </div>

            <div className="flex items-center mt-2 sm:mt-0">
              <FiMoreHorizontal className="text-xl sm:text-2xl" />
            </div>
          </div>

          <div className="relative mt-4 flex justify-center items-center">
            <motion.div
              className="absolute text-sm text-white bg-[#E16540] px-2 rounded-tl-xl rounded-br-xl"
              animate={{ x: [0, 350, 0], y: [0, -70, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              <span className="text-blue">Nick</span>
            </motion.div>

            <motion.div
              className="absolute text-sm text-black bg-[#95D1FF] px-2 rounded-tl-xl rounded-br-xl"
              animate={{ x: [0, -270, 0], y: [0, 70, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
            >
              <span className="text-white">Stuart</span>
            </motion.div>

            <motion.div
              className="absolute text-sm text-white bg-[#9999FF] px-2 rounded-tl-xl rounded-br-xl"
              animate={{ x: [0, 200, 0], y: [0, -100, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            >
              <span className="text-white-500">Oğuz</span>
            </motion.div>

            <motion.div
              className="absolute text-sm text-white bg-[#FAC666] px-2 rounded-tl-xl rounded-br-xl"
              animate={{ x: [0, -350, 0], y: [0, -50, 0] }}
              transition={{ duration: 18, repeat: Infinity }}
            >
              <span className="text-blue">Nick</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            <div>
              <img
                src="/assets/img/diagram1.png"
                alt="diagram1"
                className="rounded-2xl shadow-md h-[200px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src="/assets/img/diagram2.png"
                alt="diagram2"
                className="rounded-2xl shadow-md h-[200px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src="/assets/img/diagram3.png"
                alt="diagram3"
                className="rounded-2xl shadow-md h-[200px] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div>
              <img
                src="/assets/img/diagram4.png"
                alt="diagram4"
                className="rounded-2xl shadow-md h-[250px] w-full object-cover"
              />
            </div>
            <div>
              <img
                src="/assets/img/diagram5.png"
                alt="diagram5"
                className="rounded-2xl shadow-md h-[250px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

        <div className="bg-[#F7F3F0] rounded-3xl p-3 shadow-xl pt-40 mx-20 my-10 px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center">
            <button className="flex justify-center items-center gap-2 shadow-md p-2 rounded-3xl text-sm bg-[#FBFAF9]">
              <BsCircleHalf />
              Accessible for all
            </button>
          </div>

          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  text-black text-center">
            <p>Connect your data</p>
          </div>

          <p className="text-center">Index connects to a growing number of</p>
          <p className="text-center">databases and data warehouses.</p>

          <div className="flex justify-center mt-5">
            <button className="bg-[#37322F] text-white py-2 px-4 rounded-lg shadow-lg">
              Get started today
            </button>
          </div>

          <div className="flex justify-center mt-20 mb-10">
            <img
              src="/assets/img/logo_small.svg"
              alt="small-logo"
              className="w-[60px] h-[60px]"
            ></img>
          </div>
        </div>

        <div className="my-10 px-4 sm:px-6 lg:px-20">
          <p className="text-sm text-gray-600">
            Powering data insights for today's startups and tomorrow's leaders.
          </p>
          <img
            src="/assets/img/logos.png"
            alt="logos"
            className="mt-10"
          ></img>
        </div>


      
        <div className="bg-[#F7F3F0] rounded-3xl p-6 shadow-xl  mx-20 mt-10 px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center mb-5">
            <button className="flex justify-center items-center gap-2 shadow-md p-2 rounded-3xl text-sm bg-[#FBFAF9]">
              <BsCircleHalf />
              Accessible for all
            </button>
          </div>

          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 text-black text-center">
            <p>Query your data – your way</p>
          </div>

          <p className="text-center">
            Streamline your data analysis with our seamless SQL and visual
            editor. Give everyone in your team the superpowers they need.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#333533] text-white py-2 px-4 rounded-lg">
              SQL
            </button>
            <button className="bg-[#333533] text-white py-2 px-4 rounded-lg">
              Visual
            </button>
          </div>

          <div className="h-[300px] sm:h-[400px] mt-8">
            <Bar data={data} options={options} />
          </div>

          <div className="mt-5">
            <p className="text-center font-semibold">Number of orders by city</p>
          </div>

        
          <div className="bg-white p-4 mt-6 rounded-lg shadow-lg">
            <p className="font-semibold">Filter</p>
            <div className="flex items-center gap-3 mt-4">
              <p>Where</p>
              <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                <span className="text-sm">city</span>
              </div>
              <p>contains</p>
              <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                <span className="text-sm">Toronto +5</span>
              </div>
            </div>
          </div>
        </div>

<Footer />
       
      
        
      </div>



      
  );
};

export default Home;
