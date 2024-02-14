import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  isBundledProduct = false,
  bundleDiscount = 0,
}) => {
  const imagePath = `${process.env.REACT_APP_DEMO_URL}${product.image_urls[0]}`;

  const discountAmount = isBundledProduct
    ? (product.price * bundleDiscount) / 100
    : 0;
  const finalPrice = isBundledProduct
    ? product.price - discountAmount
    : product.price;

  // to use discount price in swallowtail use '${finalPrice.toFixed(2)}' instead

  return (
    <>
      <Link to={`/discover/${product.id}`}>
        <div className="product-card">
          <div className="product-image">
            <img src={imagePath} alt={product.product_name} />
          </div>
          <div className="product-details">
            <h4>{product.product_name}</h4>
            <div className="user">
              <FontAwesomeIcon icon={faCircle} />
              {product.user.name}
            </div>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              {product.average_rating} ({product.ratings_count})
            </div>
          </div>
          <div className="product-price">
            <div className="price">
              <div className="swallowtail-flag-wrapper-wrapper">
                <div
                  className="swallowtail-flag-wrapper">
                  <div className="swallowtail-flag">
                    <span
                      className={`flag-text ${
                        isBundledProduct ? "flag-text-extra-padding" : ""
                      }`}
                    >
                      ${product.price.toFixed(2)}
                      {isBundledProduct && ` (-$${bundleDiscount.toFixed(2)})`}
                      {!isBundledProduct && product.flex_price ? "+" : ""}
                    </span>
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
