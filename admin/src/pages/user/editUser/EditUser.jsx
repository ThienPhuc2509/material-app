import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./editUser.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChangePasswordDialog from "./ChangePasswordDialog.jsx";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function EditUser({ title }) {
  const [userName, setUsername] = useState("");
  const [country, setcountry] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfrpass, setCfrpass] = useState("");
  const [role, setRole] = useState(0);
  const [managerId, setManagerId] = useState("");
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const changeRole = (event) => {
    setRole(event.target.value);
  };
  const changeManagerId = (event) => {
    setManagerId(event.target.value);
  };
  useEffect(() => {
    const Warehouse = async () => {
      const dataWarehouse = await axios.get("/warehouses/");
      setX(dataWarehouse.data);
    };
    const Factory = async () => {
      const dataFactory = await axios.get("/factories/");
      setY(dataFactory.data);
    };
    Warehouse();
    Factory();
    console.log(role);
  }, [role]);
  const WarehouseList = () => {
    const w = x.map((i) => <MenuItem value={i._id}>{i.name}</MenuItem>);
    console.log(w);
    return w;
  };
  const FatoryList = () => {
    console.log(y);
    return y.map((i) => <MenuItem value={i._id}>{i.name}</MenuItem>);
  };

  const navigate = useNavigate();
  const setData = () => {
    setUsername(JSON.parse(localStorage.getItem("editUser")).username);
    setcountry(JSON.parse(localStorage.getItem("editUser")).country);
    setphone(JSON.parse(localStorage.getItem("editUser")).phone);
    setEmail(JSON.parse(localStorage.getItem("editUser")).email);
    setRole(JSON.parse(localStorage.getItem("editUser")).role);
    setX(JSON.parse(localStorage.getItem("editRole")));
    // setY(JSON.parse(localStorage.getItem("editUser")));
  };
  useEffect(() => {
    if (localStorage.getItem("editUser")) {
      setData();
    }
  }, []);
  const emailNu = JSON.parse(localStorage.getItem("editUser")).email;

  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== "") {
      window.alert(`Đã thay đổi mật khẩu cho nhân viên ${emailNu} `);
    }
    if (password !== cfrpass) {
      console.log("khoong trung mk");
    } else {
      const user = {
        username: userName ? userName : undefined,
        email: email ? email : undefined,
        password: password ? password : undefined,
        country: country ? country : undefined,
        phone: phone ? phone : undefined,
        role: role ? role : [],
      };

      try {
        const id = JSON.parse(localStorage.getItem("editUser"))._id;
        await axios.put(`/users/${id}`, user);
        navigate("/users");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                    Thông tin cá nhân người dùng
                  </Typography>

                  <TextField
                    id="outlined-username"
                    label="Tên người dùng "
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                  />
                  <TextField
                    id="outlined-phone"
                    label="Số điện thoại"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                  <TextField
                    id="outlined-country"
                    label="Địa chỉ"
                    variant="outlined"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                  />
                  <TextField
                    id="outlined-email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl sx={{ m: 1, width: "50ch" }}>
                    <InputLabel id="demo-simple-select-label">
                      Phân quyền
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Phân quyền"
                      onChange={changeRole}
                    >
                      <MenuItem value={1}>Nhân viên</MenuItem>
                      <MenuItem value={2}>Quản lý tất cả các kho</MenuItem>
                      <MenuItem value={3}>Chỉ định kho</MenuItem>
                      <MenuItem value={4}>Quản lý tất cả phân xưởng</MenuItem>
                      <MenuItem value={5}>Chỉ định phân xưởng </MenuItem>
                    </Select>
                  </FormControl>
                  {(role === 3 || role === 5) && (
                    <FormControl sx={{ m: 1, width: "50ch" }}>
                      <InputLabel id="demo-simple-select-label">
                        Phân quyền
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={managerId}
                        label="Phân quyền"
                        onChange={changeManagerId}
                      >
                        {role === 3 && WarehouseList()}
                        {role === 5 && FatoryList()}
                      </Select>
                    </FormControl>
                  )}
                </div>

                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "none" }}
                  color="error"
                >
                  Thay đổi mật khẩu cho người dùng
                </Button>
                <ChangePasswordDialog
                  open={open}
                  onClose={handleClose}
                  setPassword={setPassword}
                  setCfrpass={setCfrpass}
                />
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
