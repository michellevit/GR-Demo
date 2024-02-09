import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setProducts(response.data); 
      } catch (error) {
        console.error("There was an error fetching the products: ", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="all-products-container">
      <div className="section-container">
        <div className="paragraphs">
      <h2>Recommended for you</h2>
        <div className="recommended-section">
        {products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
        <div className="paragraphs">
      <h2>Liked</h2>
        <div className="staff-picks-section">
        {products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
        <div className="paragraphs">
      <h2>Staff Picks</h2>
        <div className="liked-section">
        {products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
