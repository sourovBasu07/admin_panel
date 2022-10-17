import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="flex-[2] p-[10px] boxShadow dark:text-white">
      <div className="flex justify-between items-center text-gray-500">
        <h1 className="text-[16px] font-medium">Total revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="flex flex-col justify-center items-center p-5 gap-[15px]">
        <div className="w-[100px] h-[100px]">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="font-medium text-gray-500">Total sales made today</p>
        <p className="text-[30px]">$500</p>
        <p className="font-normal text-[12px] text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          vitae.
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="text-center">
            <div className="text-[14px] text-gray-500">Target</div>
            <div className="flex items-centermt-[10px] text-[14px]">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="">$10k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[14px] text-gray-500">Last Week</div>
            <div className="flex items-centermt-[10px] text-[14px]">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="">$10k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-[14px] text-gray-500">Last Month</div>
            <div className="flex items-centermt-[10px] text-[14px]">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="">$10k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
