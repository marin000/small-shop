import React, { useState } from 'react';
import { useGetProducts } from '@/api/getProducts';
import { useGetCategories } from '@/api/getCategoires';
import LoadingSpinner from '@/components/loadingSpinner';
import { Product } from '@/types/product';
import { formatProductData } from '@/utils/formatters/productFormatter';
import ProductCard from './components/cards/productCard';
import Pagination from '@/components/pagination';
import {
  calculateTotalPages,
  calculateCurrentPage,
} from '@/utils/paginationUtils';
import FilterCategoryToolbar from './components/filterCategoryToolbar';
import { useTranslation } from 'react-i18next';
import { filterProducts } from '@/utils/helper';
import { CategoryFormatted } from '@/types/categories';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFormatted>({
      value: '',
      label: t('dashboard.selectCategory'),
    });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSkip, setCurrentSkip] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const itemsPerPageOptions = [10, 20, 30];

  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useGetProducts(
    searchTerm,
    selectedCategory?.value,
    itemsPerPage,
    currentSkip
  );

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategories();

  const handleOnSearchChange = (searchTerm: string) =>
    setSearchTerm(searchTerm);

  const handleOnCategoryChange = (category: CategoryFormatted) =>
    setSelectedCategory(category);

  const handlePageChange = (page: number) => {
    const newSkip = (page - 1) * itemsPerPage;
    setCurrentSkip(newSkip);
  };

  const handleItemsPerPageChange = (items: number) =>
    setItemsPerPage(items);

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
        {t('dashboard.loadFailed')}
      </div>
    );
  }

  const formattedProducts = formatProductData(
    productsData?.products || []
  );

  const filteredProducts = filterProducts(
    formattedProducts,
    searchTerm,
    selectedCategory.value
  );

  const currentPage = calculateCurrentPage(currentSkip, itemsPerPage);
  const totalItems = searchTerm
    ? filteredProducts.length
    : productsData.total;

  const totalPages = productsData
    ? calculateTotalPages(totalItems, itemsPerPage)
    : 0;

  return (
    <div className="container mx-auto py-8">
      <FilterCategoryToolbar
        categories={categoriesData}
        selectedCategory={selectedCategory}
        onSearchChange={handleOnSearchChange}
        onCategoryChange={handleOnCategoryChange}
      />
      <h1 className="text-2xl font-bold text-center mb-6">
        {t('dashboard.title')}
      </h1>
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-600">
          {t('dashboard.noProducts')}
        </div>
      ) : (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={totalItems}
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

export default Dashboard;
