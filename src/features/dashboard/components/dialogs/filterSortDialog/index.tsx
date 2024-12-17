import React, { useState } from 'react';
import BaseDialog from '@/components/baseDialog';
import { useTranslation } from 'react-i18next';
import { SortOption } from '@/types/sortFilter';
import PriceFilter from './priceFilter';
import SortOptions from './sortOptions';
import BaseButton from '@/components/baseButton';
import BaseDivider from '@/components/baseDivider';

interface FilterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSortChange: (sort: SortOption) => void;
  onPriceFilterChange: (
    minPrice: number | '',
    maxPrice: number | ''
  ) => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  isOpen,
  onClose,
  onSortChange,
  onPriceFilterChange,
}) => {
  const { t } = useTranslation();
  const defaultSortValue: SortOption = {
    sortBy: '',
    order: 'asc',
  };

  const [sortOption, setSortOption] =
    useState<SortOption>(defaultSortValue);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const handleSortOptionChange = (sort: SortOption) => {
    setSortOption(sort);
  };

  const handleApplyFilters = () => {
    if (sortOption.sortBy !== defaultSortValue.sortBy) {
      onSortChange(sortOption);
    }
    if (minPrice !== '' || maxPrice !== '') {
      onPriceFilterChange(minPrice, maxPrice);
    }
    onClose();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSortOption(defaultSortValue);
    setMinPrice('');
    setMaxPrice('');

    onSortChange(defaultSortValue);
    onPriceFilterChange('', '');

    onClose();
  };

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      title={t('filterSortDialog.titleSort')}
    >
      <div className="relative h-full flex flex-col">
        <div className="overflow-y-auto flex-grow">
          <SortOptions
            sortBy={sortOption.sortBy}
            order={sortOption.order}
            onSortChange={handleSortOptionChange}
          />

          <BaseDivider className="h-1" />

          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={(min, max) => {
              setMinPrice(Number(min));
              setMaxPrice(Number(max));
            }}
          />
        </div>
        <div className="bottom-0 left-0 w-full flex justify-center space-x-4 mt-8">
          <BaseButton
            variant="black"
            size="medium"
            label={t('filterSortDialog.resetButton')}
            onClick={handleReset}
            className="w-1/3"
          />

          <BaseButton
            variant="primary"
            size="medium"
            label={t('filterSortDialog.applyFilters')}
            onClick={handleApplyFilters}
            className="w-2/3"
          />
        </div>
      </div>
    </BaseDialog>
  );
};

export default FilterDialog;
