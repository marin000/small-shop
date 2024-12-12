import React, { useState } from 'react';
import { Input } from '@headlessui/react';

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="px-4 py-2 border rounded-md w-80 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchInput;
