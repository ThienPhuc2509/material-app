import "./newMaterial.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import React, { useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";

const NewMaterial = () => {
  const [warehousesId, setWarehousesId] = useState(undefined);
  const { data, loading, error } = useFetch("/warehouses");
  const navigate = useNavigate();

  const name = useRef();
  const price = useRef();
  const unit = useRef();
  const desc = useRef();
  // const from = useRef();
  const quantity = useRef();
  
  const handleClick = async (e) => {
    e.preventDefault();
    const detailMaterial = {
      name: name.current.value,
      price: price.current.value,
      unit: unit.current.value,
      desc: desc.current.value,
      // fromprod: from.current.value,
      quantity: quantity.current.value,
    };

    console.log(detailMaterial);

    try {
      await axios.post(`/materials/${warehousesId}`, 
        detailMaterial,
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Thêm vật liệu</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
             
              <div className="formInput">
                <label>Thông tin vật liệu</label>
                <TextField
                  required
                  id="outlined-username"
                  label="Tên vật liệu"
                  inputRef={name}
                />
                <TextField
                  required
                  id="outlined-phone"
                  label="Giá tiền "
                  inputRef={price}
                />
                <TextField
                  required
                  id="outlined-address"
                  label="Đơn vị"
                  inputRef={unit}
                />

                <TextField
                  required
                  id="outlined-email"
                  label="Mô tả"
                  inputRef={desc}
                />

                {/* <TextField
                  required
                  id="outlined-efmail"
                  label="Nhà cung cấp"
                  inputRef={from}
                /> */}
                <TextField
                  required
                  id="outlined-eamail"
                  label="Số lượng"
                  inputRef={quantity}
                />
              </div>
              <div className="formInput">
                <label>Chọn kho</label>
                <select
                  id="warehousesId"
                  onChange={(e) => setWarehousesId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Xác nhận</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMaterial;
