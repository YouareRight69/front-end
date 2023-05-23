import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
// import { Button, Modal } from "react-bootstrap";

function TableThien({ value, index }) {
  const [currentBranchId, setCurrentBranchId] = useState("");

  const handleDeleteClick = (index) => {
    setCurrentBranchId(value.name);
    console.log(currentBranchId);
  };

  useEffect(() => {
    setCurrentBranchId(value.name);
  }, []);
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
            data-bs-toggle="modal"
            data-bs-target={`#${value.branchId}`}
            onClick={() => handleDeleteClick(index)}
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
      <Modal
        branch={value}
        message={`Bạn có chắc muốn xóa chi nhánh có branchId: ${value.name} này không ?`}
        indexModal={index}
      />
    </>
  );
}

export default TableThien;
