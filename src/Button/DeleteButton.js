import axios from 'axios'
import React from 'react'

export default function DeleteButton(props) {

    const deleteItem = () => {
        if (props.id) {
            axios.delete(`${props.url}/${props.id}`)
                .then(resp => props.rerender())
            return;
        }
        axios.delete(`${props.url}/delete`, props.item, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => props.rerender())
    }

    return (
        <React.Fragment>
            <button className='genric-btn danger radius' data-bs-toggle="modal" data-bs-target={`#modal-${props.id}`} >
                <i className="far fa-trash-alt"></i>
            </button>
            {/* <div className="modal fade" id={`modal-${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Delete this item ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteItem}> Delete</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div
        class="modal fade"
        id={`modal-${props.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
              Xóa dịch vụ
              </h1>
              <div
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="modal-body">
            Bạn có chắc muốn xóa dịch vụ {`${props.id}`}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Có
              </button>
            </div>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}
