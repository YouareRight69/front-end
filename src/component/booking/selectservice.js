import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Selectservice() {
  const selectedService = {
    border: "1px gray solid",
    borderRadius: "5px",
    display: "inline-block",
    whiteSpace: "break-word",
  };

  const [selectedArr, setSelectedArr] = useState([]);
  const [serviceData, setServiceData] = useState();
  console.log(selectedArr);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hairService/list")
      .then((res) => {
        setServiceData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(serviceData);

  const handleSelectButton = (item) => {
    // let filt = selectedArr.find((e) => e.serviceId == item.serviceId);
    // if (!filt) {
    //   setSelectedArr([...selectedArr, item]);
    // }
    // console.log(selectedArr.includes(item));
    if (selectedArr.includes(item)) {
      setSelectedArr(selectedArr.filter((e) => e.serviceId != item.serviceId));
    } else {
      setSelectedArr([...selectedArr, item]);
    }
  };

  console.log(selectedArr);
  return (
    <>
      <section className="service-area p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form action="#">
                <div className="input-group-icon mt-10">
                  <div>
                    <Link to="/booking">
                      <span
                        className="btn header-btn px-2"
                        style={{ width: "5%" }}
                      >
                        <i
                          className="fas fa-chevron-left"
                          style={{ color: "black" }}
                        ></i>
                      </span>
                    </Link>
                    <button
                      disabled
                      className="btn header-btn"
                      style={{ width: "95%" }}
                    >
                      <i className="fas fa-cut fa-rotate-270"></i> Chọn dịch vụ
                    </button>
                  </div>

                  {selectedArr.length !== 0 && (
                    <div className="m-3">
                      <b>Dịch vụ đã chọn</b>
                    </div>
                  )}
                  <div>
                    {selectedArr?.map((item, index) => (
                      <span className="p-2 m-3" style={selectedService}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                  <div className="m-3">
                    <h2>CẮT GỘI MASSAGE</h2>
                  </div>

                  <div className="row">
                    {serviceData &&
                      serviceData
                        ?.filter((ser) => ser.type == 1)
                        .map((item, index) => (
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 card-container"
                            key={index}
                          >
                            <div className="services-caption text-center mb-30">
                              <div className="service-icon">
                                <img
                                  className="flaticon-healthcare-and-medical"
                                  src={item.media[0]?.url}
                                  alt="lỗi"
                                  style={{ width: "280px" }}
                                ></img>
                              </div>
                              <div className="service-cap">
                                <div className="content">
                                  <h4>
                                    <a href="#">{item.name}</a>
                                  </h4>
                                  <p className="long-text">
                                    {item.description}
                                  </p>
                                </div>
                                {selectedArr.includes(item) ? (
                                  <div
                                    className="genric-btn primary-border button-cus"
                                    onClick={() => handleSelectButton(item)}
                                  >
                                    <i className="fas fa-check"></i> Đã Chọn
                                  </div>
                                ) : (
                                  <div
                                    className="genric-btn success-border button-cus"
                                    onClick={() => handleSelectButton(item)}
                                  >
                                    <i className="fas fa-cut fa-rotate-270"></i>{" "}
                                    Chọn
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                  <div className="m-3">
                    <h2>NHUỘM CAO CẤP</h2>
                  </div>

                  <div className="row">
                    {serviceData &&
                      serviceData
                        ?.filter((ser) => ser.type == 2)
                        .map((item, index) => (
                          <div
                            className="col-xl-4 col-lg-4 col-md-6 card-container"
                            key={index}
                          >
                            <div className="services-caption text-center mb-30">
                              <div className="service-icon">
                                <img
                                  className="flaticon-healthcare-and-medical"
                                  src={item.media[0]?.url}
                                  alt="lỗi"
                                  style={{ width: "280px" }}
                                ></img>
                              </div>
                              <div className="service-cap">
                                <div className="content">
                                  <h4>
                                    <a href="#">{item.name}</a>
                                  </h4>
                                  <p className="long-text">
                                    {item.description}
                                  </p>
                                </div>
                                {selectedArr.includes(item) ? (
                                  <div
                                    className="genric-btn primary-border "
                                    onClick={() => handleSelectButton(item)}
                                  >
                                    <i className="fas fa-check"></i> Đã Chọn
                                  </div>
                                ) : (
                                  <div
                                    className="genric-btn success-border "
                                    onClick={() => handleSelectButton(item)}
                                  >
                                    <i className="fas fa-cut fa-rotate-270"></i>{" "}
                                    Chọn
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                  <div>
                    <button className="btn header-btn w-100">
                      <i className="fas fa-cut fa-rotate-270"></i> OK
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
