import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Booking  from "./component/booking/booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Booking />}>
          {/* <Route index element={<Home />} />       */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
