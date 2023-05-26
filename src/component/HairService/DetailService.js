import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function DetailService() {
    const service = "http://localhost:8080/api/hairService"
    const { id } = useParams();
    const [target, setTarget] = useState({});

    const navigate = useNavigate();

    const onSubmit = (e) => {
        console.log(target)
        e.preventDefault();
        if (id) {
            axios.get(`${service}/${id}`, target, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': 'GET',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }).then(resp => {
                navigate("/listService");
            })
        }
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
                            <h2 className="mb-30">XEM CHI TIẾT DỊCH VỤ</h2>
                            <form id="form" onSubmit={onSubmit} style={{ textAlign: "left", color: "black", width: "80%" }}>
                                <div class="mb-3">
                                    <label class="form-label">Mã dịch vụ: <span>{target.serviceId}</span></label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Tên dịch vụ: <span>{target.name}</span></label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Giá: <span>{target.price}</span></label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mô tả: <span>{target.description}</span></label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Loại dịch vụ: <span>{target.type}</span></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <Link to="/listService">
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">Trở về</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default DetailService;