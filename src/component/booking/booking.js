import { React, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function Booking() {
  //useState
  const [data, setData] = useState();
  const [selectBranch, setSelectBranch] = useState("");
  const [dataStyle, setDataStyle] = useState();
  const [dataSkinner, setDataSkinner] = useState();
  const [workingTimeData, setWorkingTimeData] = useState();
  const [selectStyle, setSelectStyle] = useState();
  const [selectTime, setSelectTime] = useState();
  const [selectDay, setSelectDay] = useState();
  const [busyTime , setBusyTime ] = useState();

  //useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/emp/booking/list-branch")
      .then((res) => {
        setData(res.data);
      });

    if (selectBranch !== "") {
      axios
        .get(
          "http://localhost:8080/api/emp/booking/list-employee-of-branch?branchId=" +
            selectBranch
        )
        .then((res) => {
          setDataStyle(res.data.filter((item) => item.employee.type === "1"));
          setDataSkinner(res.data.filter((item) => item.employee.type === "2"));
        });
      axios
        .get("http://localhost:8080/api/emp/booking/working-time")
        .then((res) => {
          setWorkingTimeData(res.data);
        });
    }
    setBusyTime([]);
  }, [selectBranch]);

  useEffect(() => {
    if (selectStyle != null && selectDay != null) {
      axios
        .get(
          "http://localhost:8080/api/emp/booking/busy-list?employeeId=" +
            selectStyle.employee.employeeId +
            "&day=" +
            selectDay
        )
        .then((res) => {
          setBusyTime(res.data);
        });
    }
  }, [selectDay,selectStyle]);
  //console log
  // console.log(workingTimeData);
  // console.log(selectStyle.employee.employeeId);
  console.log(busyTime);

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

  //function
  const handleClickTime = (timeZone) => {
    // setSelectTime(time);
    if (selectTime === timeZone) {
      setSelectTime(null);
    } else {
      setSelectTime(timeZone);
    }
  };

  const handleButtonClick = (style) => {
    setSelectStyle(style);
  };

  const handleSelectBranch = (e) => {
    setSelectBranch(e.value);
  };

  const handleSelectDay = (e) => {
    setSelectDay(e);
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
                        {data?.map((branch, index) => (
                          <option key={index} value={branch.branchId}>
                            {branch.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="input-group-icon mt-10">
                    <h1>Chọn dịch vụ</h1>
                    <div>
                      <a
                        href="./hairservice.html"
                        className="btn header-btn"
                        style={{ width: "100%" }}
                      >
                        <i className="fas fa-cut fa-rotate-270"></i> Chọn dịch
                        vụ
                      </a>
                    </div>

                    <div className="m-3">Dịch vụ đã chọn</div>
                    <span
                      className="p-2 m-3"
                      style={{ border: "1px gray solid", borderRadius: "5px" }}
                    >
                      Combo cắt tóc 10 bước
                    </span>

                    <span
                      className="p-2 m-3"
                      style={{ border: "1px gray solid", borderRadius: "5px" }}
                    >
                      Massage mặt
                    </span>
                  </div>

                  {selectBranch !== "" && (
                    <div className="mt-10">
                      <h1>Chọn ngày, giờ & stylist</h1>
                      <div className="container">
                        <h2>Chọn stylist</h2>
                        <div>
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
                                      selectStyle === style
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
                          type="date"
                          name="address"
                          placeholder="Address"
                          required
                          className="single-input"
                          onChange={(event) => {
                            handleSelectDay(event.target.value);
                          }}
                        />
                        <h2>Chọn giờ</h2>
                        <div className="d-flex justify-content-center row m-0">
                          {workingTimeData?.map((time, index) => {
                            const isBusy = busyTime.includes(time.timeZone.substring(0,5));
                            const isSelected = selectTime === time.timeZone;
                            const buttonStyle = {
                              border: "1px solid",
                              borderRadius: "5px",
                              backgroundColor: isSelected ? "#d19f68" : (isBusy ? "#888888" : null) ,
                             
                            };

                            return (
                              <button
                                key={index}
                                type="button"
                                className={`genric-btn col-2 time-select ${
                                  isSelected ? "" : "success-border"
                                }`}
                                style={buttonStyle}
                                onClick={() => handleClickTime(time.timeZone)}
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

                  {selectBranch !== "" && (
                    <div className="input-group-icon mt-10">
                      <h1>Chọn skinner</h1>

                      <div id="default-select">
                        <select className="form-select">
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
                      className="single-textarea"
                      placeholder="Ghi chú"
                      required
                    ></textarea>
                  </div>
                  <div className="input-group-icon mt-10">
                    <div>
                      <a
                        href="./hairservice.html"
                        className="btn header-btn"
                        style={{ width: "100%" }}
                      >
                        <i className="fas fa-check"></i>Hoàn tất
                      </a>
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
