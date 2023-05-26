import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageGallery from "../common/ImageGallery";

function EditBranch(props) {
  const url = "http://localhost:8080/api/admin/branch";
  const { id } = useParams();
  const [target, setTarget] = useState({});
  const [dataView, setDataView] = useState([]);
  const [imagesArray, setImagesArray] = useState([]);

  const handleDataFromImageGallery = (data) => {
    setImagesArray(data);
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(target);
    e.preventDefault();
    if (id) {
      axios
        .get(`${url}/${id}`, target, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Credentials": "true",
          },
        })
        .then((resp) => {
          navigate("/branch");
        });
    }
  };

  useEffect(() => {
    if (id) {
      axios.get(`${url}/${id}`).then((resp) => {
        setTarget(resp.data);
      });
    }
  }, [id]);

  useEffect(() => {
    if (target && target.media) {
      const urlArray = target.media.map((item) => item.url);
      setDataView(urlArray);
    }
  }, [target]);

  const handleChange = (element) => {
    setTarget({ ...target, [element.target.name]: element.target.value });
  };

  // Refresh
  const handleReset = () => {
    setTarget({});
  };

  console.log("dataView");
  console.log(dataView);

  return (
    <div>
      <form id="form" onSubmit={onSubmit}></form>
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Chỉnh sửa chi nhánh</h2>
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
                        <ImageGallery
                          data={dataView}
                          sendDataToParent={handleDataFromImageGallery}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <h3 className="mb-30">Chỉnh sửa chi nhánh</h3>
                    <form action="#">
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Tên Chi Nhánh</p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <input
                            type="text"
                            name="name"
                            placeholder="256 Nguyễn Văn Linh"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Tên Chi Nhánh";
                            }}
                            required
                            className="single-input"
                            value={target.name}
                            onChange={handleChange}
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
                            placeholder="Hải Châu"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Địa chỉ";
                            }}
                            required
                            className="single-input"
                            value={target.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mt-110" style={{ display: "flex" }}>
                      <div className="col-lg-4 ms-10">
                        <Link to="/branch">
                          <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                            Trở về
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-4 ms-10">
                        <button
                          className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="reset"
                          onClick={handleReset}
                        >
                          Làm mới
                        </button>
                      </div>
                      <div className="col-lg-4">
                        <button
                          className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="submit"
                        >
                          Cập nhật
                        </button>
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
    </div>
  );
}

export default EditBranch;
