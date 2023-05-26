
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Controller/Home";
import Booking from "./component/booking/booking";
import AddNewBranch from "./component/branch/AddNewBranch";
import Branch from "./component/branch/DashboardBranch";
import DetailBranch from "./component/branch/DetailBranch";
import EditBranch from "./component/branch/EditBranch";
import Invoice from "./component/invoice/Invoice";
import InvoiceHistory from "./component/invoice/InvoiceHistory";
import Payment from "./component/payment/Payment";
import UserList from "./component//User/UserList";
import UserCreate from "./component/User/UserCreate";
import HairServiceList from "./component/HairService/HairServiceList";
import CreateService from "./component/HairService/CreateService";
import DetailService from "./component/HairService/DetailService";
import AddNewEmployee from "./component/employee/AddNewEmployee";
import EditEmployee from "./component/employee/EditEmployee";
import DetailEmployee from "./component/employee/DetailEmployee";
import HistoryEmployeeA from "./component/employee/history/historyAdmin";
import HistoryEmployee from "./component/employee/history/historyEmployee";
import DashboardBranch from "./component/employee/DashboardEmployee";
import EditService from "./component/HairService/EditService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />       */}
        </Route>
        <Route path="/branch" element={<Branch />}></Route>
        <Route path="/branch-add" element={<AddNewBranch />}></Route>
        <Route path="/branch-detail" element={<DetailBranch />}></Route>
        <Route path="/branch-edit" element={<EditBranch />}></Route>
        <Route path="/invoice-history" element={<InvoiceHistory />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/listUser" element={<UserList/>} />
        <Route path="/createUser" element={<UserCreate/>} />
        <Route path="/listService" element={<HairServiceList/>} />
        <Route path="/createService" element={<CreateService/>} />
        <Route path="/detailService/:id" element={<DetailService/>} />
        <Route path='/listService/:id' element={<EditService />} />
        <Route path="/branch" element={<Branch />}></Route>
        <Route path="/branch-add" element={<AddNewBranch />}></Route>
        <Route path="/branch-detail" element={<DetailBranch />}></Route>
        <Route path="/branch-edit" element={<EditBranch />}></Route>
        <Route path="/invoice-history" element={<InvoiceHistory />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/employee" element={ <DashboardBranch/> }></Route>
        <Route path="/employee-add" element={ <AddNewEmployee/> }></Route>
        <Route path="/employee-edit" element={ <EditEmployee/> }></Route>
        <Route path="/employee-detail" element={ <DetailEmployee/> }></Route>
        <Route path="/history-admin" element={ <HistoryEmployeeA/> }></Route>
        <Route path="/history-employee" element={ <HistoryEmployee/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

