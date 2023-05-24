import React from "react";
import { Link } from "react-router-dom";

function HistoryEmployeeA(props) {
  return (
    <div>
      {/* <PreLoader /> */}
      <main>
        {/* Hero Start */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70 text-center">
                    <h2>Lịch sử hoạt động theo tháng</h2>
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
              <div className="mt-50" style={{ display: "flex" }}>
                <div className="col-lg-5 ms-10" style={{ display: "flex" }}>
                    <p style={{ fontWeight: "bold", margin: "7px 40px"}}>Tên chi nhánh: </p>
                    <div className="blog_right_sidebar">
                        <div className="input-group-icon">
                          <div>
                            <select className="form-select" id="default-select" style={{ width: "200px"}}>
                                <option value=" 1">Nguyễn Văn Linh</option>
                                <option value="1">Nguyễn Hữu Thọ</option>
                                <option value="1">Trần Hưng Đạo</option>
                                <option value="1">England</option>
                                <option value="1">Srilanka</option>
                            </select>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 ms-10">

                </div>
                <div className="col-lg-3 ms-10">
                    <a href="#" className="genric-btn info radius">Tháng 5 - 2023</a>
                </div>
                <div className="col-lg-3 ms-10" style={{ display: "flex" }}>
                    <div className="button-group-area1">
                        <a href="#" className="genric-btn info-border radius">Tuần</a>
                        <a href="#" className="genric-btn info radius">Tháng</a>
                    </div>   
                </div>
              </div>
                <div className="section-top-border">
                  <h3 className="mb-30">Lịch sử hoạt động theo tháng</h3>
                  <div className="progress-table-wrap">
                    <div
                      className="progress-table"
                      style={{ textAlign: "center" }}
                    >
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Ngày</th>
                            <th scope="col">Họ Tên</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Số khách hàng phục vụ</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <th scope="row">Ngày 01/05/2023</th>
                          <td>Nguyễn Văn A</td>
                          <td>Đi làm</td>
                          <td>3</td>
                        </tr>
                        <tr>
                          <th scope="row">Ngày 01/05/2023</th>
                          <td>Nguyễn Văn B</td>
                          <td>Đi làm</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <th scope="row">Ngày 01/05/2023</th>
                          <td>Nguyễn Văn C</td>
                          <td>Đi làm</td>
                          <td>4</td>
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
                    <Link to="/employee">
                      <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                        Trở về
                      </div>
                    </Link>
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

export default HistoryEmployeeA;
