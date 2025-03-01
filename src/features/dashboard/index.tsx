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
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import BaseButton from '@/components/baseButton';
import { SortOption } from '@/types/sortFilter';
import FilterDialog from './components/filterSortDialog';
import LoadFailed from '@/components/loadFailed';
import { useToastContext } from '@/providers/toastContext';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFormatted>({
      value: '',
      label: t('dashboard.selectCategory'),
    });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSkip, setCurrentSkip] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const itemsPerPageOptions = [10, 20, 30];

  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
  } = useGetProducts({
    searchTerm,
    category: selectedCategory?.value,
    limit: itemsPerPage,
    skip: currentSkip,
    sortBy,
    order,
  });

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategories();

  const handleOnSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentSkip(0);
  };

  const handleOnCategoryChange = (category: CategoryFormatted) => {
    setSelectedCategory(category);
    setCurrentSkip(0);
  };

  const handlePageChange = (page: number) => {
    const newSkip = (page - 1) * itemsPerPage;
    setCurrentSkip(newSkip);
  };

  const handleItemsPerPageChange = (items: number) =>
    setItemsPerPage(items);

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort.sortBy);
    setOrder(sort.order);
  };

  const handlePriceFilterChange = (
    min: number | '',
    max: number | ''
  ) => {
    setMinPrice(min);
    if (max && max !== 0) setMaxPrice(max);
    if (min || max) {
      showToast(
        t('toast.dashboard.priceWarningTitle'),
        t('toast.dashboard.priceWarningMsg'),
        'warning'
      );
    }
  };

  if (productsLoading || categoriesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner width="80" height="80" />
      </div>
    );
  }

  if (productsError || categoriesError) {
    return <LoadFailed message={t('dashboard.loadFailed')} />;
  }

  const formattedProducts = formatProductData(
    productsData?.products || []
  );

  const filteredProducts = filterProducts(
    formattedProducts,
    searchTerm,
    selectedCategory.value,
    minPrice,
    maxPrice
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
      <h1 className="text-2xl text-center mb-6">
        {t('dashboard.title')}
      </h1>
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-600">
          {t('dashboard.noProducts')}
        </div>
      ) : (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      <BaseButton
        id="filter-button"
        name="filter-button"
        label={t('dashboard.filterButton')}
        onClick={() => setIsFilterDialogOpen(true)}
        variant="white"
        size="large"
        iconStart={<AdjustmentsHorizontalIcon className="w-5 h-5" />}
        className="fixed bottom-12 right-8"
      />
      <FilterDialog
        isOpen={isFilterDialogOpen}
        onClose={() => setIsFilterDialogOpen(false)}
        onSortChange={handleSortChange}
        onPriceFilterChange={handlePriceFilterChange}
      />
    </div>
  );
};

export default Dashboard;
