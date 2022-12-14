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
export default function EditMaterial({ title }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [desc, setDesc] = useState("");
  // const from = useState();
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();
  const setData = () => {
    setUnit(JSON.parse(localStorage.getItem("editMaterial")).unit);
    setDesc(JSON.parse(localStorage.getItem("editMaterial")).desc);
    setName(JSON.parse(localStorage.getItem("editMaterial")).name);
    setPrice(JSON.parse(localStorage.getItem("editMaterial")).price);
    setQuantity(JSON.parse(localStorage.getItem("editMaterial")).quantity);
  };
  useEffect(() => {
    if (localStorage.getItem("editMaterial")) {
      setData();
    }
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();

    const material = {
      name: name ? name : undefined,
      price: price ? price : undefined,
      unit: unit ? unit : undefined,
      desc: desc ? desc : undefined,
      quantity: quantity ? quantity : undefined,
    };

    try {
      const id = JSON.parse(localStorage.getItem("editMaterial"))._id;
      await axios.put(`/materials/${id}`, material);
      navigate("/materials");
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
                    label="Giá tiền"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <TextField
                    id="outlined-address"
                    label="Số lượng"
                    variant="outlined"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <TextField
                    id="outlined-email"
                    label="Đơn vị"
                    variant="outlined"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                  <TextField
                    id="outlined-email"
                    label="Đơn vị"
                    variant="outlined"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
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
