import React, { useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./newImport.scss";

export default function NewImport() {
  const [supplierId, setSupplierId] = useState(undefined);
  const { data, loading, error } = useFetch("/suppliers");
  const title = useRef();
  const price = useRef();
  const unit = useRef();
  const desc = useRef();
  const from = useRef();
  const quantity = useRef();
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = {
      title: title.current.value,
      price: price.current.value,
      unit: unit.current.value,
      desc: desc.current.value,
      from: from.current.value,
      quantity: quantity.current.value,
    };

    console.log(roomNumbers);

    try {
      await axios.post(`/rooms/${supplierId}`, roomNumbers);
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
                  label="Tên khách hàng"
                  inputRef={title}
                />
                <TextField
                  required
                  id="outlined-phone"
                  label="Số điện thoại"
                  inputRef={price}
                />
                <TextField
                  required
                  id="outlined-address"
                  label="Địa chỉ"
                  inputRef={unit}
                />

                <TextField
                  required
                  id="outlined-email"
                  label="Email"
                  inputRef={desc}
                />

                <TextField
                  required
                  id="outlined-efmail"
                  label="Email"
                  inputRef={from}
                />
                <TextField
                  required
                  id="outlined-eamail"
                  label="Email"
                  inputRef={quantity}
                />
              </div>
              <div className="formInput">
                <label>Chọn nhà cung cấp</label>
                <select
                  id="supplierId"
                  onChange={(e) => setSupplierId(e.target.value)}
                >
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
