import { RawProduct } from '@/types/product';
import { formatProductData } from '../../../utils/formatters/productFormatter';

describe('formatProductData', () => {
  test('correctly formats RawProduct into Product', () => {
    const rawProducts: RawProduct[] = [
      {
        id: 1,
        title: 'Product A',
        images: ['image1.jpg', 'image2.jpg'],
        thumbnail: 'thumb1.jpg',
        reviews: [],
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
    ];

    const result = formatProductData(rawProducts);
    expect(result).toEqual([
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
    ]);
  });

  test('returns an empty array when given an empty array', () => {
    const rawProducts: RawProduct[] = [];
    const result = formatProductData(rawProducts);
    expect(result).toEqual([]);
  });

  test('handles a single RawProduct correctly', () => {
    const rawProducts: RawProduct[] = [
      {
        id: 1,
        title: 'Product A',
        images: ['image1.jpg'],
        thumbnail: 'thumb1.jpg',
        reviews: [],
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
    ];

    const result = formatProductData(rawProducts);
    expect(result).toEqual([
      {
        id: 1,
        title: 'Product A',
        images: ['image1.jpg'],
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
    ]);
  });

  test('handles RawProduct with missing fields', () => {
    const rawProducts: RawProduct[] = [
      {
        id: 1,
        title: 'Product A',
        images: [],
        thumbnail: '',
        reviews: [],
        description: '',
        brand: '',
        category: '',
        dimensions: { width: 0, height: 0, depth: 0 },
        weight: 0,
        rating: 0,
        returnPolicy: '',
        shippingInformation: '',
        warrantyInformation: '',
        price: 0,
        discountPercentage: 0,
        sku: '',
        availabilityStatus: '',
        stock: 0,
        minimumOrderQuantity: 0,
      },
    ];

    const result = formatProductData(rawProducts);
    expect(result).toEqual([
      {
        id: 1,
        title: 'Product A',
        images: [],
        thumbnail: '',
        reviews: [],
        details: {
          description: '',
          brand: '',
          category: '',
          dimensions: { width: 0, height: 0, depth: 0 },
          weight: 0,
          rating: 0,
          returnPolicy: '',
          shippingInformation: '',
          warrantyInformation: '',
          price: 0,
          discountPercentage: 0,
          sku: '',
          availabilityStatus: '',
          stock: 0,
          minimumOrderQuantity: 0,
        },
      },
    ]);
  });
});
