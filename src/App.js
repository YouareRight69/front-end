import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./User/UserList";
import UserCreate from "./User/UserCreate";
import HairServiceList from "./HairService/HairServiceList";
import Home from "./Controller/Home";
import CreateService from "./HairService/CreateService";
import Booking  from "./component/booking/booking"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listUser" element={<UserList/>} />
        <Route path="/createUser" element={<UserCreate/>} />
        <Route path="/listService" element={<HairServiceList/>} />
        <Route path="/createService" element={<CreateService/>} />
        <Route path="/booking" element={<Booking />}>
          {/* <Route index element={<Home />} />       */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
