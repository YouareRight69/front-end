import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageGalleryEdit from "../common/ImageGalleryEdit";

function DetailService(props) {
  const url = "http://localhost:8080/api/hairService";
  const { id } = useParams();
  const [target, setTarget] = useState({});
  const [dataView, setDataView] = useState([]);

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
          navigate("/listService");
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

  return (
    <div>
      <main>
        <form id="form" onSubmit={onSubmit}></form>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Xem thông tin dịch vụ</h2>
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
                        {dataView !== undefined && dataView !== null && (
                          <ImageGalleryEdit data={dataView} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <h3 className="mb-30">Xem thông tin dịch vụ</h3>
                    <form action="#">
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Tên Dịch Vụ: </p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <p className="mt-2">{target.name}</p>
                        </div>
                      </div>
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Giá: </p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <p className="mt-2">{target.price}</p>
                        </div>
                      </div>
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Mô tả: </p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <p className="mt-2">{target.description}</p>
                        </div>
                      </div>
                      <div className="mt-80" style={{ display: "flex" }}>
                        <div className="col-lg-3 col-md-4">
                          <p className="mt-2">Loại dịch vụ: </p>
                        </div>
                        <div className="col-lg-9 col-md-4">
                          <p className="mt-2">{target.type}</p>
                        </div>
                      </div>
                    </form>
                    <div className="mt-110" style={{ display: "flex" }}>
                      <div className="col-lg-4 ms-10">
                        <Link to="/listService">
                          <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                            Trở về
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 ms-10"></div>
                      <div className="col-lg-4"></div>
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

export default DetailService;