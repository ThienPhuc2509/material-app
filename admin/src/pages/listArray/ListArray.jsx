import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableArray from "../../components/datatableArray/DatatableArray";
export default function ListArray({ columns }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableArray columns={columns} />
      </div>
    </div>
  );
}
