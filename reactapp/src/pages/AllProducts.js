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
  const likedProducts = getSectionProducts(5);
  const staffPicksProducts = getSectionProducts(2);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DEMO_URL}/api/products`, {
          headers: {
            'Accept': 'application/json',
          },
        });
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("There was an error fetching the products: ", error);
      }
    };

    fetchProducts();
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
          <h2>Staff picks</h2>
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
