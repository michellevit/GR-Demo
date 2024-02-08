import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./components/SingleProduct";

function App() {
  const location = useLocation();
  const isAllProductsPage = location.pathname === '/home' || location.pathname === '/';

  return (
    <div className="app">
      <Nav shrink={isAllProductsPage} />
      <div className="container">
        <Routes>
          <Route path="home" element={<AllProducts />} />
          <Route path="/" element={<AllProducts />} /> 
          <Route path="product/:id" element={<SingleProduct />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;