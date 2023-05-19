import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Controller/Home";
import AddNewBranch from "./component/branch/AddNewBranch";
import Branch from "./component/branch/DashboardBranch";
import DetailBranch from "./component/branch/DetailBranch";
import EditBranch from "./component/branch/EditBranch";
import Invoice from "./component/invoice/Invoice";
import InvoiceHistory from "./component/invoice/InvoiceHistory";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
