import { makeStyles } from "@mui/styles";
import accounting from "accounting";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";

const useStyles = makeStyles({
  imgServiceLeft: {
    height: "40px",
    width: "40px",
    backgroundImage: "url(assets/img/thien/1.jpg)",
  },
  imgServiceRight: {
    height: "40px",
    width: "40px",
    backgroundImage: "url(assets/img/thien/1.jpg)",
  },
  autoWrap: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
});

function Payment() {
  const [list, setList] = useState({ data: { content: [] } });
  const booking = "http://localhost:8080/api/receptionist/invoice/booking";
  const test = "http://localhost:8080/api/booking-management/details";
  const user = "http://localhost:8080/api/user/detail";
  const service = "http://localhost:8080/api/hairService/list";
  const accessToken = localStorage.getItem("accessToken");
  const [detailInfo, setDetailInfo] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [idUser, setIdUser] = useState(jwt_decode(accessToken).aud);
  const [listService, setListService] = useState([]);
  const [dataService, setDataService] = useState([]);
  const [dataBooking, setDataBooking] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [formData, setFormData] = useState({ isDelete: 0 });

  const [dataBookingById, setDataBookingById] = useState();
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${test}?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((resp) => {
        setDetailInfo(resp.data);
        setListService(resp.data.service);
        setSelectedServices(resp.data.service);
      });
  }, []);

  useEffect(() => {
    if (detailInfo.id !== undefined) {
      axios
        .get(`${booking}/${detailInfo.id}`, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods":
              "PUT, POST, GET, DELETE, PATCH, OPTIONS",
            Authorization: "Bearer " + accessToken,
          },
        })
        .then((resp) => {
          setDataBookingById(resp.data);
        });
    }
  }, [detailInfo]);

  console.log("dataBookingById", dataBookingById);

  useEffect(() => {
    axios
      .get(`${user}?id=${idUser}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
        },
      })
      .then((resp) => {
        setDataUser(resp.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${service}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
        },
      })
      .then((resp) => {
        setDataService(resp.data);
      });
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = "00";
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleServiceClick = (item) => {
    setSelectedServices((prevSelectedServices) => [
      ...prevSelectedServices,
      item,
    ]);
  };

  const handleEditBooking = () => {
    axios
      .get(
        "http://localhost:8080/api/emp/booking/get-booking?bookingId=" + id,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods":
              "PUT, POST, GET, DELETE, PATCH, OPTIONS",
            Authorization: "Bearer " + accessToken,
          },
        }
      )
      .then((res) => {
        navigate("/booking/" + id, {
          state: { selectService: res.data.serviceList, formData: res.data },
        });
      });
  };

  // console.log(selectedServices);

  const classes = useStyles();
  return (
    <div>
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Thanh Toán</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Start Align Area */}
        <div className="whole-wrap">
          <div className="container box_1170">
            <div className="blog_right_sidebar">
              <aside
                className="single_sidebar_widget search_widget col-lg-12"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                }}
              >
                <div
                  className="col-auto"
                  style={{ fontWeight: "500", fontSize: "25px" }}
                >
                  Đơn hàng: # {detailInfo?.id}
                </div>
                <div className="col-auto">
                  <a
                    type="button"
                    className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                  >
                    Trở về
                  </a>
                </div>
              </aside>
            </div>

            <div className="section-top-border">
              <div className="row autoWrap">
                <div className="col-12" style={{ order: "1" }}>
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="8"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{detailInfo.name}</td>
                        <td>
                          <div>
                            <i className="fas fa-edit"></i>
                          </div>
                        </td>
                        <td>Đặt lịch từ:</td>
                        <td>Web</td>
                      </tr>
                      <tr>
                        <td>{dataUser.phoneNumber}</td>
                        <td></td>
                        <td>Ngày hóa đơn:</td>
                        <td>{getCurrentDate()}</td>
                      </tr>
                      <tr>
                        <td>id: {dataUser.userId}</td>
                        <td></td>
                        <td>Giờ vào / ra:</td>
                        <td>
                          {detailInfo.time} - {getCurrentTime()}
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Nhân viên thu ngân:</td>
                        <td>{dataUser.fullName}</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr className="mt-2 mb-2" />
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="4">
                          Sản Phẩm & Dịch Vụ
                        </th>
                        <th scope="col" colSpan="3">
                          Đơn giá
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listService?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td colSpan="2">{item.serviceName}</td>
                          <td colSpan="2">
                            {accounting.formatMoney(item.price, {
                              symbol: "",
                              format: "%v vnđ",
                              precision: 0,
                            })}
                          </td>
                          <td>
                            <a
                              href="#"
                              className="genric-btn warning border"
                              style={{ marginRight: "5px" }}
                            >
                              Sửa
                            </a>
                          </td>
                          <td>
                            <a
                              href="#"
                              className="genric-btn danger border"
                              style={{ marginLeft: "5px" }}
                            >
                              Xóa
                            </a>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="7">
                          <div className="text-center">
                            <div className="btn btn-secondary"
                            onClick={() =>
                              handleEditBooking()
                            }
                            >
                            Sửa dịch vụ +
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan="4">Thành Tiền</th>
                        <td colSpan="2">
                          {accounting.formatMoney(detailInfo.total, {
                            symbol: "",
                            format: "%v vnđ",
                            precision: 0,
                          })}
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colSpan="4">Thanh Toán</th>
                        <td></td>
                        <td colSpan="1">
                          <div
                            className="genric-btn warning border"
                            style={{ padding: "0px 16px 0px 16px" }}
                          >
                            Tại quầy
                          </div>
                        </td>
                        <td>
                          <div
                            className="genric-btn primary border"
                            style={{ padding: "0px 16px 0px 16px" }}
                          >
                            Zalo Pay
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Align Area */}
      </main>
    </div>
  );
}

export default Payment;
