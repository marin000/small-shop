import BaseDropdown from '@/components/baseDropdown';
import SearchInput from '@/components/searchInput';
import { Category } from '@/types/categories';
import { formatCategoriesData } from '@/utils/formatters/categoryFormatter';
import React from 'react';

interface FilterToolbarProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (searchTerm: string) => void;
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchChange,
}) => {
  const categoriesFormatted = formatCategoriesData(categories);

  const handleCategoryChange = (value: string) => {
    const selectedCategory = categories.find(
      (category) => category.slug === value
    );
    if (selectedCategory) {
      onCategoryChange(selectedCategory.name);
    }
  };

  return (
    <div className="flex flex-col space-y-4 mb-8 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
      <BaseDropdown
        id="categories-dropdown"
        name="categories-dropdown"
        options={categoriesFormatted}
        selectedItem={
          selectedCategory || categoriesFormatted[0].label
        }
        onChange={handleCategoryChange}
      />
      <SearchInput onSearchChange={onSearchChange} />
    </div>
  );
};

export default FilterToolbar;
