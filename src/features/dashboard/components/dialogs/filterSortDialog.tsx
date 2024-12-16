import React, { useState } from 'react';
import BaseDialog from '@/components/baseDialog';
import { useTranslation } from 'react-i18next';
import BaseButton from '@/components/baseButton';
import BaseDivider from '@/components/baseDivider';
import { SortOption } from '@/types/sortFilter';
import { getButtonVariant } from '@/utils/helper';

interface FilterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSortChange: (sort: SortOption) => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({
  isOpen,
  onClose,
  onSortChange,
}) => {
  const { t } = useTranslation();
  const defaultSortValue: SortOption = {
    sortBy: '',
    order: 'asc',
  };
  const [priceSort, setPriceSort] =
    useState<SortOption>(defaultSortValue);
  const [nameSort, setNameSort] =
    useState<SortOption>(defaultSortValue);

  const handleSortOptionChange = (
    sort: 'price' | 'title',
    order: 'asc' | 'desc'
  ) => {
    const newSort: SortOption = { sortBy: sort, order };
    if (sort === 'price') {
      setPriceSort(newSort);
      setNameSort(defaultSortValue);
    } else {
      setNameSort(newSort);
      setPriceSort(defaultSortValue);
    }
    onSortChange(newSort);
  };

  return (
    <BaseDialog
      isOpen={isOpen}
      onClose={onClose}
      title={t('filterSortDialog.titleSort')}
    >
      <div className="space-y-6 mt-8">
        <h4 className="text-lg font-semibold">
          {t('filterSortDialog.titlePrice')}
        </h4>
        <div className="flex space-x-4">
          <BaseButton
            label={t('filterSortDialog.priceLowToHigh')}
            variant={getButtonVariant('price', 'asc', priceSort)}
            onClick={() => handleSortOptionChange('price', 'asc')}
          />
          <BaseButton
            label={t('filterSortDialog.priceHighToLow')}
            variant={getButtonVariant('price', 'desc', priceSort)}
            onClick={() => handleSortOptionChange('price', 'desc')}
          />
        </div>

        <BaseDivider className="my-4" />

        <h4 className="text-lg font-semibold">
          {t('filterSortDialog.titleName')}
        </h4>
        <div className="flex space-x-4">
          <BaseButton
            label={t('filterSortDialog.nameAsc')}
            variant={getButtonVariant('title', 'asc', nameSort)}
            onClick={() => handleSortOptionChange('title', 'asc')}
          />
          <BaseButton
            label={t('filterSortDialog.nameDesc')}
            variant={getButtonVariant('title', 'desc', nameSort)}
            onClick={() => handleSortOptionChange('title', 'desc')}
          />
        </div>
      </div>
    </BaseDialog>
  );
};

export default FilterDialog;
