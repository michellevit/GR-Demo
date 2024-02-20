export interface Product {
  id: number;
  product_name: string;
  description?: string;
  price: number;
  flex_price?: boolean;
  ratings_count: number;
  average_rating: number;
  image_urls: string[];
  user: {
    name: string;
  };
}

export interface User {
  id: number;
  name: string;
  highlight_color: string;
  background_color: string;
  profile_pic: string;
  recently_viewed_products: number[];
  liked_products: number[];
  created_at: string;
  updated_at: string;
  email: string;
}