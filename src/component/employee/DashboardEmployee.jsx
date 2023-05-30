import React from "react";
import { Link } from "react-router-dom";
// import Modal from "../common/Modal";

function DashboardEmployee(props) {
  return (
    <div>
      {/* <PreLoader /> */}
      {/* <Modal /> */}
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Quản lý nhân viên</h2>
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
                        {/* <div>
                          <select className="form-select" id="default-select">
                            <option value=" 1">Sắp xếp</option>
                            <option value="1">Bangladesh</option>
                            <option value="1">India</option>
                            <option value="1">England</option>
                            <option value="1">Srilanka</option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                  </aside>
                </div>
                <div class="mt-10" style={{ display: "flex" }}>
                  <div class="col-lg-3 ms-10">
                    <Link to="/employee-add">
                      <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                        Thêm mới
                      </div>
                    </Link>
                  </div>
                  <div class="col-lg-3 ms-10">
                    <Link to="/history-admin">
                      <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                        Lịch sử làm việc
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="section-top-border">
                  <h3 className="mb-30">Danh sách nhân viên</h3>
                  <div className="progress-table-wrap">
                    <div
                      className="progress-table"
                      style={{ textAlign: "center" }}
                    >
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Ngày sinh</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Chi nhánh</th>
                            <th scope="col">Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ marginTop: "5px" }}>
                            <th scope="row">01</th>
                            <td>Nguyễn Văn A</td>
                            <td>12/12/2000</td>
                            <td>0245321014</td>
                            <td>nguyenvana@gmail.com</td>
                            <td>Nam</td>
                            <td>Nguyễn Văn Linh</td>
                            <td>
                              <button
                                type="button"
                                className="genric-btn danger radius"
                                style={{ marginRight: "10px" }}
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>

                              <Link
                                to="/employee-edit"
                                style={{ marginRight: "10px" }}
                              >
                                <div className="genric-btn success radius">
                                  <i className="fas fa-pencil-alt"></i>
                                </div>
                              </Link>

                              <Link to="/employee-detail">
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
                            <th scope="row">01</th>
                            <td>Nguyễn Văn A</td>
                            <td>12/12/2000</td>
                            <td>0245321014</td>
                            <td>nguyenvana@gmail.com</td>
                            <td>Nam</td>
                            <td>Nguyễn Văn Linh</td>
                            <td>
                              <button
                                type="button"
                                className="genric-btn danger radius"
                                style={{ marginRight: "10px" }}
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>

                              <Link
                                to="/employee-edit"
                                style={{ marginRight: "10px" }}
                              >
                                <div className="genric-btn success radius">
                                  <i className="fas fa-pencil-alt"></i>
                                </div>
                              </Link>

                              <Link to="/employee-detail">
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

export default DashboardEmployee;
