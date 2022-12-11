import React, { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
export default function NewExport() {
  const [facetoriesId, setFacetoriesId] = useState(undefined);
  const [materialId, setMaterialId] = useState(undefined);
  const [material, setMaterial] = useState([]);
  const { data, loading, error } = useFetch("/factories");
  useEffect(() => {
    const getMaterial = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/rooms/");
        setMaterial(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getMaterial();
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Phiếu xuất vật liệu vào phân xưởng</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Chọn vật liệu</label>
                <select
                  id="materialId"
                  onChange={(e) => setMaterialId(e.target.value)}
                >
                  {material &&
                    material.map((hotel) => (
                      <option key={hotel._id} value={hotel._id}>
                        {hotel.name}
                      </option>
                    ))}
                </select>
                <div>Số lượng</div>
              </div>
              <div className="formInput">
                <label>Chọn phân xưởng</label>
                <select
                  id="facetoriesId"
                  onChange={(e) => setFacetoriesId(e.target.value)}
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
              {/* <button onClick={handleClick}>Send</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
