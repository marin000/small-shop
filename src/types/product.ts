interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  reviewerName: string;
  comment: string;
  rating: number;
  date: string;
}

export interface ProductDetails {
  description: string;
  brand: string;
  category: string;
  dimensions: Dimensions;
  weight: number;
  rating: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  price: number;
  discountPercentage: number;
  sku: string;
  availabilityStatus: string;
  stock: number;
  minimumOrderQuantity: number;
}

export interface Product {
  id: number;
  title: string;
  details: ProductDetails;
  images: string[];
  thumbnail: string;
  reviews: Review[];
}
