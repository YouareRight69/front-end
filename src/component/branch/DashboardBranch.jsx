import React from "react";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";

function DashboardBranch(props) {
  return (
    <div>
      {/* <PreLoader /> */}
      <Modal />
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Quản lý chi nhánh</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Start Align Area */}
        <div style={{ display: "flex" }}>
          <div className="col-lg-2" style={{ backgroundColor: "bisque" }}>
            Admin
          </div>

          <div className="col-lg-10">
            <div className="whole-wrap">
              <div className="container box_1170">
                <div className="blog_right_sidebar">
                  <aside
                    className="single_sidebar_widget search_widget col-lg-12"
                    style={{ display: "flex" }}
                  >
                    <div className="col-lg-1"></div>
                    <form action="#" className="col-lg-6">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khoá cần tìm"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Nhập từ khoá cần tìm'"
                          />
                          <div className="input-group-append">
                            <button className="btns" type="button">
                              <i className="ti-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-3 col-md-4 mt-10">
                      <div className="input-group-icon">
                        <div>
                          <select className="form-select" id="default-select">
                            <option value=" 1">Sắp xếp</option>
                            <option value="1">Bangladesh</option>
                            <option value="1">India</option>
                            <option value="1">England</option>
                            <option value="1">Srilanka</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </aside>
                  <div className="col-lg-3">
                    <Link to="/branch-add">
                      <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                        Thêm mới
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="section-top-border">
                  <h3 className="mb-30">Danh sách chi nhánh</h3>
                  <div className="progress-table-wrap">
                    <div
                      className="progress-table"
                      style={{ textAlign: "center" }}
                    >
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên chi nhánh</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Ngày thành lập</th>
                            <th scope="col">Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ marginTop: "5px" }}>
                            <th scope="row">01</th>
                            <td>256 Nguyễn Văn Linh</td>
                            <td>Hải Châu</td>
                            <td>02/03/2015</td>
                            <td>
                              <button
                                type="button"
                                className="genric-btn danger radius"
                                style={{ marginRight: "10px" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>

                              <Link
                                to="/branch-edit"
                                style={{ marginRight: "10px" }}
                              >
                                <div className="genric-btn success radius">
                                  <i className="fas fa-pencil-alt"></i>
                                </div>
                              </Link>

                              <Link to="/branch-detail">
                                <div className="genric-btn primary radius">
                                  <i
                                    className="fa fa-eye"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </Link>
                            </td>
                          </tr>
                          <tr style={{ marginTop: "5px" }}>
                            <th scope="row">02</th>
                            <td>16 Hồ Tùng Mậu</td>
                            <td>Liên Chiểu</td>
                            <td>08/09/2017</td>
                            <td>
                              <button
                                type="button"
                                className="genric-btn danger radius"
                                style={{ marginRight: "10px" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>

                              <Link
                                to="/branch-edit"
                                style={{ marginRight: "10px" }}
                              >
                                <div className="genric-btn success radius">
                                  <i className="fas fa-pencil-alt"></i>
                                </div>
                              </Link>

                              <Link to="/branch-detail">
                                <div className="genric-btn primary radius">
                                  <i
                                    className="fa fa-eye"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <section
                  className="blog_area"
                  style={{ paddingBottom: "80px" }}
                >
                  <div className="col-lg-12 mb-5 mb-lg-0">
                    <nav className="blog-pagination1 justify-content-center d-flex">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            href="#"
                            className="page-link"
                            aria-label="Previous"
                          >
                            <i className="ti-angle-left"></i>
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link" aria-label="Next">
                            <i className="ti-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </section>
                <div style={{ display: "flex" }}>
                  <div className="col-lg-10 ms-10 mb-50"></div>
                  <div className="col-lg-2 ms-10 mb-50">
                    <a
                      type="button"
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                    >
                      Trở về
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Align Area */}
      </main>
    </div>
  );
}

export default DashboardBranch;
