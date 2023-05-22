import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../assets/css/bootstrap.min.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/slicknav.css'
import '../assets/css/animate.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/fontawesome-all.min.css'
import '../assets/css/themify-icons.css'
import '../assets/css/slick.css'
import '../assets/css/nice-select.css'
import '../assets/css/style.css'
import '../assets/css/user.css'
import '../assets/img/favicon.ico'

function UserList() {

    const url = "http://localhost:8080/api/user";
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
    }

    const rerender = () => {
        setDisplay(!display);
    }

    useEffect(() => {
        axios.get(`${url}?c=${condition}`).then(res => {
            setList(res);
        })
    }, [condition, display])

    return (
        <div>
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center" id="slider1">
                </div>
            </div>
            <div className="whole-wrap">
                <div className="container box_1170">
                    <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget col-lg-12" style={{ 'display': 'flex' }}>
                            <div className="col-lg-1">

                            </div>
                            <form action="#" className="col-lg-6">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder='Nhập từ khoá cần tìm'
                                            onFocus="this.placeholder = ''"
                                            onBlur="this.placeholder = 'Nhập từ khoá cần tìm'" />
                                        <div className="input-group-append">
                                            <button className="btns" type="button"><i className="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </aside>
                    </div>
                    <div className="mt-10" style={{ 'display': 'flex' }}>
                        <div className="col-lg-3 ms-10">
                            <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"><Link to="/createUser">Thêm mới</Link></button>
                        </div>
                        <div className="col-lg-3 ms-10"></div>
                    </div>
                    <div className="section-top-border">
                        <h3 className="mb-30">DANH SÁCH THÀNH VIÊN</h3>
                        <div>
                            <div className="progress-table" style={{ 'textAlign': 'center' }}>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Họ tên</th>
                                            <th scope="col">Giới tính</th>
                                            {/* <th scope="col">Địa chỉ</th> */}
                                            <th scope="col">Ngày sinh</th>
                                            <th scope="col">Số điện thoại</th>
                                            <th scope="col">Email</th>
                                            {/* <th scope="col">Account</th> */}
                                            <th scope="col">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.data.content.length > 0 &&
                                            list.data.content.map((item) =>
                                                <tr style={{ 'marginTop': '5px' }} key={item.userId}>
                                                    <td>{item.userId}</td>
                                                    <td>{item.fullName}</td>
                                                    <td>{item.gender}</td>
                                                    {/* <td>{item.address}</td> */}
                                                    <td>{item.dateOfBirth}</td>
                                                    <td>{item.phoneNumber}</td>
                                                    <td>{item.email}</td>
                                                    {/* <td>{item.account.accountId}</td> */}
                                                    <td>
                                                        <button className="genric-btn danger radius" data-toggle="modal"
                                                            data-target="#exampleModal">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                        <button className="genric-btn success radius">
                                                            <i className="fas fa-pencil-alt"></i>
                                                        </button>
                                                        <button className="genric-btn primary radius" style={{ 'marginRight': '10px' }}><i
                                                            className="fa fa-eye" aria-hidden="true"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default UserList