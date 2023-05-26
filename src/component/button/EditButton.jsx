import React from "react";
import { Link } from "react-router-dom";
import EditBranch from "../branch/EditBranch";

export default function EditButton(props) {
  const handleClick = () => <EditBranch id={props.id} url={props.url} />;
  return (
    <div className="genric-btn" style={{ padding: "0px" }}>
      <Link
        as={Link}
        className="dropdown-item"
        to={`/${props.url}/${props.id}`}
      >
        <button className="genric-btn success radius" onClick={handleClick}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </Link>
    </div>
  );
}
