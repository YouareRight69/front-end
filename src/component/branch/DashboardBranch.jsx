import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../Button/SearchForm";
import DeleteButton from "../button/DeleteButton";
import DetailButton from "../button/DetailButton";
import EditButton from "../button/EditButton";
import Page from "../common/Page";

function DashboardBranch(props) {
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
    <div>
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
              <div className="container-fluid box_1170">
                <div className="blog_right_sidebar">
                  <aside
                    className="single_sidebar_widget search_widget col-lg-12"
                    style={{ display: "flex" }}
                  >
                    <div className="col-lg-1"></div>

                    <div className="form-group">
                      <SearchForm onSubmit={onSubmit} />
                    </div>

                    <div className="col-lg-1"></div>
                    <div className="col-lg-3 col-md-4 mt-10">
                      {/* <div className="input-group-icon">
                        <div>
                          <select className="form-select" id="default-select">
                            <option value=" 1">Sắp xếp</option>
                            <option value="1">Bangladesh</option>
                            <option value="1">India</option>
                            <option value="1">England</option>
                            <option value="1">Srilanka</option>
                          </select>
                        </div>
                      </div> */}
                    </div>
                    <Link to="/branch-add">
                      <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">
                        Thêm mới
                      </div>
                    </Link>
                  </aside>
                </div>
                <div className="section-top-border">
                  <h3 className="mb-30">Danh sách chi nhánh</h3>
                  <div className="progress-table-wrap">
                    <div
                      className="progress-table"
                      style={{ textAlign: "center" }}
                    >
                      <table className="table table-hover" id="table">
                        <thead>
                          <tr>
                            <th scope="col" style={{ width: "20%" }}>
                              STT
                            </th>
                            <th scope="col" style={{ width: "20%" }}>
                              Tên chi nhánh
                            </th>
                            <th scope="col" style={{ width: "33%" }}>
                              Địa chỉ
                            </th>
                            <th scope="col" style={{ width: "27%" }}>
                              Chức năng
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.data.content.length > 0 &&
                            list.data.content.map((item) => (
                              <tr
                                style={{ marginTop: "5px" }}
                                key={item.branchId}
                              >
                                <td>{item.branchId}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td className="item">
                                  <DeleteButton
                                    url={url}
                                    id={item.branchId}
                                    nameBranch={item.name}
                                    rerender={rerender}
                                  />
                                  <EditButton
                                    url={"branch-edit"}
                                    id={item.branchId}
                                  />
                                  <DetailButton
                                    url={"branch-detail"}
                                    id={item.branchId}
                                  />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <section
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
                </section> */}
                <Page
                  totalPages={list.data.totalPages}
                  number={list.data.number}
                  condition={condition}
                  handleClick={handleClick}
                />
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
