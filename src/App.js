import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import "./styles/utils.css";
import GlobalDashboardLayout from "./pages/GlobalDashLayout";
import DashPool from "./components/Dashboard/DashPool";
import DashHome from "./components/Dashboard/DashHome";
import DashPayment from "./components/Dashboard/DashPayment";
import DashCalc from "./components/Dashboard/DashCalc";
import Error from "./pages/Error";
import RequestLoan from "./components/DashboardComponents/RequestLoan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="" element={<GlobalDashboardLayout />}>
          <Route path="/dashboard" element={<DashHome />} />
          <Route path="/dashboard/pool" element={<DashPool />} />
          <Route path="/dashboard/payment" element={<DashPayment />} />
          <Route path="/dashboard/calc" element={<DashCalc />} />

          {/**Components */}
          <Route path="/dashboard/pool/req" element={<RequestLoan />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
