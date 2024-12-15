import React from 'react';
import BaseDropdown from '@/components/baseDropdown';
import SearchInput from '@/components/searchInput';
import { Category, CategoryFormatted } from '@/types/categories';
import { formatCategoriesData } from '@/utils/formatters/categoryFormatter';
import { useTranslation } from 'react-i18next';

interface FilterCategoryToolbarProps {
  categories: Category[];
  selectedCategory: CategoryFormatted;
  onCategoryChange: (category: CategoryFormatted) => void;
  onSearchChange: (searchTerm: string) => void;
}

const FilterCategoryToolbar: React.FC<FilterCategoryToolbarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
}) => {
  const { t } = useTranslation();
  const categoriesFormatted = formatCategoriesData(categories);

  const handleCategoryChange = (category: CategoryFormatted) =>
    onCategoryChange(category);

  const categoriesWithAll = [
    { value: '', label: t('dashboard.allCategories') },
    ...categoriesFormatted,
  ];

  return (
    <div className="flex flex-col space-y-4 mb-8 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
      <BaseDropdown
        id="categories-dropdown"
        name="categories-dropdown"
        options={categoriesWithAll}
        selectedItem={selectedCategory.label}
        onChange={handleCategoryChange}
      />
      <SearchInput onSearchChange={onSearchChange} />
    </div>
  );
};

export default FilterCategoryToolbar;
