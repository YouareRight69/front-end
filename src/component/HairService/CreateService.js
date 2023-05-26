import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ImageGallery from '../common/ImageGallery';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../firebase/index.js";

function CreateService() {
    const service = "http://localhost:8080/api/hairService"
    const { id } = useParams();
    const [target, setTarget] = useState({
        name: "",
        price: 0,
        description: "",
        type: "",
        media: []
    });
    const [uploading, setUploading] = useState(false);
    const [valid, setValid] = useState({ name: "", price: "", description: "", type: "" });
    const [imagesArray, setImagesArray] = useState([]);
    const error = { color: "red" };

    const navigate = useNavigate();

    const onSubmit = () => {
        console.log(target)
        // e.preventDefault();
        if (id) {
            axios.patch(`${service}/${id}`, target, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': 'PATCH',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }).then(resp => {
                navigate("/listService");
            }).catch(error => {
                console.log(error)
                setValid(error.response.data);

            })
        }
        axios.post(service, target, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': 'POST'
            }
        }).then(resp => {
            navigate("/listService");
        }).catch(error => {
            console.log(error)
            setValid(error.response.data);
            console.log(setValid)
        })
    }

    const handleReset = () => {
        setTarget({})
    }

    const handleChange = (element) => {
        setTarget({ ...target, [element.target.name]: element.target.value })
        // console.log(`Target: ${target}`)
    }

    useEffect(() => {
        if (id) {
            axios.get(`${service}/${id}`).then((resp) => {
                setTarget(resp.data);
            });
        }
    }, [id]);

    const handleDataFromImageGallery = (data) => {
        setImagesArray(data);
    };

    const handleUploadMultiImage = () => {
        setUploading(true);
        const updatedTarget = { ...target };
        imagesArray.forEach((image) => {
            const imageref = ref(storage, `images/${v4() + image.name}`);
            uploadBytes(imageref, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    updatedTarget.media.push(url);

                    // Kiểm tra xem đã tải lên tất cả các hình ảnh hay chưa
                    if (updatedTarget.media.length === imagesArray.length) {
                        setTarget(updatedTarget);
                        saveTargetToDatabase(updatedTarget); // Gọi hàm lưu target vào cơ sở dữ liệu
                    }
                });
            });
        });
    };

    const saveTargetToDatabase = (target) => {
        console.log(target);
        setUploading(false);
        onSubmit();
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
                                    <ImageGallery
                                        sendDataToParent={handleDataFromImageGallery}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <h2 className="mb-30">THÊM MỚI DỊCH VỤ</h2>
                            <form id="form" style={{ textAlign: "left", color: "black", width: "80%" }}>
                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        {/* <p className="mt-2">Tên dịch vụ {valid.name && <span style={{error}}>{valid.name}</span>}</p> */}
                                        <label htmlFor="exampleInputPassword1" className="form-label">Tên dịch vụ {valid.name && <span style={{ error }}>{valid.name}</span>}</label>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            placeholder="Tên dịch vụ"
                                            value={target.name}
                                            type="text"
                                            name='name'
                                            className="single-input"
                                            onChange={handleChange}
                                            id="exampleInputPassword1" />
                                    </div>
                                </div>

                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        {/* <p className="mt-2">Giá {valid.price && <span style={{error}}>{valid.price}</span>}</p> */}
                                        <label htmlFor="exampleInputPassword1" className="form-label">Giá {valid.price && <span style={{ error }}>{valid.price}</span>}</label>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            type="number"
                                            placeholder="Giá"
                                            className="single-input"
                                            value={target.price}
                                            name='price'
                                            onChange={handleChange}
                                            id="price" />
                                    </div>
                                </div>

                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        {/* <p className="mt-2">Mô tả {valid.description && <span style={{error}}>{valid.description}</span>}</p> */}
                                        <label htmlFor="exampleInputPassword1" className="form-label">Mô tả {valid.description && <span style={{ error }}>{valid.description}</span>}</label>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <textarea
                                            type="text"
                                            placeholder="Mô tả"
                                            className="single-input"
                                            value={target.description}
                                            name='description'
                                            onChange={handleChange}
                                            id="description" />
                                    </div>
                                </div>
                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-3 col-md-4">
                                        {/* <p className="mt-2">Loại dịch vụ {valid.type && <span style={{error}}>{valid.type}</span>}</p> */}
                                        <label htmlFor="exampleInputPassword1" className="form-label">Loại dịch vụ {valid.type && <span style={{ error }}>{valid.type}</span>}</label>
                                    </div>
                                    <div className="col-lg-9 col-md-4">
                                        <input
                                            type="text"
                                            placeholder="Loại dịch vụ"
                                            className="single-input"
                                            value={target.type}
                                            name='type'
                                            onChange={handleChange}
                                            id="type" />
                                    </div>
                                </div>

                                <div className="mt-10" style={{ 'display': 'flex' }}>
                                    <div className="col-lg-4">
                                        <Link to="/listService">
                                            <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn">Trở về</button>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="reset" onClick={handleReset}>Làm mới </button>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            onClick={handleUploadMultiImage}>Thêm mới</div>
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