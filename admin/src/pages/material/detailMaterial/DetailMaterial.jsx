import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import useFetch from "../../../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const DetailMaterial = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const idP = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/${path}/find/${idP}`);
  console.log(data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Chỉnh sửa</div>
            <h1 className="title">Thông tin vật liệu</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Giá tiền:</span>
                  <span className="itemValue">{data.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Đơn vị:</span>
                  <span className="itemValue">{data.unit}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Mô tả:</span>
                  <span className="itemValue">{data.desc}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Số lượng:</span>
                  <span className="itemValue">{data.quantity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMaterial;
