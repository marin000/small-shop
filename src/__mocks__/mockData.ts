import { Product } from '@/types/product';
import { CartItem } from '@/types/cart';
import { SortOption } from '@/types/sortFilter';

export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Product A',
    images: ['image1.jpg', 'image2.jpg'],
    thumbnail: 'thumb1.jpg',
    reviews: [],
    details: {
      description: 'A great product',
      brand: 'Brand A',
      category: 'Electronics',
      dimensions: { width: 10, height: 10, depth: 10 },
      weight: 1.5,
      rating: 4.5,
      returnPolicy: '30 days return policy',
      shippingInformation: 'Ships in 2 days',
      warrantyInformation: '1-year warranty',
      price: 100,
      discountPercentage: 10,
      sku: 'SKU001',
      availabilityStatus: 'In Stock',
      stock: 50,
      minimumOrderQuantity: 1,
    },
  },
  {
    id: 2,
    title: 'Product B',
    images: ['image3.jpg', 'image4.jpg'],
    thumbnail: 'thumb2.jpg',
    reviews: [],
    details: {
      description: 'Another great product',
      brand: 'Brand B',
      category: 'Clothing',
      dimensions: { width: 5, height: 8, depth: 2 },
      weight: 0.8,
      rating: 4.0,
      returnPolicy: 'No returns',
      shippingInformation: 'Ships in 1 day',
      warrantyInformation: '6-month warranty',
      price: 200,
      discountPercentage: 15,
      sku: 'SKU002',
      availabilityStatus: 'Out of Stock',
      stock: 0,
      minimumOrderQuantity: 2,
    },
  },
];

export const activeSort: SortOption = {
  sortBy: 'price',
  order: 'asc',
};

export const productInCart: CartItem = {
  id: 1,
  title: 'Sample Product',
  details: {
    description: 'A sample product',
    brand: 'Brand A',
    category: 'Electronics',
    dimensions: { width: 10, height: 10, depth: 10 },
    weight: 1.5,
    rating: 4.5,
    returnPolicy: '30 days return',
    shippingInformation: 'Ships in 2 days',
    warrantyInformation: '1 year warranty',
    price: 100,
    discountPercentage: 10,
    sku: 'SKU123',
    availabilityStatus: 'In Stock',
    stock: 10,
    minimumOrderQuantity: 1,
  },
  images: ['image1.jpg', 'image2.jpg'],
  thumbnail: 'thumb1.jpg',
  reviews: [],
  quantity: 5,
};
