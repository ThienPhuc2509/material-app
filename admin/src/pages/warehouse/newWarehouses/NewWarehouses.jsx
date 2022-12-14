import React, { useState, useRef } from "react";
import "./newWarehouses.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const NewWareHouses = () => {
  const navigate = useNavigate();
  const name = useRef();
  const type = useRef();
  const [state, setState] = useState(true);
  const changeState = (event) => {
    setState(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newWarehouse = {
        name: name.current.value,
        type: type.current.value,
        state: state ? state : true,
      };

      await axios.post("/warehouses", newWarehouse);
      navigate("/warehouses");
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
          <h1>Thêm kho</h1>
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
                    Thông tin kho
                  </Typography>

                  <TextField
                    required
                    id="outlined-username"
                    label="Tên kho"
                    inputRef={name}
                  />

                  <TextField
                    required
                    id="outlined-type"
                    label="Mô tả"
                    inputRef={type}
                  />
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Tình trạng
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={state}
                      label="Tình trạng"
                      onChange={changeState}
                    >
                      <MenuItem value={true}>Đang hoạt động</MenuItem>
                      <MenuItem value={false}>Tạm ngưng</MenuItem>
                    </Select>
                  </FormControl>
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
};

export default NewWareHouses;
