import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProducts.css"; // Assuming this CSS file is also relevant for SearchResults
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { Product } from '../types/types'; // Import the Product interface

const SearchResults: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]); // Use Product[] type for state
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    document.title = `Search results for "${query}" | GR Discover`;
  }, [query]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          `${process.env.REACT_APP_DEMO_URL}/api/products/search?query=${query}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("There was an error fetching the products: ", error);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <div className="all-products-container">
      <div className="section-container">
        <div className="paragraphs">
          <h2>Search Results for "{query}"</h2>
          <div className="recommended-section">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
