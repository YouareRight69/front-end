import React from "react";

function Invoice(props) {
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
                    <h2>Thông tin hoá đơn</h2>
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
                <div className="section-top-border">
                  <div style={{ display: "flex", marginRight: "50px" }}>
                    <h3 className="mb-30">Đơn hàng</h3>
                    <h3>
                      <a href="#" style={{ marginLeft: "50px" }}>
                        #23050001
                      </a>
                    </h3>
                  </div>
                  <div className="progress-table-wrap">
                    <div
                      className="progress-table"
                      style={{ textAlign: "center" }}
                    >
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Đơn Hàng</th>
                            <th scope="col">#23050001</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td>Đặt lịch từ:</td>
                            <td>Web</td>
                          </tr>
                          <tr>
                            <th scope="row">SonTTH1</th>
                            <td></td>
                            <td>Ngày Hóa Đơn</td>
                            <td>16/05/2023</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <i className="fa fa-phone" aria-hidden="true">
                                0905113113
                              </i>
                            </th>
                            <td></td>
                            <td>Giờ ra/vào:</td>
                            <td>11:15 - 12:00</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td>Nhân Viên Thu Ngân</td>
                            <td>Trần Thị Mỹ Duyên</td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row">Sản Phẩm & Dịch Vụ</th>
                            <td>Số lượng</td>
                            <td>Đơn Giá</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row">Cắt, gội, sấy tóc (Combo)</th>
                            <td>1</td>
                            <td>120.000 đ</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row">Rái tai</th>
                            <td>1</td>
                            <td>20.000 đ</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>Tổng cộng:</td>
                            <td>140.000 đ</td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row"></th>
                            <td>Thành tiền:</td>
                            <td>140.000 đ</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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

export default Invoice;
