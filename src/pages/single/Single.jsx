import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import TableLists from "../../components/table/Table";

const Single = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`w-full flex ${darkMode ? "dark bg-darkBg" : ""}`}>
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex p-5 gap-[20px] dark:text-white">
          <div className="flex-1 boxShadow relative p-5">
            <div className="absolute top-0 right-0 p-[5px] text-[12px] text-[#7151f8] bg-[#7551f818] cursor-pointer rounded-l-[5px]">
              Edit
            </div>
            <h1 className="font-bold text-gray-500">Information</h1>
            <div className="flex items-center gap-[20px]">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="ItemImg"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="">
                <h1 className="mb-[10px]">John Doe</h1>
                <div className="text-[14px] mb-[10px]">
                  <span className="font-bold text-gray-500 mr-[5px]">
                    Email:
                  </span>
                  <span className="font-normal">johndow@gmail.com</span>
                </div>
                <div className="text-[14px] mb-[10px]">
                  <span className="font-bold text-gray-500 mr-[5px]">
                    Phone:
                  </span>
                  <span className="font-normal">+1 2345 6 789</span>
                </div>
                <div className="text-[14px] mb-[10px]">
                  <span className="font-bold text-gray-500 mr-[5px]">
                    Address:
                  </span>
                  <span className="font-normal">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="text-[14px] mb-[10px]">
                  <span className="font-bold text-gray-500 mr-[5px]">
                    Country:
                  </span>
                  <span className="font-normal">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[2]">
            <Chart aspect={3 / 1} title="User spending (Last 6 months)" />
          </div>
        </div>
        <div className="boxShadow p-5 mx-5 my-[10px]">
          <h1 className="text-[16px] text-gray-500 mb-5">Last Transactions</h1>
          <TableLists />
        </div>
      </div>
    </div>
  );
};

export default Single;
