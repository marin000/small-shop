import React, { useState } from 'react';
import { useGetProducts } from '@/api/getProducts';
import { useGetCategories } from '@/api/getCategoires';
import LoadingSpinner from '@/components/loadingSpinner';
import { Product } from '@/types/product';
import { formatProductData } from '@/utils/formatters/productFormatter';
import ProductCard from './components/cards/productCard';
import FilterToolbar from './components/filterToolbar';
import Pagination from '@/components/pagination';
import {
  calculateTotalPages,
  calculateCurrentPage,
} from '@/utils/paginationUtils';
import { useTranslation } from 'react-i18next';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentSkip, setCurrentSkip] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const itemsPerPageOptions = [10, 20, 30];

  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useGetProducts(selectedCategory, itemsPerPage, currentSkip);

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategories();

  const handleOnSearchChange = () => {
    console.log('dsa');
  };

  const handleOnCategoryChange = (category: string) =>
    setSelectedCategory(category);

  const handlePageChange = (page: number) => {
    const newSkip = (page - 1) * itemsPerPage;
    setCurrentSkip(newSkip);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
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
        t('dashboard.loadFailed')
      </div>
    );
  }

  const formattedProducts = formatProductData(
    productsData?.products || []
  );

  const totalPages = productsData
    ? calculateTotalPages(productsData.total, itemsPerPage)
    : 0;

  const currentPage = calculateCurrentPage(currentSkip, itemsPerPage);

  return (
    <div className="container mx-auto py-8">
      <FilterToolbar
        categories={categoriesData}
        selectedCategory={
          selectedCategory || t('dashboard.selectCategory')
        }
        onSearchChange={handleOnSearchChange}
        onCategoryChange={handleOnCategoryChange}
      />
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('dashboard.title')}
      </h1>
      {formattedProducts.length === 0 ? (
        <div className="text-center text-gray-600">
          {t('dashboard.noProducts')}
        </div>
      ) : (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {formattedProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={productsData.total}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPage={itemsPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;
