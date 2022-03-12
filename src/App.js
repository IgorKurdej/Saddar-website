import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import "./App.css";
import AboutUsView from "./views/AboutUsView";
import ProductsView from "./views/ProductsView";
import SpecializationView from "./views/SpecializationView";
import AnchorWithDetails from "./components/AnchorWithDetails/AnchorWithDetails";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutUsView />} />
          <Route path="/specialization" element={<SpecializationView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/product/:id" element={<AnchorWithDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
