import accounting from "accounting";
import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Payment() {
  const user = "http://localhost:8080/api/user/detail";
  const test = "http://localhost:8080/api/receptionist/invoice/details";
  const accessToken = localStorage.getItem("accessToken");
  const [detailInfo, setDetailInfo] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [idUser, setIdUser] = useState(jwt_decode(accessToken).aud);
  const [serviceData, setServiceData] = useState([]);
  const [statusInvoice, setStatusInvice] = useState("");
  const [formData, setFormData] = useState({ isDelete: 0 });
  const [serviceListId, setServiceListId] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

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
        setServiceData(resp.data.service);
      });
  }, []);

  useEffect(() => {
    if (serviceData.length > 0) {
      const updatedServiceListId = serviceData.map(
        (element) => element.serviceId
      );
      setServiceListId(updatedServiceListId);
    }
  }, [serviceData]);

  useEffect(() => {
    if (serviceListId.length > 0) {
      setFormData({
        userId: jwt_decode(accessToken).aud,
        isDelete: 0,
        serviceList: serviceListId,
        invoiceTime: getCurrentTime(),
        status: statusInvoice,
        total: detailInfo.total,
        bookingId: id,
      });
    }
  }, [serviceListId, statusInvoice]);

  useEffect(() => {
    axios
      .get(`${user}?id=${idUser}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((resp) => {
        setDataUser(resp.data);
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
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = "00";
    return `${hours}:${minutes}:${seconds}`;
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
        navigate("/payment/" + id, {});
      });
  };

  const handleSaveInvoice = (e) => {
    // e.preventDefault();
    setStatusInvice("1");
  };

  console.log(formData);

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
                  <table className="table table-borderless mb-0">
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
                  <hr className="mt-5 mb-5" />
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th scope="col" colSpan="2">
                          Sản Phẩm & Dịch Vụ
                        </th>
                        <th scope="col" colSpan="2">
                          Đơn giá
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceData?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.serviceName}</td>
                          <td>
                            {accounting.formatMoney(item.price, {
                              symbol: "",
                              format: "%v vnđ",
                              precision: 0,
                            })}
                          </td>
                          <td>
                            {/* <div className="text-center">
                              <div className="button rounded-0 primary-bg text-white boxed-btn">
                                Sửa
                              </div>
                            </div> */}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="4">
                          <div className="text-center">
                            <div
                              className="btn btn-secondary w-100"
                              onClick={() => handleEditBooking()}
                            >
                              Sửa dịch vụ +
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th colSpan="2">Thành Tiền</th>
                        <td colSpan="2">
                          {accounting.formatMoney(detailInfo.total, {
                            symbol: "",
                            format: "%v vnđ",
                            precision: 0,
                          })}
                        </td>
                      </tr>
                      <tr>
                        <th colSpan="2">Thanh Toán</th>
                        <td colSpan="1">
                          <div className="text-center">
                            <div className="button rounded-0 primary-bg text-white boxed-btn">
                              Tại quầy
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="text-center">
                            <div className="button rounded-0 primary-bg text-white boxed-btn">
                              VNPay
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-right mt-5">
                    <div
                      className="btn btn-secondary"
                      onClick={(e) => handleSaveInvoice()}
                    >
                      Lưu
                    </div>
                  </div>
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
