import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/dataTable/DataTable";

const ListsData = ({ title }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`w-full flex ${darkMode ? "dark bg-[#202124]" : ""}`}>
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <DataTable title={title} />
      </div>
    </div>
  );
};

export default ListsData;
