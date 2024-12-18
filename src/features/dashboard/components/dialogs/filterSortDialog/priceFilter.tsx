import React from 'react';
import BaseInput from '@/components/baseInput';
import { useTranslation } from 'react-i18next';

interface PriceFilterProps {
  minPrice: number | '';
  maxPrice: number | '';
  onPriceChange: (minPrice: string, maxPrice: string) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
}) => {
  const { t } = useTranslation();

  const handleMinPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) onPriceChange(value, String(maxPrice));
  };

  const handleMaxPriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) onPriceChange(String(minPrice), value);
  };

  return (
    <div className="space-y-2 mt-4 mb-2">
      <h4 className="text-lg font-semibold">
        {t('filterSortDialog.titlePriceRange')}
      </h4>
      <div className="flex space-x-4">
        <BaseInput
          id="minPrice"
          type="text"
          value={minPrice}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          onChange={handleMinPriceChange}
          placeholder={t('filterSortDialog.priceInputMin')}
        />
        <BaseInput
          id="maxPrice"
          type="text"
          value={maxPrice}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          onChange={handleMaxPriceChange}
          placeholder={t('filterSortDialog.priceInputMax')}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
