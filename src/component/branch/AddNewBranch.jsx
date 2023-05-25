import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase/index.js";
import ImageGallery from "../common/ImageGallery";

function AddNewBranch(props) {
  const [imagesArray, setImagesArray] = useState([]);
  const [urls, setUrls] = useState("");
  const [progress, setProgress] = useState(0);

  const handleDataFromImageGallery = (data) => {
    setImagesArray(data);
  };

  const handleUploadMultiImage = () => {
    
    imagesArray.map((image) => {
      const imageref = ref(storage, `images/${image.name + v4()}`);
      uploadBytes(imageref, image).then((snaphsot) => {
        getDownloadURL(snaphsot.ref).then((urls) => {
          setUrls((prevState) => [...prevState, urls]);
        });
      });
    });
  };

  console.log(urls);

  console.log(imagesArray);

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
                        <ImageGallery
                          sendDataToParent={handleDataFromImageGallery}
                        />
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
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Tên chi nhánh";
                            }}
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
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Địa chỉ";
                            }}
                            required
                            className="single-input"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mt-110" style={{ display: "flex" }}>
                      <div className="col-lg-4 ms-10">
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
                        <button
                          className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                          type="submit"
                          onClick={handleUploadMultiImage}
                        >
                          Thêm mới
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
      ;
    </>
  );
}

export default AddNewBranch;
