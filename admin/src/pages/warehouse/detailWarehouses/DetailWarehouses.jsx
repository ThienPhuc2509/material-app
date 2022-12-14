import React, { useState, useEffect } from "react";
// import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import useFetch from "../../../hooks/useFetch";
import Grid from "@mui/material/Grid";

import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const DetailWarehouses = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const idP = location.pathname.split("/")[2];
  const [material, setMaterial] = useState([]);
  useEffect(() => {
    const getMaterial = async () => {
      try {
        const res = await axios.get(`/warehouses/find/${idP}`);
        setMaterial(res.data);
      } catch (err) {}
    };
    getMaterial();
  }, [idP]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Chỉnh sửa</div>
            <h1 className="title">Thông tin kho</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Kho:</span>
                  <span className="itemValue">{material.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Loại:</span>
                  <span className="itemValue">{material.type}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Tình trạng:</span>
                  <span className="itemValue">
                    {material.state ? (
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
                  {material.materials?.map((i) => {
                    return (
                      <Grid container spacing={2}>
                        <Grid item xs={6} className="itemValue">
                          Tên sản phẩm: {i.name}
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
