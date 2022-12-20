import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { materialColumns } from "./../../datatablesource";
export default function DatatableMaterial() {
  const location = useLocation();
  // const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  //   const [warehousesId, setWarehousesId] = useState(undefined);
  const { data, loading, error } = useFetch(`/materials`);
  const [supplier, setSupplier] = useState([]);
  // console.log(data.map((item) => item.supplierId));

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const res = await axios.get(`/suppliers`);
        const filterSupplierId = res.data.map((item) => item._id);
        setSupplier(
          data.filter((item) => item.supplierId === filterSupplierId)
        );
        res.data.supplierId = supplier;
        setList(data);
      } catch (e) {}
    };
    getSupplier();
  }, [supplier]);

  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.delete(`/${path}/${warehousesId}/${id}`);
  //       setList(list.filter((item) => item._id !== id));
  //     } catch (err) {}
  //   };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/materials/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Chi tiết</div>
            </Link>
            <div
              className="deleteButton"
              //   onClick={() => handleDelete(params.row._id)}
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
        {/* {path === "materials" ? "Vật liệu" : ""} */}
        <Link to={`/materials/import/new`} className="link">
          Nhập vật liệu
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        // rowHeight={200}
        rows={list}
        columns={materialColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
