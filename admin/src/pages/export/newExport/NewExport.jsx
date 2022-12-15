import React, { useState, useContext, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import AddDeleteTableRows from "./AddDeleteTableRows";
import { AuthContext } from "../../../context/AuthContext";
export default function NewExport() {
  const { user } = useContext(AuthContext);
  console.log(user._id);
  const [facetoriesId, setFacetoriesId] = useState(undefined);
  const [materialId, setMaterialId] = useState(undefined);
  const [material, setMaterial] = useState([]);
  const { data, loading, error } = useFetch("/factories");
  // const {selected, setSelected} = useState()

  const handleClick = async (e) => {
    e.preventDefault();
    const exportMaterial = {
      userId: user ? user._id : "",
      factoryId: facetoriesId ? facetoriesId : undefined,
      materials: localStorage.getItem("material")
        ? JSON.parse(localStorage.getItem("material"))
        : undefined,
    };
    console.log(exportMaterial);
    try {
      await axios.post(`/exports/`, exportMaterial);
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
          <h1>Phiếu xuất vật liệu vào phân xưởng</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <div className="formInput">
              <label>Chọn vật liệu</label>
              <AddDeleteTableRows materialId={materialId} />
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
            <button type="submit" onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
