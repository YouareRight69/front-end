import axios from "axios";
import React from "react";
import Modal from "../common/Modal";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DeleteButton(props) {
   const accessToken = localStorage.getItem("accessToken");
  const deleteItem = () => {
    if (props.id) {
      axios.delete(`${props.url}/${props.id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods":
            "PUT, POST, GET, DELETE, PATCH, OPTIONS",
          "Authorization": "Bearer " + accessToken,
        },
      }).then((resp) => {
        props.rerender()
        toast.success("Xóa lịch hẹn thành công!", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }  
      );
      return;
    }
    axios
      .delete(`${props.url}/delete`, props.id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => props.rerender());
  };

  return (
    <React.Fragment>
      <button
        className="genric-btn danger radius"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${props.id}`}
      >
        <i className="far fa-trash-alt"></i>
      </button>

      <Modal
        id={props.id}
        title={`Xóa ${props.type}`}
        message={`Bạn có chắc muốn xóa ${props.type} ${props.nameBranch}`}
        deleteItem={deleteItem}
      />
    </React.Fragment>
  );
}
