import React, { useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import Page from '../../utils/Page';
import EditButton from '../../Button/EditButton';
import DeleteButton from '../../Button/DeleteButton';
import SearchForm from '../../Button/SearchForm';
import DetailButton from '../../Button/DetailButton';
import axios from 'axios';

function DashboardEmployee(props) {
  const url = "http://localhost:8080/api/employee/listAllEmp";
  const [list, setList] = useState({ data: { content: [] } });
  const [condition, setCondition] = useState("");
  const [display, setDisplay] = useState(true);

    function handleClick(page) {
      axios.get(`${url}?p=${page}&c=${condition}`).then(res => {
          setList(res);
      })
    }

    const onSubmit = (data) => {
      setCondition(data);
      console.log(setCondition);
    }

    const rerender = () => {
      setDisplay(!display);
    }

    useEffect(() => {
      axios.get(`${url}?c=${condition}`).then(res => {
          setList(res);
      })
    }, [condition, display])
    
    console.log(list);

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
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <SearchForm
                            onSubmit={onSubmit}
                        />
                      </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-3 col-md-4 mt-10">
                      <div className="input-group-icon">
                        <div>
                          <select className="form-select" id="default-select">
                            <option value=" 1">Sắp xếp</option>
                            <option value="1">Bangladesh</option>
                            <option value="1">India</option>
                            <option value="1">England</option>
                            <option value="1">Srilanka</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
                <div class="mt-10" style={{display: "flex" }}>
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
                          {list.data.content.length > 0 &&
                            list.data.content.map((item) => 
                              <tr style={{ marginTop: "5px" }} key={item.employeeId}>
                                <th scope="row">{item.employeeId}</th>
                                <td>{item.user.fullName}</td>
                                <td>{item.user.dateOfBirth}</td>
                                <td>{item.user.phoneNumber}</td>
                                <td>{item.user.account.email}</td>
                                <td>{item.user.gender}</td>
                                <td>{item.branch.name}</td>
                                <td style={{ display: "flex"}}>
                              <button
                                type="button"
                                className="genric-btn danger radius"
                                style={{ marginRight: "10px" }}
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                              >
                                <i className="far fa-trash-alt"></i>
                              </button>

                              {/* <Link
                                to="/employee-edit"
                                style={{ marginRight: "10px" }}
                              >
                                <div className="genric-btn success radius">
                                  <i className="fas fa-pencil-alt"></i>
                                </div>
                              </Link> */}
                              <EditButton url={'employee'} id={ item.employeeId } />

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
                          )}
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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

export default DashboardEmployee;
