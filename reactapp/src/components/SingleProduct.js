import React from "react";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = () => {
  return (
    <div className="single-product-container">
      <div className="product-header-container">
        <div className="product-header">
          <div className="product-name">
            <div className="product-price">
              <div className="swallowtail-flag-wrapper-wrapper">
                <div className="swallowtail-flag-wrapper">
                  <div className="swallowtail-flag">
                    <span className="flag-text">$0.00+</span>
                  </div>
                </div>
              </div>
            </div>
            <h3>Product Name</h3>
            <div className="product-details">
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span className="rating-number">X ratings</span>
              </div>
              <div className="like">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-main-container">
        <div className="product-main-section">
          <div className="image-carousel">PICTURE CAROUSEL HERE</div>
          <div className="product-data-container">
            <div id="left-column">
              <div id="row1">
                <h1>Product Name</h1>
              </div>
              <div id="row2">
                <div id="row2-col-left">
                  <div className="product-price">
                    <div className="swallowtail-flag-wrapper-wrapper">
                      <div className="swallowtail-flag-wrapper">
                        <div className="swallowtail-flag">
                          <span className="flag-text">$0.00+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="row2-col-mid">Creator Name</div>
                <div id="row2-col-right">
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span className="rating-number">&nbsp;X ratings</span>
                  </div>
                </div>
              </div>
              <div id="row3">Product Description</div>
            </div>
            <div id="right-column">
              <div id="row1">
                <button type="button">Add to cart</button>
                <div className="like">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div id="row2">Rating Bar Chart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
