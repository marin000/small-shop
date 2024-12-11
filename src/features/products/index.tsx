import React from 'react';
import { useGetProducts } from '../../api/getProducts';
import LoadingSpinner from '../../components/loadingSpinner';
import { Product } from '../../types/product';
import ProductCard from '../../components/productCard';

const Products: React.FC = () => {
  const { data, isLoading: loading, isError } = useGetProducts();
  console.log(data);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner width="80" height="80" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
