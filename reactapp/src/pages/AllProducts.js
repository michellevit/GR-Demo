import React from "react";
import "./AllProducts.css";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const staffPicksProducts = [
    {
      id: 1,
      name: "Product 1",
      user: "Jovino",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
  ];
  const likedProducts = [
    {
      id: 1,
      name: "Product 1",
      user: "Tom Jones",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
  ];
  const recommendedProducts = [
    {
      id: 1,
      name: "Product 1",
      user: "Clara Voy",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
    {
      id: 2,
      name: "Product 2",
      user: "Vance Foley",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
    {
      id: 3,
      name: "Product 3",
      user: "Sam Thompson",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
    {
      id: 4,
      name: "Product 3",
      user: "Angela Smith",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
    {
      id: 5,
      name: "Product 3",
      user: "Tonya Sun",
      imageUrl: "path/to/image1.jpg",
      price: "20.00",
    },
  ];
  return (
    <div className="all-products-container">
      <div className="section-container">
        <div className="paragraphs">
      <h2>Recommended for you</h2>
        <div className="recommended-section">
          {recommendedProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
        <div className="paragraphs">
      <h2>Liked</h2>
        <div className="staff-picks-section">
          {staffPicksProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </div>
        <div className="paragraphs">
      <h2>Staff Picks</h2>
        <div className="liked-section">
          {likedProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
