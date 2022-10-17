import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext.js";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className={`flex flex-col flex-1 min-h-screen`}>
      <div className="h-[50px] flex justify-center items-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="text-[20px] font-bold text-[#6439ff]">Admin</span>
        </Link>
      </div>
      <hr className="" />
      <div className="pl-[10px]">
        <ul className="m-0 p-0 list-none">
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="li">
              <DashboardIcon className="icons" />
              <span className="span">Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className="li">
              <PersonOutlineIcon className="icons" />
              <span className="span">Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li className="li">
              <StoreIcon className="icons" />
              <span className="span">Products</span>
            </li>
          </Link>
          <li className="li">
            <CreditCardIcon className="icons" />
            <span className="span">Orders</span>
          </li>
          <li className="li">
            <LocalShippingIcon className="icons" />
            <span className="span">Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li className="li">
            <InsertChartIcon className="icons" />
            <span className="span">Stats</span>
          </li>
          <li className="li">
            <NotificationsNoneIcon className="icons" />
            <span className="span">Notifications</span>
          </li>
          <p className="title">Service</p>
          <li className="li">
            <SettingsSystemDaydreamOutlinedIcon className="icons" />
            <span className="span">System Health</span>
          </li>
          <li className="li">
            <PsychologyOutlinedIcon className="icons" />
            <span className="span">Logs</span>
          </li>
          <li className="li">
            <SettingsApplicationsIcon className="icons" />
            <span className="span">Settings</span>
          </li>
          <p className="title">User</p>
          <li className="li">
            <AccountCircleOutlinedIcon className="icons" />
            <span className="span">Profile</span>
          </li>
          <li className="li">
            <ExitToAppIcon className="icons" />
            <span className="span">Logout</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center m-[10px]">
        <div
          className="w-[25px] h-[25px] rounded-[5px] m-[5px] cursor-pointer border-solid border border-[#7154f8] bg-white"
          onClick={() => dispatch({ type: "LIGHT" })}
        />
        <div
          className="w-[25px] h-[25px] rounded-[5px] m-[5px] cursor-pointer border-solid border border-[#7154f8] bg-zinc-900"
          onClick={() => dispatch({ type: "DARK" })}
        />
      </div>
    </div>
  );
};

export default Sidebar;
