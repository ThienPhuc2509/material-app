import React, { useState, useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./newImport.scss";
import AddDeleteTableRows from "./AddDeleteTableRows";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

export default function NewImport() {
  const { user } = useContext(AuthContext);
  // const [supplierId, setSupplierId] = useState(undefined);
  // const { data, loading, error } = useFetch("/suppliers");

  const handleClick = async (e) => {
    // if (supplierId === undefined) {
    //   alert("Vui lòng chọn nhà cung cấp");
    // }
    e.preventDefault();
    const importMaterial = {
      userId: user ? user._id : "",
      supplierId: localStorage.getItem("iprmaterial")
        ? JSON.parse(localStorage.getItem("iprmaterial"))
            .map((item) => item.supplierId)
            .join(" ")
        : undefined,
      materials: localStorage.getItem("iprmaterial")
        ? JSON.parse(localStorage.getItem("iprmaterial"))
        : undefined,
    };
    try {
      await axios.post(`/imports/`, importMaterial);
    } catch (err) {
      console.log(err);
    }
    console.log(
      JSON.parse(localStorage.getItem("iprmaterial"))
        .map((item) => item.supplierId)
        .join(" ")
    );
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
            <div>Mua vật liệu mới</div>
          </Link>
        </div>

        <div className="bottom">
          <AddDeleteTableRows />

          <div className="right">
            <form>
              {/* <div className="formInput">
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
 */}
              <button type="submit" onClick={handleClick}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
