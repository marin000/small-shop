interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  reviewerName: string;
  comment: string;
  rating: number;
  date: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  dimensions: Dimensions;
  weight: number;
  availabilityStatus: string;
  stock: number;
  minimumOrderQuantity: number;
  rating: number;
  tags: string[];
  sku: string;
  images: string[];
  thumbnail: string;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  reviews: Review[];
}
