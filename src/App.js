import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Controller/Home";
import Login from "./Controller/login/Login";
import Register from "./Controller/register/Register";
import ForgotPassword from "./Controller/register/ForgotPassword";
import ConfirmOtp from "./Controller/register/ConfirmOtp";
import ForgotChangePassword from "./Controller/register/ForgotChangePassword";
import ChangePassword from "./Controller/register/ChangePassword";
import UpdateInfo from "./Controller/register/UpdateInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />       */}
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/confirm-otp" element={<ConfirmOtp />}></Route>
        <Route
          path="/forgot-changePassword"
          element={<ForgotChangePassword />}
        ></Route>
        <Route path="/changePassword" element={<ChangePassword />}></Route>
        <Route path="/updateInfo" element={<UpdateInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
