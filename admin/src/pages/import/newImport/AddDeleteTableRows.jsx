import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

export default function AddDeleteTableRows() {
  const { data, loading, error } = useFetch("/materials");
  const [material, setMaterial] = useState([]);
  const [materialId, setMaterialId] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [rowsData, setRowsData] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [supplierId, setSupplierId] = useState(undefined);
  useEffect(() => {
    setMaterial(data);
  }, [data, materialId]);

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const res = await axios.get("/suppliers");
        setSupplier(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getSupplier();
  }, [supplierId]);

  const addTableRows = () => {
    const rowsInput = {
      materialId: "",
      quantity: "",
      supplierId: "",
    };
    setRowsData([...rowsData, rowsInput]);
    localStorage.setItem(
      "iprmaterial",
      JSON.stringify([...rowsData, rowsInput])
    );
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
    localStorage.setItem("iprmaterial", JSON.stringify(rows));
  };
  const HandleMaterial = (index, event) => {
    const { name, value } = event.target;
    console.log(index, name, value);
    setMaterialId(value);
    material.forEach((i) => {
      if (i._id === value) setQuantity(i.quantity);
    });

    let rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    localStorage.setItem("iprmaterial", JSON.stringify(rowsData));
  };
  const handleSupplier = (index, event) => {
    const { name, value } = event.target;
    console.log(index, name, value);
    setSupplierId(value);
    let rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    localStorage.setItem("iprmaterial", JSON.stringify(rowsData));
  };
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    //console.log(index, name, value);
    let rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    //console.log(rowsInput);
    localStorage.setItem("iprmaterial", JSON.stringify(rowsData));
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
                <th>Nhà cung cấp</th>
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
                      <select
                        name="materialId"
                        onChange={(evnt) => HandleMaterial(index, evnt)}
                      >
                        <option value="">-Chọn vật liệu-</option>
                        {material &&
                          material.map((i) => (
                            <option key={i._id} value={i._id}>
                              {i.name}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        onChange={(evnt) => handleChange(index, evnt)}
                        name="quantity"
                        placeholder={`Số lượng hiện có: ${
                          quantity ? quantity : "..."
                        }`}
                        className="form-control"
                        min="0"
                      />
                    </td>
                    <td>
                      <select
                        name="supplierId"
                        onChange={(e) => handleSupplier(index, e)}
                      >
                        <option value="">-Chọn nhà cung cấp-</option>
                        {supplier &&
                          supplier.map((hotel) => (
                            <option key={hotel._id} value={hotel._id}>
                              {hotel.name}
                            </option>
                          ))}
                      </select>
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
      </div>
    </div>
  );
}
