import React, { useState } from "react";

export default function AddDeleteTableRows(props) {
  const { material, quantity, materialId } = props;

  const [rowsData, setRowsData] = useState([]);
  const checkId = materialId ? materialId : undefined;

  const addTableRows = () => {
    const rowsInput = {
      material: materialId,
      quantity: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  console.log(rowsData);
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
                      <input
                        type="text"
                        // onChange={(evnt) => handleChange(index, evnt)}
                        name="materialId"
                        className="form-control"
                        defaultValue={materialId || ""}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        ref={quantity}
                        onChange={(evnt) => handleChange(index, evnt)}
                        name="quantity"
                        className="form-control"
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
