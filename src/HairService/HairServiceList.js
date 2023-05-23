import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Page from '../utils/Page';

function UserList() {

    const url = "http://localhost:8080/api/hairService";
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
                            <Link to="/createService">
                                <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">Thêm mới</button>
                            </Link>
                        </div>
                        <div className="col-lg-3 ms-10"></div>
                    </div>
                    <div className="section-top-border">
                        <h3 className="mb-30">DANH SÁCH DỊCH VỤ</h3>
                        <div>
                            <div className="progress-table" style={{ 'textAlign': 'center' }}>
                                <table className="table table-hover" id="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Tên dịch vụ</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Mô tả</th>
                                            <th scope="col" style={{ width: "25%" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.data.content.length > 0 &&
                                            list.data.content.map((item) =>
                                                <tr style={{ 'marginTop': '5px' }} key={item.serviceId}>
                                                    <td>{item.serviceId}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.price}</td>
                                                    <td><div className='long-text'>{item.description}</div></td>
                                                    <td className='item'>
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
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h2 className="modal-title" id="exampleModalLabel">
                    XÁC NHẬN THÔNG TIN XÓA
                </h2>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">Xác nhận xóa dịch vụ <span style={{'color': 'red'}}>Cắt + Gội</span> ?</div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Hủy
                </button>
                <button type="button" className="btn btn-primary">Xác nhận</button>
            </div>
        </div>
    </div>
</div>

export default UserList