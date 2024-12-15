import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';
import BaseMenu from '../baseMenu';
import { calculatePaginationRange } from '@/utils/paginationUtils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  itemsPerPage: number;
  itemsPerPageOptions: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPage,
  itemsPerPageOptions,
}) => {
  const paginationRange = calculatePaginationRange(
    currentPage,
    totalPages
  );

  return (
    <div className="flex justify-center items-center mt-8 mb-24">
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
        </Button>

        {paginationRange.map((pageNum) => (
          <Button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`px-4 py-2 rounded-lg ${
              pageNum === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {pageNum}
          </Button>
        ))}

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-700" />
        </Button>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <span className="text-gray-700 flex items-center space-x-1">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          </span>
          <BaseMenu
            selectedOption={itemsPerPage}
            options={itemsPerPageOptions}
            onOptionSelect={onItemsPerPageChange}
          />
          <span> of {totalResults} results</span>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
