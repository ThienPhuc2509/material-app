import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useState, useRef } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/hotels");
  // info là tên vật liệu
  console.log(info);
  // roomNumber là thông tin vật liệu

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
      await axios.post(`/rooms/${hotelId}`, {
        ...info,
        roomNumbers,
      });
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
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
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
                <label>Chọn kho</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
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
};

export default NewRoom;
