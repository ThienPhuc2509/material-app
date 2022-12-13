import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableRoom from "../../components/datatableRoom/DatatableRoom";
const ListWareHouse = ({ wareColumns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableRoom wareColumns={wareColumns} />
      </div>
    </div>
  );
};

export default ListWareHouse;
