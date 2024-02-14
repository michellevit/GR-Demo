import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";

const SearchResults = (s) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    document.title = "Search: search query here";
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DEMO_URL}/api/products`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
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
          <h2>Search Results</h2>
          <div className="recommended-section">
            {searchResults(products).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
