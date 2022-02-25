import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Wrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
