import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const getSectionProducts = (startIndex) => {
    return products.slice(startIndex, startIndex + 5);
  };
  const recommendedProducts = getSectionProducts(0);
  const likedProducts = getSectionProducts(0);
  const staffPicksProducts = getSectionProducts(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://gumroad-demo.michellef.dev/products');
        console.log("Fetched products:", response.data);
        setProducts(response.data); 
      } catch (error) {
        console.error("There was an error fetching the products: ", error);
      }
    };

    fetchProducts();
    console.log(products);

  }, []);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="all-products-container">
      <div className="section-container">
        <div className="paragraphs">
          <h2>Recommended for you</h2>
          <div className="recommended-section">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="paragraphs">
          <h2>Liked</h2>
          <div className="staff-picks-section">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="paragraphs">
          <h2>Staff Picks</h2>
          <div className="liked-section">
            {staffPicksProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
