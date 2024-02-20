import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";
import { Product, User } from '../types/types';


const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const getSectionProducts = (productArray: Product[]): Product[] => {
    const shuffledProducts = productArray.sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, 5);
  };

  useEffect(() => {
    document.title = "GR Discover: Assets, books, courses & more";
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await axios.get<User>(
          `${process.env.REACT_APP_DEMO_URL}/api/users/find_by_email?email=mflandin@gr.com`
        );
        setCurrentUser(userResponse.data);
      } catch (error) {
        console.error("There was an error fetching the user: ", error);
        setCurrentUser(null);
      }
    };

    fetchUser();
  }, []);

  if (!currentUser) {
    return null;
  }

  const likedProducts = products.filter((product) =>
    currentUser.liked_products.includes(product.id)
  );

  return (
    <div className="all-products-container">
      <div className="section-container">
        <div className="paragraphs">
          <h2>Recommended for you</h2>
          <div className="recommended-section">
            {getSectionProducts(products).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        {likedProducts.length > 0 && (
          <div className="paragraphs">
            <h2>Liked</h2>
            <div className="staff-picks-section">
              {getSectionProducts(likedProducts).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        <div className="paragraphs">
          <h2>Staff picks</h2>
          <div className="liked-section">
            {getSectionProducts(products).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
