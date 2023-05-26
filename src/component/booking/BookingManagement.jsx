import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../button/DeleteButton";
import DetailButton from "../button/DetailButton";
import EditButton from "../button/EditButton";
import Page from "../common/Page";

export default function BookingManagement() {
  const [list, setList] = useState({ data: { content: [] } });
  const url = "http://localhost:8080/api/admin/branch";
  const [condition, setCondition] = useState("");
  const [display, setDisplay] = useState(true);

  function handleClick(page) {
    axios.get(`${url}?p=${page}&c=${condition}`).then((res) => {
      setList(res);
    });
  }

  const onSubmit = (data) => {
    setCondition(data);
    console.log(setCondition);
  };

  const rerender = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    axios.get(`${url}?c=${condition}`).then((res) => {
      setList(res);
    });
  }, [condition, display]);

  return (
    <main>
      <div className="row">
        <div className="col-lg-2" style={{ backgroundColor: "bisque" }}>
          Admin
        </div>
        <div className="col-lg-10">
          <div className="row">
            
            <div className="col-12">
              <div className="row">
                <div className="col-7">
                  <button  className="btn header-btn">
                    Đặt lịch hẹn mới
                  </button>
                </div>
                <div className="col-5">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          style={{ padding: "28.5px" }}
                          type="text"
                          className="form-control"
                          placeholder="Nhập tên người đặt lịch..."
                        />

                        <button className="btn header-btn py-2" type="button">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <table className="table table-hover container">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã đặt lịch</th>
                    <th>Người đặt lịch</th>
                    <th>Chi nhánh</th>
                    <th>Đặt ngày</th>
                    <th>Giờ đặt</th>
                    <th>Ghi chú</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>DL0001</td>
                    <td>Nguyễn Văn A</td>
                    <td>Thanh Khê</td>
                    <td>15/05/2023</td>
                    <td>08:00</td>
                    <td></td>
                    <td>
                      <button
                        className="genric-btn danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                      <button className="genric-btn success">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="genric-btn primary"
                        data-toggle="modal"
                        data-target="#exampleModal-detail"
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>DL0003</td>
                    <td>Nguyễn Văn C</td>
                    <td>Thanh Khê</td>
                    <td>18/05/2023</td>
                    <td>17:00</td>
                    <td>A tới trễ nha</td>
                    <td>
                      <button
                        className="genric-btn danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                      <button className="genric-btn success">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="genric-btn primary"
                        data-toggle="modal"
                        data-target="#exampleModal-detail"
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>DL0001</td>
                    <td>Nguyễn Văn A</td>
                    <td>Thanh Khê</td>
                    <td>15/05/2023</td>
                    <td>15:00</td>
                    <td></td>
                    <td>
                      <button
                        className="genric-btn danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                      <button className="genric-btn success">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="genric-btn primary"
                        data-toggle="modal"
                        data-target="#exampleModal-detail"
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>DL0002</td>
                    <td>Nguyễn Văn B</td>
                    <td>Thanh Khê</td>
                    <td>15/07/2023</td>
                    <td>11:00</td>
                    <td></td>
                    <td style={{ width: "250px" }}>
                      <button
                        className="genric-btn danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                      <button className="genric-btn success">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="genric-btn primary"
                        data-toggle="modal"
                        data-target="#exampleModal-detail"
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav className="blog-pagination justify-content-center d-flex mb-3">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
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
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <i className="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
