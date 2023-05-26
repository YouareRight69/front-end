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
      <main>
        {/* <!--? slider Area Start--> */}
        <div className="slider-area position-relative fix">
          <div className="slider-active">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
