import React from "react";

function Modal({ branch, title ,message}) {

  return (
    <div>
      <div
        className="modal fade"
        id={`${branch.branchId}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
              {title}
              </h1>
              <div
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="modal-body">{message}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
