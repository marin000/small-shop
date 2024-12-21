import { Product, RawProduct } from '@/types/product';

export const formatProductData = (
  products: RawProduct[]
): Product[] => {
  return products.map((product) => ({
    id: product.id,
    title: product.title,
    images: product.images,
    thumbnail: product.thumbnail,
    reviews: product.reviews,
    details: {
      description: product.description,
      brand: product.brand,
      category: product.category,
      dimensions: product.dimensions,
      weight: product.weight,
      rating: product.rating,
      returnPolicy: product.returnPolicy,
      shippingInformation: product.shippingInformation,
      warrantyInformation: product.warrantyInformation,
      price: product.price,
      discountPercentage: product.discountPercentage,
      sku: product.sku,
      availabilityStatus: product.availabilityStatus,
      stock: product.stock,
      minimumOrderQuantity: product.minimumOrderQuantity,
    },
  }));
};
