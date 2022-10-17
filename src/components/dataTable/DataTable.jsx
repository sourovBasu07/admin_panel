import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../dataTableSource";
import { Link } from "react-router-dom";

const DataTable = ({ title }) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-[15px]">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="px-[5px] py-[2px] rounded-[5px] text-blue-700 border-dotted border border-[rgba(0, 0, 139, 0.596)] cursor-pointer">
                View
              </div>
            </Link>
            <div
              className="px-[5px] py-[2px] rounded-[5px] text-pink-700 border-dotted border border-[rgba(220, 20, 60, 0.6)] cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[600px] p-5 dark:bg-[#202124]">
      <div className="w-full text-[24px] text-gray-500 mb-[10px] flex justify-between items-center">
        Add New {title}
        <Link
          to={`/${title.toLowerCase()}/new`}
          className="text-emerald-700 font-medium border border-solid border-emerald-700 px-[10px] py-[5px] no-underline rounded-[5px] cursor-pointer"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="dark:bg-[#202124] dark:text-white"
      />
    </div>
  );
};

export default DataTable;
