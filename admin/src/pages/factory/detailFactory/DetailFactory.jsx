// import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import useFetch from "../../../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const DetailFactory = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const idP = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/${path}/find/${idP}`);
  localStorage.setItem("editFactory", JSON.stringify(data));

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to="/factories/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 className="title">Thông tin phân xưởng</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>

                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Vật liệu hiện có:</span>
                  <span className="itemValue"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFactory;
