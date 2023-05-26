import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";
import ImageGallery from "../common/ImageGallery";
import { storage } from "../firebase/index.js";

function AddNewBranch(props) {
  const url = "http://localhost:8080/api/admin/branch";
  const { id } = useParams();
  const [target, setTarget] = useState({
    name: "",
    address: "",
    media: [],
  });
  const [uploading, setUploading] = useState(false);

  //Validation
  const [valid, setValid] = useState({ name: "", address: "" });

  const [imagesArray, setImagesArray] = useState([]);

  const error = { color: "red" };

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log(target);
    if (id) {
      axios
        .patch(`${url}/${id}`, target, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "PATCH",
            "Access-Control-Allow-Credentials": "true",
          },
        })
        .then((resp) => {
          navigate("/branch");
        })
        .catch((error) => {
          console.log(error);
          setValid(error.response.data);
        });
    }
    axios
      .post(url, target, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .then((resp) => {
        navigate("/branch");
      })
      .catch((error) => {
        console.log(error);
        setValid(error.response.data);
        console.log(setValid);
      });
  };

  // Refresh
  const handleReset = () => {
    setTarget({});
  };

  const handleChange = (element) => {
    setTarget({ ...target, [element.target.name]: element.target.value });
  };

  useEffect(() => {
    if (id) {
      axios.get(`${url}/${id}`).then((resp) => {
        setTarget(resp.data);
      });
    }
  }, [id]);

  const handleDataFromImageGallery = (data) => {
    setImagesArray(data);
  };

  const handleUploadMultiImage = () => {
    setUploading(true);
    const updatedTarget = { ...target };
    imagesArray.forEach((image) => {
      const imageref = ref(storage, `images/${v4() + image.name}`);
      uploadBytes(imageref, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          updatedTarget.media.push(url);

          // Kiểm tra xem đã tải lên tất cả các hình ảnh hay chưa
          if (updatedTarget.media.length === imagesArray.length) {
            setTarget(updatedTarget);
            saveTargetToDatabase(updatedTarget); // Gọi hàm lưu target vào cơ sở dữ liệu
          }
        });
      });
    });
  };

  const saveTargetToDatabase = (target) => {
    console.log(target);
    setUploading(false);
    onSubmit();
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
                            placeholder="Tên chi nhánh"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Tên chi nhánh";
                            }}
                            required
                            className="single-input"
                            name="name"
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
                            placeholder="Địa chỉ"
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Địa chỉ";
                            }}
                            required
                            className="single-input"
                            name="address"
                            value={target.address}
                            onChange={handleChange}
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
                          onClick={handleUploadMultiImage}
                        >
                          Thêm mới
                        </button>
                      </div>
                    </div>
                  </div>
                  {uploading && <div className="progress-bar"></div>}
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
