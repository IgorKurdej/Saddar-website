import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import "./App.css";
import AboutUsView from "./views/AboutUsView";
import ProductsView from "./views/ProductsView";
import SpecializationView from "./views/SpecializationView";
import AnchorWithDetails from "./components/AnchorWithDetails/AnchorWithDetails";
import ContactView from "./views/ContactView";
import KnowHowView from "./views/KnowHowView";
import NewsView from "./views/NewsView";
import NewsItemDetails from "./components/News/NewsItemDetails/NewsItemDetails";
import ServicesView from "./views/ServicesView";
import PartnersView from "./views/PartnersView";
import InstructionsView from "./views/InstructionsView";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutUsView />} />
            <Route path="/specialization" element={<SpecializationView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/product" element={<AnchorWithDetails />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/know-how" element={<KnowHowView />} />
            <Route path="/news" element={<NewsView />} />
            <Route path="/news/read-more" element={<NewsItemDetails />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/partners" element={<PartnersView />} />
            <Route path="/instructions" element={<InstructionsView />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
