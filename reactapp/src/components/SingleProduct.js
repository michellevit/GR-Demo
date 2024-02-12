import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DEMO_URL}/api/products/${productId}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log("Fetched single product:", response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("There was an error fetching the product: ", error);
      }
    };

    fetchProduct();
  }, [productId]);
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.image_urls.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.image_urls.length - 1 : prevIndex - 1
    );
  };
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-product-container">
      <div className="product-header-container">
        <div className="product-header">
          <div className="product-price">
            <div className="swallowtail-flag-wrapper-wrapper">
              <div className="swallowtail-flag-wrapper">
                <div className="swallowtail-flag">
                  <span className="flag-text">
                    ${product.price}
                    {product.flex_price ? "+" : ""}
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <h3>{product.product_name}</h3>
          <div className="product-details">
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <span className="rating-number">
                {product.average_rating} ratings
              </span>
            </div>
            <div className="like">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <button type="button" className="add-to-cart">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-main-container">
        <div className="product-main-section">
          <div className="image-carousel">
            {product.image_urls.length > 1 && (
              <>
                <button className="prev-button" onClick={prevImage}>
                  Prev
                </button>
                <img
                  src={`${process.env.REACT_APP_DEMO_URL}${product.image_urls[currentImageIndex]}`}
                  alt={`Product ${currentImageIndex + 1}`}
                />
                <button className="next-button" onClick={nextImage}>
                  Next
                </button>
              </>
            )}
            {product.image_urls.length === 1 && (
              <img
                src={`${process.env.REACT_APP_DEMO_URL}${product.image_urls[currentImageIndex]}`}
                alt={`Product ${currentImageIndex + 1}`}
              />
            )}
          </div>
          <div className="product-data-container">
            <div id="left-column">
              <div id="row1">
                <h1>{product.product_name}</h1>
              </div>
              <div id="row2">
                <div id="row2-col-left">
                  <div className="product-price">
                    <div className="swallowtail-flag-wrapper-wrapper">
                      <div className="swallowtail-flag-wrapper">
                        <div className="swallowtail-flag">
                          <span className="flag-text">
                            ${product.price}
                            {product.flex_price ? "+" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="row2-col-mid">{product.user}</div>
                <div id="row2-col-right">
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span className="rating-number">
                      &nbsp;{product.average_rating} ratings
                    </span>
                  </div>
                </div>
              </div>
              <div id="row3">{product.description}</div>
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
