import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateService() {
    const service = "http://localhost:8080/api/hairService"
    const { id } = useParams();
    const [target, setTarget] = useState({});
    const [valid, setValid] = useState({});

    const error = { color: "red" };

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(service, target, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
                }
            }).then(resp => {
                navigate("/listService");
            }).catch(error => {
                setValid(error.response.data);
            })
        }
        axios.post(service, target, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            navigate("/listService");
        }).catch(error => {
            setValid(error.response);
        })
    }

    const handleChange = (element) => {
        setTarget({ ...target, [element.target.name]: element.target.value })
    }

    useEffect(() => {
        if (id) {
            axios.get(`${service}/${id}`)
                .then(resp => {
                    setTarget(resp.data)
                });
        }
    }, [id]);


    const [imageSrc, setImageSrc] = useState("./assets/img/thien/1.jpg");

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                </div>
            </div>
            <section id="section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="gallery-area" style={{ 'padding-top': '60px' }}>
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="box snake thien_snake">
                                        <label htmlFor="file-input">
                                            <div className="gallery-img">
                                                <img
                                                    className="thien_avatar"
                                                    src={imageSrc}
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div className="overlay"></div>
                                            <input
                                                style={{ display: "none" }}
                                                id="file-input"
                                                type="file"
                                                name="myfile"
                                                multiple
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <h2 className="mb-30">THÊM MỚI DỊCH VỤ</h2>
                            <form id="form" onSubmit={onSubmit} style={{ textAlign: "left", color: "black", width: "80%" }}>
                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        <p className="mt-2">Mã dịch vụ {valid.serviceId && <span style={error}>{valid.serviceId}</span>}</p>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            type="text"
                                            placeholder="Mã dịch vụ" required
                                            className="single-input"
                                            value={target.serviceId}
                                            name='serviceId'
                                            onChange={handleChange}
                                            id="serviceId" />
                                    </div>
                                </div>
                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        <p className="mt-2">Tên dịch vụ {valid.name && <span style={error}>{valid.name}</span>}</p>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            placeholder="Tên dịch vụ" required
                                            value={target.name}
                                            type="text"
                                            name='name'
                                            className="single-input"
                                            onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        <p className="mt-2">Giá {valid.price && <span style={error}>{valid.price}</span>}</p>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            type="text"
                                            placeholder="Giá" required
                                            className="single-input"
                                            value={target.price}
                                            name='price'
                                            onChange={handleChange}
                                            id="price" />
                                    </div>
                                </div>

                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        <p className="mt-2">Mô tả {valid.description && <span style={error}>{valid.description}</span>}</p>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <textarea
                                            type="text"
                                            placeholder="Mô tả" required
                                            className="single-input"
                                            value={target.description} name='description'
                                            onChange={handleChange}
                                            id="description" />
                                    </div>
                                </div>
                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        <p className="mt-2">Loại dịch vụ {valid.type && <span style={error}>{valid.type}</span>}</p>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            type="text"
                                            placeholder="Loại dịch vụ" required
                                            className="single-input"
                                            value={target.type}
                                            name='type'
                                            onChange={handleChange}
                                            id="type" />
                                    </div>
                                </div>
                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-4">
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="button"><Link as={Link} to='/listService' style={{ textDecoration: 'none' }}>Trở về</Link></button>
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="reset">Làm mới</button>
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="submit">Thêm mới</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreateService;