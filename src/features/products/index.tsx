import React, { useState } from 'react';
import { useGetProducts } from '@/api/getProducts';
import { useGetCategories } from '@/api/getCategoires';
import LoadingSpinner from '@/components/loadingSpinner';
import { Product } from '@/types/product';
import { formatProductData } from '@/utils/formatters/productFormatter';
import ProductCard from './components/cards/productCard';
import FilterToolbar from './components/filterToolbar';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useGetProducts(selectedCategory);
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategories();

  const handleOnSearchChange = () => {
    console.log('dsa');
  };

  const handleOnCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (productsLoading || categoriesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner width="80" height="80" />
      </div>
    );
  }

  if (productsError || categoriesError) {
    return (
      <div className="text-center text-red-500">
        Failed to load products. Please try again later.
      </div>
    );
  }

  const formattedProducts = formatProductData(
    productsData?.products || []
  );

  return (
    <div className="container mx-auto py-8">
      <FilterToolbar
        categories={categoriesData}
        selectedCategory={selectedCategory || 'Select category'}
        onSearchChange={handleOnSearchChange}
        onCategoryChange={handleOnCategoryChange}
      />
      <h1 className="text-2xl font-bold text-center mb-6">
        Products
      </h1>
      {formattedProducts.length === 0 ? (
        <div className="text-center text-gray-600">
          No products available for this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {formattedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
