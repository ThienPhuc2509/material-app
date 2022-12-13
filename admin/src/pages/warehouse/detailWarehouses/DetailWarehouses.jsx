import React, { useState, useEffect } from "react";
import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import useFetch from "../../../hooks/useFetch";

import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const DetailWarehouses = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const idP = location.pathname.split("/")[2];
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(`/warehouses/find/` + idP);
        setOrder(res.data);
      } catch (err) {}
    };
    getOrder();
  }, [idP]);

  const GetMaterial = () => {
    const x = order.materials.map((i) => {
      return (
        <ul>
          <li className="itemValue">Tên sản phẩm: {i.name}</li>
          <li className="itemValue">Số lượng: {i.quantity}</li>
        </ul>
      );
    });
    return x;
  };
  return (
    <div className="single">
      <Sidebar />
      {order && (
        <>
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
                      <span className="itemValue">{order.name}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Loại:</span>
                      <span className="itemValue">{order.type}</span>
                    </div>

                    <div className="detailItem">
                      <span className="itemKey">Tình trạng:</span>
                      <span className="itemValue">
                        {order.state ? (
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
                      {GetMaterial()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailWarehouses;
