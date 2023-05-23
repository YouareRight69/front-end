import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddNewBranch(props) {
  const [imageSrc, setImageSrc] = useState("./assets/img/thien/1.jpg");

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
                    <h2>Thêm mới chi nhánh</h2>
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
                    <h3 className="mb-30">Thêm mới chi nhánh</h3>
                    <form action="#">
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Tên Chi Nhánh</p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="Tên chi nhánh"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Tên chi nhánh'"
                            required
                            className="single-input"
                          />
                        </div>
                      </div>
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Địa chỉ</p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Địa chỉ"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Địa chỉ'"
                            required
                            className="single-input"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mt-110" style={{ display: "flex" }}>
                      <div className="col-lg-3 ms-10">
                        <Link to="/branch">
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

export default AddNewBranch;
