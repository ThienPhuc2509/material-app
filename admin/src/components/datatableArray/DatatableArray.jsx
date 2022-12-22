import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
export default function DatatableArray({ columns }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);
  const pathList = data.filter((item) => item.isDelete === false);
  useEffect(() => {
    setList(pathList);
  }, [data]);
  function pathswitch({ path }) {
    switch (path) {
      case "factories":
        return <div>Phân xưởng</div>;
      case "imports":
        return <div>Nhập kho</div>;
      case "exports":
        return <div>Xuất kho</div>;
      default:
        return null;
    }
  }
  const handleDelete = async (id) => {
    const answer = window.confirm(`Bạn có chắc chắn muốn xóa`);
    if (answer) {
      try {
        await axios.put(`/${path}/delete/${id}`);
        setList(list.filter((item) => item._id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Thao tác",
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
        {pathswitch({ path })}
        <Link to={`/${path}/new`} className="link">
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "4px" }}>Thêm</div>
            {pathswitch({ path })}
          </div>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
