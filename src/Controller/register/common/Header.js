import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Header() {
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const getUpdateInfo = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const accessTokenDecode = jwt_decode(accessToken);

    fetch(
      `http://localhost:8080/updateInfo?accountId=${accessTokenDecode.iss}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        navigate("/updateInfo", { state: { result } });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getChangePassword = () => {
    const username = jwt_decode(accessToken).sub;
    navigate("/changePassword", { state: { username } });
  };

  const getLogin = () => {
    navigate("/login");
  };

  const home = () => {
    navigate("/");
  };
  const service = () => {};
  const trend = () => {};
  const contact = () => {};

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const aboutPage = () => {
    navigate("/about");
  };
  const servicePage = () => {
    navigate("/service");
  };
  const homePage = () => {
    navigate("/main");
  };
  const trendPage = () => {
    navigate("/trend");
  };
  const booking = () => {
    navigate("/booking");
  };

  return (
    <>
      <header>
        {/* <!--? Header Start --> */}
        <div className="header-area header-transparent pt-20">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* <!-- Logo --> */}
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    {/* <a onClick={home}> */}

                    <img src="assets/img/logo/loder.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* <!-- Main-menu --> */}
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav style={{ marginRight: "15px" }}>
                        <ul id="navigation">
                          <li>
                            {/* <li className="active"> */}
                            <a onClick={homePage}>Trang Chủ</a>
                          </li>
                          <li>
                            <a onClick={servicePage}>Dịch Vụ</a>
                          </li>
                          <li>
                            <a onClick={trendPage}>Xu Hướng</a>
                          </li>

                          <li>
                            <a onClick={aboutPage}>Giới Thiệu</a>
                          </li>

                          <li>
                            <a onClick={booking}>Đặt lịch hẹn</a>
                          </li>

                          {accessToken != null ? (
                            <li>
                              <a href="#">
                                Xin chào {jwt_decode(accessToken).sub}
                              </a>
                              <ul
                                className="submenu"
                                style={{ width: "200px" }}
                              >
                                <li>
                                  <a onClick={getUpdateInfo}>
                                    Cập nhật thông tin
                                  </a>
                                </li>
                                <li>
                                  <a onClick={getChangePassword}>
                                    Đổi mật khẩu
                                  </a>
                                </li>
                                <li>
                                  <a onClick={logout}>Đăng xuất</a>
                                </li>
                              </ul>
                            </li>
                          ) : (
                            <></>
                          )}
                        </ul>
                      </nav>
                    </div>
                    {accessToken == null ? (
                      <>
                        <div className="header-right-btn f-right d-none d-lg-block ml-30">
                          <a onClick={getLogin} className="btn header-btn">
                            Đăng nhập
                          </a>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                {/* <!-- Mobile Menu --> */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>
    </>
  );
}
export default Header;
