import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import "./App.css";
import Nav from "./components/Nav";
import Test from "./components/Test";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home" element={<AllProducts />} />
          <Route path="/" element={<AllProducts />} /> 
          <Route path="discover" element={<AllProducts />} /> 
          <Route path="discover/:productId" element={<SingleProduct />} /> 
          <Route path="search" element={<SearchResults />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;