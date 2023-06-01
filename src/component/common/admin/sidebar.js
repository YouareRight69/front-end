import React from "react";
import Header from "../../../controller/register/common/Header";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const toCustomer = () => {
    navigate("/user");
  };
  const toEmployee = () => {
    navigate("/employee");
  };
  const toService = () => {
    navigate("/listService");
  };
  const toBranch = () => {
    navigate("/branch");
  };
  const toChart = () => {
    navigate("/chart");
  };
  const toInvoice = () => {
    navigate("/invoice-history");
  };
  return (
    <div>
      <nav
        className="nav flex-column"
        style={{
          color: "white",
          backgroundColor: "black",
          height: "100%",
          alignItems: "baseline",
        }}
      >
        <a onClick={toCustomer} className="nav-link m-3 text-center">
          Quản lý khách hàng
        </a>
        <a onClick={toEmployee} className="nav-link m-3 text-center">
          Quản lý nhân viên
        </a>
        <a onClick={toService} className="nav-link m-3 text-center">
          Quản lý dịch vụ
        </a>
        <a onClick={toBranch} className="nav-link m-3 text-center">
          Quản lý chi nhánh
        </a>
        <a onClick={toChart} className="nav-link m-3 text-center">
          Quản lý thông kê
        </a>
        <a onClick={toInvoice} className="nav-link m-3 text-center">
          Quản lý thanh toán
        </a>
        <a className="nav-link m-3 text-center">Quản lý đặt lịch </a>
      </nav>
    </div>
  );
}

export default Sidebar;
