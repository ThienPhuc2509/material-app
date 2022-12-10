import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableRoom from "../../components/datatableRoom/DatatableRoom";
const RoomList = ({ roomColumns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableRoom roomColumns={roomColumns} />
      </div>
    </div>
  );
};

export default RoomList;
