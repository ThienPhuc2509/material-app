import "./newMaterial.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import React, { useState, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
    // if (warehousesId !== undefined) {
    //   alert("Vui lòng chọn kho");
    // }
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
      await axios.post(`/materials/${warehousesId}`, detailMaterial);
      navigate("/materials");
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
                    Thông tin vật liệu
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
                    label="Giá tiền"
                    inputRef={price}
                  />
                  <TextField
                    required
                    id="outlined-type"
                    label="Số lượng"
                    inputRef={quantity}
                  />
                  <TextField
                    required
                    id="outlined-type"
                    label="Đơn vị"
                    inputRef={unit}
                  />
                  <TextField
                    required
                    id="outlined-type"
                    label="Mô tả"
                    inputRef={desc}
                  />

                  <FormControl sx={{ m: 1, width: "50ch", mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">
                      Chọn kho
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={warehousesId}
                      label="Tình trạng"
                      onChange={(e) => setWarehousesId(e.target.value)}
                    >
                      <MenuItem value="">-Chọn kho-</MenuItem>
                      {data &&
                        data.map((item) => (
                          <MenuItem key={item._id} value={item._id}>
                            {item.name}
                          </MenuItem>
                        ))}
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

export default NewMaterial;
