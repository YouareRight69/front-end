import { React, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Booking() {
  //useState
  const [data, setData] = useState();
  const [selectBranch, setSelectBranch] = useState("");
  const [dataStyle, setDataStyle] = useState();
  const [dataSkinner, setDataSkinner] = useState();
  const [workingTimeData, setWorkingTimeData] = useState();
  const [selectStyle, setSelectStyle] = useState();
  const [selectSkinner, setSelectSkinner] = useState();
  const [selectTime, setSelectTime] = useState();
  const [selectDay, setSelectDay] = useState();
  const [busyTime, setBusyTime] = useState();
  const [selectservice, setSelectservice] = useState([]);
  const [formData, setFormData] = useState({ isDelete: 0 });
  const [serviceList, setServiceList] = useState([]);
  const [minDate, setMinDate] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  //useEffect
  useEffect(() => {
    if (location.state != null && location.state.formData != null) {
      setFormData({ ...location.state.formData, serviceList: serviceList });
      setSelectStyle(location.state.formData.styleId);
      setSelectDay(location.state.formData.bookingDate);
      setSelectTime(location.state.formData.workTimeId);
    }
    setSelectBranch(formData.branch);
  }, [status]);
  console.log(selectTime);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/emp/booking/list-branch")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (formData.branch != "") {
      console.log(formData.branch);
      axios
        .get(
          "http://localhost:8080/api/emp/booking/list-employee-of-branch?branchId=" +
            formData.branch
        )
        .then((res) => {
          console.log(res);
          setDataStyle(res.data.filter((item) => item.employee.type === "1"));
          setDataSkinner(res.data.filter((item) => item.employee.type === "2"));
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Lỗi khi gửi yêu cầu:", error);
        });
      axios
        .get("http://localhost:8080/api/emp/booking/working-time")
        .then((res) => {
          setWorkingTimeData(res.data);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Lỗi khi gửi yêu cầu:", error);
        });
    }
    setBusyTime([]);
  }, [selectBranch]);

  useEffect(() => {
    if (selectStyle != null && selectDay != null) {
      axios
        .get(
          "http://localhost:8080/api/emp/booking/busy-list?employeeId=" +
            selectStyle +
            "&day=" +
            selectDay
        )
        .then((res) => {
          setBusyTime(res.data);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Lỗi khi gửi yêu cầu:", error);
        });
    }
    setSelectTime();
  }, [selectDay, selectStyle]);

  useEffect(() => {
    if (location.state != null && location.state.selectService != null) {
      setSelectservice(location.state.selectService);
      location.state.selectService.forEach((element) => {
        setServiceList((prev) => [...prev, element.serviceId]);
      });
      location.state.selectService = [];
    }
    setMinDate(getCurrentDate());
    setStatus("OK");
  }, []);

  //console log
  console.log("formdata", formData);

  //const
  const styleImg = {
    border: "4px solid #d19f68",
    borderRadius: "100px",
    height: "100px",
    width: "100px",
  };
  const styleImgUnselect = {
    borderRadius: "50px",
    height: "100px",
    width: "100px",
  };
  const selectedService = {
    border: "1px gray solid",
    borderRadius: "5px",
    display: "inline-block",
    whiteSpace: "break-word",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  //function
  const handleClickTime = (time) => {
    // setSelectTime(time);
    if (
      selectTime === time.workingTimeId ||
      busyTime.includes(time.timeZone.substring(0, 5))
    ) {
      setSelectTime(null);
    } else {
      setSelectTime(time.workingTimeId);
    }

    setFormData({ ...formData, workTimeId: time.workingTimeId });
  };

  const handleButtonClick = (style) => {
    setSelectStyle(style.employee.employeeId);
    setFormData({ ...formData, styleId: style.employee.employeeId });
  };

  const handleSelectBranch = (e) => {
    setSelectBranch(e.value);

    setFormData({
      userId: "USR102",
      isDelete: 0,
      serviceList: serviceList,
      branch: e.value,
    });
  };

  const handleSelectDay = (e) => {
    setSelectDay(e);
    setFormData({ ...formData, bookingDate: e });
  };
  const handleSelectSkinner = (e) => {
    setSelectSkinner(e);
    setFormData({ ...formData, skinnerId: e });
  };

  const handleSelectServiceButton = () => {
    navigate("/select-service", {
      state: { selectService: selectservice, formData: formData },
    });
  };

  const handleInputNote = (e) => {
    setFormData({ ...formData, note: e });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!("note" in formData)) {
      setFormData({ ...formData, note: null });
    }
    if (
      formData.isDelete == 0 &&
      formData.serviceList.length > 0 &&
      formData.branch != "" &&
      formData.userId != "" &&
      (formData.bookingDate != "") & (formData.workTimeId != "") &&
      formData.styleId != "" &&
      formData.skinnerId != ""
    ) {
      axios
        .post("http://localhost:8080/api/emp/booking/create", formData, {
          header: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods":
              "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          },
        })
        .then((data) => {
          console.log(data.data);
          toast.success("Đặt lịch hẹn thành công!", {
            position: "top-center",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate("/", {
            state: null,
          });
        })
        .catch((error) => {
          console.error("NOOOO");
        });
    }
  };

  return (
    <>
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70 text-center">
                  <h2>ĐẶT LỊCH HẸN</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="service-area p-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <form action="#">
                  <div className="input-group-icon mt-10">
                    <h1>Chọn chi nhánh</h1>

                    <div>
                      <select
                        className="form-select"
                        id="default-select"
                        onChange={(event) => {
                          handleSelectBranch(event.target);
                        }}
                      >
                        <option value="">Vui lòng chọn</option>
                        {data?.map((branch, index) =>
                          branch.branchId == formData.branch ? (
                            <option
                              key={index}
                              value={branch.branchId}
                              selected={true}
                            >
                              {branch.name}
                            </option>
                          ) : (
                            <option key={index} value={branch.branchId}>
                              {branch.name}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="input-group-icon mt-10">
                    <h1>Chọn dịch vụ</h1>
                    <div>
                      <button
                        type="button"
                        onClick={handleSelectServiceButton}
                        className="btn header-btn"
                        style={{ width: "100%" }}
                      >
                        <i className="fas fa-cut fa-rotate-270"></i> Chọn dịch
                        vụ
                      </button>
                    </div>

                    <div className="m-3">Dịch vụ đã chọn</div>
                    <div>
                      {selectservice?.map((item, index) => (
                        <span
                          key={index}
                          className="p-2 m-3"
                          style={selectedService}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {"branch" in formData && formData.branch != "" && (
                    <div className="mt-10">
                      <h1>Chọn ngày, giờ & stylist</h1>
                      <div className="container">
                        <h2>Chọn stylist</h2>
                        <div>
                          {console.log(dataStyle)}
                          {dataStyle && (
                            <Carousel
                              responsive={responsive}
                              infinite={true}
                              arrows={true}
                            >
                              {dataStyle?.map((style, index) => (
                                <>
                                  <img
                                    key={index}
                                    src={style.avatar}
                                    onClick={() => {
                                      handleButtonClick(style);
                                    }}
                                    alt="không hiển thị được ảnh"
                                    style={
                                      selectStyle === style.employee.employeeId
                                        ? styleImg
                                        : styleImgUnselect
                                    }
                                  />
                                  <h6 key={index + 1}>{style.fullName}</h6>
                                </>
                              ))}
                            </Carousel>
                          )}
                        </div>
                        <h2>Chọn ngày</h2>
                        <input
                          min={minDate}
                          type="date"
                          defaultValue={selectDay}
                          required
                          className="single-input"
                          onChange={(event) => {
                            handleSelectDay(event.target.value);
                          }}
                        />
                        <h2>Chọn giờ</h2>
                        <div className="d-flex justify-content-center row m-0">
                          {workingTimeData?.map((time, index) => {
                            const isBusy = busyTime.includes(
                              time.timeZone.substring(0, 5)
                            );
                            const isSelected = selectTime === time.workingTimeId;
                           
                            const buttonStyle = {
                              border: "1px solid",
                              borderRadius: "5px",
                              backgroundColor: isSelected
                                ? "#d19f68"
                                : isBusy
                                ? "#888888"
                                : null,
                            };

                            return (
                              <button
                                key={index}
                                type="button"
                                className={`genric-btn col-2 time-select ${
                                  isSelected ? "" : "success-border"
                                }`}
                                style={buttonStyle}
                                onClick={() => handleClickTime(time)}
                                disabled={isBusy}
                              >
                                {time.timeZone}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {"branch" in formData && formData.branch != "" && (
                    <div className="input-group-icon mt-10">
                      <h1>Chọn skinner</h1>

                      <div id="default-select">
                        <select
                          className="form-select"
                          onChange={(event) => {
                            handleSelectSkinner(event.target.value);
                          }}
                        >
                          <option value=""> Vui lòng chọn skinner</option>
                          {selectBranch != "" &&
                            dataSkinner?.map((skinner, index) => (
                              <option
                                key={index}
                                value={skinner.employee.employeeId}
                              >
                                {skinner.fullName}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  )}
                  <div className="mt-10">
                    <h1>Ghi chú</h1>
                    <textarea
                      onChange={(event) => handleInputNote(event.target.value)}
                      className="single-textarea"
                      placeholder="Ghi chú"
                    ></textarea>
                  </div>
                  <div className="input-group-icon mt-10">
                    <div>
                      <button
                        onClick={(event) => handleSubmitForm(event)}
                        className="btn header-btn"
                        style={{ width: "100%" }}
                      >
                        <i className="fas fa-check"></i>Hoàn tất
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
