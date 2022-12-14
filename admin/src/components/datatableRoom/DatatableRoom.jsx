import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
export default function DatatableRoom({ wareColumns }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log(path);
  const [list, setList] = useState([]);
  const [warehousesId, setWarehousesId] = useState(undefined);

  const { data, loading, error } = useFetch(`/${path}`);
  useEffect(() => {
    setList(data);
  }, [data]);
  console.log(list);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${warehousesId}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/${path}/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Chi tiết</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path === "warehouses" ? "Kho" : ""}
        <Link to={`/${path}/new`} className="link">
          Thêm kho
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rowHeight={200}
        rows={list}
        columns={wareColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
