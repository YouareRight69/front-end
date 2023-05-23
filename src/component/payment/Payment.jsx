import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  imgServiceLeft: {
    height: "40px",
    width: "40px",
    backgroundImage: "url(assets/img/thien/1.jpg)",
  },
  imgServiceRight: {
    height: "40px",
    width: "40px",
    backgroundImage: "url(assets/img/thien/1.jpg)",
  },
  autoWrap: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
});

function Payment(props) {
  const classes = useStyles();
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
                    <h2>Thanh Toán</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Start Align Area */}
        <div className="whole-wrap">
          <div className="container box_1170">
            <div className="blog_right_sidebar">
              <aside
                className="single_sidebar_widget search_widget col-lg-12"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexWrap: "nowrap",
                }}
              >
                <div className="col-auto">Đơn hàng: #23050001</div>
                <div className="col-4">
                  <div className="row thien_select_cho_thanh_toan">
                    <div className="col-auto pr-0">Chờ thanh toán:</div>
                    <div className="col-8">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>SonTTH1 - #23050001</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="section-top-border">
              <div className="row autoWrap">
                <div className="col-6" id="divLeft" style={{ order: "1" }}>
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col" colspan="8"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowspan="4">
                          <div className={classes.imgServiceLeft}></div>
                        </th>
                        <td>SonTTH1</td>
                        <td>
                          <div>
                            <i className="fas fa-edit"></i>
                          </div>
                        </td>
                        <td>Đặt lịch từ:</td>
                        <td>Web</td>
                      </tr>
                      <tr>
                        <td>0236115115</td>
                        <td></td>
                        <td>Ngày hóa đơn:</td>
                        <td>15/05/2023</td>
                      </tr>
                      <tr>
                        <td>id: 001</td>
                        <td></td>
                        <td>Giờ vào / ra:</td>
                        <td>15:00 - 15:30</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Nhân viên thu ngân:</td>
                        <td>Trần Thị Mỹ Duyên</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr className="mt-1 mb-1" />
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col" colspan="4">
                          Sản Phẩm & Dịch Vụ
                        </th>
                        <th scope="col" colspan="3">
                          Đơn giá
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <div className={classes.imgServiceLeft}></div>
                        </th>
                        <td colspan="3">Cắt, gội, sấy tóc (Combo)</td>
                        <td>120.000đ</td>
                        <td>
                          <a
                            href="#"
                            className="genric-btn warning border"
                            style={{ marginRight: "5px" }}
                          >
                            Sửa
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="genric-btn danger border"
                            style={{ marginLeft: "5px" }}
                          >
                            Xóa
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <div className={classes.imgServiceLeft}></div>
                        </th>
                        <td colspan="3">Lấy ráy tai</td>
                        <td>20.000đ</td>
                        <td>
                          <a
                            href="#"
                            className="genric-btn warning border"
                            style={{ marginRight: "5px" }}
                          >
                            Sửa
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="genric-btn danger border"
                            style={{ marginLeft: "5px" }}
                          >
                            Xóa
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <div className={classes.imgServiceLeft}></div>
                        </th>
                        <td colspan="3">Làm mặt</td>
                        <td>60.000đ</td>
                        <td>
                          <a
                            href="#"
                            className="genric-btn warning border"
                            style={{ marginRight: "5px" }}
                          >
                            Sửa
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="genric-btn danger border"
                            style={{ marginLeft: "5px" }}
                          >
                            Xóa
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th colspan="4">Thành Tiền</th>
                        <td>200.000đ</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="4">Thanh Toán</th>
                        <td></td>
                        <td>
                          <div
                            className="genric-btn warning border"
                            style={{ padding: "0px 16px 0px 16px" }}
                          >
                            Tại quầy
                          </div>
                        </td>
                        <td>
                          <div
                            className="genric-btn primary border"
                            style={{ padding: "0px 16px 0px 16px" }}
                          >
                            Zalo Pay
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-6" id="divRight" style={{ order: "2" }}>
                  <div
                    className="position-relative"
                    style={{ height: "115px", width: "100%" }}
                  >
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: "40px",
                        marginTop: "78px",
                      }}
                      className="text-center"
                    >
                      Dịch Vụ
                    </div>
                  </div>
                  <div>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col" rowspan="6"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th rowspan="2">
                            <div className={classes.imgServiceRight}></div>
                          </th>
                          <td>Cắt, gội, sấy tóc (Combo)</td>
                          <td></td>
                          <td rowspan="2">
                            <div className={classes.imgServiceRight}></div>
                          </td>
                          <td>Lấy ráy tai</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>DV001</td>
                          <td>120.000đ</td>
                          <td>DV001</td>
                          <td>20.000đ</td>
                        </tr>

                        <tr>
                          <th rowspan="2">
                            <div className={classes.imgServiceRight}></div>
                          </th>
                          <td>Rửa mặt</td>
                          <td></td>
                          <td rowspan="2">
                            <div className={classes.imgServiceRight}></div>
                          </td>
                          <td>Gội đầu</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>DV003</td>
                          <td>50.000đ</td>
                          <td>DV004</td>
                          <td>60.000đ</td>
                        </tr>

                        <tr>
                          <th rowspan="2">
                            <div className={classes.imgServiceRight}></div>
                          </th>
                          <td>Đắp mặt nạ</td>
                          <td></td>
                          <td rowspan="2">
                            <div className={classes.imgServiceRight}></div>
                          </td>
                          <td>Cạo râu</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>DV005</td>
                          <td>50.000đ</td>
                          <td>DV006</td>
                          <td>30.000đ</td>
                        </tr>
                      </tbody>
                    </table>
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

export default Payment;
