import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import "./styles/utils.css";
import GlobalDashboardLayout from "./pages/GlobalDashLayout";
import DashPool from "./components/Dashboard/DashPool";
import DashHome from "./components/Dashboard/DashHome";
import DashPayment from "./components/Dashboard/DashPayment";
import Error from "./pages/Error";
import RequestLoan from "./components/Dashboard/RequestLoan";
import DashProfile from "./components/Dashboard/DashProfile";
import CollateralsDetails from "./components/Dashboard/CollateralsDetails";
import HowWeWork from "./pages/HowWeWork";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<HowWeWork />} />
        </Route>

        <Route path="" element={<GlobalDashboardLayout />}>
          <Route path="/dashboard" element={<DashHome />} />
          <Route path="/dashboard/pool" element={<DashPool />} />
          <Route path="/dashboard/pool/request" element={<RequestLoan />} />
          <Route
            path="/dashboard/pool/collateral"
            element={<CollateralsDetails />}
          />
          <Route
            //  path="/dashboard/payment"
            element={<DashPayment />}
          />
          <Route path="/dashboard/profile" element={<DashProfile />} />
          <Route path="*" element={<Error />} />{" "}
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
