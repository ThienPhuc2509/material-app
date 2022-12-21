import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const DetailUser = () => {
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
            <h1 className="title">Thông tin người dùng</h1>
            <div className="item">
              <img
                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
