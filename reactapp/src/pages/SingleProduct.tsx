import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SingleProduct.css";
import ProductCard from "../components/ProductCard";
import RatingsBarChart from "../components/RatingsBarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faCircle, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { Product, User } from '../types/types';

interface BundleProduct extends Product {
  bundleDiscountPercentage?: number; // Optional: Bundle-specific discount percentage
}

interface RatingsDistribution {
  [key: number]: number;
}

const SingleProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [bundledProducts, setBundledProducts] = useState<BundleProduct[]>([]);
  const [bundleDiscount, setBundleDiscount] = useState<number | null>(null);
  const [totalBundlePrice, setTotalBundlePrice] = useState<string | null>(null);
  const [bundleAmountSaved, setBundleAmountSaved] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ratingsDistribution, setRatingsDistribution] = useState<RatingsDistribution>({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  useEffect(() => {
    if (!productId) return;
    const fetchProductAndBundles = async () => {
      try {
        const productResponse = await axios.get<Product>(`${process.env.REACT_APP_DEMO_URL}/api/products/${productId}`);
        setProduct(productResponse.data);
        document.title = productResponse.data.product_name;

        const bundlesResponse = await axios.get<{ products: BundleProduct[], discount_percentage: number }[]>(`${process.env.REACT_APP_DEMO_URL}/api/products/${productId}/bundles`);
        if (bundlesResponse.data.length > 0) {
          setBundledProducts(bundlesResponse.data[0].products);
          setBundleDiscount(bundlesResponse.data[0].discount_percentage);
          const totalBeforeDiscount = bundlesResponse.data[0].products.reduce((total, prod) => total + prod.price, 0);
          const discountAmount = totalBeforeDiscount * (bundlesResponse.data[0].discount_percentage / 100);
          const totalAfterDiscount = totalBeforeDiscount - discountAmount;
          setTotalBundlePrice(totalAfterDiscount.toFixed(2));
          setBundleAmountSaved(discountAmount.toFixed(2));
        }
      } catch (error) {
        console.error("Error fetching product or bundles: ", error);
      }
    };

    const fetchUser = async () => {
      try {
        const userResponse = await axios.get<User>(`${process.env.REACT_APP_DEMO_URL}/api/users/find_by_email?email=mflandin@gr.com`);
        setCurrentUser(userResponse.data);
        setIsLiked(userResponse.data.liked_products.includes(Number(productId)));
      } catch (error) {
        console.error("There was an error fetching the user: ", error);
        setCurrentUser(null);
      }
    };

    fetchProductAndBundles();
    fetchUser();
  }, [productId]);

  const nextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image_urls.length);
  };

  const prevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? product.image_urls.length - 1 : prevIndex - 1);
  };

  if (!product || !currentUser) {
    return <div className="single-product-loading">Loading...</div>;
  }

  const handleLike = async () => {
    if (!product) return;
    try {
      const response = await axios.post(`${process.env.REACT_APP_DEMO_URL}/api/products/${product.id}/like`, { user_email: currentUser.email, liked: !isLiked }, { headers: { Accept: "application/json" } });
      if (response.status === 200) {
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.error("Error liking the product:", error);
    }
  };

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
                {product.ratings_count} ratings
              </span>
            </div>
            <div
              className={`like ${isLiked ? "liked" : ""}`}
              onClick={handleLike}
            >
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
                  <FontAwesomeIcon icon={faCircleArrowLeft} />
                </button>
                <img
                  src={`${process.env.REACT_APP_DEMO_URL}${product.image_urls[currentImageIndex]}`}
                  alt={`Product ${currentImageIndex + 1}`}
                />
                <button className="next-button" onClick={nextImage}>
                  <FontAwesomeIcon icon={faCircleArrowRight} />
                </button>
                <div className="carousel-dots">
                  {product.image_urls.map((_, index) => (
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={
                        currentImageIndex === index ? "dot active" : "dot"
                      }
                      key={index}
                    />
                  ))}
                </div>
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
                <div id="double-col">
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
                  <div id="row2-col-mid">
                    <div id="user">
                      <FontAwesomeIcon icon={faCircle} />
                      {product.user.name}
                    </div>
                  </div>
                </div>
                <div id="row2-col-right">
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span className="rating-number">
                      &nbsp;{product.ratings_count} ratings
                    </span>
                  </div>
                </div>
              </div>
              <div
                id="row3"
                dangerouslySetInnerHTML={{ __html: product?.description || '' }}
              ></div>
            </div>
            <div id="right-column">
              <div id="row1">
                <button type="button" className="add-to-cart">
                  Add to cart
                </button>
                <div
                  className={`like ${isLiked ? "liked" : ""}`}
                  onClick={handleLike}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
              <div id="row2">
                <RatingsBarChart distribution={ratingsDistribution} />
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          {bundledProducts.length > 0 && (
            <div className="paragraphs">
              <h2>Bundle Deal - {bundleDiscount}% off</h2>
              <div className="bundle-section">
                {bundledProducts.map((bundledProduct) => (
                  <ProductCard
                    key={bundledProduct.id}
                    product={bundledProduct}
                    isBundledProduct={true}
                    bundleDiscount={bundleDiscount ?? 0}
                  />
                ))}
                <div className="bundle-purchase">
                  <div className="bundle-price">
                    Total Price: ${totalBundlePrice}
                    <p className="savings">Save ${bundleAmountSaved}</p>
                  </div>
                  <button className="bundle-add">Add all to Cart</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
