import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Sidebar = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Vật liệu may </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Trang chủ</span>
          </li>
          <p className="title">Danh mục</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Nhân viên</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Kho</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Vật liệu</span>
            </li>
          </Link>
          <Link to="/factories" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Phân xưởng</span>
            </li>
          </Link>
          <Link to="/suppliers" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Nhà cung cấp</span>
            </li>
          </Link>

          <Link to="/export" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Nhập kho</span>
            </li>
          </Link>

          <Link to="/import" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Xuất kho</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ sơ nhân viên</span>
          </li>

          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogOut}>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
