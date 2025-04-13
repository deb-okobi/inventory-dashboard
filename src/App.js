import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StockFlow from "./pages/stockflow"

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex space-x-4 mb-4">
          <Link to="/" className="text-blue-400">Home</Link>
          <Link to="/stock-flow" className="text-blue-400">Stock Flow</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock-flow" element={<StockFlow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
