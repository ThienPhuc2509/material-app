import React, { useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./newImport.scss";
import AddDeleteTableRows from "./AddDeleteTableRows";
import { Link } from "react-router-dom";
export default function NewImport() {
  const [supplierId, setSupplierId] = useState(undefined);
  const { data, loading, error } = useFetch("/suppliers");
  const material = useRef();
  const quantity = useRef();

  const handleClick = async (e) => {
    if (supplierId !== "") {
      alert("Vui lòng chọn nhà cung cấp");
    }
    e.preventDefault();
    const importMaterial = {
      material: material.current.value,
      quantity: quantity.current.value,
    };

    console.log(importMaterial);

    try {
      await axios.post(`/imports/${supplierId}`, importMaterial);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div
          className="top"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h1>Nhập hàng vào kho</h1>
          <Link to={`/materials/new`} className="link">
            <div>Thêm vật liệu</div>
          </Link>
        </div>

        <div className="bottom">
          <AddDeleteTableRows material={material} quantity={quantity} />

          <div className="right">
            <form>
              <div className="formInput">
                <label>Chọn nhà cung cấp</label>
                <select
                  id="supplierId"
                  onChange={(e) => setSupplierId(e.target.value)}
                >
                  <option value="">-Chọn nhà cung cấp-</option>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
              </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
