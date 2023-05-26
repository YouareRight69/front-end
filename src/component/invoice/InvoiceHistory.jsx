import React from "react";
import { Link } from "react-router-dom";

function InvoiceHistory(props) {
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
                    <h2>Lịch Sử Hoá Đơn</h2>
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
                            onFocus={(e) => {
                              e.target.placeholder = "";
                            }}
                            onBlur={(e) => {
                              e.target.placeholder = "Nhập từ khoá cần tìm";
                            }}
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
                        <div className="form-select" id="default-select">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Sắp xếp</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </aside>
                  <div className="col-lg-3"></div>
                </div>
                <div className="section-top-border">
                  <h3 className="mb-30">Danh sách hóa đơn</h3>
                  <div className="progress-table-wrap">
                    <div
                      className="progress-table"
                      style={{ textAlign: "center" }}
                    >
                      <table className="table table-hover tablecenterCSS">
                        <thead>
                          <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Nhân Viên Thu Ngân</th>
                            <th scope="col">Ngày Hoá Đơn</th>
                            <th scope="col">Tiền Thanh Toán</th>
                            <th scope="col">Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ marginTop: "5px" }}>
                            <th scope="row">01</th>
                            <td>Trần Thị Mỹ Duyên</td>
                            <td>16/05/2023</td>
                            <td>140.000đ</td>
                            <td>
                              <Link to="/invoice">
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
                            <td>Nguyễn Thị Thanh Trang</td>
                            <td>15/05/2023</td>
                            <td>200.000đ</td>
                            <td>
                              <Link to="/invoice">
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

export default InvoiceHistory;
