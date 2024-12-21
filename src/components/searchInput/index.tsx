import React, { useMemo, useState } from 'react';
import { Input } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';
import { XMarkIcon } from '@heroicons/react/24/solid';
const maxInputCharacters = 50;

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchChange = useMemo(
    () =>
      debounce((value: string) => {
        if (value.trim().length >= 3) {
          onSearchChange(value);
        }
      }, 300),
    [onSearchChange]
  );

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.trim().length === 0) {
      clearSearch();
    } else {
      setSearchTerm(value);
      debouncedSearchChange(value);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearchChange('');
  };

  return (
    <div className="flex items-center space-x-2 relative">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={t('common.searchButtonLabel')}
        className={`px-4 py-2 border rounded-md w-80 focus:ring-gray-400 focus:ring-1 focus:outline-none focus:border-gray-400`}
        maxLength={maxInputCharacters}
      />
      {searchTerm && (
        <XMarkIcon
          className="absolute right-12 md:right-[0.5rem] lg:right-[0.5rem] top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={clearSearch}
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default SearchInput;
