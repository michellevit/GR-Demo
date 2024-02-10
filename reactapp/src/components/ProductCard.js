import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const imagePath = "../../public/product_images/" + product.image_urls[0];
  return (
    <>
      <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <div className="product-image">
          <img src={imagePath} alt={product.product_name} />
        </div>
        <div className="product-details">
          <h4>{product.product_name}</h4>
          <a className="user">
            <FontAwesomeIcon icon={faCircle} />
            {product.user}
          </a>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} />
            X.X (XYZ)
          </div>
        </div>
        <div className="product-price">
          <div className="price">
            <div className="swallowtail-flag-wrapper-wrapper">
              <div className="swallowtail-flag-wrapper">
                <div className="swallowtail-flag">
                  <span className="flag-text">${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default ProductCard;
