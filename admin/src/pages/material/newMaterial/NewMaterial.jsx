import "./newMaterial.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import React, { useState, useRef, useEffect } from "react";
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
  const [supplier, setSupplier] = useState([]);
  const [supplierId, setSupplierId] = useState([]);
  const { data, loading, error } = useFetch("/warehouses");
  data.filter((item) => item.isDelete === true);
  const navigate = useNavigate();

  const name = useRef();
  const price = useRef();
  const unit = useRef();
  const desc = useRef();
  // const from = useRef();
  const quantity = useRef();
  useEffect(() => {
    const getSupplier = async () => {
      try {
        const getData = await axios.get("/suppliers");
        setSupplier(getData.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSupplier();
  }, []);
  const handleClick = async (e) => {
    if (warehousesId === undefined) {
      alert("Vui lòng chọn kho");
    }
    e.preventDefault();
    const detailMaterial = {
      name: name.current.value,
      price: price.current.value,
      unit: unit.current.value,
      desc: desc.current.value,
      // fromprod: from.current.value,
      supplierId: supplierId ? supplierId : "",
      warehousesId: warehousesId ? warehousesId : "",
    };

    console.log(detailMaterial);

    try {
      await axios.post(`/materials`, detailMaterial);

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
                    label="Tên vật liệu"
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
                    label="Đơn vị"
                    inputRef={unit}
                  />
                  <TextField
                    required
                    id="outlined-type"
                    label="Mô tả"
                    inputRef={desc}
                  />

                  <FormControl sx={{ m: 1, width: "50ch" }}>
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
                      {data &&
                        data.map((item) => (
                          <MenuItem key={item._id} value={item._id}>
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Chọn Nhà cung cấp
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={supplierId}
                      label="Tình trạng"
                      onChange={(e) => setSupplierId(e.target.value)}
                    >
                      {supplier &&
                        supplier.map((item) => (
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
