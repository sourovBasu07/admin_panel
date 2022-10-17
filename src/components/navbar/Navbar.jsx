import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="h-[50px] flex items-center dark:bg-[#202124] text-[14px] text-[#555]">
      <div className="w-full p-[20px] flex justify-between items-center">
        <div className="flex items-center p-[3px]">
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent placeholder:text-[12px]"
          />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center">
          <div className="item dark:text-white">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icons"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Avatar"
              className="w-[30px] h-[30px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
