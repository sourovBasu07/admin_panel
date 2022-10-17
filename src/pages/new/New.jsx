import React, { useState, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DarkModeContext } from "../../context/darkModeContext";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ title, inputs }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [file, setFile] = useState("");
  return (
    <div className={`w-full flex ${darkMode ? "dark bg-[#202124]" : ""}`}>
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="flex boxShadow p-[10px] m-5 dark:bg-white">
          <h1 className="text-gray-500 text-[20px] dark:text-slate-900">
            {title}
          </h1>
        </div>
        <div className="flex boxShadow p-[10px] m-5 dark:text-white">
          <div className="flex-1 text-center">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="Image"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
          </div>
          <div className="flex-[2]">
            <form className="flex justify-around flex-wrap gap-[30px]">
              <div className="w-[40%]">
                <label htmlFor="file" className="flex items-center gap-[10px]">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="w-[40%]" key={input.id}>
                  <label className="flex items-center gap-[10px] dark:text-white">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full p-[5px] border-none border-b-solid border-b border-b-gray-500"
                  />
                </div>
              ))}
              <button className="w-[150px] mt-[10px] p-[10px] border-none bg-teal-500 text-white font-bold cursor-pointer">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
