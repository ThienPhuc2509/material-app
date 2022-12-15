import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Edit.scss";

export default function EditFactory({ title }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const setData = () => {
    setName(JSON.parse(localStorage.getItem("editFactory")).name);
    setPhone(JSON.parse(localStorage.getItem("editFactory")).phone);
  };
  useEffect(() => {
    if (localStorage.getItem("editFactory")) {
      setData();
    }
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    const factory = {
      name: name ? name : undefined,
      phone: phone ? phone : undefined,
    };

    try {
      const id = JSON.parse(localStorage.getItem("editFactory"))._id;
      await axios.put(`/factories/${id}`, factory);
      navigate("/factories");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="edit">
      <Sidebar />
      <div className="editContainer">
        <Navbar />
        <div className="top">
          <h1 style={{ color: "black" }}>{title}</h1>
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
              noValidate
            >
              <div>
                <div>
                  <Typography variant="p" component="h2">
                    Thông tin vật liệu
                  </Typography>

                  <TextField
                    id="outlined-username"
                    label="Tên vật liệu"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <TextField
                    id="outlined-phone"
                    label="Số điện thoại"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <Button variant="contained" color="success" type="submit">
                Đồng ý
              </Button>
              <Button variant="contained" onClick={setData}>
                Đặt lại
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
