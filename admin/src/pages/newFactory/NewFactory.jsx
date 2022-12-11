import React, { useState, useRef } from "react";
import "./newFactory.scss";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NewFactory() {
  const name = useRef();
  const phone = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const factories = {
      name: name.current.value,

      phone: phone.current.value,
    };

    console.log(factories);

    try {
      await axios.post(`/factories/`, factories);
      navigate("/factories");
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
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              autoComplete="off"
              onSubmit={handleClick}
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin cá nhân
                  </Typography>

                  <TextField
                    required
                    id="outlined-username"
                    label="Tên nhà cung cấp"
                    inputRef={name}
                  />
                  <TextField
                    required
                    id="outlined-phone"
                    label="Số điện thoại"
                    inputRef={phone}
                  />
                </div>
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>
              <Button variant="contained">Đặt lại</Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
