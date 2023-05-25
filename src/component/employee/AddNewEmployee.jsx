import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddNewEmployee(props) {
  const [imageSrc, setImageSrc] = useState("./assets/img/avatar/hinh-avatar-cute-nu.jpg");

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Thêm mới nhân viên</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Services Area Start */}
        <div style={{ display: "flex" }}>
          <div className="col-lg-2" style={{ backgroundColor: "antiquewhite" }}>
            Admin
          </div>
          <div className="col-lg-10">
            <section className="service-area section-padding300">
              <div className="container">
                {/* Section caption */}
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div
                      className="gallery-area"
                      style={{ paddingTop: "50px" }}
                    >
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="box snake thien_snake">
                          <label for="file-input">
                            <div className="gallery-img">
                              <img
                                className="thien_avatar"
                                src={imageSrc}
                                alt="avatar"
                              />
                            </div>
                            <div className="overlay"></div>
                            <input
                              style={{ display: "none" }}
                              id="file-input"
                              type="file"
                              name="myfile"
                              multiple
                              onChange={handleInputChange}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <h3 className="mb-30">Thêm mới nhân viên</h3>
                    <form action="#">
                      <div className="mt-10" style={{display: "flex"}}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Họ Tên</p>
                          </div>
                          <div class="col-lg-9 col-md-4">
                            <input 
                              type="text" 
                              name="name" 
                              placeholder="Họ tên"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Họ tên'" 
                              required
                              className="single-input"
                            />
                          </div>
                      </div>
                      <div className="mt-10" style={{ display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Ngày sinh</p>
                          </div>
                          <div className="col-lg-9 col-md-4">
                            <input 
                              type="date" 
                              name="dateOfBirth" 
                              placeholder="Ngày Sinh"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Ngày Sinh'" 
                              required
                              className="single-input"
                            />
                          </div>
                      </div>
                      <div className="mt-10" style={{ display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Số điện thoại</p>
                          </div>
                          <div className="col-lg-9 col-md-4">
                            <input 
                              type="text" 
                              name="phone" 
                              placeholder="Số điện thoại"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Số điện thoại'" 
                              required
                              className="single-input"
                            />
                          </div>
                      </div>
                      <div className="mt-10" style= {{display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Giới tính</p>
                          </div>
                          <div className="col-lg-9 col-md-4" style= {{ display: "flex" }}>
                              <div className="col-lg-3" style= {{ display: "flex" }}>
                                  <div className="col-lg-3 mt-1">
                                      <div className="confirm-radio">
                                          <input 
                                            type="checkbox" 
                                            id="confirm-radio" 
                                            // checked
                                          />
                                          <label for="confirm-radio"></label>
                                      </div>
                                  </div>
                                  <div className="col-lg-7">
                                      <label for="html">Nam</label>
                                  </div>
                              </div>
                              <div className="col-lg-3">

                              </div>
                              <div className="col-lg-3" style= {{ display: "flex" }}>
                                  <div className="col-lg-3 mt-1">
                                      <div className="primary-radio">
                                        <input 
                                          type="checkbox" 
                                          id="primary-radio" 
                                          checked
                                        />
                                          <label for="primary-radio"></label>
                                      </div>
                                  </div>
                                  <div class="col-lg-7">
                                      <label for="html">Nữ</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mt-10" style= {{ display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Email</p>
                          </div>
                          <div className="col-lg-9 col-md-4">
                            <input 
                              type="email" 
                              name="email" 
                              placeholder="Email"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Email'" 
                              required
                              className="single-input"
                            />
                          </div>
                      </div>
                      <div className="mt-10" style= {{ display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Ngày ký HD</p>
                          </div>
                          <div className="col-lg-9 col-md-4">
                            <input 
                              type="date" 
                              name="dateOfBirth" 
                              placeholder="Ngày Sinh"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Ngày Sinh'" 
                              required
                              class="single-input"
                            />
                          </div>
                      </div>
                      <div className="mt-10" style= {{ display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Ngày hết hạn HD</p>
                          </div>
                          <div className="col-lg-9 col-md-4">
                            <input 
                              type="date" 
                              name="dateOfBirth" 
                              placeholder="Ngày Sinh"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Ngày Sinh'" 
                              required
                              className="single-input"
                            />
                          </div>
                      </div>
                      <div className="input-group-icon mt-10" style= {{ display: "flex" }}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Chi nhánh</p>
                          </div>
                          <div className="col-lg-9 col-md-4">
                              {/* <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div> */}
                              <div className="form-select" id="default-select">
                                  <select style={{ width: "100%", height: "90%"}}>
                                      <option value=" 1">Chi nhánh</option>
                                      <option value="1">Bangladesh</option>
                                      <option value="1">India</option>
                                      <option value="1">England</option>
                                      <option value="1">Srilanka</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                    </form>
                    <div className="mt-110" style={{ display: "flex" }}>
                      <div className="col-lg-3 ms-10">
                        <Link to="/employee">
                          <div className="button rounded-0 primary-bg w-100 btn_1 boxed-btn">
                            Trở về
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-4 ms-10">
                        <button
                          className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="submit"
                        >
                          Làm mới
                        </button>
                      </div>
                      <div className="col-lg-4">
                        <a
                          href="./dashboard.html"
                          className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="submit"
                        >
                          Thêm mới
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Services Area End */}
      </main>
      ;
    </>
  );
}

export default AddNewEmployee;
