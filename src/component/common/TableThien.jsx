import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { Button, Modal } from "react-bootstrap";

function TableThien({ value, index }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <tr key={index} style={{ marginTop: "5px" }}>
        <th scope="row">{value.branchId}</th>
        <td>{value.name}</td>
        <td>{value.address}</td>
        <td>
          <button
            type="button"
            className="genric-btn danger radius"
            style={{ marginRight: "10px" }}
            variant="primary"
            onClick={handleShow}
          >
            <i className="far fa-trash-alt"></i>
          </button>

          <Link to="/branch-edit" style={{ marginRight: "10px" }}>
            <div className="genric-btn success radius">
              <i className="fas fa-pencil-alt"></i>
            </div>
          </Link>

          <Link to="/branch-detail">
            <div className="genric-btn primary radius">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </div>
          </Link>
        </td>
      </tr>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton onClick={handleShow}>
          <Modal.Title>Xóa Chi Nhánh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>
              Bạn có chắc muốn xóa chi nhánh{" "}
              <span style={{ color: "red" }}>{value.name}</span> không?
            </p>
            {/* <p>Tên chi nhánh: {value.name}</p>
            <p>Địa chỉ: {value.address}</p> */}
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Không
          </Button>
          <Button variant="secondary" onClick={handleShow}>
            Có
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TableThien;
