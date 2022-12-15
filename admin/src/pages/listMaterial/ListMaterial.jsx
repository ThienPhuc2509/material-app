import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableMaterial from "../../components/datatableMaterial/DatatableMaterial";
export default function ListMaterial({ materialColumns }) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableMaterial materialColumns={materialColumns} />
      </div>
    </div>
  );
}
