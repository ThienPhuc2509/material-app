import React, { useState, useEffect } from "react";
// import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import useFetch from "../../../hooks/useFetch";
import Grid from "@mui/material/Grid";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const DetailWarehouses = () => {
  const { data, loading, error } = useFetch("/materials");
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const idP = location.pathname.split("/")[2];
  const [wareHouse, setWareHouse] = useState([]);
  const [material, setMaterial] = useState([]);
  useEffect(() => {
    const getMaterial = async () => {
      try {
        const res = await axios.get(`/warehouses/find/${idP}`);
        setMaterial(data.filter((i) => i.warehousesId === idP));
        res.data.materials = material;
        setWareHouse(res.data);
        console.log((res.data.materials = material));
        localStorage.setItem("editWarehouse", JSON.stringify(res.data));
      } catch (err) {}
    };
    getMaterial();
  }, [material]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              {" "}
              <Link to="/warehouses/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 className="title">Thông tin kho</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Kho:</span>
                  <span className="itemValue">{wareHouse.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Loại:</span>
                  <span className="itemValue">{wareHouse.type}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Tình trạng:</span>
                  <span className="itemValue">
                    {wareHouse.state ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        Đang hoạt động
                      </span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        Tạm ngưng
                      </span>
                    )}
                  </span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Các loại vật liệu:</span>
                  {wareHouse.materials?.map((i) => {
                    return (
                      <Grid container spacing={2}>
                        <Grid item xs={6} className="itemValue">
                          {i.name}
                        </Grid>
                        <Grid item xs={6} className="itemValue">
                          Số lượng: {i.quantity}
                        </Grid>
                      </Grid>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailWarehouses;
