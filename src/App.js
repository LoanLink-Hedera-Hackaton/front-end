import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
