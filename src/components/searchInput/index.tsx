import React, { useState } from 'react';
import { Input } from '@headlessui/react';
const maxInputCharacters = 50;

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
        className={`px-4 py-2 border rounded-md w-80 focus:ring-gray-400 focus:ring-1 focus:outline-none focus:border-gray-400`}
        maxLength={maxInputCharacters}
      />
    </div>
  );
};

export default SearchInput;
