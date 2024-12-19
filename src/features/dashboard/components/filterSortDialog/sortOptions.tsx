import React from 'react';
import BaseButton from '@/components/baseButton';
import { SortOption } from '@/types/sortFilter';
import { getButtonVariant } from '@/utils/helper';
import { useTranslation } from 'react-i18next';
import BaseDivider from '@/components/baseDivider';

interface SortOptionsProps {
  sortBy: '' | 'price' | 'title';
  order: 'asc' | 'desc';
  onSortChange: (sort: SortOption) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortBy,
  order,
  onSortChange,
}) => {
  const { t } = useTranslation();
  const activeSort: SortOption = { sortBy, order };

  const handleSortOptionChange = (
    sort: 'price' | 'title',
    order: 'asc' | 'desc'
  ) => {
    const newSort: SortOption = { sortBy: sort, order };
    onSortChange(newSort);
  };

  return (
    <div className="space-y-6 mt-4 mb-4">
      <h4 className="text-lg font-semibold">
        {t('filterSortDialog.titlePrice')}
      </h4>
      <div className="flex space-x-4">
        <BaseButton
          label={t('filterSortDialog.priceLowToHigh')}
          variant={getButtonVariant('price', 'asc', activeSort)}
          onClick={() => handleSortOptionChange('price', 'asc')}
        />
        <BaseButton
          label={t('filterSortDialog.priceHighToLow')}
          variant={getButtonVariant('price', 'desc', activeSort)}
          onClick={() => handleSortOptionChange('price', 'desc')}
        />
      </div>

      <BaseDivider className="h-1" />

      <h4 className="text-lg font-semibold">
        {t('filterSortDialog.titleName')}
      </h4>
      <div className="flex space-x-4">
        <BaseButton
          label={t('filterSortDialog.nameAsc')}
          variant={getButtonVariant('title', 'asc', activeSort)}
          onClick={() => handleSortOptionChange('title', 'asc')}
        />
        <BaseButton
          label={t('filterSortDialog.nameDesc')}
          variant={getButtonVariant('title', 'desc', activeSort)}
          onClick={() => handleSortOptionChange('title', 'desc')}
        />
      </div>
    </div>
  );
};

export default SortOptions;
