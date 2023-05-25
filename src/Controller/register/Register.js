import React, { useState } from "react";
import LeftSideNamNB from "./common/LeftSideNamNB";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const setParams = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "fullname") {
      setFullname(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
  };

  const register = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      fullname: fullname,
      email: email,
      phoneNumber: phoneNumber,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/register", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        alert("Đăng ký tài khoản thành công!");
        navigate("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const exitRegister = () => {
    navigate("/login");
  };

  return (
    <main
      style={{
        backgroundImage: "url('assets/img/hero/h1_hero.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="whole-wrap">
        <div className="container box_1170">
          <div className="section-top-border" style={{ height: "100vh" }}>
            <div
              className="row"
              style={{ display: "flex", height: "100%", alignItems: "center" }}
            >
              <div className="col-lg-7 col-md-7">
                <h3 className="mb-30" style={{ color: "#d19f68" }}>
                  Đăng ký tài khoản
                </h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="mt-10">
                        <input
                          type="text"
                          name="username"
                          placeholder="Tên đăng nhập"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Tên đăng nhập";
                          }}
                          required
                          className="single-input-namnb6"
                          onChange={setParams}
                        />
                      </div>
                      <div className="mt-10">
                        <input
                          type="password"
                          name="password"
                          placeholder="Mật khẩu"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Mật khẩu";
                          }}
                          required
                          className="single-input-namnb6"
                          onChange={setParams}
                        />
                      </div>
                      <div className="mt-10">
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Nhập lại mật khẩu"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Nhập lại mật khẩu";
                          }}
                          required
                          className="single-input-namnb6"
                          onChange={setParams}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="mt-10">
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Họ và tên"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Họ và tên";
                          }}
                          required
                          className="single-input-namnb6"
                          onChange={setParams}
                        />
                      </div>
                      <div className="mt-10">
                        <input
                          type="email"
                          name="email"
                          placeholder="Địa chỉ email"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Địa chỉ email";
                          }}
                          required
                          className="single-input-namnb6"
                          onChange={setParams}
                        />
                      </div>
                      <div className="mt-10">
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Số điện thoại"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Số điện thoại";
                          }}
                          required
                          className="single-input-namnb6"
                          onChange={setParams}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10" style={{ marginTop: "20px" }}>
                    <div className="row">
                      <div
                        className="col-6"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          style={{ width: "70%" }}
                          type="button"
                          className="button boxed-btn namnb6"
                          onClick={exitRegister}
                        >
                          Hủy
                        </button>
                      </div>
                      <div
                        className="col-6"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          style={{ width: "70%" }}
                          type="button"
                          className="button boxed-btn"
                          onClick={register}
                        >
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div
                  className="button-group-area mt-10"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <span
                    style={{
                      fontSize: ".8em",
                      color: "#d19f68",
                      fontWeight: "500",
                      paddingTop: "22px",
                      paddingRight: "10px",
                    }}
                  >
                    Bạn đã có tài khoản?
                  </span>
                  <button
                    type="button"
                    onClick={exitRegister}
                    className="genric-btn link-border circle namnb6"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
              <LeftSideNamNB />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
