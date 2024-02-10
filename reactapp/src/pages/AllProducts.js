import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        console.log("Fetched products:", response.data); 
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
            {Array.isArray(products) && products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="paragraphs">
          <h2>Liked</h2>
          <div className="staff-picks-section">
            {Array.isArray(products) && products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="paragraphs">
          <h2>Staff Picks</h2>
          <div className="liked-section">
            {Array.isArray(products) && products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
