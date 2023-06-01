import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import axios from "axios";

function Edit() {
  const location = useLocation();
  const result = location.state?.result;
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [fullname, setFullname] = useState("");
  const [employeeId, setEployeeId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [type, setType] = useState("");
  const [branchId, setBranchId] = useState("");

  const [branch, setBranch] = useState([]);

  useEffect(() => {
    if (accessToken == null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const propertyMap = {
      fullname: setFullname,
      employeeId: setEployeeId,
      phoneNumber: setPhoneNumber,
      dob: setDob,
      address: setAddress,
      avatar: setAvatar,
      type: setType,
      branchId: setBranchId,
    };

    for (const property in propertyMap) {
      if (result && result[property]) {
        propertyMap[property](result[property]);
      }
    }
  }, [
    result && result.fullname, // Add null check for `result` and its properties
    result && result.employeeId,
    result && result.phoneNumber,
    result && result.dob,
    result && result.address,
    result && result.avatar,
    result && result.type,
    result && result.branchId,
  ]);

  // const setParams = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "fullname") {
  //     setFullname(value);
  //   } else if (name === "email") {
  //     setEmail(value);
  //   } else if (name === "phoneNumber") {
  //     setPhoneNumber(value);
  //   } else if (name === "dob") {
  //     setDob(value);
  //   } else if (name === "address") {
  //     setAddress(value);
  //   }
  // };

  const exit = () => {
    navigate("/");
  };

  const updateEmp = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      type: type,
      branchId: branchId,
      employeeId: employeeId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/employee/edit", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        alert("Cập nhật thông tin thành công!");
        navigate("/employee2");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useMemo(() => {
    axios.get("http://localhost:8080/api/admin/branch").then((resp) => {
      setBranch(resp.data);
    });
  }, []);

  console.log(type);

  return (
    <main>
      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70 text-center">
                  <h2>Cập nhật thông tin Nhân viên</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="whole-wrap"
        style={{
          backgroundImage: "url('assets/img/gallery/about-shape.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="container box_1170" style={{ width: "80%" }}>
          <div className="section-top-border" style={{ height: "90vh" }}>
            <div
              className="row"
              style={{ display: "flex", height: "100%", alignItems: "center" }}
            >
              <div className="col-lg-4 col-md-4">
                <div
                  className="box snake namnb6"
                  style={{
                    borderRadius: "50%",
                    width: "320px",
                    height: "320px",
                  }}
                >
                  <label htmlFor="file-input">
                    <div className="gallery-img">
                      <img className="avatar" src={avatar} alt="avatar" />
                    </div>
                    <div className="overlay"></div>
                    <input
                      style={{ display: "none" }}
                      id="file-input"
                      name="myfile"
                      multiple
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <form action="#">
                  <div className="mt-10">
                    <input
                      type="text"
                      name="empId"
                      className="single-input-namnb6"
                      style={{ border: "1px solid #e5e6e9" }}
                      value={employeeId}
                      readOnly
                    />
                  </div>{" "}
                  <div className="mt-10">
                    <input
                      type="text"
                      name="fullname"
                      className="single-input-namnb6"
                      style={{ border: "1px solid #e5e6e9" }}
                      value={fullname}
                      readOnly
                    />
                  </div>{" "}
                  <div className="mt-10">
                    <input
                      type="number"
                      name="phoneNumber"
                      className="single-input-namnb6"
                      style={{ border: "1px solid #e5e6e9" }}
                      value={phoneNumber}
                    />
                  </div>{" "}
                  <div className="mt-10">
                    <div className="form-select" id="default-select">
                      <select
                        style={{
                          width: "100%",
                          height: "54px",
                          paddingLeft: "17px",
                        }}
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="" disabled>
                          Loại Nhân viên
                        </option>
                        <option value="Hair">Hair dresser</option>
                        <option value="Skin">Skinner</option>
                      </select>
                    </div>
                  </div>{" "}
                  <div className="mt-10" style={{ marginTop: "25px" }}>
                    <div className="form-select" id="default-select">
                      <select
                        style={{
                          width: "100%",
                          height: "54px",
                          paddingLeft: "17px",
                        }}
                        name="branchId"
                        value={branchId}
                        onChange={(e) => setBranchId(e.target.value)}
                      >
                        <option value="" disabled>
                          Chi nhánh làm việc
                        </option>
                        {branch.map((item) => (
                          <option key={item.branchId} value={item.branchId}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-10" style={{ marginTop: "20px" }}>
                    <div className="row">
                      <div className="col-6">
                        <button
                          style={{ width: "100%" }}
                          type="submit"
                          className="button boxed-btn namnb6"
                          onClick={exit}
                        >
                          {" "}
                          Hủy{" "}
                        </button>{" "}
                      </div>
                      <div className="col-6">
                        <button
                          style={{ width: "100%" }}
                          type="button"
                          className="button boxed-btn"
                          onClick={updateEmp}
                        >
                          {" "}
                          Cập nhật{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}

export default Edit;