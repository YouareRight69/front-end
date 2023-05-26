import React from "react";
import Header from "./register/common/Header";
import { Link } from "react-router-dom";
import ImageGallery from "../component/common/ImageGallery";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>Welcome to VietNam</div>
      <div>
        <Link to="/branch">
          <button type="button" className="btn btn-primary me-3">
            Branch
          </button>
        </Link>
      </div>
      <div>
        <ImageGallery />
      </div>
    </div>
  );
}

export default Home;
