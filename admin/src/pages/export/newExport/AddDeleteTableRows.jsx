import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
export default function AddDeleteTableRows() {
  const { data, loading, error } = useFetch("/factories");
  const [material, setMaterial] = useState([]);
  const [materialId, setMaterialId] = useState({});
  const [quantity, setQuantity] = useState({});
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    const getMaterial = async () => {
      try {
        const res = await axios.get("/materials");
        setMaterial(res.data);
      } catch (err) {}
    };
    getMaterial();
    console.log(material);
  }, []);
  const addTableRows = () => {
    const rowsInput = {
      materialId: "",
      quantity: "",
    };
    setRowsData([...rowsData, rowsInput]);
    localStorage.setItem("material", JSON.stringify([...rowsData, rowsInput]));
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    localStorage.setItem("material", JSON.stringify(rows));
  };

  const HandleMaterial = (e) => {
    setMaterialId(e.target.value);
    material.forEach((i) => {
      if (i._id === e.target.value) setQuantity(i.quantity);
    });
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    let rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    localStorage.setItem("material", JSON.stringify(rowsData));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
                <th>Vật liệu</th>
                <th>Số lượng</th>
                <th>
                  <button
                    className="btn btn-outline-success"
                    onClick={addTableRows}
                  >
                    +
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {rowsData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <select onChange={HandleMaterial}>
                        {material &&
                          material.map((i) => (
                            <option key={i._id} value={i._id}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                      {/* <input
                        type="text"
                        // onChange={(evnt) => handleChange(index, evnt)}
                        name="materialId"
                        className="form-control"
                      /> */}
                    </td>
                    <td>
                      <input
                        type="number"
                        onChange={(evnt) => handleChange(index, evnt)}
                        name="quantity"
                        className="form-control"
                        required
                        placeholder={`Số lượng ${quantity}`}
                        max={quantity ? quantity : "0"}
                        min="0"
                      />
                    </td>

                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteTableRows(index)}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
