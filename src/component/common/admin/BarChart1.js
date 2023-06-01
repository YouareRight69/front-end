import axios from "axios";

import { faCoffee, faUser, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import jwt_decode from "jwt-decode";
import Header from "../../../controller/register/common/Header";
import Sidebar from "./sidebar";
import {
    Link,
    Navigate,
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
ChartJS.register(...registerables);

export default function BarChart1() {
  const accessToken = localStorage.getItem("accessToken");
  const [chart, setChart] = useState([]);
  const [user, setUser] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    const role = jwt_decode(accessToken);
    if (role.roles != "[ROLE_ADMIN]") {
      navigate("/main");

    }else {
        loadChart();
        loadUser();
        loadTotal();
        loadLimit();
    }
   
  }, []);

  const loadChart = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/admin/chart/chart",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    setChart(result.data);
  };

  const loadUser = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/admin/chart/totalUser",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    setUser(result.data[0].totalUser);
    console.log(result.data);
  };

  const loadTotal = async () => {
    await axios
      .get("http://localhost:8080/api/admin/chart/total", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        console.log(res.data)
        setTotal(res.data);
      });
  };
  console.log(total)
  const loadLimit = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/admin/chart/limmit",
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    setLimit(result.data);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getThongKe = () => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],

      datasets: [
        {
          label: "User Gained",
          data: chart.map((data) => data.quantity),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d10",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
  };
  return (
    <div className="">
      <Header />
      <div class="slider-area2">
                    <div class="slider-height2 d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="hero-cap hero-cap2 pt-70 text-center">
                                    <h2>QUẢN LÝ THỐNG KÊ</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      <div className="row">
        <div className="col-2 ">
          {/* <Sidebar /> */}
          <nav
            className="nav flex-column"
            style={{
              color: "white",
              backgroundColor: "black",
              height: "100%",
              alignItems: "baseline",
            }}
          >
            <a className="nav-link m-3 text-center">Quản lý khách hàng</a>
            <a className="nav-link m-3 text-center"> Quản lý nhân viên</a>
            <a className="nav-link m-3 text-center">Quản lý dịch vụ</a>
            <a className="nav-link m-3 text-center">Quản lý chi nhánh</a>
            <a className="nav-link m-3 text-center">Quản lý thông kê</a>
            <a className="nav-link m-3 text-center">Quản lý thanh toán</a>
            <a className="nav-link m-3 text-center">Quản lý dặt lịch </a>
          </nav>
        </div>
        <div className="col-10 pt-5">
          <div>
            <div className="row">
              <div class="col">
                <p class="form-label">Loại thời gian</p>
                <select class="form-select">
                  <option value="">Báo cáo theo tuần</option>
                  <option value="">Báo cáo theo tháng</option>
                  <option value="">Báo cáo theo năm</option>
                </select>
              </div>
              <div class="col">
                <p class="form-label">Chi nhánh</p>
                <select class="form-select">
                  <option value="">Chi nhánh Hòa Khánh</option>
                  <option value="">Chi nhánh Thanh Khê</option>
                  <option value="">Chi nhánh Sơn Trà</option>
                </select>
              </div>
              <div class="col">
                <p class="form-label">Loại biểu đồ</p>
                <select
                  class="form-select"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="1">Biểu đồ đường</option>
                  <option value="2">Biểu đồ cột</option>
                </select>
              </div>
            </div>

            <div className="row pt-5">
              <div class="col d-flex justify-content-between">
                <p class="form-label">Ngày bắt đầu</p>
                <input type="date" style={{ width: "54%" }} />
              </div>
              <div class="col d-flex justify-content-between">
                <p class="form-label">Ngày kết thúc</p>
                <input type="date" style={{ width: "54%" }} />
              </div>
              <div class="col ">
                <div class="position-relative ">
                  <div class="position-absolute top-50 start-50 translate-middle d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      style={{ height: "45px" }}
                    >
                      Phân Tích
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex pt-5">
            <div className="col-4">
              <div>
                <div
                  className="info-box shadow-lg primary"
                  style={{
                    borderRadius: "10px",
                    padding: "20px",
                    width: "250px",
                  }}
                >
                  <div className="" style={{ display: "flex" }}>
                    <div className="info-box-content">
                      <h4 className="info-box-text">TỔNG KHÁCH HÀNG</h4>
                      <div>
                        {" "}
                        <h1>{user} người </h1>
                      </div>
                    </div>

                    <div
                      className="info-box-icon "
                      style={{
                        marginLeft: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "orange",
                        borderRadius: "50%",
                        width: "60px",
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} size="xl" />
                    </div>
                  </div>
                  <div className="progress " style={{ marginTop: "20px" }}>
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      role="progressbar"
                      style={{ width: `${user}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="1000"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div
                  className="info-box shadow-lg primary"
                  style={{
                    borderRadius: "10px",
                    padding: "20px",
                    width: "250px",
                    height: "127.98px",
                  }}
                >
                  <div className="" style={{ display: "flex" }}>
                    <div className="info-box-content">
                      <h4 className="info-box-text">DOANH THU</h4>
                      <div>
                        {" "}
                        <h1> ${total} </h1>
                      </div>
                    </div>
                    <div
                      className="info-box-icon "
                      style={{
                        marginLeft: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#6366f1",
                        borderRadius: "50%",
                        width: "60px",
                      }}
                    >
                      <FontAwesomeIcon icon={faDollar} size="xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div
                  className="info-box shadow-lg primary"
                  style={{
                    borderRadius: "10px",
                    padding: "20px",
                    width: "250px",
                    height: "127.98px",
                  }}
                >
                  <div className="" style={{ display: "flex" }}>
                    <div className="info-box-content">
                      <h4 className="info-box-text"></h4>
                      <div>
                        {" "}
                        <h1> ${total} </h1>
                      </div>
                    </div>
                    <div
                      className="info-box-icon "
                      style={{
                        marginLeft: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#11b981",
                        borderRadius: "50%",
                        width: "60px",
                      }}
                    >
                      <FontAwesomeIcon icon={faDollar} size="xl" />
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <div>
                      <h4 style={{ display: "inline", color: "red" }}>
                        &#9660; 16%{" "}
                      </h4>
                      <span style={{ display: "inline" }}>
                        KỂ TỪ THÁNG TRƯỚC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='col-3'>
                            <div>
                                <div className="info-box shadow-lg primary" style={{ borderRadius: "10px", padding: '20px', width: '250px', height: '127.98px' }} >
                                    <div className='' style={{ display: 'flex' }}>
                                        <div className="info-box-content">
                                            <h4 className="info-box-text">TOTAL PROFIT</h4>
                                            <div> <h1> ${total} </h1></div>
                                        </div>
                                        <div className="info-box-icon " style={{ marginLeft: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#6366f1', borderRadius: '50%', width: '60px' }} >
                                            <FontAwesomeIcon icon={faDollar} size="xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>

          <div className="pt-5">
            <div className="d-flex">
              <div className="col-6 Regular shadow p-5">
                <Pie data={getThongKe()} />
              </div>
              <div className="col-5 shadow">
                <div>
                  {selectedOption === "1" && <Line data={getThongKe()} />}
                  {selectedOption === "2" && <Bar data={getThongKe()} />}

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ho Tên</th>
                        <th scope="col">SĐT</th>
                        <th scope="col">Số tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {limit.map((staff, index) => (
                        <tr>
                          <th scope="row" key={index}>
                            {staff.user_id}
                          </th>

                          <td>{staff.full_name}</td>
                          <td>{staff.phone_number}</td>
                          <td>{staff.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
