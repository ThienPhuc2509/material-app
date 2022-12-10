import React, { useState, useRef } from "react";
import "./newSupplier.scss";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";

export default function NewSupplier() {
  const { data, loading, error } = useFetch("/suppliers");
  const name = useRef();
  const email = useRef();
  const address = useRef();
  const phone = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const suppliers = {
      name: name.current.value,
      email: email.current.value,
      address: address.current.value,
      phone: phone.current.value,
    };

    console.log(suppliers);

    try {
      await axios.post(`/suppliers/`, suppliers);
      navigate("/suppliers");
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
          <label>Thông tin vật liệu</label>
          <TextField
            required
            id="outlined-username"
            label="Tên khách hàng"
            inputRef={name}
          />
          <TextField
            required
            id="outlined-phone"
            label="Số điện thoại"
            inputRef={email}
          />
          <TextField
            required
            id="outlined-address"
            label="Địa chỉ"
            inputRef={address}
          />

          <TextField
            required
            id="outlined-email"
            label="Email"
            inputRef={phone}
          />
        </div>
      </div>
    </div>
  );
}
