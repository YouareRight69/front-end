import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { storage } from "../firebase/Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";



function EditEmployee(props) {

  const avatar = "./assets/img/avatar/hinh-avatar-cute-nu.jpg";


  const [img, setImg] = useState(null);
  const [imgUpload, setImgUpload] = useState("");
  const [inputImg, setInputImg] = useState("assets/img/logo/avatar.png");

  useEffect(() => {
    if (avatar) {
      setInputImg(avatar);
    }
  }, [avatar]);

  const [imgList, setImgList] = useState([]);

  const imgListRef = ref(storage, "avatars/");

  const uploadImg = (event) => {
    setImg(event.target.files[0]);
    console.log(img);
  };

  useEffect(() => {
    if (img == null) {
      return;
    }
    const imgRef = ref(storage, `avatars/"my"+${v4()}`);
    uploadBytes(imgRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUpload(url);
      });
    });
  }, [img]);

  return (
    
    <div>
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Chỉnh sửa nhân viên</h2>
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
                              {img != null ? (
                                <img
                                className="thien_avatar"
                                src={imgUpload}
                                alt="avatar"
                              />
                              ) : (
                                <img
                                className="thien_avatar"
                                src={inputImg}
                                alt="avatar"
                              />
                              )}
                              
                            </div>
                            <div className="overlay"></div>
                            <input
                              style={{ display: "none" }}
                              id="file-input"
                              type="file"
                              name="myfile"
                              multiple
                              onChange={(event) => {
                                uploadImg(event);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <h3 className="mb-30">Chỉnh sửa nhân viên</h3>
                    <form action="#">
                      <div className="mt-10" style={{display: "flex"}}>
                          <div className="col-lg-3 col-md-4">
                              <p className="mt-2">Họ Tên</p>
                          </div>
                          <div class="col-lg-9 col-md-4">
                            <input 
                              type="text" 
                              name="name" 
                              placeholder="Vỏ Thị Hoạ My"
                              onfocus="this.placeholder = 'Vỏ Thị Hoạ My'" 
                              onblur="this.placeholder = 'Vỏ Thị Hoạ My'" 
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
                              placeholder="15/02/2000"
                              onfocus="this.placeholder = ''" 
                              onblur="this.placeholder = 'Ngày Sinh'" 
                              required
                              className="single-input"
                              value="2000-02-15"
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
                              placeholder="0823976563"
                              onfocus="this.placeholder = ''" 
                              //onblur="this.placeholder = 'Số điện thoại'" 
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
                              placeholder="vohoamy1502@gmail.com"
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
                              value="2017-05-10"
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
                              value="2024-05-10"
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
                                      <option value=" 1">Nguyễn Văn Linh</option>
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
                          <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
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

export default EditEmployee;
