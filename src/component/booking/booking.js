import {React,useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import axios from "axios";

export default function Booking() {
    const [selectStyle, setSelectStyle] = useState(null);
  const styleImg = {
    background: 'blue',
    color:'white'
  }
  const styleImgUnselect = {
    background: 'gray',
    color:'black'
  }
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
const workTime = ["08:00","08:00","08:00"]

  const stylist = [
    "stylist1",
    "stylist2",
    "stylist3",
    "stylist4",
    "stylist5",
    "stylist6",
    "stylist7",
  ];
  const handleButtonClick = (style) => {
  
    setSelectStyle(style);
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
                      <select className="form-select" id="default-select">
                        <option value=" 1">Vui lòng chọn</option>
                        <option value="1">Thanh khê</option>
                        <option value="1">Hải Châu</option>
                        <option value="1">Liên Chiểu</option>
                        <option value="1">Sơn Trà</option>
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

                  <div className="mt-10">
                    <h1>Chọn ngày, giờ & stylist</h1>
                    <div className="container">
                      <h2>Chọn stylist</h2>
                      <div>
                        <Carousel
                          responsive={responsive}
                          infinite={true}
                          arrows={true}
                        >
                          {stylist.map((style, index) => (
                            
                            <div
                              key={index}
                              onClick={() => {
                                handleButtonClick(style);
                              }}
                              style={
                                selectStyle === style
                                  ? styleImg 
                                  : styleImgUnselect 
                              }
                            >
                              {style}
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <h2>Chọn ngày</h2>
                      <input
                        type="date"
                        name="address"
                        placeholder="Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Address'"
                        required
                        className="single-input"
                      />
                      <h2>Chọn giờ</h2>

                      <div className=" d-flex justify-content-center row m-0">
                        <button
                          type="button"
                          className="genric-btn success-border col-2 time-select"
                          style={{
                            border: "1px solid",
                            borderRadius: "5px",
                          }}
                          onClick="selectTime(event)"
                        >
                          08:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          09:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          10:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          11:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          12:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          13:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          14:00
                        </button>
                        <button
                          type="button"
                          disabled
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                        >
                          15:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          16:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          17:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          18:00
                        </button>
                        <button
                          type="button"
                          className="genric-btn success-border col-2"
                          style={{
                            border: "1px solid",
                            borderRadius: "5",
                          }}
                          onclick="selectTime(event)"
                        >
                          19:00
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="input-group-icon mt-10">
                    <h1>Chọn skinner</h1>

                    <div id="default-select">
                      <select className="form-select">
                        <option value=" 1">Vui lòng chọn</option>
                        <option value="1">Thúy Vân</option>
                        <option value="1">Thúy Kiều</option>
                        <option value="1">Điêu Thuyền</option>
                        <option value="1">Tiểu Kiều</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-10">
                    <h1>Ghi chú</h1>
                    <textarea
                      className="single-textarea"
                      placeholder="Ghi chú"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Ghi chú'"
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
