import React from "react";
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter import here
import "./App.css";
import Nav from "./components/Nav";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home" element={<AllProducts />} />
          <Route path="/" element={<AllProducts />} /> 
          <Route path="products" element={<AllProducts />} /> 
          <Route path="product/:id" element={<SingleProduct />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;