import React, { useState, useContext, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import AddDeleteTableRows from "./AddDeleteTableRows";
export default function NewExport() {
  const [facetoriesId, setFacetoriesId] = useState(undefined);
  const [materialId, setMaterialId] = useState(undefined);
  const [material, setMaterial] = useState([]);
  const { data, loading, error } = useFetch("/factories");
  // const {selected, setSelected} = useState()
  useEffect(() => {
    const getMaterial = async () => {
      try {
        const res = await axios.get("/materials");
        setMaterial(res.data);
      } catch (err) {}
    };
    getMaterial();
  }, []);
  console.log(material);

  const handleClick = async (e) => {
    e.preventDefault();
    const exportMaterial = {};
    try {
      await axios.post(
        `/imports/${materialId}/${facetoriesId}`,
        exportMaterial
      );
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
              <h1>{materialId}</h1>
              <select onChange={(e) => setMaterialId(e.target.value)}>
                {material &&
                  material.map((i) => (
                    <option key={i._id} value={i._id}>
                      {i.name}
                    </option>
                  ))}
              </select>

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
            {/* <button onClick={handleClick}>Send</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
