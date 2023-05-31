import React from "react";
import Header from "./register/common/Header";
import { Link } from "react-router-dom";
import ImageGallery from "../component/common/ImageGallery";

function Home() {

  const pay = new URL(window.location.href);
  const searchParams = new URLSearchParams(pay.search);
  const vnpResponseCode = searchParams.get("vnp_ResponseCode");
  
  return (
    <div>
      <div>
        <Header />
      </div>

    </div>
  );
}

export default Home;
